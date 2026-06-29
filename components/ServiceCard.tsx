import Link from "next/link";
import type { Service } from "@/data/services";

export const serviceIcons: Record<string, React.ReactNode> = {
  "custom-business-software": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
    </svg>
  ),
  "management-systems": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
    </svg>
  ),
  "admin-dashboards": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
  "api-integrations": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
    </svg>
  ),
  "ai-powered-features": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
  ),
  "ecommerce-solutions": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
    </svg>
  ),
};

export function ServiceCard({ service }: { service: Service }) {
  const icon = serviceIcons[service.id];
  return (
    <div className="group bg-surface border border-border rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/8 hover:border-accent/30">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
          {icon}
        </div>
        <h3 className="font-display font-bold text-text text-lg leading-snug">{service.title}</h3>
      </div>
      <div className="w-8 h-0.5 bg-accent/40 rounded-full mb-4 group-hover:w-14 group-hover:bg-accent transition-all duration-300" />
      <p className="text-muted text-sm leading-relaxed mb-4">{service.tagline}</p>
      <ul className="space-y-2 flex-1 mb-5">
        {service.benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2 text-sm text-muted/80">
            <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            {benefit}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-1.5 mb-4 pt-4 border-t border-border">
        {service.technologies.map((tag) => (
          <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-surface-2 border border-border text-muted/60">
            {tag}
          </span>
        ))}
      </div>
      <Link href={`/services/${service.id}`} className="inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all duration-200">
        Learn More
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  );
}

export function FeaturedServiceCard({ service }: { service: Service }) {
  const icon = serviceIcons[service.id];
  return (
    <div className="group relative bg-gradient-to-br from-accent/[0.08] via-accent/[0.04] to-transparent border-2 border-accent/25 rounded-2xl p-6 flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/15 hover:border-accent/50">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-4 right-4">
        <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-accent text-white shadow-md shadow-accent/30">AI</span>
      </div>
      <div className="relative flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
          {icon}
        </div>
        <h3 className="font-display font-bold text-text text-lg leading-snug">{service.title}</h3>
      </div>
      <div className="relative w-8 h-0.5 bg-accent/60 rounded-full mb-4 group-hover:w-14 group-hover:bg-accent transition-all duration-300" />
      <p className="relative text-muted text-sm leading-relaxed mb-4">{service.tagline}</p>
      <ul className="relative space-y-2 flex-1 mb-5">
        {service.benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2 text-sm text-muted/80">
            <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            {benefit}
          </li>
        ))}
      </ul>
      <div className="relative flex flex-wrap gap-1.5 mb-4 pt-4 border-t border-accent/20">
        {service.technologies.map((tag) => (
          <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-accent/8 border border-accent/20 text-accent/70 group-hover:border-accent/40 group-hover:text-accent transition-colors duration-200">
            {tag}
          </span>
        ))}
      </div>
      <Link href={`/services/${service.id}`} className="relative inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all duration-200">
        Learn More
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  );
}
