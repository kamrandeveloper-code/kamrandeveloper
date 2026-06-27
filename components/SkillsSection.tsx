// // ─────────────────────────────────────────────────────────────────────────────
// // SkillsSection — inspired by the three reference layouts
// // Layout: layered "LAYER 01/02" rows (image 3) + bento mosaic bottom (image 1)
// // Extras: mastery bars (image 2) + stat callout card
// // Color: inherits site dark-navy palette (bg, surface, border, accent, text, muted)
// // ─────────────────────────────────────────────────────────────────────────────

// const layers = [
//   {
//     label: "Layer 01",
//     category: "Backend",
//     description:
//       "Building robust, high-throughput APIs and business logic with .NET Core and ASP.NET — architected for real POS, ERP, and SaaS workloads.",
//     mastery: 92,
//     icon: (
//       <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
//         <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.535 4.507h1.07v6.977l4.933-6.977h1.07v9h-1.07V6.53l-4.933 6.977h-1.07v-9zm-6.43 3.851a.535.535 0 1 1 0 1.07.535.535 0 0 1 0-1.07zm13.932 0a.535.535 0 1 1 0 1.07.535.535 0 0 1 0-1.07z" />
//       </svg>
//     ),
//     skills: [
//       {
//         name: ".NET MVC",
//         tags: ["MVC", "RAZOR"],
//         icon: (
//           <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
//             <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.535 4.507h1.07v6.977l4.933-6.977h1.07v9h-1.07V6.53l-4.933 6.977h-1.07v-9zm-6.43 3.851a.535.535 0 1 1 0 1.07.535.535 0 0 1 0-1.07zm13.932 0a.535.535 0 1 1 0 1.07.535.535 0 0 1 0-1.07z" />
//           </svg>
//         ),
//       },
//       {
//         name: "Web API",
//         tags: ["REST", "JWT"],
//         icon: (
//           <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
//             <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0zM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0zM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003z" />
//           </svg>
//         ),
//       },
//       {
//         name: "ASP.NET Core",
//         tags: ["DI", "MIDDLEWARE"],
//         icon: (
//           <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
//             <path d="M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.698v1.24h-3.275v2.146h3.037v1.234h-3.037v2.954h3.398zm-6.708 0H8.882l-3.784-8.805h1.538l2.703 6.504.923 2.432.923-2.432 2.703-6.504h1.538z" />
//           </svg>
//         ),
//       },
//       {
//         name: "SQL Server",
//         tags: ["T-SQL", "SSMS"],
//         icon: (
//           <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
//             <path d="M0 5.967v12.066c0 .662.38 1.247.905 1.558L11.47 24V12.077L0 5.967zm24 0L12.53 12.077V24l10.565-4.41c.524-.31.905-.896.905-1.558V5.967zm-12-4.2L1.47 7.522l10.53 4.298 10.53-4.298L12 1.768z" />
//           </svg>
//         ),
//       },
//     ],
//   },
//   {
//     label: "Layer 02",
//     category: "Frontend",
//     description:
//       "Crafting fast, accessible UIs with Next.js and React. Typed end-to-end with TypeScript and styled with Tailwind — shipped with real users in mind.",
//     mastery: 88,
//     icon: (
//       <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
//         <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C23.573 3.53 20.368.536 16.15.07c-.278-.033-1.32-.06-1.46-.063zm2.879 7.229a.47.47 0 0 1 .237.277c.02.063.024 1.365.02 4.304l-.007 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .232-.296c.096-.05.133-.056.485-.056.34 0 .393.007.5.05z" />
//         </svg>
//     ),
//     skills: [
//       {
//         name: "Next.js",
//         tags: ["SSR", "APP DIR"],
//         icon: (
//           <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
//             <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C23.573 3.53 20.368.536 16.15.07c-.278-.033-1.32-.06-1.46-.063zm2.879 7.229a.47.47 0 0 1 .237.277c.02.063.024 1.365.02 4.304l-.007 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .232-.296c.096-.05.133-.056.485-.056.34 0 .393.007.5.05z" />
//           </svg>
//         ),
//       },
//       {
//         name: "React",
//         tags: ["HOOKS", "CONTEXT"],
//         icon: (
//           <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
//             <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.098-.278zm-.005 1.09c.278 0 .49.057.69.166 1.032.595 1.356 2.64.75 5.32-.077.32-.166.643-.261.971a21.218 21.218 0 0 0-3.455-.52 21.98 21.98 0 0 0-2.28-2.7c1.52-1.524 3.026-2.235 4.556-2.235zm-9.45.04c1.526 0 3.033.712 4.554 2.235a21.77 21.77 0 0 0-2.278 2.696 21.383 21.383 0 0 0-3.457.524c-.1-.33-.188-.653-.265-.973-.605-2.68-.28-4.724.75-5.318.198-.11.41-.164.696-.164zm4.725 5.317c.552 0 1.088.028 1.608.072.297.538.576 1.095.832 1.668-.256.574-.535 1.13-.832 1.668-.52.044-1.056.072-1.608.072-.552 0-1.088-.028-1.608-.072a21.263 21.263 0 0 1-.832-1.668c.256-.573.535-1.13.832-1.668.52-.044 1.056-.072 1.608-.072zm3.14.57c.51.175 1.003.368 1.47.578.466.21.914.44 1.338.687a20.36 20.36 0 0 1-1.016 2.197 21.286 21.286 0 0 0-1.792-3.462zm-6.28 0a21.286 21.286 0 0 0-1.792 3.462 20.36 20.36 0 0 1-1.016-2.197c.424-.247.872-.478 1.338-.687.467-.21.96-.403 1.47-.578z" />
//           </svg>
//         ),
//       },
//       {
//         name: "TypeScript",
//         tags: ["STRICT", "GENERICS"],
//         icon: (
//           <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
//             <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
//           </svg>
//         ),
//       },
//       {
//         name: "Tailwind CSS",
//         tags: ["UTILITY", "RESPONSIVE"],
//         icon: (
//           <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
//             <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
//           </svg>
//         ),
//       },
//     ],
//   },
// ];

