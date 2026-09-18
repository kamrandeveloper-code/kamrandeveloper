"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { adminFetch } from "@/lib/admin-auth";
import { formDataToFaqs } from "@/lib/actions/shared";
import { resolveImageUrl } from "@/lib/actions/image-upload";

export interface ActionState {
  error?: string;
}

async function buildPayload(formData: FormData) {
  return {
    slug: String(formData.get("slug") ?? ""),
    title: String(formData.get("title") ?? ""),
    tagline: String(formData.get("tagline") ?? ""),
    description: String(formData.get("description") ?? ""),
    longDescription: String(formData.get("longDescription") ?? ""),
    heroImage: (await resolveImageUrl(formData, "heroImage", "existingHeroImageUrl")) ?? "/placeholder.jpg",
    quickSummary: String(formData.get("quickSummary") ?? "").trim() || null,
    faqs: formDataToFaqs(formData),
    featured: formData.get("featured") === "on",
    sortOrder: Number(formData.get("sortOrder") ?? 0),
  };
}

export async function createIndustry(_prev: ActionState, formData: FormData): Promise<ActionState> {
  let payload;
  try {
    payload = await buildPayload(formData);
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Failed to process image." };
  }

  const res = await adminFetch("/api/industries", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    return { error: data?.message ?? "Failed to create industry." };
  }

  revalidatePath("/admin/industries");
  revalidatePath("/projects");
  revalidatePath("/case-studies");
  redirect("/admin/industries");
}

export async function updateIndustry(id: number, _prev: ActionState, formData: FormData): Promise<ActionState> {
  let payload;
  try {
    payload = await buildPayload(formData);
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Failed to process image." };
  }

  const res = await adminFetch(`/api/industries/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    return { error: data?.message ?? "Failed to update industry." };
  }

  revalidatePath("/admin/industries");
  revalidatePath("/projects");
  revalidatePath("/case-studies");
  redirect("/admin/industries");
}

export async function deleteIndustry(id: number): Promise<void> {
  await adminFetch(`/api/industries/${id}`, { method: "DELETE" });
  revalidatePath("/admin/industries");
  revalidatePath("/projects");
  revalidatePath("/case-studies");
}
