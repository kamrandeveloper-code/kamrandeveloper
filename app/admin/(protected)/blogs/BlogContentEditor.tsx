"use client";

import { useState } from "react";
import { marked } from "marked";
import TurndownService from "turndown";
import RichTextEditor from "./RichTextEditor";

const turndown = new TurndownService({ headingStyle: "atx" });
// Markdown has no native representation for these — keep them as raw HTML
// blocks so switching to Markdown mode and back doesn't destroy them.
turndown.keep(["video", "table"]);

interface Props {
  defaultValue?: string;
}

type Mode = "rich" | "markdown";

export default function BlogContentEditor({ defaultValue = "" }: Props) {
  const [html, setHtml] = useState(defaultValue);
  const [mode, setMode] = useState<Mode>("rich");
  const [markdown, setMarkdown] = useState(() => turndown.turndown(defaultValue));

  function switchTo(next: Mode) {
    if (next === mode) return;
    if (next === "markdown") {
      setMarkdown(turndown.turndown(html));
    } else {
      setHtml(marked.parse(markdown, { async: false }));
    }
    setMode(next);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label className="block text-sm font-medium text-text">
          Content{" "}
          <span className="text-muted font-normal">
            (type or insert <code className="text-xs bg-surface-2 px-1 py-0.5 rounded">[[cta-card]]</code> on its own line to drop in a &quot;Need help?&quot; card)
          </span>
        </label>
        <div className="flex items-center gap-1 bg-surface-2 border border-border rounded-lg p-0.5">
          <button
            type="button"
            onClick={() => switchTo("rich")}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
              mode === "rich" ? "bg-accent text-white" : "text-muted hover:text-text"
            }`}
          >
            Rich Text
          </button>
          <button
            type="button"
            onClick={() => switchTo("markdown")}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
              mode === "markdown" ? "bg-accent text-white" : "text-muted hover:text-text"
            }`}
          >
            Markdown
          </button>
        </div>
      </div>

      {mode === "rich" ? (
        <RichTextEditor value={html} onChange={setHtml} />
      ) : (
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          rows={16}
          className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm font-mono focus:outline-none focus:border-accent"
        />
      )}

      <input type="hidden" name="content" value={mode === "markdown" ? marked.parse(markdown, { async: false }) : html} />
    </div>
  );
}
