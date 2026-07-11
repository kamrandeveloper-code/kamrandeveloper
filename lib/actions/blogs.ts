"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { adminFetch } from "@/lib/admin-auth";
import { linesToArray } from "@/lib/actions/shared";
import { resolveImageUrl } from "@/lib/actions/image-upload";

export interface ActionState {
  error?: string;
}

async function buildPayload(formData: FormData) {
  return {
    slug: String(formData.get("slug") ?? ""),
    title: String(formData.get("title") ?? ""),
    category: String(formData.get("category") ?? "Business"),
    date: String(formData.get("date") ?? ""),
    excerpt: String(formData.get("excerpt") ?? ""),
    content: String(formData.get("content") ?? ""),
    featuredImage: await resolveImageUrl(formData, "featuredImage", "existingFeaturedImageUrl"),
    tags: linesToArray(formData.get("tags")),
    sortOrder: Number(formData.get("sortOrder") ?? 0),
  };
}

export async function createBlogPost(_prev: ActionState, formData: FormData): Promise<ActionState> {
  let payload;
  try {
    payload = await buildPayload(formData);
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Failed to process image." };
  }

  const res = await adminFetch("/api/blogposts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    return { error: data?.message ?? "Failed to create blog post." };
  }

  revalidatePath("/admin/blogs");
  revalidatePath("/blog");
  redirect("/admin/blogs");
}

export async function updateBlogPost(id: number, _prev: ActionState, formData: FormData): Promise<ActionState> {
  let payload;
  try {
    payload = await buildPayload(formData);
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Failed to process image." };
  }

  const res = await adminFetch(`/api/blogposts/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    return { error: data?.message ?? "Failed to update blog post." };
  }

  revalidatePath("/admin/blogs");
  revalidatePath("/blog");
  redirect("/admin/blogs");
}

export async function deleteBlogPost(id: number): Promise<void> {
  await adminFetch(`/api/blogposts/${id}`, { method: "DELETE" });
  revalidatePath("/admin/blogs");
  revalidatePath("/blog");
}
