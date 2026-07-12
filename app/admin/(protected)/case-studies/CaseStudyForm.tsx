"use client";

import { useActionState } from "react";
import type { CaseStudy } from "@/lib/api";
import type { ActionState } from "@/lib/actions/case-studies";
import FaqRepeater from "../FaqRepeater";

interface Props {
  action: (prevState: ActionState, formData: FormData) => Promise<ActionState>;
  caseStudy?: CaseStudy;
}

export default function CaseStudyForm({ action, caseStudy }: Props) {
  const [state, formAction, pending] = useActionState(action, {});

  return (
    <form action={formAction} className="max-w-2xl space-y-5">
      {state.error && (
        <p className="text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
          {state.error}
        </p>
      )}

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">Title</label>
        <input
          name="title"
          defaultValue={caseStudy?.title}
          required
          className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          Slug <span className="text-muted font-normal">(leave blank to auto-generate)</span>
        </label>
        <input
          name="slug"
          defaultValue={caseStudy?.slug}
          className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-text mb-1.5">Industry</label>
          <input
            name="industry"
            defaultValue={caseStudy?.industry}
            required
            className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text mb-1.5">Category</label>
          <input
            name="category"
            defaultValue={caseStudy?.category}
            required
            className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">Description</label>
        <textarea
          name="description"
          defaultValue={caseStudy?.description}
          rows={2}
          required
          className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          Quick Summary <span className="text-muted font-normal">(optional — shown as a highlighted callout if filled in)</span>
        </label>
        <textarea
          name="quickSummary"
          defaultValue={caseStudy?.quickSummary ?? ""}
          rows={2}
          className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">Long Description</label>
        <textarea
          name="longDescription"
          defaultValue={caseStudy?.longDescription}
          rows={4}
          required
          className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <label className="block text-sm font-medium text-text mb-1.5">Problem</label>
          <textarea
            name="problem"
            defaultValue={caseStudy?.problem}
            rows={3}
            required
            className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text mb-1.5">Solution</label>
          <textarea
            name="solution"
            defaultValue={caseStudy?.solution}
            rows={3}
            required
            className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text mb-1.5">Result</label>
          <textarea
            name="result"
            defaultValue={caseStudy?.result}
            rows={3}
            required
            className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">Features <span className="text-muted font-normal">(one per line)</span></label>
        <textarea
          name="features"
          defaultValue={caseStudy?.features.join("\n")}
          rows={5}
          className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          Architecture <span className="text-muted font-normal">(optional)</span>
        </label>
        <textarea
          name="architecture"
          defaultValue={caseStudy?.architecture ?? ""}
          rows={3}
          className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          Technical Deep Dive <span className="text-muted font-normal">(markdown — use ## and ### for headings)</span>
        </label>
        <textarea
          name="content"
          defaultValue={caseStudy?.content}
          rows={16}
          required
          className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm font-mono focus:outline-none focus:border-accent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">Tech stack <span className="text-muted font-normal">(one per line)</span></label>
        <textarea
          name="tech"
          defaultValue={caseStudy?.tech.join("\n")}
          rows={4}
          className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
        />
      </div>

      <FaqRepeater defaultValue={caseStudy?.faqs} />

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">Cover image</label>
        {caseStudy?.imageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={caseStudy.imageUrl} alt="Current cover" className="w-full max-w-xs rounded-lg border border-border mb-3" />
        )}
        <input type="hidden" name="existingImageUrl" value={caseStudy?.imageUrl ?? ""} />
        <input
          type="file"
          name="image"
          accept="image/jpeg,image/png,image/webp,image/gif"
          className="w-full text-sm text-muted file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-accent file:text-white file:text-sm file:font-semibold hover:file:bg-[var(--color-accent-hover)]"
        />
        <p className="text-xs text-muted mt-1.5">Upload a new image to replace the current one. Leave blank to keep it.</p>
      </div>

      <div>
        <p className="block text-sm font-medium text-text mb-1.5">Demo credentials <span className="text-muted font-normal">(optional)</span></p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <input
            name="demoUrl"
            placeholder="Demo URL"
            defaultValue={caseStudy?.demo?.url}
            className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
          />
          <input
            name="demoEmail"
            placeholder="Demo email"
            defaultValue={caseStudy?.demo?.email}
            className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
          />
          <input
            name="demoPassword"
            placeholder="Demo password"
            defaultValue={caseStudy?.demo?.password}
            className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <label className="flex items-center gap-2 text-sm text-text">
          <input type="checkbox" name="featured" defaultChecked={caseStudy?.featured} className="rounded border-border" />
          Featured
        </label>
        <div>
          <label className="block text-sm font-medium text-text mb-1.5">Sort Order</label>
          <input
            type="number"
            name="sortOrder"
            defaultValue={caseStudy?.sortOrder ?? 0}
            className="w-32 px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
          />
        </div>
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
