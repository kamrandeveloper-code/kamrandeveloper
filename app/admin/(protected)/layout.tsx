import Link from "next/link";
import LogoutButton from "./LogoutButton";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg">
      <header className="border-b border-border bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:h-16 sm:py-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <nav className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <Link href="/admin" className="font-display font-bold text-text">
              Admin
            </Link>
            <Link href="/admin/blogs" className="text-sm text-muted hover:text-accent transition-colors">
              Blogs
            </Link>
            <Link href="/admin/services" className="text-sm text-muted hover:text-accent transition-colors">
              Services
            </Link>
            <Link href="/admin/projects" className="text-sm text-muted hover:text-accent transition-colors">
              Projects
            </Link>
            <Link href="/admin/case-studies" className="text-sm text-muted hover:text-accent transition-colors">
              Case Studies
            </Link>
            <Link href="/admin/testimonials" className="text-sm text-muted hover:text-accent transition-colors">
              Testimonials
            </Link>
            <Link href="/admin/faqs" className="text-sm text-muted hover:text-accent transition-colors">
              FAQs
            </Link>
          </nav>
          <LogoutButton />
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">{children}</main>
    </div>
  );
}
