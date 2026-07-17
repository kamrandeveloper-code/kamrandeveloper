import { Extension, InputRule, markInputRule } from "@tiptap/core";

const HEADING_LEVELS = [1, 2, 3, 4, 5, 6] as const;

// Typing a literal tag like "<h1>Kamran</h1>" auto-converts the current
// line into a real heading, keeping the inner text and dropping the tags —
// no need to select the text and click the toolbar button.
function headingInputRule(level: number) {
  return new InputRule({
    find: new RegExp(`^<h${level}>([^<]*)</h${level}>$`),
    handler: ({ state, range, match }) => {
      const type = state.schema.nodes.heading;
      const $start = state.doc.resolve(range.from);
      if (!$start.node(-1).canReplaceWith($start.index(-1), $start.indexAfter(-1), type)) {
        return null;
      }
      const text = match[1] ?? "";
      state.tr.delete(range.from, range.to).setBlockType(range.from, range.from, type, { level });
      if (text) {
        state.tr.insertText(text, range.from);
      }
    },
  });
}

/**
 * Lets you type literal HTML-style tags (e.g. `<h1>Kamran</h1>`,
 * `<b>bold</b>`) directly into the rich text editor and have them
 * auto-applied as real formatting as soon as the closing tag is typed.
 * The toolbar buttons keep working exactly as before for manual use.
 */
const HtmlTagShortcuts = Extension.create({
  name: "htmlTagShortcuts",

  addInputRules() {
    const marks = this.editor.schema.marks;
    const rules = HEADING_LEVELS.map((level) => headingInputRule(level));

    if (marks.bold) {
      rules.push(markInputRule({ find: /<(?:b|strong)>([^<]+)<\/(?:b|strong)>$/, type: marks.bold }));
    }
    if (marks.italic) {
      rules.push(markInputRule({ find: /<(?:i|em)>([^<]+)<\/(?:i|em)>$/, type: marks.italic }));
    }
    if (marks.underline) {
      rules.push(markInputRule({ find: /<u>([^<]+)<\/u>$/, type: marks.underline }));
    }
    if (marks.strike) {
      rules.push(markInputRule({ find: /<(?:s|strike|del)>([^<]+)<\/(?:s|strike|del)>$/, type: marks.strike }));
    }
    if (marks.code) {
      rules.push(markInputRule({ find: /<code>([^<]+)<\/code>$/, type: marks.code }));
    }

    return rules;
  },
});

export default HtmlTagShortcuts;
