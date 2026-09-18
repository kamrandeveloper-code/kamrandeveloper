"use client";

import { useActionState, useState } from "react";
import type { Industry } from "@/lib/api";
import type { ActionState } from "@/lib/actions/industries";
import FaqRepeater from "../FaqRepeater";
import RichTextEditor from "../blogs/RichTextEditor";

interface Props {
  action: (prevState: ActionState, formData: FormData) => Promise<ActionState>;
  industry?: Industry;
}

export default function IndustryForm({ action, industry }: Props) {
  const [state, formAction, pending] = useActionState(action, {});
  const [longDescription, setLongDescription] = useState(industry?.longDescription ?? "");

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
          defaultValue={industry?.title}
          required
          placeholder="Healthcare"
          className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
        />
        <p className="text-xs text-muted mt-1.5">
          Must match the Industry field used on projects/case studies (case-insensitive) so they show up here.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          Slug <span className="text-muted font-normal">(leave blank to auto-generate)</span>
        </label>
        <input
          name="slug"
          defaultValue={industry?.slug}
          className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">Tagline</label>
        <input
          name="tagline"
          defaultValue={industry?.tagline}
          required
          className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          Description <span className="text-muted font-normal">(used as the meta description)</span>
        </label>
        <textarea
          name="description"
          defaultValue={industry?.description}
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
          defaultValue={industry?.quickSummary ?? ""}
          rows={2}
          className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">Overview</label>
        <RichTextEditor value={longDescription} onChange={setLongDescription} />
        <input type="hidden" name="longDescription" value={longDescription} />
      </div>

      <FaqRepeater defaultValue={industry?.faqs} />

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">Banner image</label>
        {industry?.heroImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={industry.heroImage} alt="Current banner" className="w-full max-w-xs rounded-lg border border-border mb-3" />
        )}
        <input type="hidden" name="existingHeroImageUrl" value={industry?.heroImage ?? ""} />
        <input
          type="file"
          name="heroImage"
          accept="image/jpeg,image/png,image/webp,image/gif"
          className="w-full text-sm text-muted file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-accent file:text-white file:text-sm file:font-semibold hover:file:bg-[var(--color-accent-hover)]"
        />
        <p className="text-xs text-muted mt-1.5">Upload a new banner to replace the current one. Leave blank to keep it (defaults to a placeholder if none is set).</p>
      </div>

      <div className="flex items-center gap-6">
        <label className="flex items-center gap-2 text-sm text-text">
          <input type="checkbox" name="featured" defaultChecked={industry?.featured} className="rounded border-border" />
          Featured
        </label>
        <div>
          <label className="block text-sm font-medium text-text mb-1.5">Sort Order</label>
          <input
            type="number"
            name="sortOrder"
            defaultValue={industry?.sortOrder ?? 0}
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
