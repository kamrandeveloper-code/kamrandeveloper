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
              Practical insights on{" "}
              <span className="text-accent">
                software, SEO & business growth
              </span>
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-muted leading-relaxed">
              I write about custom software development, Next.js, .NET,
              SEO, real client projects, and lessons learned while building
              production applications.
            </p>
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
                   <div className="flex items-center gap-3 mb-4">

              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  post.category === "Business"
                    ? "bg-accent/10"
                    : "bg-teal/10"
              }`}>

                {post.category === "Business" ? (
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 7h16M4 12h10M4 17h7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-teal"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 17L15 12l-5.25-5"
                    />
                  </svg>
                )}

              </div>

              <div>
                <span className={`text-xs font-bold tracking-widest uppercase ${
                  post.category === "Business"
                    ? "text-accent"
                    : "text-teal"
                }`}>
                  {post.category}
                </span>

                <p className="text-xs text-muted mt-1">
                  {post.date}
                </p>
              </div>

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
