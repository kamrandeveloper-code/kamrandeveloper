import FaqForm from "../FaqForm";
import { createFaq } from "@/lib/actions/faqs";

export default function NewFaqPage() {
  return (
    <div>
      <h1 className="font-display font-bold text-2xl text-text mb-6">New FAQ</h1>
      <FaqForm action={createFaq} />
    </div>
  );
}
