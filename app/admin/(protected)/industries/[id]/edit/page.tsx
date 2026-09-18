import { notFound } from "next/navigation";
import IndustryForm from "../../IndustryForm";
import { updateIndustry } from "@/lib/actions/industries";
import { adminFetch } from "@/lib/admin-auth";
import type { Industry } from "@/lib/api";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditIndustryPage({ params }: Props) {
  const { id } = await params;
  const res = await adminFetch(`/api/industries/${id}`);
  if (!res.ok) notFound();
  const industry: Industry = await res.json();

  return (
    <div>
      <h1 className="font-display font-bold text-2xl text-text mb-6">Edit Industry</h1>
      <IndustryForm action={updateIndustry.bind(null, industry.id)} industry={industry} />
    </div>
  );
}
