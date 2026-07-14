import Link from "next/link";
import Image from "next/image";
import { developer } from "@/data/developer";
import ContactCTAButton from "@/components/ContactCTAButton";

const socialLinks = [
  {
    name: "GitHub",
    url: developer.social.github,
    color: "#181717",
    path: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
  },
  {
    name: "LinkedIn",
    url: developer.social.linkedin,
    color: "#0A66C2",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    name: "Twitter",
    url: developer.social.twitter,
    color: "#000000",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    name: "Facebook",
    url: developer.social.facebook,
    color: "#1877F2",
    path: "M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.92.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.325C24 .6 23.4 0 22.675 0z",
  },
];

const techStack = [
  {
    name: "React",
    tooltip: "UI components & SPAs",
    color: "#61DAFB",
    path: "M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.12.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.468zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.468a23.557 23.557 0 0 0-1.364-3.578l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.12c3.517.889 5.535 2.398 5.535 4.139s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 3.124l-.127.212-.253.02a23.406 23.406 0 0 0-3.832.572l-.414.082zm.145-3.048a24.497 24.497 0 0 1 3.086-.509 24.57 24.57 0 0 1 2.068-2.675c-2.011-2.005-3.901-2.674-4.78-2.164-.865.501-1.249 2.352-.374 5.348zM17.98 19.087l-.413-.083a23.4 23.4 0 0 0-3.878-.572l-.253-.019-.127-.212a23.533 23.533 0 0 0-2.421-3.124l-.34-.349.34-.349C13.56 11.805 15.924 10.8 17.476 10.8c.667 0 1.174.158 1.553.371 1.547.895 1.825 3.355.848 6.718l-.133.468-.14-.069zM13.59 17.449a24.149 24.149 0 0 1 3.086.508c.868-2.978.486-4.821-.398-5.34-.904-.517-2.848.046-5.08 2.168a24.486 24.486 0 0 1 2.392 2.664z",
  },
  {
    name: "Next.js",
    tooltip: "Full-stack React framework",
    color: "#000000",
    path: "M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.088.108 1.747c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z",
  },
  {
    name: ".NET",
    tooltip: "Backend APIs & business logic",
    color: "#512BD4",
    path: "M 0 0",
    svgContent: `<rect width="24" height="24" rx="4" fill="#512BD4"/><text x="2.5" y="17" font-family="Arial,sans-serif" font-weight="900" font-size="10.5" fill="white" letter-spacing="-0.5">.NET</text>`,
  },
  {
    name: "SQL Server",
    tooltip: "Relational DB for enterprise apps",
    color: "#CC2927",
    path: "M12 2C6.477 2 2 4.686 2 8v8c0 3.314 4.477 6 10 6s10-2.686 10-6V8c0-3.314-4.477-6-10-6zm0 2c4.418 0 8 1.79 8 4s-3.582 4-8 4-8-1.79-8-4 3.582-4 8-4zm0 14c-4.418 0-8-1.79-8-4v-2.268C5.667 13.21 8.668 14 12 14s6.333-.79 8-2.268V16c0 2.21-3.582 4-8 4zm0-4c-4.418 0-8-1.79-8-4v-2.268C5.667 9.21 8.668 10 12 10s6.333-.79 8-2.268V12c0 2.21-3.582 4-8 4z",
  },
  {
    name: "PostgreSQL",
    tooltip: "Open-source relational database",
    color: "#4169E1",
    path: "M17.128 0a10.134 10.134 0 0 0-2.755.403l-.063.02A10.922 10.922 0 0 0 12.6.258C11.422.258 10.016.552 9.158 1.153a.338.338 0 0 0 .064.036c-.005.003-.014.006-.019.009a2.558 2.558 0 0 0-.15.107.338.338 0 0 0-.023.02 2.755 2.755 0 0 0-.554.665 3.28 3.28 0 0 0-.385.873c-.01.034-.018.07-.026.107a10.011 10.011 0 0 0-.214 1.173c-.012.114-.022.228-.03.342L7.8 4.3l-.004.06-.017.382-.007.213c-.002.04-.002.08-.003.12-.007.476-.009.954.013 1.43.036.815.15 1.675.665 2.342.13.17.288.319.46.446C8.432 10.4 7.87 11.5 7.5 12.5c-.609 1.694-.5 3.5-.5 4.5 0 2.5 1 4 2 4 .781 0 1.338-.656 1.554-1.562.214-.894.261-1.87.25-2.657a6.79 6.79 0 0 1 1.49.845c.895.683 1.378 1.525 1.377 2.567 0 .344.148.65.382.869.233.217.543.338.868.338.325 0 .635-.121.868-.338a1.19 1.19 0 0 0 .382-.869c-.001-1.61-.843-3.01-2.054-3.942a7.562 7.562 0 0 0-2.67-1.27c.048-.6.14-1.128.28-1.546.22-.67.57-1.022 1.1-1.022.55 0 .978.243 1.343.715.372.481.651 1.172.883 2.012.23.839.406 1.793.601 2.822l.037.2c.196 1.029.421 2.123.815 3.006.202.452.444.843.752 1.132.308.289.688.476 1.118.476.76 0 1.46-.514 1.955-1.37.495-.857.789-2.09.789-3.63 0-1.685-.34-2.97-.799-3.964a.338.338 0 0 0 .007-.009c.276-.306.402-.652.457-.981.055-.328.046-.644.035-.935-.01-.29-.023-.558.002-.8.026-.257.092-.504.262-.768.17-.264.327-.476.318-.697-.009-.22-.193-.42-.511-.515a5.32 5.32 0 0 0-.538-.123 2.558 2.558 0 0 0-.032-.005c.009-.058.016-.116.021-.173.037-.44-.04-.83-.144-1.156a2.755 2.755 0 0 0-.58-1.005 3.28 3.28 0 0 0-.97-.733 4.944 4.944 0 0 0-.36-.15 10.011 10.011 0 0 0-1.088-.32c-.112-.026-.224-.05-.337-.072z",
  },
  {
    name: "Tailwind CSS",
    tooltip: "Utility-first CSS framework",
    color: "#06B6D4",
    path: "M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zM6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z",
  },
  {
    name: "Git",
    tooltip: "Version control & branching",
    color: "#F05032",
    path: "M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.09-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187",
  },
  {
    name: "GitHub",
    tooltip: "Code hosting & collaboration",
    color: "#181717",
    path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  },
  {
    name: "REST API",
    tooltip: "API design & integration",
    color: "#6366F1",
    path: "M14.502 1.5a1 1 0 0 1 .972.757l2.826 10.964a1 1 0 0 1-.972 1.243H6.672a1 1 0 0 1-.972-1.243L8.526 2.257A1 1 0 0 1 9.498 1.5h5.004zM3 8.5a1 1 0 0 1 .707.293l3 3a1 1 0 0 1 0 1.414l-3 3A1 1 0 0 1 2 15.5v-6a1 1 0 0 1 1-1zm18 0a1 1 0 0 1 1 1v6a1 1 0 0 1-1.707.707l-3-3a1 1 0 0 1 0-1.414l3-3A1 1 0 0 1 21 8.5z",
  },
];

