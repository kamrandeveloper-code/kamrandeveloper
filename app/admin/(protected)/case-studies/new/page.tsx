import CaseStudyForm from "../CaseStudyForm";
import { createCaseStudy } from "@/lib/actions/case-studies";

export default function NewCaseStudyPage() {
  return (
    <div>
      <h1 className="font-display font-bold text-2xl text-text mb-6">New Case Study</h1>
      <CaseStudyForm action={createCaseStudy} />
    </div>
  );
}
