import Link from "next/link";
import { adminFetch } from "@/lib/admin-auth";
import type { Testimonial } from "@/lib/api";
import { deleteTestimonial } from "@/lib/actions/testimonials";

export default async function AdminTestimonialsPage() {
  const res = await adminFetch("/api/testimonials");
  const testimonials: Testimonial[] = res.ok ? await res.json() : [];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display font-bold text-2xl text-text">Testimonials</h1>
        <Link
          href="/admin/testimonials/new"
          className="px-4 py-2 bg-accent hover:bg-[var(--color-accent-hover)] text-white text-sm font-semibold rounded-lg transition-colors"
        >
          New Testimonial
        </Link>
      </div>

      <div className="bg-surface border border-border rounded-2xl overflow-hidden">
        {testimonials.length === 0 ? (
          <p className="p-6 text-muted text-sm">No testimonials yet.</p>
        ) : (
          <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted uppercase text-xs tracking-wider">
                <th className="px-5 py-3">Name</th>
                <th className="px-5 py-3">Role</th>
                <th className="px-5 py-3">Company</th>
                <th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {testimonials.map((t) => (
                <tr key={t.id} className="border-b border-border last:border-0">
                  <td className="px-5 py-3 text-text font-medium">{t.name}</td>
                  <td className="px-5 py-3 text-muted">{t.role}</td>
                  <td className="px-5 py-3 text-muted">{t.company}</td>
                  <td className="px-5 py-3 text-right whitespace-nowrap">
                    <Link
                      href={`/admin/testimonials/${t.id}/edit`}
                      className="text-accent hover:underline mr-4"
                    >
                      Edit
                    </Link>
                    <form action={deleteTestimonial.bind(null, t.id)} className="inline">
                      <button type="submit" className="text-red-500 hover:underline">
                        Delete
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        )}
      </div>
    </div>
  );
}
