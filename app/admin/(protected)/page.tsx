import Link from "next/link";

const sections = [
  { href: "/admin/blogs", title: "Blogs", description: "Create, edit, and delete blog posts." },
  { href: "/admin/services", title: "Services", description: "Manage the services shown on the site." },
  { href: "/admin/projects", title: "Projects", description: "Manage portfolio projects, including screenshots." },
  { href: "/admin/case-studies", title: "Case Studies", description: "Manage case studies, including cover images." },
  { href: "/admin/testimonials", title: "Testimonials", description: "Manage client testimonials shown on the homepage." },
];

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="font-display font-bold text-2xl text-text mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="block bg-surface border border-border rounded-2xl p-6 hover:border-accent/40 transition-colors"
          >
            <h2 className="font-display font-bold text-text text-lg mb-2">{section.title}</h2>
            <p className="text-muted text-sm leading-relaxed">{section.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
