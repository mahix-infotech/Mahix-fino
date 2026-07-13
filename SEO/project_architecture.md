# Mahix InfoTech - Project Architecture & Technical Overview

This document provides a comprehensive breakdown of the technology stack, directory structure, core features, and architectural design patterns of the **Mahix InfoTech** (Mahix-fino) web application.

---

## 🚀 Core Technology Stack

The application is built on modern, high-performance web standards:
1. **Framework**: [Next.js 15.5.9](https://nextjs.org/) (App Router, Server & Client Components)
2. **Runtime & Library**: [React 19.1.0](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
3. **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (using `@tailwindcss/postcss` and modern CSS-native configuration with `@theme`)
4. **Animation & 3D**: 
   - [Three.js v0.185.1](https://threejs.org/) (Vanilla interactive physics implementation in `ballpit.tsx`)
   - [React Three Fiber (R3F) & Drei](https://r3f.docs.pmnd.rs/) (Support packages installed for future integration)
   - [Lenis v1.3.25](https://lenis.darkroom.engineering/) (Smooth scrolling framework)
5. **UI & Components**: [Radix UI](https://www.radix-ui.com/) primitive components via the [shadcn/ui](https://ui.shadcn.com/) system.
6. **Forms & Validation**: `react-hook-form` + `zod` for robust client-side validation.

---

## 📁 Directory Structure & Organization

The codebase follows a modular Next.js architecture separated by concerns:

```
Mahix-fino/
├── .vscode/               # Workspace settings
├── docs/                  # Project documentation (Architecture, SEO setup, etc.)
├── public/                # Static assets (images, icons, favicon)
├── src/
│   ├── app/               # Next.js App Router (Routes & Layouts)
│   │   ├── about/         # /about route and pages
│   │   ├── blog/          # /blog route
│   │   ├── careers/       # /careers route
│   │   ├── contact/       # /contact page
│   │   ├── portfolio/     # /portfolio showcase
│   │   ├── services/      # /services root and 14 sub-service routes
│   │   ├── globals.css    # Global Tailwind styles & custom theme variables
│   │   ├── layout.tsx     # Root HTML template, theme, and common components
│   │   └── page.tsx       # Landing page entry point
│   │
│   ├── components/        # UI Component Registry
│   │   ├── pages/         # Page-specific components (e.g. About story/timeline)
│   │   ├── sections/      # Multi-page sections (Hero, CTA, Nav, Footer, etc.)
│   │   ├── ui/            # Reusable atomic elements (Buttons, Cards, Dialogs, etc.)
│   │   ├── theme-provider # Next-themes theme injector (Dark/Light mode support)
│   │   └── performance-*  # Dynamic script loading & optimization utilities
│   │
│   ├── hooks/             # Custom React Hooks (e.g. mobile/viewports)
│   └── lib/               # Utility functions (e.g. tailwind-merge class utility)
│
├── postcss.config.mjs     # PostCSS configuration with Tailwind v4 plugin
├── tailwind.config.ts     # Deprecated or placeholder config (Tailwind v4 reads globals.css)
└── tsconfig.json          # TypeScript compilation settings
```

---

## 🎨 Key Visual & Interactive Features

The site relies on rich visuals and micro-animations to create a premium, high-fidelity experience:

### 1. 🟢 Interactive 3D Ballpit (`src/components/sections/hero/ballpit.tsx`)
* **What it does**: Generates a high-performance, physics-based, interactive sphere grid. Spheres bounce off walls and drift relative to the user's mouse position using raycasting.
* **Architecture**: Built using vanilla `Three.js` wrapped inside a custom client-side React component.
* **Optimization**:
  * Dynamically imported in `hero-section.tsx` with `{ ssr: false }` to avoid Next.js SSR crashes.
  * Lazy-initialized using `requestIdleCallback` (or fallback) to ensure it doesn't block the initial page render.
  * Capped framerates (`fps` parameter) and viewport-based limits (`maxPixelRatio`) optimized separately for desktop and mobile.

### 2. 🗂️ ScrollStack (`src/components/ui/scroll-stack.tsx`)
* **What it does**: A stacked-card layout where cards slide, scale down, blur, and stack on top of each other as the user scrolls.
* **Implementation**: Combines `Lenis` smooth-scroll tracking with dynamic CSS transforms (`translateY`, `scale`, `blur`) mapped to the viewport container bounds.
* **Usage**: Found in the CTA Section (`src/components/sections/cta/cta-section.tsx`) to showcase services/next steps dynamically.

---

## 🗺️ Routing Hierarchy (`src/app`)

Next.js file-system routing defines the website's pages.

### Main Routes
* `/` (`src/app/page.tsx`): Home page rendering navigation, Hero, Services summary, About snippet, Testimonials, CTA, and Footer.
* `/about` (`src/app/about/page.tsx`): About the company, vision, mission, and a dynamic historical timeline.
* `/careers` (`src/app/careers/page.tsx`): Open roles and application portals.
* `/contact` (`src/app/contact/page.tsx`): Inquiry forms validating fields through `zod`.
* `/portfolio` (`src/app/portfolio/page.tsx`): Completed projects showcase.
* `/blog` (`src/app/blog/page.tsx`): News, tech insights, and company updates.

### Services Sub-Routes (`src/app/services`)
The site has an extensive services portfolio, each having a standalone page:
* `ai-ml`: Artificial Intelligence & Machine Learning
* `cloud`: Cloud Infrastructure Services
* `crm-solutions`: CRM Customizations (Salesforce, HubSpot, etc.)
* `custom-software`: Dedicated Software Engineering
* `digital-marketing`: SEM & Digital Growth
* `digital-transformation`: Enterprise System Migration
* `e-commerce-development`: General e-Commerce Storefronts
* `google-ads`: Targeted SEM Advertising
* `it-consulting`: Executive Tech Advice
* `meta-ads`: Paid Social Management
* `mobile-apps`: Cross-platform Mobile Apps
* `seo`: Technical Search Engine Optimization
* `shopify-development`: Specialized Shopify Engineering
* `web-development`: Responsive Web Apps

---

## ⚡ Performance Optimizations

Two custom optimization components exist in `src/components/`:

1. **`LoadingOptimizer`**: 
   * Preloads critical Next.js static CSS assets with `fetchpriority="high"`.
   * Automatically switches image lazy-loading to `eager` as they approach the viewport boundaries using an `IntersectionObserver`.
2. **`PerformanceMonitor`**:
   * Inspects layout shifts and automatically sets fallback aspect-ratios/styles to prevent CLS (Cumulative Layout Shift).
   * Monitors performance metrics like LCP (Largest Contentful Paint) in real-time.

> [!NOTE]
> Currently, `LoadingOptimizer` and `PerformanceMonitor` are defined in the components directory but **are not imported or rendered** in `src/app/layout.tsx`. If you wish to enable these optimizations, they can be added to the root layout body.
