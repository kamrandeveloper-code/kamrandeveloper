"use client";

import { useState } from "react";

interface FaqPair {
  question: string;
  answer: string;
}

interface Props {
  defaultValue?: FaqPair[];
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

  return (
    <div>
      <label className="block text-sm font-medium text-text mb-1.5">
        FAQs <span className="text-muted font-normal">(optional — shown as a FAQ accordion at the end of the page)</span>
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
                placeholder="Question"
                className="w-full px-3 py-2 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
              />
              <textarea
                name="faqAnswer"
                value={faq.answer}
                onChange={(e) => updateFaq(index, "answer", e.target.value)}
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
