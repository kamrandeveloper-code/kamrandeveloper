import Link from "next/link";
import { adminFetch } from "@/lib/admin-auth";
import type { Industry } from "@/lib/api";
import { deleteIndustry } from "@/lib/actions/industries";
import { paginate } from "@/lib/pagination";
import Pagination from "@/components/admin/Pagination";

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export default async function AdminIndustriesPage({ searchParams }: Props) {
  const { page } = await searchParams;
  const res = await adminFetch("/api/industries");
  const allIndustries: Industry[] = res.ok ? await res.json() : [];
  const { pageItems: industries, currentPage, totalPages } = paginate(allIndustries, Number(page));

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display font-bold text-2xl text-text">Industries</h1>
        <Link
          href="/admin/industries/new"
          className="px-4 py-2 bg-accent hover:bg-[var(--color-accent-hover)] text-white text-sm font-semibold rounded-lg transition-colors"
        >
          New Industry
        </Link>
      </div>

      <div className="bg-surface border border-border rounded-2xl overflow-hidden">
        {industries.length === 0 ? (
          <p className="p-6 text-muted text-sm">No industries yet.</p>
        ) : (
          <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted uppercase text-xs tracking-wider">
                <th className="px-5 py-3">Title</th>
                <th className="px-5 py-3">Slug</th>
                <th className="px-5 py-3">Featured</th>
                <th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {industries.map((industry) => (
                <tr key={industry.id} className="border-b border-border last:border-0">
                  <td className="px-5 py-3 text-text font-medium">{industry.title}</td>
                  <td className="px-5 py-3 text-muted">{industry.slug}</td>
                  <td className="px-5 py-3 text-muted">{industry.featured ? "Yes" : "No"}</td>
                  <td className="px-5 py-3 text-right whitespace-nowrap">
                    <Link
                      href={`/admin/industries/${industry.id}/edit`}
                      className="text-accent hover:underline mr-4"
                    >
                      Edit
                    </Link>
                    <form action={deleteIndustry.bind(null, industry.id)} className="inline">
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
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  );
}
