"use client";

import { useActionState, useState } from "react";
import type { Service } from "@/lib/api";
import type { ActionState } from "@/lib/actions/services";
import { processStepsToLines } from "@/lib/actions/shared";
import FaqRepeater from "../FaqRepeater";
import ListInput from "../ListInput";
import RichTextEditor from "../blogs/RichTextEditor";

interface Props {
  action: (prevState: ActionState, formData: FormData) => Promise<ActionState>;
  service?: Service;
}

export default function ServiceForm({ action, service }: Props) {
  const [state, formAction, pending] = useActionState(action, {});
  const [longDescription, setLongDescription] = useState(service?.longDescription ?? "");

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
          defaultValue={service?.title}
          required
          className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          Slug <span className="text-muted font-normal">(used in URL, e.g. custom-business-software; leave blank to auto-generate)</span>
        </label>
        <input
          name="slug"
          defaultValue={service?.slug}
          className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">Tagline</label>
        <input
          name="tagline"
          defaultValue={service?.tagline}
          required
          className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">Description</label>
        <textarea
          name="description"
          defaultValue={service?.description}
          rows={3}
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
          defaultValue={service?.quickSummary ?? ""}
          rows={2}
          className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">Long Description</label>
        <RichTextEditor value={longDescription} onChange={setLongDescription} />
        <input type="hidden" name="longDescription" value={longDescription} />
      </div>

      <ListInput
        name="benefits"
        label="Benefits"
        defaultValue={service?.benefits}
        hint="add one, or paste several separated by commas"
      />

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          Process steps <span className="text-muted font-normal">(one per line, format: Step Name :: Detail)</span>
        </label>
        <textarea
          name="process"
          defaultValue={service ? processStepsToLines(service.process) : ""}
          rows={4}
          placeholder={"Discovery :: We map your current workflow.\nDesign :: I wireframe the system structure."}
          className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm font-mono focus:outline-none focus:border-accent"
        />
      </div>

      <ListInput
        name="idealFor"
        label="Ideal for"
        defaultValue={service?.idealFor}
        hint="add one, or paste several separated by commas"
      />

      <div>
        <p className="block text-sm font-medium text-text mb-1.5">Engagement</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            name="engagementType"
            placeholder="Type (e.g. Fixed-scope project)"
            defaultValue={service?.engagement.type}
            required
            className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
          />
          <input
            name="engagementTimeline"
            placeholder="Timeline (e.g. 4 – 10 weeks)"
            defaultValue={service?.engagement.timeline}
            required
            className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
          />
        </div>
        <textarea
          name="engagementNote"
          placeholder="Note"
          defaultValue={service?.engagement.note}
          rows={2}
          required
          className="mt-3 w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
        />
      </div>

      <ListInput
        name="technologies"
        label="Technologies"
        defaultValue={service?.technologies}
        hint="add one, or paste several separated by commas"
      />

      <FaqRepeater defaultValue={service?.faqs} />

      <div className="flex items-center gap-6">
        <label className="flex items-center gap-2 text-sm text-text">
          <input type="checkbox" name="featured" defaultChecked={service?.featured} className="rounded border-border" />
          Featured
        </label>
        <div>
          <label className="block text-sm font-medium text-text mb-1.5">Sort Order</label>
          <input
            type="number"
            name="sortOrder"
            defaultValue={service?.sortOrder ?? 0}
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
