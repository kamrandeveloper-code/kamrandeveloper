"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { adminFetch } from "@/lib/admin-auth";
import { linesToArray, formDataToFaqs } from "@/lib/actions/shared";
import { resolveImageUrl } from "@/lib/actions/image-upload";

export interface ActionState {
  error?: string;
}

function buildDemo(formData: FormData) {
  const url = String(formData.get("demoUrl") ?? "").trim();
  const email = String(formData.get("demoEmail") ?? "").trim();
  const password = String(formData.get("demoPassword") ?? "").trim();
  if (!url && !email && !password) return null;
  return { url, email, password };
}

async function buildPayload(formData: FormData) {
  const architecture = String(formData.get("architecture") ?? "").trim();
  const quickSummary = String(formData.get("quickSummary") ?? "").trim();
  return {
    slug: String(formData.get("slug") ?? ""),
    title: String(formData.get("title") ?? ""),
    description: String(formData.get("description") ?? ""),
    longDescription: String(formData.get("longDescription") ?? ""),
    industry: String(formData.get("industry") ?? ""),
    problem: String(formData.get("problem") ?? ""),
    solution: String(formData.get("solution") ?? ""),
    result: String(formData.get("result") ?? ""),
    features: linesToArray(formData.get("features")),
    architecture: architecture.length > 0 ? architecture : null,
    tech: linesToArray(formData.get("tech")),
    category: String(formData.get("category") ?? ""),
    image: (await resolveImageUrl(formData)) ?? "/placeholder.jpg",
    featured: formData.get("featured") === "on",
    blogPost: String(formData.get("blogPost") ?? ""),
    demo: buildDemo(formData),
    quickSummary: quickSummary.length > 0 ? quickSummary : null,
    faqs: formDataToFaqs(formData),
    sortOrder: Number(formData.get("sortOrder") ?? 0),
  };
}

export async function createProject(_prev: ActionState, formData: FormData): Promise<ActionState> {
  let payload;
  try {
    payload = await buildPayload(formData);
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Failed to process image." };
  }

  const res = await adminFetch("/api/projects", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    return { error: data?.message ?? "Failed to create project." };
  }

  revalidatePath("/admin/projects");
  revalidatePath("/projects");
  revalidatePath("/blog");
  revalidatePath("/");
  redirect("/admin/projects");
}

export async function updateProject(id: number, _prev: ActionState, formData: FormData): Promise<ActionState> {
  let payload;
  try {
    payload = await buildPayload(formData);
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Failed to process image." };
  }

  const res = await adminFetch(`/api/projects/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    return { error: data?.message ?? "Failed to update project." };
  }

  revalidatePath("/admin/projects");
  revalidatePath("/projects");
  revalidatePath("/blog");
  revalidatePath("/");
  redirect("/admin/projects");
}

export async function deleteProject(id: number): Promise<void> {
  await adminFetch(`/api/projects/${id}`, { method: "DELETE" });
  revalidatePath("/admin/projects");
  revalidatePath("/projects");
  revalidatePath("/blog");
  revalidatePath("/");
}
