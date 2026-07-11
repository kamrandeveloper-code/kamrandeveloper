import { notFound } from "next/navigation";
import CaseStudyForm from "../../CaseStudyForm";
import { updateCaseStudy } from "@/lib/actions/case-studies";
import { adminFetch } from "@/lib/admin-auth";
import type { CaseStudy } from "@/lib/api";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditCaseStudyPage({ params }: Props) {
  const { id } = await params;
  const res = await adminFetch(`/api/casestudies/${id}`);
  if (!res.ok) notFound();
  const caseStudy: CaseStudy = await res.json();

  return (
    <div>
      <h1 className="font-display font-bold text-2xl text-text mb-6">Edit Case Study</h1>
      <CaseStudyForm action={updateCaseStudy.bind(null, caseStudy.id)} caseStudy={caseStudy} />
    </div>
  );
}
