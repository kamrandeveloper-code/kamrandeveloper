import Link from "next/link";
import { adminFetch } from "@/lib/admin-auth";
import type { Project } from "@/lib/api";
import { deleteProject } from "@/lib/actions/projects";

export default async function AdminProjectsPage() {
  const res = await adminFetch("/api/projects");
  const projects: Project[] = res.ok ? await res.json() : [];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display font-bold text-2xl text-text">Projects</h1>
        <Link
          href="/admin/projects/new"
          className="px-4 py-2 bg-accent hover:bg-[var(--color-accent-hover)] text-white text-sm font-semibold rounded-lg transition-colors"
        >
          New Project
        </Link>
      </div>

      <div className="bg-surface border border-border rounded-2xl overflow-hidden">
        {projects.length === 0 ? (
          <p className="p-6 text-muted text-sm">No projects yet.</p>
        ) : (
          <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted uppercase text-xs tracking-wider">
                <th className="px-5 py-3">Title</th>
                <th className="px-5 py-3">Industry</th>
                <th className="px-5 py-3">Featured</th>
                <th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-b border-border last:border-0">
                  <td className="px-5 py-3 text-text font-medium">{project.title}</td>
                  <td className="px-5 py-3 text-muted">{project.industry}</td>
                  <td className="px-5 py-3 text-muted">{project.featured ? "Yes" : "No"}</td>
                  <td className="px-5 py-3 text-right whitespace-nowrap">
                    <Link
                      href={`/admin/projects/${project.id}/edit`}
                      className="text-accent hover:underline mr-4"
                    >
                      Edit
                    </Link>
                    <form action={deleteProject.bind(null, project.id)} className="inline">
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
