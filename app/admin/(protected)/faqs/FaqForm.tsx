"use client";

import { useActionState } from "react";
import type { SiteFaq } from "@/lib/api";
import type { ActionState } from "@/lib/actions/faqs";

interface Props {
  action: (prevState: ActionState, formData: FormData) => Promise<ActionState>;
  faq?: SiteFaq;
}

export default function FaqForm({ action, faq }: Props) {
  const [state, formAction, pending] = useActionState(action, {});

  return (
    <form action={formAction} className="max-w-2xl space-y-5">
      {state.error && (
        <p className="text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
          {state.error}
        </p>
      )}

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">Question</label>
        <input
          name="question"
          defaultValue={faq?.question}
          required
          className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">Answer</label>
        <textarea
          name="answer"
          defaultValue={faq?.answer}
          rows={4}
          required
          className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">Sort Order</label>
        <input
          type="number"
          name="sortOrder"
          defaultValue={faq?.sortOrder ?? 0}
          className="w-32 px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="px-5 py-2.5 bg-accent hover:bg-[var(--color-accent-hover)] text-white text-sm font-semibold rounded-lg transition-colors disabled:opacity-60"
      >
        {pending ? "Saving…" : "Save"}
      </button>
    </form>
  );
}
