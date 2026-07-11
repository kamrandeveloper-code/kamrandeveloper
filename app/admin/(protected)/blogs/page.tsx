import Link from "next/link";
import { adminFetch } from "@/lib/admin-auth";
import type { BlogPost } from "@/lib/api";
import { deleteBlogPost } from "@/lib/actions/blogs";

export default async function AdminBlogsPage() {
  const res = await adminFetch("/api/blogposts");
  const posts: BlogPost[] = res.ok ? await res.json() : [];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display font-bold text-2xl text-text">Blogs</h1>
        <Link
          href="/admin/blogs/new"
          className="px-4 py-2 bg-accent hover:bg-[var(--color-accent-hover)] text-white text-sm font-semibold rounded-lg transition-colors"
        >
          New Post
        </Link>
      </div>

      <div className="bg-surface border border-border rounded-2xl overflow-hidden">
        {posts.length === 0 ? (
          <p className="p-6 text-muted text-sm">No blog posts yet.</p>
        ) : (
          <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted uppercase text-xs tracking-wider">
                <th className="px-5 py-3">Title</th>
                <th className="px-5 py-3">Category</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-b border-border last:border-0">
                  <td className="px-5 py-3 text-text font-medium">{post.title}</td>
                  <td className="px-5 py-3 text-muted">{post.category}</td>
                  <td className="px-5 py-3 text-muted">{post.date}</td>
                  <td className="px-5 py-3 text-right whitespace-nowrap">
                    <Link
                      href={`/admin/blogs/${post.id}/edit`}
                      className="text-accent hover:underline mr-4"
                    >
                      Edit
                    </Link>
                    <form action={deleteBlogPost.bind(null, post.id)} className="inline">
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
