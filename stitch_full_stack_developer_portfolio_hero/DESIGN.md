---
name: Architect Portfolio
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c3c6d7'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#8d90a0'
  outline-variant: '#434655'
  surface-tint: '#b4c5ff'
  primary: '#b4c5ff'
  on-primary: '#002a78'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#0053db'
  secondary: '#c0c1ff'
  on-secondary: '#1000a9'
  secondary-container: '#3131c0'
  on-secondary-container: '#b0b2ff'
  tertiary: '#89ceff'
  on-tertiary: '#00344d'
  tertiary-container: '#0074a6'
  on-tertiary-container: '#e4f2ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#07006c'
  on-secondary-fixed-variant: '#2f2ebe'
  tertiary-fixed: '#c9e6ff'
  tertiary-fixed-dim: '#89ceff'
  on-tertiary-fixed: '#001e2f'
  on-tertiary-fixed-variant: '#004c6e'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  code-sm:
    fontFamily: monospace
    fontSize: 14px
    fontWeight: '450'
    lineHeight: '1.4'
    letterSpacing: '0'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 24px
  margin: 32px
  section-gap: 120px
---

## Brand & Style

This design system is built for high-stakes software engineering, specifically targeting the enterprise, POS, and management sectors. The brand personality is rooted in **precision, stability, and architectural integrity**. It avoids the flighty trends of consumer apps in favor of a "Systemic Professionalism" aesthetic—a blend of **Minimalism** and **Corporate Modern** design.

The UI should evoke a sense of "Engineered Trust." Every element is placed with mathematical intent, reflecting the organized complexity of backend systems. The visual language uses a rigorous structural grid and high-contrast elements to ensure the developer’s work is perceived as robust and production-ready.

## Colors

The palette is anchored in a sophisticated "Midnight" dark mode to reduce eye strain and provide a premium, deep-space background for code and data. 

- **Primary (Blue/Indigo):** Used for critical actions and brand markers, representing the .NET ecosystem and stability.
- **Secondary (Violet):** Used for accentuating technical depth and secondary interactions.
- **Surface & Backgrounds:** We use a tiered neutral scale. The base is a deep navy-black (`#0F172A`), with elevated surfaces moving toward lighter slate tones to create a sense of physical hierarchy.
- **Functional Colors:** Success, warning, and error states must maintain high saturation to contrast against the dark background, ensuring immediate system-status recognition.

## Typography

This design system utilizes a high-contrast typographic pairing to balance technical edge with corporate readability.

- **Headlines & Labels:** **Space Grotesk** provides a geometric, tech-forward character. Its slightly quirky terminals suggest innovation while maintaining a clean, professional footprint. Use all-caps with generous tracking for labels (e.g., "SYSTEM STATUS") to reinforce the dashboard aesthetic.
- **Body & Content:** **Inter** is the workhorse. It ensures maximum legibility for long-form project descriptions and technical documentation.
- **Data & Monospace:** System-default monospace is reserved for code blocks, version numbers, and terminal-style outputs to ground the portfolio in actual development work.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy to maintain control over information density. A 12-column system is used for page construction, but internal components are governed by a strict 4px/8px baseline grid.

- **Ample Whitespace:** Large gaps between major sections (120px+) prevent the UI from feeling "cluttered," signaling that the software managed by this developer is organized and thoughtful.
- **Grid-Based Accents:** Use subtle 1px borders or background "grid paper" patterns (low-opacity lines every 40px) to reinforce the feeling of a blueprint or technical schematic.
- **Alignment:** All elements must align to the grid. There are no "floating" elements; everything has an architectural home.

## Elevation & Depth

Depth is conveyed through **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows. This keeps the interface feeling "flat-plus" and modern.

1.  **Level 0 (Base):** The primary background color.
2.  **Level 1 (Cards/Sections):** A slightly lighter navy with a 1px solid border (Indigo-900 at 30% opacity).
3.  **Level 2 (Popovers/Modals):** A higher-contrast surface with a subtle "Ambient Shadow"—very large blur (32px+), low opacity (10%), and no offset—to simulate a soft lift from the page.
4.  **Interactive States:** On hover, borders should brighten (e.g., from Slate-800 to Indigo-500) rather than the surface changing color, emphasizing the "circuitry" of the design.

## Shapes

The shape language is **Sharp (0px)**. To reflect the precision of business logic and database architecture, the design system avoids rounded corners. 

- **Hard Edges:** All buttons, cards, input fields, and images must have 90-degree corners. This creates a "monolithic" and high-trust appearance common in high-end financial or industrial software.
- **Geometric Accents:** Small 45-degree chamfers on the corners of decorative elements or specific "tags" can be used to add a tech-forward, "military-grade" detail without compromising the professional tone.

## Components

- **Buttons:** Solid primary color for main actions; ghost/outline buttons for secondary actions. Use "square" shapes only. Text must be `label-caps`.
- **Cards:** No shadows. Use a 1px border. Card headers should have a distinct background tint to separate metadata from content.
- **Inputs:** Dark backgrounds with a 1px bottom-border or full-border that glows Indigo on focus. Labels should stay visible and use monospace fonts for technical data entry fields.
- **Status Chips:** High-contrast, sharp-edged badges. Use "Success" (Emerald), "Error" (Rose), and "Process" (Blue) to indicate system health or project status.
- **Data Tables:** Highly structured with minimal horizontal padding and distinct row hover states. This is the core of a management-style portfolio.
- **Code Snippets:** Integrated syntax highlighting using a "Nord" or "Dracula" inspired theme that complements the primary blue/indigo palette.
- **Progress Bars:** Thin, 2px or 4px lines. Avoid chunky bars; use them as subtle indicators of project completion or skill proficiency.