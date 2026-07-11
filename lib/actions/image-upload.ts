import { adminFetch } from "@/lib/admin-auth";

/**
 * Resolves the image URL for a form submission: uploads a new file if one was
 * provided, otherwise falls back to the existing URL hidden field. Server-only
 * — must not be imported from client components.
 */
export async function resolveImageUrl(
  formData: FormData,
  fileFieldName = "image",
  existingFieldName = "existingImageUrl",
): Promise<string | null> {
  const file = formData.get(fileFieldName);
  if (file instanceof File && file.size > 0) {
    const uploadForm = new FormData();
    uploadForm.append("file", file);
    const res = await adminFetch("/api/uploads", { method: "POST", body: uploadForm });
    if (!res.ok) {
      const data = await res.json().catch(() => null);
      throw new Error(data?.message ?? "Image upload failed.");
    }
    const data = await res.json();
    return data.url as string;
  }

  const existing = String(formData.get(existingFieldName) ?? "").trim();
  return existing.length > 0 ? existing : null;
}
