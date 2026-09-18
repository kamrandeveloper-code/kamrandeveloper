"use client";

import { useActionState, useRef, useState } from "react";
import type { Project } from "@/lib/api";
import type { ActionState } from "@/lib/actions/projects";
import FaqRepeater from "../FaqRepeater";
import ListInput from "../ListInput";
import RichTextEditor from "../blogs/RichTextEditor";

interface Props {
  action: (prevState: ActionState, formData: FormData) => Promise<ActionState>;
  project?: Project;
}

function InputWithCopy({
  name,
  placeholder,
  defaultValue,
}: {
  name: string;
  placeholder: string;
  defaultValue?: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [copied, setCopied] = useState(false);

  function handleCopy(e: React.MouseEvent) {
    e.preventDefault();
    const value = inputRef.current?.value;
    if (!value) return;
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="relative">
      <input
        ref={inputRef}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="w-full px-3 py-2.5 pr-9 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
      />
      <button
        type="button"
        onClick={handleCopy}
        title={copied ? "Copied!" : "Copy"}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded text-muted hover:text-accent transition-colors"
      >
        {copied ? (
          <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        )}
      </button>
    </div>
  );
}

export default function ProjectForm({ action, project }: Props) {
  const [state, formAction, pending] = useActionState(action, {});
  const [story, setStory] = useState(project?.story ?? "");
  const [blogPost, setBlogPost] = useState(project?.blogPost ?? "");

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
          placeholder="e.g. Dental Clinic Management System"
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
          placeholder="e.g. dental-clinic-management-system"
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
            placeholder="e.g. Healthcare"
            className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text mb-1.5">Category</label>
          <input
            name="category"
            defaultValue={project?.category}
            required
            placeholder="e.g. Business Software"
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
          placeholder="One or two sentences shown on project cards and listings"
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
          placeholder="e.g. Cut appointment scheduling errors to zero within the first month"
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
          placeholder="A fuller overview of what was built, for whom, and why — shown in the project's Overview section"
          className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          Story <span className="text-muted font-normal">(use headings for The Challenge / The Solution / The Impact)</span>
        </label>
        <RichTextEditor value={story} onChange={setStory} />
        <input type="hidden" name="story" value={story} />
      </div>

      <ListInput
        name="features"
        label="Features"
        defaultValue={project?.features}
        hint="add one, or paste several separated by commas"
        placeholder="e.g. Real-time inventory sync"
      />

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          Architecture <span className="text-muted font-normal">(optional)</span>
        </label>
        <textarea
          name="architecture"
          defaultValue={project?.architecture ?? ""}
          rows={3}
          placeholder="e.g. .NET MVC with SQL Server backend, deployed as an intranet application"
          className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">Project Write-up</label>
        <RichTextEditor value={blogPost} onChange={setBlogPost} />
        <input type="hidden" name="blogPost" value={blogPost} />
      </div>

      <ListInput
        name="tech"
        label="Tech stack"
        defaultValue={project?.tech}
        hint="add one, or paste several separated by commas"
        placeholder="e.g. .NET Core, PostgreSQL"
      />

      <FaqRepeater defaultValue={project?.faqs} />

      <details className="border border-border rounded-lg px-4 py-3 group">
        <summary className="cursor-pointer text-sm font-medium text-text select-none">
          SEO &amp; social overrides <span className="text-muted font-normal">(optional — leave blank to fall back to Title / Description above)</span>
        </summary>
        <div className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-text mb-1.5">
              Meta Title <span className="text-muted font-normal">(falls back to Title)</span>
            </label>
            <input
              name="metaTitle"
              defaultValue={project?.metaTitle ?? ""}
              placeholder={project?.title || "e.g. Dental Clinic Management System"}
              className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text mb-1.5">
              Meta Description <span className="text-muted font-normal">(falls back to Description)</span>
            </label>
            <textarea
              name="metaDescription"
              defaultValue={project?.metaDescription ?? ""}
              rows={2}
              placeholder="Shown under the title in Google search results…"
              className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text mb-1.5">
                OG Title <span className="text-muted font-normal">(falls back to Meta Title)</span>
              </label>
              <input
                name="ogTitle"
                defaultValue={project?.ogTitle ?? ""}
                placeholder="Title shown when shared on Facebook/LinkedIn"
                className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text mb-1.5">
                Twitter Title <span className="text-muted font-normal">(falls back to OG Title)</span>
              </label>
              <input
                name="twitterTitle"
                defaultValue={project?.twitterTitle ?? ""}
                placeholder="Title shown when shared on X/Twitter"
                className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text mb-1.5">
                OG Description <span className="text-muted font-normal">(falls back to Meta Description)</span>
              </label>
              <textarea
                name="ogDescription"
                defaultValue={project?.ogDescription ?? ""}
                rows={2}
                placeholder="Description shown when shared on Facebook/LinkedIn"
                className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text mb-1.5">
                Twitter Description <span className="text-muted font-normal">(falls back to OG Description)</span>
              </label>
              <textarea
                name="twitterDescription"
                defaultValue={project?.twitterDescription ?? ""}
                rows={2}
                placeholder="Description shown when shared on X/Twitter"
                className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
              />
            </div>
          </div>
          <p className="text-xs text-muted">
            The Banner image below is used as the OG/Twitter preview image automatically — no separate upload needed.
          </p>
        </div>
      </details>

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">Thumbnail <span className="text-muted font-normal">(used on project cards)</span></label>
        {project?.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.image} alt="Current thumbnail" className="w-full max-w-xs rounded-lg border border-border mb-3" />
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
        <label className="block text-sm font-medium text-text mb-1.5">Banner <span className="text-muted font-normal">(used on the project page)</span></label>
        {project?.bannerImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.bannerImage} alt="Current banner" className="w-full max-w-xs rounded-lg border border-border mb-3" />
        )}
        <input type="hidden" name="existingBannerImageUrl" value={project?.bannerImage ?? ""} />
        <input
          type="file"
          name="bannerImage"
          accept="image/jpeg,image/png,image/webp,image/gif"
          className="w-full text-sm text-muted file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-accent file:text-white file:text-sm file:font-semibold hover:file:bg-[var(--color-accent-hover)]"
        />
        <p className="text-xs text-muted mt-1.5">Upload a new banner to replace the current one. Leave blank to keep it (defaults to a placeholder if none is set).</p>
      </div>

      <div>
        <p className="block text-sm font-medium text-text mb-1.5">Demo credentials <span className="text-muted font-normal">(optional)</span></p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <InputWithCopy name="demoUrl" placeholder="Demo URL" defaultValue={project?.demo?.url} />
          <InputWithCopy name="demoEmail" placeholder="Demo email" defaultValue={project?.demo?.email} />
          <InputWithCopy name="demoPassword" placeholder="Demo password" defaultValue={project?.demo?.password} />
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
            placeholder="0"
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
