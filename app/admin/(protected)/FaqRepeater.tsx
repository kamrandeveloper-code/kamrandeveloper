"use client";

import { useState } from "react";

interface FaqPair {
  question: string;
  answer: string;
}

interface Props {
  defaultValue?: FaqPair[];
}

function stripLabel(line: string): string {
  return line
    .replace(/^\s*(?:q(?:uestion)?|a(?:nswer)?)\s*\d*\s*[:.)]\s*/i, "")
    .replace(/^\s*\d+\s*[.)]\s*/, "")
    .trim();
}

function isQuestionLine(line: string): boolean {
  return /^\s*(?:q(?:uestion)?\s*\d*\s*[:.)])/i.test(line) || /\?\s*$/.test(line.trim());
}

// Splits a pasted block of text into Q/A pairs. Handles "Q:/A:", "Question:/Answer:",
// numbered lists, and plain lines ending in "?" followed by their answer. Returns null
// when the text doesn't look like multiple FAQs, so a normal single-line paste still works.
function parseFaqBlock(text: string): FaqPair[] | null {
  const lines = text
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  if (lines.length < 2) return null;

  const pairs: FaqPair[] = [];
  let question: string | null = null;
  let answerLines: string[] = [];

  for (const line of lines) {
    if (isQuestionLine(line) && (question === null || answerLines.length > 0)) {
      if (question !== null) {
        pairs.push({ question, answer: answerLines.join(" ").trim() });
      }
      question = stripLabel(line);
      answerLines = [];
    } else if (question !== null) {
      answerLines.push(stripLabel(line));
    } else {
      return null;
    }
  }
  if (question !== null) {
    pairs.push({ question, answer: answerLines.join(" ").trim() });
  }

  return pairs.length > 0 ? pairs : null;
}

export default function FaqRepeater({ defaultValue = [] }: Props) {
  const [faqs, setFaqs] = useState<FaqPair[]>(defaultValue);

  function addFaq() {
    setFaqs((prev) => [...prev, { question: "", answer: "" }]);
  }

  function removeFaq(index: number) {
    setFaqs((prev) => prev.filter((_, i) => i !== index));
  }

  function updateFaq(index: number, field: "question" | "answer", value: string) {
    setFaqs((prev) => prev.map((f, i) => (i === index ? { ...f, [field]: value } : f)));
  }

  function handleBulkPaste(index: number, e: React.ClipboardEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const text = e.clipboardData.getData("text");
    const parsed = parseFaqBlock(text);
    if (!parsed) return;
    e.preventDefault();
    setFaqs((prev) => {
      const next = [...prev];
      next.splice(index, 1, ...parsed);
      return next;
    });
  }

  return (
    <div>
      <label className="block text-sm font-medium text-text mb-1.5">
        FAQs{" "}
        <span className="text-muted font-normal">
          (optional — shown as a FAQ accordion at the end of the page. Paste a whole block of Q&amp;A text into any field to auto-split it into separate FAQs)
        </span>
      </label>

      {faqs.length > 0 && (
        <div className="space-y-3 mb-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-bg border border-border rounded-lg p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-muted uppercase tracking-wider">FAQ {index + 1}</span>
                <button
                  type="button"
                  onClick={() => removeFaq(index)}
                  className="text-xs text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
              <input
                name="faqQuestion"
                value={faq.question}
                onChange={(e) => updateFaq(index, "question", e.target.value)}
                onPaste={(e) => handleBulkPaste(index, e)}
                placeholder="Question"
                className="w-full px-3 py-2 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
              />
              <textarea
                name="faqAnswer"
                value={faq.answer}
                onChange={(e) => updateFaq(index, "answer", e.target.value)}
                onPaste={(e) => handleBulkPaste(index, e)}
                placeholder="Answer"
                rows={2}
                className="w-full px-3 py-2 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
              />
            </div>
          ))}
        </div>
      )}

      <button
        type="button"
        onClick={addFaq}
        className="px-3 py-2 text-sm font-medium text-accent border border-accent/30 rounded-lg hover:bg-accent/10 transition-colors"
      >
        + Add FAQ
      </button>
    </div>
  );
}
