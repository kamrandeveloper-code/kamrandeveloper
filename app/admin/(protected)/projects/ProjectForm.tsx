"use client";

import { useActionState } from "react";
import type { Project } from "@/lib/api";
import type { ActionState } from "@/lib/actions/projects";
import FaqRepeater from "../FaqRepeater";

interface Props {
  action: (prevState: ActionState, formData: FormData) => Promise<ActionState>;
  project?: Project;
}

export default function ProjectForm({ action, project }: Props) {
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
          defaultValue={project?.title}
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
          defaultValue={project?.slug}
          className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-text mb-1.5">Industry</label>
          <input
            name="industry"
            defaultValue={project?.industry}
            required
            className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text mb-1.5">Category</label>
          <input
            name="category"
            defaultValue={project?.category}
            required
            className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">Description</label>
        <textarea
          name="description"
          defaultValue={project?.description}
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
          defaultValue={project?.quickSummary ?? ""}
          rows={2}
          className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">Long Description</label>
        <textarea
          name="longDescription"
          defaultValue={project?.longDescription}
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
            defaultValue={project?.problem}
            rows={3}
            required
            className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text mb-1.5">Solution</label>
          <textarea
            name="solution"
            defaultValue={project?.solution}
            rows={3}
            required
            className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text mb-1.5">Result</label>
          <textarea
            name="result"
            defaultValue={project?.result}
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
          defaultValue={project?.features.join("\n")}
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
          defaultValue={project?.architecture ?? ""}
          rows={3}
          className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          Project Write-up <span className="text-muted font-normal">(markdown — use ## and ### for headings)</span>
        </label>
        <textarea
          name="blogPost"
          defaultValue={project?.blogPost}
          rows={16}
          required
          className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm font-mono focus:outline-none focus:border-accent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">Tech stack <span className="text-muted font-normal">(one per line)</span></label>
        <textarea
          name="tech"
          defaultValue={project?.tech.join("\n")}
          rows={4}
          className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
        />
      </div>

      <FaqRepeater defaultValue={project?.faqs} />

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">Project image</label>
        {project?.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.image} alt="Current" className="w-full max-w-xs rounded-lg border border-border mb-3" />
        )}
        <input type="hidden" name="existingImageUrl" value={project?.image ?? ""} />
        <input
          type="file"
          name="image"
          accept="image/jpeg,image/png,image/webp,image/gif"
          className="w-full text-sm text-muted file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-accent file:text-white file:text-sm file:font-semibold hover:file:bg-[var(--color-accent-hover)]"
        />
        <p className="text-xs text-muted mt-1.5">Upload a new image to replace the current one. Leave blank to keep it (defaults to a placeholder if none is set).</p>
      </div>

      <div>
        <p className="block text-sm font-medium text-text mb-1.5">Demo credentials <span className="text-muted font-normal">(optional)</span></p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <input
            name="demoUrl"
            placeholder="Demo URL"
            defaultValue={project?.demo?.url}
            className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
          />
          <input
            name="demoEmail"
            placeholder="Demo email"
            defaultValue={project?.demo?.email}
            className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
          />
          <input
            name="demoPassword"
            placeholder="Demo password"
            defaultValue={project?.demo?.password}
            className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <label className="flex items-center gap-2 text-sm text-text">
          <input type="checkbox" name="featured" defaultChecked={project?.featured} className="rounded border-border" />
          Featured
        </label>
        <div>
          <label className="block text-sm font-medium text-text mb-1.5">Sort Order</label>
          <input
            type="number"
            name="sortOrder"
            defaultValue={project?.sortOrder ?? 0}
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