// // Small tool cards for the bottom bento row
// const tools = [
//   {
//     name: "Git",
//     desc: "Version control & branching strategies across every project.",
//     icon: (
//       <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
//         <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.608-.406-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
//       </svg>
//     ),
//   },
//   {
//     name: "PostgreSQL",
//     desc: "Relational data modelling, indexing, and query optimisation.",
//     icon: (
//       <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
//         <path d="M17.128 0a10.134 10.134 0 0 0-2.755.403l-.063.02A10.922 10.922 0 0 0 12.6.258C11.422.258 10.32.518 9.366.986A10.417 10.417 0 0 0 7.5.626c-1.813 0-3.354.589-4.393 1.67C1.344 4.099.686 6.834 1.2 10.033c.128.79.378 1.591.738 2.359.86 1.828 2.169 3.04 3.469 3.158.198.017.393.026.58.026h.014c.612 0 1.154-.139 1.621-.413l.053-.032a3.947 3.947 0 0 0 .66.5l.023.014c.554.33 1.154.499 1.788.499.504 0 .993-.124 1.441-.358.313.176.66.284 1.027.316l.016.001c.378.034.758-.018 1.12-.15l.033-.013c.23.08.468.142.72.18.175.028.35.042.524.042.688 0 1.368-.187 1.984-.548a4.7 4.7 0 0 0 1.477-1.432c.67-.998 1.037-2.222 1.08-3.612.02-.608.023-1.21.022-1.742 0-.622.071-1.09.152-1.476l.006-.03c.148-.661.354-1.022.467-1.193.13-.192.193-.413.183-.64a.952.952 0 0 0-.364-.707c-.273-.208-.73-.342-1.427-.342a5.66 5.66 0 0 0-.662.042z" />
//       </svg>
//     ),
//   },
//   {
//     name: "REST APIs",
//     desc: "Designing clean, versioned APIs consumed by web and mobile clients.",
//     icon: (
//       <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
//         <path d="M16.612 7.372a4.124 4.124 0 0 0-5.825 0L6.974 11.18a4.127 4.127 0 0 0 0 5.825 4.127 4.127 0 0 0 5.825 0l1.916-1.919a.75.75 0 1 0-1.061-1.06l-1.916 1.918a2.625 2.625 0 0 1-3.713-3.713l3.813-3.807a2.627 2.627 0 0 1 3.713 3.713.75.75 0 1 0 1.061 1.06 4.124 4.124 0 0 0 0-5.825z" />
//         <path d="M7.388 16.628a4.124 4.124 0 0 0 5.825 0l3.813-3.807a4.127 4.127 0 0 0 0-5.825 4.127 4.127 0 0 0-5.825 0L9.285 8.912a.75.75 0 1 0 1.061 1.06l1.916-1.918a2.625 2.625 0 0 1 3.713 3.713l-3.813 3.807a2.627 2.627 0 0 1-3.713-3.713.75.75 0 1 0-1.061-1.06 4.124 4.124 0 0 0 0 5.827z" />
//       </svg>
//     ),
//   },
//   {
//     name: "Visual Studio",
//     desc: "Primary IDE for all .NET development, debugging, and profiling.",
//     icon: (
//       <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
//         <path d="M17.583.063L9.775 9.094 4.36 4.875 0 7.037v9.927l4.36 2.162 5.415-4.219 7.808 9.031L24 21.693V2.307zm0 5.731v12.412l-5.474-6.206zM1.84 14.637V9.363L4.36 8.119v7.762z" />
//       </svg>
//     ),
//   },
// ];

