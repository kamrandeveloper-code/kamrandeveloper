"use client";

import { useActionState, useEffect, useState } from "react";
import type { BlogPost } from "@/lib/api";
import type { ActionState } from "@/lib/actions/blogs";
import BlogContentEditor from "./BlogContentEditor";
import FaqRepeater from "../FaqRepeater";

interface Props {
  action: (prevState: ActionState, formData: FormData) => Promise<ActionState>;
  post?: BlogPost;
}

export default function BlogForm({ action, post }: Props) {
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
          <label className="block text-sm font-medium text-text mb-1.5">Category</label>
          <select
            name="category"
            defaultValue={post?.category ?? "Business"}
            className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
          >
            <option value="Business">Business</option>
            <option value="Technical">Technical</option>
          </select>
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
        <label className="block text-sm font-medium text-text mb-1.5">Excerpt</label>
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
          Quick Summary <span className="text-muted font-normal">(optional — shown as a TL;DR box if filled in)</span>
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

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">Tags <span className="text-muted font-normal">(one per line)</span></label>
        <textarea
          name="tags"
          defaultValue={post?.tags.join("\n")}
          placeholder={"excel\nautomation\nbusiness-software"}
          rows={4}
          className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
        />
      </div>

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
