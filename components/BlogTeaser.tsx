import Link from "next/link";
import { getBlogPosts } from "@/lib/api";

export default async function BlogTeaser() {
  const blogPosts = await getBlogPosts();
  const recent = blogPosts.slice(0, 3);

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">
              Blog
            </p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-text leading-tight">
              Articles for{" "}
              <span className="text-accent">businesses and developers</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border hover:border-accent text-muted hover:text-accent rounded-xl transition-all duration-200 text-sm font-medium flex-shrink-0"
          >
            All articles
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          {recent.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-bg border border-border rounded-2xl p-6 hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${
                      post.category === "Business"
                        ? "bg-accent/10 text-accent"
                        : "bg-teal/10 text-teal"
                    }`}>
                      {post.category}
                    </span>
                    <span className="text-muted text-xs">{post.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-text text-xl mb-2 group-hover:text-accent transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{post.excerpt}</p>
                </div>
                <svg className="w-5 h-5 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