// export default function SkillsSection() {
//   return (
//     <section className="py-28 bg-bg relative overflow-hidden">
//       {/* Background grid — matches hero */}
//       <div className="absolute inset-0 grid-pattern opacity-30" />
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

//         {/* ── Header ── */}
//         <div className="mb-20">
//           <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
//             Core Competencies
//           </p>
//           <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
//             <h2 className="font-display font-bold text-4xl sm:text-5xl text-text leading-tight max-w-lg">
//               Technical{" "}
//               <span className="text-accent">Arsenal</span>
//             </h2>
//             <p className="text-muted text-base max-w-sm leading-relaxed lg:text-right">
//               A focused toolkit forged from years of shipping real business
//               software — POS, ERP, and modern web platforms.
//             </p>
//           </div>
//         </div>

//         {/* ── Layer rows (Backend + Frontend) ── */}
//         <div className="flex flex-col gap-6 mb-6">
//           {layers.map((layer, li) => (
//             <div
//               key={layer.label}
//               className="grid grid-cols-1 lg:grid-cols-[220px_1fr] rounded-2xl border border-border/50 bg-surface overflow-hidden"
//             >
//               {/* Left info panel */}
//               <div className="flex flex-col justify-between p-7 border-b lg:border-b-0 lg:border-r border-border/40">
//                 <div>
//                   <div className="flex items-center justify-between mb-5">
//                     <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted/40 font-mono">
//                       {layer.label}
//                     </span>
//                     <span className="text-accent/60">{layer.icon}</span>
//                   </div>
//                   <h3 className="font-display font-bold text-xl text-text mb-3">
//                     {layer.category}
//                   </h3>
//                   <p className="text-muted text-sm leading-relaxed">
//                     {layer.description}
//                   </p>
//                 </div>

//                 {/* Mastery bar */}
//                 <div className="mt-8">
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="text-[10px] font-semibold tracking-widest uppercase text-muted/50">
//                       Mastery
//                     </span>
//                     <span className="text-xs font-bold text-accent font-mono">
//                       {layer.mastery}%
//                     </span>
//                   </div>
//                   <div className="h-1 w-full rounded-full bg-border/60 overflow-hidden">
//                     <div
//                       className="h-full rounded-full bg-accent"
//                       style={{ width: `${layer.mastery}%` }}
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Right skill cards */}
//               <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y divide-border/30">
//                 {layer.skills.map((skill) => (
//                   <div
//                     key={skill.name}
//                     className="group flex flex-col p-5 hover:bg-bg/40 transition-colors duration-200 relative overflow-hidden"
//                   >
//                     {/* Hover accent line */}
//                     <div className="absolute top-0 left-0 right-0 h-px bg-accent/0 group-hover:bg-accent/40 transition-colors duration-300" />

