import { notFound } from "next/navigation";
import TestimonialForm from "../../TestimonialForm";
import { updateTestimonial } from "@/lib/actions/testimonials";
import { adminFetch } from "@/lib/admin-auth";
import type { Testimonial } from "@/lib/api";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditTestimonialPage({ params }: Props) {
  const { id } = await params;
  const res = await adminFetch(`/api/testimonials/${id}`);
  if (!res.ok) notFound();
  const testimonial: Testimonial = await res.json();

  return (
    <div>
      <h1 className="font-display font-bold text-2xl text-text mb-6">Edit Testimonial</h1>
      <TestimonialForm action={updateTestimonial.bind(null, testimonial.id)} testimonial={testimonial} />
    </div>
  );
}
