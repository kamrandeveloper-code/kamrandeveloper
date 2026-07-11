import TestimonialForm from "../TestimonialForm";
import { createTestimonial } from "@/lib/actions/testimonials";

export default function NewTestimonialPage() {
  return (
    <div>
      <h1 className="font-display font-bold text-2xl text-text mb-6">New Testimonial</h1>
      <TestimonialForm action={createTestimonial} />
    </div>
  );
}
