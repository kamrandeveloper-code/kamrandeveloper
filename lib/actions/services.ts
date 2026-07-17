"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { adminFetch } from "@/lib/admin-auth";
import { formDataToList, linesToProcessSteps, formDataToFaqs } from "@/lib/actions/shared";

export interface ActionState {
  error?: string;
}

function buildPayload(formData: FormData) {
  return {
    slug: String(formData.get("slug") ?? ""),
    title: String(formData.get("title") ?? ""),
    tagline: String(formData.get("tagline") ?? ""),
    description: String(formData.get("description") ?? ""),
    longDescription: String(formData.get("longDescription") ?? ""),
    benefits: formDataToList(formData, "benefits"),
    process: linesToProcessSteps(formData.get("process")),
    idealFor: formDataToList(formData, "idealFor"),
    engagement: {
      type: String(formData.get("engagementType") ?? ""),
      timeline: String(formData.get("engagementTimeline") ?? ""),
      note: String(formData.get("engagementNote") ?? ""),
    },
    technologies: formDataToList(formData, "technologies"),
    quickSummary: String(formData.get("quickSummary") ?? "").trim() || null,
    faqs: formDataToFaqs(formData),
    featured: formData.get("featured") === "on",
    sortOrder: Number(formData.get("sortOrder") ?? 0),
  };
}

export async function createService(_prev: ActionState, formData: FormData): Promise<ActionState> {
  const res = await adminFetch("/api/services", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(buildPayload(formData)),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    return { error: data?.message ?? "Failed to create service." };
  }

  revalidatePath("/admin/services");
  revalidatePath("/services");
  revalidatePath("/");
  redirect("/admin/services");
}

export async function updateService(id: number, _prev: ActionState, formData: FormData): Promise<ActionState> {
  const res = await adminFetch(`/api/services/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(buildPayload(formData)),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    return { error: data?.message ?? "Failed to update service." };
  }

  revalidatePath("/admin/services");
  revalidatePath("/services");
  revalidatePath("/");
  redirect("/admin/services");
}

export async function deleteService(id: number): Promise<void> {
  await adminFetch(`/api/services/${id}`, { method: "DELETE" });
  revalidatePath("/admin/services");
  revalidatePath("/services");
  revalidatePath("/");
}
