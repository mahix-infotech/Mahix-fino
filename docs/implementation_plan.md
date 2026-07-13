# Implementation Plan - Chennai Programmatic Local SEO (pSEO) Setup

This plan outlines the architecture and execution steps for setting up programmatic Local SEO landing pages targeting all major locations in Chennai. We will use a dynamic routing strategy in Next.js to serve lightweight, responsive, and search-optimized landing pages for each location without duplicating files.

---

## Technical Approach

**Programmatic SEO vs. Static Directories**: 
Creating separate code folders for each of the ~120 locations would make the codebase massive and unmaintainable. Instead, we use a **Programmatic SEO (pSEO)** approach:
1. A single dynamic route: `src/app/chennai/[location]/page.tsx`.
2. A centralized data mapping file `src/lib/seo-data.ts` containing the cleaned list of Chennai locations, categories, and keywords.
3. Next.js `generateStaticParams()` to pre-render all 120+ location pages as physical HTML files at build-time.
4. Dynamic sitemap injection in `src/app/sitemap.ts` to ensure Google and Bing discover and index every page.

---

## Proposed Changes

We will introduce the location data, a dynamic landing page, and integrate these pages into the Next.js sitemap and layout logic.

### 1. Data Layer

#### [NEW] [seo-data.ts](file:///c:/Users/infan/OneDrive/Desktop/Mahix-info/Mahix-fino/src/lib/seo-data.ts)
Create a helper database file storing:
- **Cleaned Locations**: Deduplicated list of all Chennai locations from your request, categorized by region (North, South, Central, West, ECR, OMR, Suburbs, IT Hubs, Industrial, and High-Value clusters).
- **SEO Keywords**: The list of 50 keywords provided, cleaned and mapped to support dynamic location placeholders.
- **Utility functions**: Slugification helpers (e.g. converting `"Anna Nagar East"` to `"anna-nagar-east"`) and slug-to-name reverse mapping.

### 2. Pages & Routing

#### [NEW] [page.tsx](file:///c:/Users/infan/OneDrive/Desktop/Mahix-info/Mahix-fino/src/app/chennai/[location]/page.tsx)
Create a dynamic landing page:
- **SEO Title & Metadata**: Auto-generated dynamic titles (e.g., `"Website Development & SEO Services in Velachery, Chennai | Mahix InfoTech"`) using `generateMetadata`.
- **Dynamic Content**: Uses the matched location name inside headings, descriptions, and feature lists.
- **Layout**: Features a Hero, Services Overview (injecting local keywords), Tech Stack grid, and local CTA section.
- **Pre-rendering**: Implements `generateStaticParams` so Next.js builds static pages for all Chennai locations.

### 3. SEO indexing

#### [MODIFY] [sitemap.ts](file:///c:/Users/infan/OneDrive/Desktop/Mahix-info/Mahix-fino/src/app/sitemap.ts)
- Modify sitemap to import the location slugs from `seo-data.ts` and dynamically push `/chennai/[location]` entries into the Google Sitemap XML output.

---

## Verification Plan

### Automated Tests
- Run `npm run build` to verify that Next.js successfully compiles and static-generates pages for all Chennai sub-locations under `/chennai/...`.
- Run verification tests to check the output size and JS bundles.

### Manual Verification
- Start `npm run dev` and navigate to local routes (e.g., `http://localhost:3000/chennai/velachery` and `http://localhost:3000/chennai/anna-nagar`) to verify the dynamic copy substitution and visual rendering.
- Fetch `http://localhost:3000/sitemap.xml` and `http://localhost:3000/robots.txt` in the browser to verify the search engine links.
