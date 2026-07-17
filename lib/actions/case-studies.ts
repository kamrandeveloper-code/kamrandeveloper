"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { adminFetch } from "@/lib/admin-auth";
import { formDataToList, formDataToFaqs } from "@/lib/actions/shared";
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
    features: formDataToList(formData, "features"),
    architecture: architecture.length > 0 ? architecture : null,
    tech: formDataToList(formData, "tech"),
    category: String(formData.get("category") ?? ""),
    imageUrl: await resolveImageUrl(formData),
    featured: formData.get("featured") === "on",
    content: String(formData.get("content") ?? ""),
    demo: buildDemo(formData),
    quickSummary: quickSummary.length > 0 ? quickSummary : null,
    faqs: formDataToFaqs(formData),
    sortOrder: Number(formData.get("sortOrder") ?? 0),
  };
}

export async function createCaseStudy(_prev: ActionState, formData: FormData): Promise<ActionState> {
  let payload;
  try {
    payload = await buildPayload(formData);
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Failed to process image." };
  }

  const res = await adminFetch("/api/casestudies", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    return { error: data?.message ?? "Failed to create case study." };
  }

  revalidatePath("/admin/case-studies");
  revalidatePath("/case-studies");
  revalidatePath("/blog");
  revalidatePath("/");
  redirect("/admin/case-studies");
}

export async function updateCaseStudy(id: number, _prev: ActionState, formData: FormData): Promise<ActionState> {
  let payload;
  try {
    payload = await buildPayload(formData);
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Failed to process image." };
  }

  const res = await adminFetch(`/api/casestudies/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    return { error: data?.message ?? "Failed to update case study." };
  }

  revalidatePath("/admin/case-studies");
  revalidatePath("/case-studies");
  revalidatePath("/blog");
  revalidatePath("/");
  redirect("/admin/case-studies");
}

export async function deleteCaseStudy(id: number): Promise<void> {
  await adminFetch(`/api/casestudies/${id}`, { method: "DELETE" });
  revalidatePath("/admin/case-studies");
  revalidatePath("/case-studies");
  revalidatePath("/blog");
  revalidatePath("/");
}
