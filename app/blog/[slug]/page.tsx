import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/data/blog";
import { projects, type Project } from "@/data/projects";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { BASE_URL, baseMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [
    ...blogPosts.map((p) => ({ slug: p.slug })),
    ...projects.map((p) => ({ slug: p.slug })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (post) {
    return baseMetadata({
      title: post.title,
      description: post.excerpt,
      alternates: { canonical: `${BASE_URL}/blog/${slug}` },
      openGraph: {
        title: post.title,
        description: post.excerpt,
        url: `${BASE_URL}/blog/${slug}`,
      },
    });
  }
  const project = projects.find((p) => p.slug === slug);
  if (project) {
    return baseMetadata({
      title: `${project.title} — Case Study`,
      description: project.description,
      alternates: { canonical: `${BASE_URL}/blog/${slug}` },
      openGraph: {
        title: `${project.title} — Case Study`,
        description: project.description,
        url: `${BASE_URL}/blog/${slug}`,
      },
    });
  }
  return {};
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);
  if (post) return <ArticlePage slug={slug} />;

  const project = projects.find((p) => p.slug === slug);
  if (project) return <ProjectCaseStudyPage project={project} />;

  notFound();
}

function ArticlePage({ slug }: { slug: string }) {
  const post = blogPosts.find((p) => p.slug === slug)!;

  const schema = articleSchema({
    title: post.title,
    description: post.excerpt,
    datePublished: post.date,
    url: `${BASE_URL}/blog/${post.slug}`,
    image: `${BASE_URL}/opengraph.jpeg`,
  });

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Blog", url: `${BASE_URL}/blog` },
    { name: post.title, url: `${BASE_URL}/blog/${post.slug}` },
  ]);

  const paragraphs = post.content.split("\n\n").map((p) => p.trim()).filter(Boolean);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <main className="min-h-screen bg-bg pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <nav className="flex items-center gap-2 text-sm text-muted mb-10">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-text line-clamp-1">{post.title}</span>
          </nav>

          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${
                post.category === "Business" ? "bg-accent/10 text-accent" : "bg-teal/10 text-teal"
              }`}>
                {post.category}
              </span>
              <span className="text-muted text-sm">{post.date}</span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-text mb-5 leading-tight">
              {post.title}
            </h1>
            <p className="text-muted text-xl leading-relaxed">{post.excerpt}</p>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-10">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-surface border border-border rounded-full text-muted/70">
                {tag}
              </span>
            ))}
          </div>

          <div className="space-y-5">
            {paragraphs.map((para, i) => {
              if (para.startsWith("## ")) {
                return (
                  <h2 key={i} className="font-display font-bold text-2xl sm:text-3xl text-text mt-12 mb-2">
                    {para.replace("## ", "")}
                  </h2>
                );
              }
              if (para.startsWith("### ")) {
                return (
                  <h3 key={i} className="font-display font-bold text-xl text-text mt-8 mb-2">
                    {para.replace("### ", "")}
                  </h3>
                );
              }
              return (
                <p key={i} className="text-muted leading-relaxed">
                  {para}
                </p>
              );
            })}
          </div>

          <div className="mt-16 bg-accent/10 border border-accent/20 rounded-2xl p-8 text-center">
            <h3 className="font-display font-bold text-2xl text-text mb-2">
              Need help with your business software?
            </h3>
            <p className="text-muted mb-6">
              Let&apos;s discuss your requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-[var(--color-accent-hover)] text-white font-semibold rounded-xl transition-colors duration-200"
            >
              Get In Touch
            </Link>
          </div>

        </div>
      </main>
    </>
  );
}

function ProjectCaseStudyPage({ project }: { project: Project }) {
  const schema = articleSchema({
    title: `${project.title} — Case Study`,
    description: project.description,
    datePublished: "2025-01-01",
    url: `${BASE_URL}/blog/${project.slug}`,
    image: `${BASE_URL}/opengraph.jpeg`,
  });

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Blog", url: `${BASE_URL}/blog` },
    { name: "Case Studies", url: `${BASE_URL}/case-studies` },
    { name: project.title, url: `${BASE_URL}/blog/${project.slug}` },
  ]);

  const paragraphs = project.blogPost
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <main className="min-h-screen bg-bg pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <nav className="flex items-center gap-2 text-sm text-muted mb-10">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
            <span>/</span>
            <Link href="/case-studies" className="hover:text-accent transition-colors">Case Studies</Link>
            <span>/</span>
            <span className="text-text line-clamp-1">{project.title}</span>
          </nav>

          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-teal/10 text-teal">
                {project.industry}
              </span>
              <span className="text-muted text-xs">Case Study</span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-text mb-5 leading-tight">
              {project.title}
            </h1>
            <p className="text-muted text-xl leading-relaxed">{project.description}</p>
          </div>

          <div className="bg-surface border border-border rounded-2xl p-6 mb-10">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-bg border border-border rounded-lg text-muted text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-5 mb-16">
            {paragraphs.map((para, i) => {
              if (para.startsWith("## ")) {
                return (
                  <h2 key={i} className="font-display font-bold text-2xl sm:text-3xl text-text mt-12 mb-2">
                    {para.replace("## ", "")}
                  </h2>
                );
              }
              if (para.startsWith("### ")) {
                return (
                  <h3 key={i} className="font-display font-bold text-xl text-text mt-8 mb-2">
                    {para.replace("### ", "")}
                  </h3>
                );
              }
              return (
                <p key={i} className="text-muted leading-relaxed">
                  {para}
                </p>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`/case-studies/${project.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-[var(--color-accent-hover)] text-white font-semibold rounded-xl transition-colors duration-200"
            >
              Full Case Study
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-accent text-muted hover:text-accent rounded-xl transition-all duration-200 text-sm font-medium"
            >
              Build something similar
            </Link>
          </div>

        </div>
      </main>
    </>
  );
}