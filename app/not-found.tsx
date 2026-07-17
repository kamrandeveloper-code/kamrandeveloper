import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { baseMetadata } from "@/lib/seo";
import { developer } from "@/data/developer";
import ContactCTAButton from "@/components/ContactCTAButton";

export const metadata: Metadata = baseMetadata({
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist or may have moved.",
});

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-bg pt-28 pb-24 flex items-center overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_40%,rgba(99,102,241,0.06),transparent)]" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Link href="/" className="inline-flex mb-8">
          <Image src="/logo.webp" alt={`${developer.name} Logo`} width={160} height={90} priority />
        </Link>

        <p className="font-display font-bold text-8xl sm:text-9xl text-accent/20 leading-none mb-4 select-none">
          404
        </p>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-text mb-4 leading-tight">
          This page wandered off
        </h1>
        <p className="text-muted text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. I&apos;m {developer.name}, a custom
          software developer — here&apos;s how to find your way back.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-[var(--color-accent-hover)] text-white font-semibold text-sm rounded-xl transition-colors duration-200 shadow-lg shadow-accent/20"
          >
            Back to Home
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-accent text-muted hover:text-accent text-sm font-medium rounded-xl transition-all duration-200"
          >
            Browse Projects
          </Link>
          <ContactCTAButton className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-accent text-muted hover:text-accent text-sm font-medium rounded-xl transition-all duration-200">
            Get in Touch
          </ContactCTAButton>
        </div>
      </div>
    </main>
  );
}
