import IndustryForm from "../IndustryForm";
import { createIndustry } from "@/lib/actions/industries";

export default function NewIndustryPage() {
  return (
    <div>
      <h1 className="font-display font-bold text-2xl text-text mb-6">New Industry</h1>
      <IndustryForm action={createIndustry} />
    </div>
  );
}
