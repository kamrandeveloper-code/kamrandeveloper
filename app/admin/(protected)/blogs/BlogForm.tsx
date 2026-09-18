"use client";

import { useActionState, useEffect, useState } from "react";
import type { BlogPost } from "@/lib/api";
import type { ActionState } from "@/lib/actions/blogs";
import BlogContentEditor from "./BlogContentEditor";
import FaqRepeater from "../FaqRepeater";
import ListInput from "../ListInput";

interface Props {
  action: (prevState: ActionState, formData: FormData) => Promise<ActionState>;
  post?: BlogPost;
  categories?: string[];
}

export default function BlogForm({ action, post, categories = [] }: Props) {
  const [state, formAction, pending] = useActionState(action, {});
  const [imagePreview, setImagePreview] = useState<string | null>(post?.featuredImage ?? null);

  useEffect(() => {
    return () => {
      if (imagePreview && imagePreview.startsWith("blob:")) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview((prev) => {
        if (prev && prev.startsWith("blob:")) URL.revokeObjectURL(prev);
        return URL.createObjectURL(file);
      });
    } else {
      setImagePreview(post?.featuredImage ?? null);
    }
  }

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
          defaultValue={post?.title}
          placeholder="e.g. When to Replace Excel with Custom Software"
          required
          className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          Slug <span className="text-muted font-normal">(leave blank to auto-generate from title)</span>
        </label>
        <input
          name="slug"
          defaultValue={post?.slug}
          placeholder="when-to-replace-excel-with-custom-software"
          className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-text mb-1.5">
            Category <span className="text-muted font-normal">(pick an existing one or type your own)</span>
          </label>
          <input
            name="category"
            list="blog-categories"
            defaultValue={post?.category ?? ""}
            placeholder="e.g. Business"
            required
            className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
          />
          <datalist id="blog-categories">
            {categories.map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>
        </div>
        <div>
          <label className="block text-sm font-medium text-text mb-1.5">Date</label>
          <input
            type="date"
            name="date"
            defaultValue={post?.date}
            required
            className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          Summary <span className="text-muted font-normal">(shown on blog cards, and used as the search/social description unless overridden below)</span>
        </label>
        <textarea
          name="excerpt"
          defaultValue={post?.excerpt}
          placeholder="A short summary shown on the blog listing page and in search results…"
          rows={2}
          required
          className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          In-Article TL;DR <span className="text-muted font-normal">(optional — shown as a callout box inside the article itself, not on cards)</span>
        </label>
        <textarea
          name="quickSummary"
          defaultValue={post?.quickSummary ?? ""}
          placeholder="A one or two sentence takeaway readers can skim before the full article…"
          rows={2}
          className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
        />
      </div>

      <BlogContentEditor defaultValue={post?.content} />

      <details className="border border-border rounded-lg px-4 py-3 group">
        <summary className="cursor-pointer text-sm font-medium text-text select-none">
          SEO &amp; social overrides <span className="text-muted font-normal">(optional — leave blank to fall back to Title / Summary above)</span>
        </summary>
        <div className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-text mb-1.5">
              Meta Title <span className="text-muted font-normal">(falls back to Title)</span>
            </label>
            <input
              name="metaTitle"
              defaultValue={post?.metaTitle ?? ""}
              placeholder={post?.title || "e.g. When to Replace Excel with Custom Software"}
              className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text mb-1.5">
              Meta Description <span className="text-muted font-normal">(falls back to Summary)</span>
            </label>
            <textarea
              name="metaDescription"
              defaultValue={post?.metaDescription ?? ""}
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
                defaultValue={post?.ogTitle ?? ""}
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
                defaultValue={post?.twitterTitle ?? ""}
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
                defaultValue={post?.ogDescription ?? ""}
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
                defaultValue={post?.twitterDescription ?? ""}
                rows={2}
                placeholder="Description shown when shared on X/Twitter"
                className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
              />
            </div>
          </div>
        </div>
      </details>

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">Featured image</label>
        {imagePreview && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imagePreview} alt="Preview" className="w-full max-w-xs rounded-lg border border-border mb-3" />
        )}
        <input type="hidden" name="existingFeaturedImageUrl" value={post?.featuredImage ?? ""} />
        <input
          type="file"
          name="featuredImage"
          accept="image/jpeg,image/png,image/webp,image/gif"
          onChange={handleImageChange}
          className="w-full text-sm text-muted file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-accent file:text-white file:text-sm file:font-semibold hover:file:bg-[var(--color-accent-hover)]"
        />
        <p className="text-xs text-muted mt-1.5">Upload a new image to replace the current one. Leave blank to keep it (or leave unset for none).</p>
      </div>

      <ListInput
        name="tags"
        label="Tags"
        defaultValue={post?.tags}
        placeholder="e.g. automation"
        hint="add one, or paste several separated by commas"
      />

      <FaqRepeater defaultValue={post?.faqs} />

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">Sort Order</label>
        <input
          type="number"
          name="sortOrder"
          defaultValue={post?.sortOrder ?? 0}
          className="w-32 px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          name="status"
          value="draft"
          formNoValidate
          disabled={pending}
          className="px-5 py-2.5 bg-surface border border-border hover:border-accent text-text text-sm font-semibold rounded-lg transition-colors disabled:opacity-60"
        >
          {pending ? "Saving…" : "Save Draft"}
        </button>
        <button
          type="submit"
          name="status"
          value="published"
          disabled={pending}
          className="px-5 py-2.5 bg-accent hover:bg-[var(--color-accent-hover)] text-white text-sm font-semibold rounded-lg transition-colors disabled:opacity-60"
        >
          {pending ? "Saving…" : post?.status === "published" ? "Update" : "Publish"}
        </button>
        <span className="text-xs text-muted">
          Save Draft skips required fields so you can save half-finished work.
        </span>
      </div>
    </form>
  );
}