//                     <div className="text-accent/50 group-hover:text-accent transition-colors duration-200 mb-4">
//                       {skill.icon}
//                     </div>
//                     <p className="font-display font-bold text-sm text-text mb-3 group-hover:text-accent transition-colors duration-200">
//                       {skill.name}
//                     </p>
//                     <div className="flex flex-wrap gap-1.5 mt-auto">
//                       {skill.tags.map((tag) => (
//                         <span
//                           key={tag}
//                           className="text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded bg-bg border border-border/60 text-muted/50"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ── Bottom bento: tools + stat card ── */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

//           {/* Tools grid — 2×2 */}
//           <div className="lg:col-span-2 grid grid-cols-2 gap-px bg-border/40 rounded-2xl border border-border/40 overflow-hidden">
//             {tools.map((tool) => (
//               <div
//                 key={tool.name}
//                 className="group bg-surface flex flex-col gap-3 p-6 hover:bg-surface/70 transition-colors duration-200 relative"
//               >
//                 <div className="absolute top-0 left-0 right-0 h-px bg-transparent group-hover:bg-accent/30 transition-colors duration-300" />
//                 <div className="text-accent/50 group-hover:text-accent transition-colors duration-200">
//                   {tool.icon}
//                 </div>
//                 <p className="font-display font-bold text-sm text-text group-hover:text-accent transition-colors duration-200">
//                   {tool.name}
//                 </p>
//                 <p className="text-muted/60 text-xs leading-relaxed">
//                   {tool.desc}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Stat callout card */}
//           <div className="rounded-2xl border border-border/40 bg-surface flex flex-col justify-between p-7 relative overflow-hidden">
//             {/* Decorative glow */}
//             <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/5 rounded-full blur-2xl pointer-events-none" />

//             <div className="relative">
//               <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted/40 mb-6 font-mono">
//                 By the numbers
//               </p>
//               <div className="flex flex-col gap-6">
//                 {[
//                   { value: "5+", label: "Years Shipping" },
//                   { value: "20+", label: "Projects Live" },
//                   { value: "2", label: "Core Stacks" },
//                 ].map((s) => (
//                   <div key={s.label} className="flex items-baseline gap-3">
//                     <span className="font-display font-bold text-3xl text-accent leading-none">
//                       {s.value}
//                     </span>
//                     <span className="text-xs font-semibold tracking-widest uppercase text-muted/50">
//                       {s.label}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Bottom rule */}
//             <div className="relative mt-8 pt-6 border-t border-border/40">
//               <p className="text-[11px] text-muted/40 leading-relaxed">
//                 Every project ships with clean architecture, typed APIs, and real users in mind.
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// SkillsSection.jsx — Full redesign with rich skill cards
// SkillsSection.jsx — Full redesign with rich skill cards

