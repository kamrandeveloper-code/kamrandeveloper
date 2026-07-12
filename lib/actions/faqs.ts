"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { adminFetch } from "@/lib/admin-auth";

export interface ActionState {
  error?: string;
}

function buildPayload(formData: FormData) {
  return {
    question: String(formData.get("question") ?? ""),
    answer: String(formData.get("answer") ?? ""),
    sortOrder: Number(formData.get("sortOrder") ?? 0),
  };
}

export async function createFaq(_prev: ActionState, formData: FormData): Promise<ActionState> {
  const res = await adminFetch("/api/sitefaqs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(buildPayload(formData)),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    return { error: data?.message ?? "Failed to create FAQ." };
  }

  revalidatePath("/admin/faqs");
  revalidatePath("/");
  redirect("/admin/faqs");
}

export async function updateFaq(id: number, _prev: ActionState, formData: FormData): Promise<ActionState> {
  const res = await adminFetch(`/api/sitefaqs/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(buildPayload(formData)),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    return { error: data?.message ?? "Failed to update FAQ." };
  }

  revalidatePath("/admin/faqs");
  revalidatePath("/");
  redirect("/admin/faqs");
}

export async function deleteFaq(id: number): Promise<void> {
  await adminFetch(`/api/sitefaqs/${id}`, { method: "DELETE" });
  revalidatePath("/admin/faqs");
  revalidatePath("/");
}
