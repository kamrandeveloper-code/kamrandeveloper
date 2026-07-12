import { notFound } from "next/navigation";
import FaqForm from "../../FaqForm";
import { updateFaq } from "@/lib/actions/faqs";
import { adminFetch } from "@/lib/admin-auth";
import type { SiteFaq } from "@/lib/api";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditFaqPage({ params }: Props) {
  const { id } = await params;
  const res = await adminFetch(`/api/sitefaqs/${id}`);
  if (!res.ok) notFound();
  const faq: SiteFaq = await res.json();

  return (
    <div>
      <h1 className="font-display font-bold text-2xl text-text mb-6">Edit FAQ</h1>
      <FaqForm action={updateFaq.bind(null, faq.id)} faq={faq} />
    </div>
  );
}