const layers = [
  {
    label: "Layer 01",
    category: "Backend",
    description:
      "Building robust, high-throughput APIs and business logic with .NET Core and ASP.NET — architected for real POS, ERP, and SaaS workloads.",
    mastery: 92,
    accentColor: "#6366F1",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.535 4.507h1.07v6.977l4.933-6.977h1.07v9h-1.07V6.53l-4.933 6.977h-1.07v-9zm-6.43 3.851a.535.535 0 1 1 0 1.07.535.535 0 0 1 0-1.07zm13.932 0a.535.535 0 1 1 0 1.07.535.535 0 0 1 0-1.07z" />
      </svg>
    ),
    skills: [
      {
        name: ".NET MVC",
        summary: "Server-side rendering with Razor views and the MVC pattern for structured, maintainable web apps.",
        tags: ["MVC", "Razor", "C#"],
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.535 4.507h1.07v6.977l4.933-6.977h1.07v9h-1.07V6.53l-4.933 6.977h-1.07v-9zm-6.43 3.851a.535.535 0 1 1 0 1.07.535.535 0 0 1 0-1.07zm13.932 0a.535.535 0 1 1 0 1.07.535.535 0 0 1 0-1.07z" />
          </svg>
        ),
      },
      {
        name: "Web API",
        summary: "RESTful endpoints secured with JWT, versioned routes, and clean controller separation.",
        tags: ["REST", "JWT", "Swagger"],
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
            <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0zM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0zM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003z" />
          </svg>
        ),
      },
      {
        name: "ASP.NET Core",
        summary: "Dependency injection, middleware pipelines, and modular app architecture for scalable services.",
        tags: ["DI", "Middleware", "Filters"],
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
            <path d="M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.698v1.24h-3.275v2.146h3.037v1.234h-3.037v2.954h3.398zm-6.708 0H8.882l-3.784-8.805h1.538l2.703 6.504.923 2.432.923-2.432 2.703-6.504h1.538z" />
          </svg>
        ),
      },
      {
        name: "SQL Server",
        summary: "Relational schema design, stored procedures, indexing strategies, and SSMS-driven query tuning.",
        tags: ["T-SQL", "SSMS", "EF Core"],
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
            <path d="M0 5.967v12.066c0 .662.38 1.247.905 1.558L11.47 24V12.077L0 5.967zm24 0L12.53 12.077V24l10.565-4.41c.524-.31.905-.896.905-1.558V5.967zm-12-4.2L1.47 7.522l10.53 4.298 10.53-4.298L12 1.768z" />
          </svg>
        ),
      },
    ],
  },
  {
    label: "Layer 02",
    category: "Frontend",
    description:
      "Crafting fast, accessible UIs with Next.js and React. Typed end-to-end with TypeScript and styled with Tailwind — shipped with real users in mind.",
    mastery: 88,
    accentColor: "#0D9488",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C23.573 3.53 20.368.536 16.15.07c-.278-.033-1.32-.06-1.46-.063zm2.879 7.229a.47.47 0 0 1 .237.277c.02.063.024 1.365.02 4.304l-.007 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .232-.296c.096-.05.133-.056.485-.056.34 0 .393.007.5.05z" />
      </svg>
    ),
    skills: [
      {
        name: "Next.js",
        summary: "App Router, server components, SSR/SSG strategies, and API routes for full-stack React apps.",
        tags: ["SSR", "App Dir", "RSC"],
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
            <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C23.573 3.53 20.368.536 16.15.07c-.278-.033-1.32-.06-1.46-.063zm2.879 7.229a.47.47 0 0 1 .237.277c.02.063.024 1.365.02 4.304l-.007 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .232-.296c.096-.05.133-.056.485-.056.34 0 .393.007.5.05z" />
          </svg>
        ),
      },
      {
        name: "React",
        summary: "Hooks, context, custom state management, and component architecture for complex UIs.",
        tags: ["Hooks", "Context", "Zustand"],
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
            <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.098-.278zm-.005 1.09c.278 0 .49.057.69.166 1.032.595 1.356 2.64.75 5.32-.077.32-.166.643-.261.971a21.218 21.218 0 0 0-3.455-.52 21.98 21.98 0 0 0-2.28-2.7c1.52-1.524 3.026-2.235 4.556-2.235zm-9.45.04c1.526 0 3.033.712 4.554 2.235a21.77 21.77 0 0 0-2.278 2.696 21.383 21.383 0 0 0-3.457.524c-.1-.33-.188-.653-.265-.973-.605-2.68-.28-4.724.75-5.318.198-.11.41-.164.696-.164zm4.725 5.317c.552 0 1.088.028 1.608.072.297.538.576 1.095.832 1.668-.256.574-.535 1.13-.832 1.668-.52.044-1.056.072-1.608.072-.552 0-1.088-.028-1.608-.072a21.263 21.263 0 0 1-.832-1.668c.256-.573.535-1.13.832-1.668.52-.044 1.056-.072 1.608-.072z" />
          </svg>
        ),
      },
      {
        name: "TypeScript",
        summary: "Strict typing, generics, utility types, and interface-driven development across the full stack.",
        tags: ["Strict", "Generics", "Types"],
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
            <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
          </svg>
        ),
      },
      {
        name: "Tailwind CSS",
        summary: "Utility-first styling with custom design tokens, responsive layouts, and dark mode support.",
        tags: ["Utility", "Responsive", "Tokens"],
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
          </svg>
        ),
      },
    ],
  },
];

