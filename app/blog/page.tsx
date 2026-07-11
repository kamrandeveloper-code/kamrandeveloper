import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts, getCaseStudies } from "@/lib/api";
import { baseMetadata, BASE_URL, buildAlternates } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = baseMetadata({
  title: "Blog",
  description:
    "Articles on custom software development, business automation, and technical guides. For business owners and developers.",
  alternates: buildAlternates("/blog"),
  openGraph: {
    title: "Blog — Kamran Custom Software Developer",
    description:
      "Business software articles and technical guides. When to replace Excel, custom vs SaaS, ASP.NET Core architecture.",
    url: `${BASE_URL}/blog`,
  },
});

export default async function BlogPage() {
  const [blogPosts, caseStudies] = await Promise.all([getBlogPosts(), getCaseStudies()]);
  const businessPosts = blogPosts.filter((p) => p.category === "Business");
  const technicalPosts = blogPosts.filter((p) => p.category === "Technical");
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Blog", url: `${BASE_URL}/blog` },
  ]);

  return (
    <main className="min-h-screen bg-bg pt-24 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">Blog</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-text leading-tight mb-5">
            Articles for{" "}
            <span className="text-accent">businesses and developers</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Practical articles for business owners thinking about custom software, and technical guides
            for developers building management systems.
          </p>
        </div>

        {/* Business Articles */}
        {businessPosts.length > 0 && (
          <div className="mb-14">
            <h2 className="font-display font-semibold text-xs text-muted uppercase tracking-widest mb-6">
              For Business Owners
            </h2>
            <div className="flex flex-col gap-4">
              {businessPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block bg-surface border border-border rounded-2xl p-6 hover:border-accent/40 transition-all duration-300 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-accent/10 text-accent">
                          Business
                        </span>
                        <span className="text-muted text-xs">{post.date}</span>
                      </div>
                      <h3 className="font-display font-bold text-text text-xl mb-2 group-hover:text-accent transition-colors duration-200">
                        {post.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed mb-3">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-[10px] font-medium uppercase px-2 py-0.5 bg-bg border border-border rounded-full text-muted/60">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="text-accent font-medium text-sm inline-flex items-center gap-1 flex-shrink-0">
                      Read
                      <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Technical Articles */}
        {technicalPosts.length > 0 && (
          <div className="mb-14">
            <h2 className="font-display font-semibold text-xs text-muted uppercase tracking-widest mb-6">
              Technical Guides
            </h2>
            <div className="flex flex-col gap-4">
              {technicalPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block bg-surface border border-border rounded-2xl p-6 hover:border-accent/40 transition-all duration-300 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-teal/10 text-teal">
                          Technical
                        </span>
                        <span className="text-muted text-xs">{post.date}</span>
                      </div>
                      <h3 className="font-display font-bold text-text text-xl mb-2 group-hover:text-accent transition-colors duration-200">
                        {post.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed mb-3">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-[10px] font-medium uppercase px-2 py-0.5 bg-bg border border-border rounded-full text-muted/60">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="text-accent font-medium text-sm inline-flex items-center gap-1 flex-shrink-0">
                      Read
                      <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Case Studies */}
        {caseStudies.length > 0 && (
          <div>
            <h2 className="font-display font-semibold text-xs text-muted uppercase tracking-widest mb-6">
              Project Case Studies
            </h2>
            <div className="flex flex-col gap-4">
              {caseStudies.map((caseStudy) => (
                <Link
                  key={caseStudy.slug}
                  href={`/case-studies/${caseStudy.slug}`}
                  className="block bg-surface border border-border rounded-2xl p-6 hover:border-accent/40 transition-all duration-300 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-teal/10 text-teal">
                          {caseStudy.industry}
                        </span>
                        <span className="text-muted text-xs">Case Study</span>
                      </div>
                      <h3 className="font-display font-bold text-text text-xl mb-2 group-hover:text-accent transition-colors duration-200">
                        {caseStudy.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed mb-3">{caseStudy.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.tech.slice(0, 3).map((tech) => (
                          <span key={tech} className="px-2.5 py-1 bg-bg border border-border rounded-md text-muted text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="text-accent font-medium text-sm inline-flex items-center gap-1 flex-shrink-0">
                      Read Case Study
                      <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
