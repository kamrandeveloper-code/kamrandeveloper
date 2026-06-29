import Link from "next/link";
import { developer } from "@/data/developer";
import Image from "next/image";

const serviceLinks = [
  { label: "Custom Business Software", href: "/services/custom-business-software" },
  { label: "Management Systems", href: "/services/management-systems" },
  { label: "Admin Dashboards", href: "/services/admin-dashboards" },
  { label: "API Integrations", href: "/services/api-integrations" },
  { label: "AI-Powered Features", href: "/services/ai-powered-features" },
  { label: "E-Commerce Solutions", href: "/services/ecommerce-solutions" },
];

const pageLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const techStack = [
  {
    name: "React",
    color: "#61DAFB",
    path: "M14.23 12.004a2.236 2.236 0 01-2.235 2.236 2.236 2.236 0 01-2.236-2.236 2.236 2.236 0 012.236-2.236 2.236 2.236 0 012.235 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 00-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 00-3.107-.534A23.892 23.892 0 0012 5.476a23.465 23.465 0 00-1.752-1.23c.41-.091.868-.137 1.35-.137.52 0 1.063.06 1.575.17.509.11.989.275 1.398.47zm-7.44 1.52c-.297.183-.488.537-.488 1.036 0 .598.248 1.31.685 2.063A23.5 23.5 0 017.2 8.52c-.283-.818-.456-1.57-.456-2.2 0-.55.112-.97.337-1.24zm-.793 4.953c.34.088.69.167 1.046.237a23.27 23.27 0 00-.61 1.886c-.34-.18-.661-.37-.961-.567-.32-.21-.608-.43-.86-.658.427-.313.882-.603 1.385-.898zm7.93 0c.5.294.956.583 1.385.898a7.59 7.59 0 01-.86.658c-.3.197-.62.387-.961.567a22.8 22.8 0 00-.61-1.886c.356-.07.706-.15 1.046-.237zm-4.064.736c.585.023 1.178.05 1.768.05.59 0 1.183-.027 1.766-.05a21.33 21.33 0 01-.895 2.01 21.33 21.33 0 01-.87-.017c-.287-.009-.574-.022-.86-.033a21.33 21.33 0 01-.91-1.96zm-2.088 4.82c.177.084.37.127.576.127.82 0 1.808-.562 2.836-1.495a23.5 23.5 0 001.752 1.23 4.94 4.94 0 01-1.35.137c-.52 0-1.063-.06-1.574-.17a6.37 6.37 0 01-1.398-.47 3.27 3.27 0 01-.557-.128 3.37 3.37 0 01-.285-.231zm5.386 1.495c1.028.933 2.016 1.495 2.836 1.495.206 0 .4-.043.576-.127a3.37 3.37 0 00-.285.23 3.27 3.27 0 01-.558.129c-.51.11-.989.27-1.398.47-.509.11-1.055.17-1.574.17-.52 0-1.063-.06-1.574-.17a6.37 6.37 0 01-1.398-.47 4.94 4.94 0 011.752-1.23c.345.167.693.326 1.047.477zm2.548-5.586c.503.294.958.584 1.385.897a7.59 7.59 0 01-.86.657c-.3.197-.62.387-.961.568a22.8 22.8 0 00-.61-1.886c.356-.07.706-.15 1.046-.236zm-9.017 0c.34.087.69.167 1.046.236a23.27 23.27 0 00-.61 1.886 17.63 17.63 0 01-.961-.568 7.59 7.59 0 01-.86-.657c.427-.313.882-.603 1.385-.897zm4.062-6.58c.285.176.575.365.867.566a23.5 23.5 0 00-1.75 1.23 23.5 23.5 0 00-1.752-1.23 21.8 21.8 0 01.867-.566c.275-.16.557-.306.835-.437.279.131.561.277.933.437z",
  },
  {
    name: "Next.js",
    color: "#ffffff",
    path: "M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 01-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 00-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 00-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 01-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 01-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 01.174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 004.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 002.466-2.163 11.944 11.944 0 002.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 00-2.499-.523A33.119 33.119 0 0011.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 01.237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 01.233-.296c.096-.05.13-.054.5-.054z",
  },
  {
    name: "Tailwind",
    color: "#06B6D4",
    path: "M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8 c0.913,0.228,1.565,0.89,2.288,1.624c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8 c-0.913-0.228-1.565-0.89-2.288-1.624C10.337,13.382,8.976,12,6.001,12z",
  },
  {
    name: "PostgreSQL",
    color: "#4169E1",
    path: "M17.128 0a10.134 10.134 0 00-2.755.403l-.063.02C13.088.148 11.967.04 10.66 0h-.015c-1.32.04-2.366.153-3.253.48C4.725 1.388 3.02 3.27 2.88 7.646c-.03 1.002-.07 2.055-.043 2.945l.01.323c.064 2.45.127 3.83.442 4.848.324 1.047.78 1.7 1.522 2.016.73.308 1.79.438 3.29.406.42-.01.81-.04 1.15-.11a4.12 4.12 0 001.248-.494l.048-.03.024.014a4.12 4.12 0 001.25.494c.34.07.73.1 1.15.11 1.5.032 2.56-.098 3.29-.406.74-.316 1.2-.97 1.52-2.016.316-1.018.38-2.398.44-4.848l.01-.323c.028-.89-.01-1.943-.04-2.945-.14-4.377-1.847-6.258-4.514-7.167A7.755 7.755 0 0017.128 0zm.22 1.574c.74.235 1.384.558 1.908 1.04.962.88 1.49 2.208 1.628 4.353a57.19 57.19 0 01.04 2.85l-.006.242c-.064 2.487-.13 3.73-.39 4.608-.217.7-.49 1.03-.87 1.192-.524.223-1.4.34-2.717.31a9.45 9.45 0 01-.998-.093l1.005-1.555a.787.787 0 00-.66-1.21l-.04.002c.29-.85.43-1.878.443-2.95l.002-.183c0-1.064-.15-2.117-.5-3.01.014-.036.03-.072.04-.11.3-1.118.267-2.125.036-2.943a5.04 5.04 0 00-.31-.797zm-14.673.51l.167.013a5.04 5.04 0 00-.11.248c-.21.573-.326 1.373-.253 2.37.053.72.222 1.54.53 2.432a8.074 8.074 0 00-.467 2.855l.002.183c.014 1.072.153 2.1.443 2.95l-.04-.002a.787.787 0 00-.66 1.21l1.005 1.555a9.45 9.45 0 01-.998.094c-1.317.03-2.193-.088-2.717-.31-.38-.163-.653-.493-.87-1.193-.26-.878-.326-2.12-.39-4.608L.91 9.84a57.19 57.19 0 01.04-2.85c.138-2.145.666-3.474 1.628-4.352.49-.447 1.1-.757 1.797-.99zm6.9.14c1.47.045 2.558.17 3.28.455a.787.787 0 00.138.05c2.117.673 3.296 2.155 3.42 6.036.03.96.065 1.985.04 2.82l-.01.318c-.065 2.44-.13 3.65-.386 4.48-.21.683-.453.95-.763 1.08-.558.237-1.392.34-2.625.32-.406-.01-.733-.042-1.002-.097a3.16 3.16 0 01-.747-.242c.34-.558.713-1.167 1.082-1.77l.006-.01c.26-.43.516-.852.752-1.254.13-.22.178-.435.168-.635v-.002c-.01-.2-.072-.38-.178-.537a.787.787 0 00-.46-.322l-.09-.018-.11-.006c.24-.828.355-1.8.362-2.8l.002-.183c0-1.09-.163-2.184-.56-3.083a5.928 5.928 0 00-.09-.192c.204-.638.31-1.315.31-1.972 0-.504-.062-.994-.196-1.434a.787.787 0 00-.064-.17zm-1.498.2c-.067.342-.1.706-.1 1.086 0 .63.1 1.295.293 1.912a5.928 5.928 0 00-.09.192c-.397.9-.56 1.994-.56 3.083l.002.183c.007 1 .122 1.972.362 2.8l-.11.006-.09.018a.787.787 0 00-.46.322 1.194 1.194 0 00-.178.537v.002c-.01.2.038.415.168.635.236.402.493.823.752 1.253l.006.01c.37.604.743 1.213 1.082 1.77a3.16 3.16 0 01-.747.243c-.27.055-.596.088-1.002.097-1.233.02-2.067-.083-2.625-.32-.31-.13-.553-.397-.763-1.08-.256-.83-.32-2.04-.386-4.48l-.01-.318a57.58 57.58 0 01.04-2.82c.124-3.88 1.303-5.363 3.42-6.036a.787.787 0 00.138-.05c.376-.152.83-.263 1.356-.345z",
  },
  {
    name: "SQL Server",
    color: "#CC2927",
    path: "M12 2C6.48 2 2 4.24 2 7v10c0 2.76 4.48 5 10 5s10-2.24 10-5V7c0-2.76-4.48-5-10-5zm0 2c4.42 0 8 1.79 8 3s-3.58 3-8 3-8-1.79-8-3 3.58-3 8-3zm0 14c-4.42 0-8-1.79-8-3v-2.12C5.45 14.18 8.54 15 12 15s6.55-.82 8-2.12V15c0 1.21-3.58 3-8 3zm0-4c-4.42 0-8-1.79-8-3V9.88C5.45 11.18 8.54 12 12 12s6.55-.82 8-2.12V11c0 1.21-3.58 3-8 3z",
  },
  {
    name: "Git",
    color: "#F05032",
    path: "M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.606-.404-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187",
  },
  {
    name: "GitHub",
    color: "#e6edf3",
    path: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
  },
  {
    name: "REST API",
    color: "#6366F1",
    svgContent: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#6366F1">
        <path d="M4 6h16M4 12h10M4 18h7" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
        <circle cx="19" cy="17" r="3" fill="none" stroke="#6366F1" strokeWidth="2" />
        <path d="M21.5 19.5l1.5 1.5" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* ── Column 1: Logo & Info (unchanged) ── */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Kamran Logo"
                width={180}
                height={100}
                className="w-[120px] lg:w-[180px] h-auto"
                priority
              />
            </Link>
            <p className="text-text font-semibold">Custom Software Developer</p>
            <a
              href={`mailto:${developer.email}`}
              className="mt-3 flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {developer.email}
            </a>
            <a
              href={`tel:${developer.phone}`}
              className="mt-2 flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a2 2 0 011.9 1.37l1.1 3.3a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.36 6.36l1.27-1.27a2 2 0 012.11-.45l3.3 1.1A2 2 0 0121 18.72V22a2 2 0 01-2 2h-1C9.16 24 0 14.84 0 3V2a2 2 0 012-2h1z" />
              </svg>
              {developer.phone}
            </a>
            <p className="text-muted text-sm leading-relaxed max-w-xs mt-4">
              Building management systems, business software, and API integrations for growing businesses.
            </p>
          </div>

          {/* ── Column 2: Services + Pages ── */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-text text-xs mb-4 uppercase tracking-widest">Services</h4>
              <div className="flex flex-col gap-2.5">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-muted hover:text-accent text-sm transition-colors duration-200 leading-snug"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-text text-xs mb-4 uppercase tracking-widest">Pages</h4>
              <div className="flex flex-col gap-2.5">
                {pageLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-muted hover:text-accent text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ── Column 3: Connect + Tech Stack ── */}
          <div>
            <h4 className="font-semibold text-text text-xs mb-4 uppercase tracking-widest">Connect</h4>
            <div className="flex flex-col gap-3 mb-8">
              <a
                href={developer.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-muted hover:text-accent transition-colors group"
              >
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
              <a
                href={developer.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-muted hover:text-accent transition-colors group"
              >
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href={developer.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-muted hover:text-accent transition-colors group"
              >
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Twitter / X
              </a>
              <a
                href={`mailto:${developer.email}`}
                className="flex items-center gap-2.5 text-sm text-muted hover:text-accent transition-colors group"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email me
              </a>
            </div>

            {/* Tech stack */}
            <div>
              <h4 className="font-semibold text-text text-xs mb-3 uppercase tracking-widest">Tech Stack</h4>
              <div className="flex flex-wrap gap-2.5">
                {/* .NET — special case */}
                <span
                  title=".NET"
                  className="w-7 h-7 rounded-lg flex items-center justify-center bg-bg border border-border"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
                    <rect width="24" height="24" rx="4" fill="#512BD4" />
                    <text x="2" y="17" fontSize="10" fontWeight="bold" fill="white" fontFamily="sans-serif">.NET</text>
                  </svg>
                </span>
                {techStack.map((tech) =>
                  tech.svgContent ? (
                    <span key={tech.name} title={tech.name} className="w-7 h-7 rounded-lg flex items-center justify-center bg-bg border border-border">
                      {tech.svgContent}
                    </span>
                  ) : (
                    <span key={tech.name} title={tech.name} className="w-7 h-7 rounded-lg flex items-center justify-center bg-bg border border-border">
                      <svg viewBox="0 0 24 24" className="w-4 h-4" fill={tech.color}>
                        <path d={tech.path} />
                      </svg>
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted text-sm">
            &copy; {new Date().getFullYear()} {developer.name}. All rights reserved.
          </p>
          <Link href="/contact" className="text-sm text-accent hover:underline font-medium">
            Available for new projects →
          </Link>
        </div>
      </div>
    </footer>
  );
}