const tools = [
  {
    name: "Git",
    desc: "Version control & branching strategies across every project.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.608-.406-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    desc: "Relational data modelling, indexing, and query optimisation.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M17.128 0a10.134 10.134 0 0 0-2.755.403l-.063.02A10.922 10.922 0 0 0 12.6.258C11.422.258 10.32.518 9.366.986A10.417 10.417 0 0 0 7.5.626c-1.813 0-3.354.589-4.393 1.67C1.344 4.099.686 6.834 1.2 10.033c.128.79.378 1.591.738 2.359.86 1.828 2.169 3.04 3.469 3.158.198.017.393.026.58.026h.014c.612 0 1.154-.139 1.621-.413l.053-.032a3.947 3.947 0 0 0 .66.5l.023.014c.554.33 1.154.499 1.788.499.504 0 .993-.124 1.441-.358.313.176.66.284 1.027.316l.016.001c.378.034.758-.018 1.12-.15l.033-.013c.23.08.468.142.72.18.175.028.35.042.524.042.688 0 1.368-.187 1.984-.548a4.7 4.7 0 0 0 1.477-1.432c.67-.998 1.037-2.222 1.08-3.612.02-.608.023-1.21.022-1.742 0-.622.071-1.09.152-1.476l.006-.03c.148-.661.354-1.022.467-1.193.13-.192.193-.413.183-.64a.952.952 0 0 0-.364-.707c-.273-.208-.73-.342-1.427-.342a5.66 5.66 0 0 0-.662.042z" />
      </svg>
    ),
  },
  {
    name: "REST APIs",
    desc: "Designing clean, versioned APIs consumed by web and mobile clients.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M16.612 7.372a4.124 4.124 0 0 0-5.825 0L6.974 11.18a4.127 4.127 0 0 0 0 5.825 4.127 4.127 0 0 0 5.825 0l1.916-1.919a.75.75 0 1 0-1.061-1.06l-1.916 1.918a2.625 2.625 0 0 1-3.713-3.713l3.813-3.807a2.627 2.627 0 0 1 3.713 3.713.75.75 0 1 0 1.061 1.06 4.124 4.124 0 0 0 0-5.825z" />
        <path d="M7.388 16.628a4.124 4.124 0 0 0 5.825 0l3.813-3.807a4.127 4.127 0 0 0 0-5.825 4.127 4.127 0 0 0-5.825 0L9.285 8.912a.75.75 0 1 0 1.061 1.06l1.916-1.918a2.625 2.625 0 0 1 3.713 3.713l-3.813 3.807a2.627 2.627 0 0 1-3.713-3.713.75.75 0 1 0-1.061-1.06 4.124 4.124 0 0 0 0 5.827z" />
      </svg>
    ),
  },
  {
    name: "Visual Studio",
    desc: "Primary IDE for all .NET development, debugging, and profiling.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M17.583.063L9.775 9.094 4.36 4.875 0 7.037v9.927l4.36 2.162 5.415-4.219 7.808 9.031L24 21.693V2.307zm0 5.731v12.412l-5.474-6.206zM1.84 14.637V9.363L4.36 8.119v7.762z" />
      </svg>
    ),
  },
];

