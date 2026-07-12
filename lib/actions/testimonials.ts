"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { adminFetch } from "@/lib/admin-auth";

export interface ActionState {
  error?: string;
}

function buildPayload(formData: FormData) {
  return {
    name: String(formData.get("name") ?? ""),
    role: String(formData.get("role") ?? ""),
    company: String(formData.get("company") ?? ""),
    text: String(formData.get("text") ?? ""),
    initials: String(formData.get("initials") ?? ""),
    quickSummary: String(formData.get("quickSummary") ?? "").trim() || null,
    sortOrder: Number(formData.get("sortOrder") ?? 0),
  };
}

export async function createTestimonial(_prev: ActionState, formData: FormData): Promise<ActionState> {
  const res = await adminFetch("/api/testimonials", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(buildPayload(formData)),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    return { error: data?.message ?? "Failed to create testimonial." };
  }

  revalidatePath("/admin/testimonials");
  revalidatePath("/");
  redirect("/admin/testimonials");
}

export async function updateTestimonial(id: number, _prev: ActionState, formData: FormData): Promise<ActionState> {
  const res = await adminFetch(`/api/testimonials/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(buildPayload(formData)),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    return { error: data?.message ?? "Failed to update testimonial." };
  }

  revalidatePath("/admin/testimonials");
  revalidatePath("/");
  redirect("/admin/testimonials");
}

export async function deleteTestimonial(id: number): Promise<void> {
  await adminFetch(`/api/testimonials/${id}`, { method: "DELETE" });
  revalidatePath("/admin/testimonials");
  revalidatePath("/");
}