export default function HeroSection() {
  return (
    <section className="relative hero-animated-bg overflow-hidden flex items-start lg:items-center lg:mt-7 lg:min-h-[min(70h,900px)]">
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_40%,rgba(99,102,241,0.05),transparent)]" />
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-bg to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 pt-24 pb-14 sm:pt-28 sm:pb-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-12 lg:gap-10 items-center">

          {/* Left column */}
          <div>
            {/* Headline */}
            <h1 className="font-display font-bold tracking-tight leading-[1.05] text-[2.5rem] sm:text-[3.1rem] lg:text-[3.6rem] xl:text-[4rem] text-text mb-5">
              Custom Software Developer{" "}
              <span className="text-accent">for Growing Businesses</span>
            </h1>

            {/* Subheading */}
            <p className="text-muted leading-relaxed mb-8 text-base sm:text-lg lg:text-[1.1rem] xl:text-xl max-w-[54ch]">
              {developer.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-row flex-wrap items-center gap-3 mb-10">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-200 text-sm px-6 py-3 bg-accent hover:bg-[var(--color-accent-hover)] text-white shadow-lg shadow-accent/20"
              >
                View Projects
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <ContactCTAButton
                className="inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-200 text-sm px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-white hover:border-accent"
              >
                Hire Me
              </ContactCTAButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mb-8">
              {socialLinks.map((social) => (
                <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    style={
                      {
                        "--hover-bg": `${social.color}18`,
                        "--hover-border": `${social.color}60`,
                        "--hover-shadow": `0 4px 14px ${social.color}35`,
                      } as React.CSSProperties
                    }
                    className="
                      w-10 h-10 rounded-full flex items-center justify-center
                      bg-surface border border-border
                      transition-all duration-200
                      hover:scale-110
                      hover:bg-[var(--hover-bg)]
                      hover:border-[var(--hover-border)]
                      hover:shadow-[var(--hover-shadow)]
                    "
                  >
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" style={{ fill: social.color }} aria-hidden="true">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>

            {/* Tech Stack Strip */}
         <div>
  {/* <p className="text-xs font-medium text-muted uppercase tracking-widest mb-3">
    Tech Stack
  </p> */}

  <div className="flex flex-wrap gap-2">
    {techStack.map((tech) => {
      const isGitHub = tech.name === "GitHub";
      const Tag = isGitHub ? "a" : "div";

      return (
        <div key={tech.name} className="relative group">
          {/* Tooltip */}
          <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-text text-bg text-[11px] font-medium rounded-lg whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-10">
            {tech.tooltip}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-text" />
          </div>

          {/* Badge */}
          <Tag
            {...(isGitHub
              ? {
                  href: developer.social.github,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {})}
            style={
              {
                "--hover-bg": `${tech.color}18`,
                "--hover-border": `${tech.color}60`,
                "--hover-shadow": `0 4px 12px ${tech.color}30`,
              } as React.CSSProperties
            }
            className={`
              flex items-center gap-1.5 px-3 py-1.5
              bg-surface border border-border rounded-full
              transition-all duration-200
              hover:scale-105
              hover:bg-[var(--hover-bg)]
              hover:border-[var(--hover-border)]
              hover:shadow-[var(--hover-shadow)]
              ${isGitHub ? "cursor-pointer" : "cursor-default"}
            `}
          >
            {"svgContent" in tech ? (
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 shrink-0"
                aria-hidden="true"
                dangerouslySetInnerHTML={{ __html: tech.svgContent as string }}
              />
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 shrink-0"
                style={{ fill: tech.color }}
                aria-hidden="true"
              >
                <path d={tech.path} />
              </svg>
            )}

            <span className="text-xs font-medium text-text whitespace-nowrap">
              {tech.name}
            </span>
          </Tag>
        </div>
      );
    })}
  </div>
</div>
         
         
          </div>

          {/* Right column — profile image */}
          <div className="hidden lg:flex items-center justify-end">
            <div className="relative w-full overflow-hidden">
              <Image
                src="/kamran-custom-software-developer.png"
                alt="Kamran — Custom Software Developer"
                width={420}
                height={500}
                className="object-cover object-top w-full h-auto"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