export default function SkillsSection() {
  return (
    <section className=" bg-bg relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* ── Header ── */}
        <div className="mb-12">
          <p className="text-4xl font-semibold tracking-[0.2em] uppercase text-accent ">
            Skills & Expertise
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            {/* <h2 className="font-display font-bold text-4xl sm:text-5xl text-text leading-tight max-w-lg">
              What I <span className="text-accent">Build With</span>
            </h2> */}
            {/* <p className="text-muted text-base max-w-sm leading-relaxed lg:text-right">
              I work across the full stack — .NET and SQL Server on the backend,
              Next.js and React on the frontend. Five years of shipping software
              that real businesses rely on.
            </p> */}
          </div>
        </div>

        {/* ── Layer rows ── */}
        <div className="flex flex-col gap-6 mb-6">
          {layers.map((layer) => (
            <div
              key={layer.label}
              className="rounded-2xl border border-border/50 bg-surface overflow-hidden"
            >
              {/* Top strip — label + category title */}
              <div className="flex items-center gap-4 px-7 pt-6 pb-0">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted/40 font-mono border border-border/60 rounded px-2 py-0.5">
                  {layer.label}
                </span>
                <div className="flex-1 h-px bg-border/40" />
                <span className="text-accent/50">{layer.icon}</span>
              </div>

              {/* Main content: info panel left + skill cards right */}
              <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr]">

                {/* Left info panel */}
                <div className="flex flex-col p-7 border-b lg:border-b-0 lg:border-r border-border/40">
                  <h3 className="font-display font-bold text-2xl text-text mb-3">
                    {layer.category}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed flex-1">
                    {layer.description}
                  </p>

                  {/* Mastery bar */}
                  <div className="mt-8 pt-6 border-t border-border/40">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-semibold tracking-widest uppercase text-muted/50">
                        Mastery
                      </span>
                      <span className="text-xs font-bold text-accent font-mono">
                        {layer.mastery}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-border/60 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-accent"
                        style={{ width: `${layer.mastery}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Right skill cards — 2×2 grid */}
                <div className="grid grid-cols-2 divide-x divide-y divide-border/30">
                  {layer.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex flex-col p-6 hover:bg-accent/[0.03] transition-colors duration-200 relative overflow-hidden"
                    >
                      {/* Hover accent line top */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent/0 group-hover:bg-accent/60 transition-colors duration-300" />

                      {/* Icon */}
                      <div className="w-10 h-10 rounded-xl bg-accent/8 flex items-center justify-center text-accent/60 group-hover:text-accent group-hover:bg-accent/12 transition-all duration-200 mb-4">
                        {skill.icon}
                      </div>

                      {/* Name */}
                      <p className="font-display font-bold text-sm text-text mb-2 group-hover:text-accent transition-colors duration-200">
                        {skill.name}
                      </p>

                      {/* Summary — THIS was missing before */}
                      <p className="text-muted text-xs leading-relaxed mb-4">
                        {skill.summary}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {skill.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-md bg-bg border border-border/70 text-muted/60 group-hover:border-accent/30 group-hover:text-accent/70 transition-colors duration-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom bento: tools + stat card ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Tools grid — 2×2 */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-px bg-border/40 rounded-2xl border border-border/40 overflow-hidden">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="group bg-surface flex flex-col gap-3 p-6 hover:bg-surface/70 transition-colors duration-200 relative"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-transparent group-hover:bg-accent/30 transition-colors duration-300" />
                <div className="w-9 h-9 rounded-lg bg-accent/8 flex items-center justify-center text-accent/60 group-hover:text-accent group-hover:bg-accent/12 transition-all duration-200">
                  {tool.icon}
                </div>
                <p className="font-display font-bold text-sm text-text group-hover:text-accent transition-colors duration-200">
                  {tool.name}
                </p>
                <p className="text-muted/70 text-xs leading-relaxed">
                  {tool.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Stat callout card */}
          <div className="rounded-2xl border border-border/40 bg-surface flex flex-col justify-between p-7 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/5 rounded-full blur-2xl pointer-events-none" />

            <div className="relative">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted/40 mb-6 font-mono">
                By the numbers
              </p>
              <div className="flex flex-col gap-6">
                {[
                  { value: "5+", label: "Years Shipping" },
                  { value: "20+", label: "Projects Live" },
                  { value: "2", label: "Core Stacks" },
                ].map((s) => (
                  <div key={s.label} className="flex items-baseline gap-3">
                    <span className="font-display font-bold text-3xl text-accent leading-none">
                      {s.value}
                    </span>
                    <span className="text-xs font-semibold tracking-widest uppercase text-muted/50">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-8 pt-6 border-t border-border/40">
              <p className="text-[11px] text-muted/40 leading-relaxed">
                Every project ships with clean architecture, typed APIs, and real users in mind.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}