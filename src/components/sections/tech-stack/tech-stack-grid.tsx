"use client"

// 12-color palette that cycles per card
const CARD_PALETTES = [
  { bg: "bg-orange-50 dark:bg-orange-950/30", border: "border-orange-200 dark:border-orange-800/40", icon: "text-orange-500", label: "text-orange-700 dark:text-orange-300" },
  { bg: "bg-blue-50 dark:bg-blue-950/30",     border: "border-blue-200 dark:border-blue-800/40",   icon: "text-blue-500",   label: "text-blue-700 dark:text-blue-300" },
  { bg: "bg-purple-50 dark:bg-purple-950/30", border: "border-purple-200 dark:border-purple-800/40",icon: "text-purple-500", label: "text-purple-700 dark:text-purple-300" },
  { bg: "bg-emerald-50 dark:bg-emerald-950/30",border:"border-emerald-200 dark:border-emerald-800/40",icon:"text-emerald-500",label:"text-emerald-700 dark:text-emerald-300"},
  { bg: "bg-pink-50 dark:bg-pink-950/30",     border: "border-pink-200 dark:border-pink-800/40",   icon: "text-pink-500",   label: "text-pink-700 dark:text-pink-300" },
  { bg: "bg-yellow-50 dark:bg-yellow-950/30", border: "border-yellow-200 dark:border-yellow-800/40",icon:"text-yellow-600",  label: "text-yellow-700 dark:text-yellow-300" },
  { bg: "bg-cyan-50 dark:bg-cyan-950/30",     border: "border-cyan-200 dark:border-cyan-800/40",   icon: "text-cyan-500",   label: "text-cyan-700 dark:text-cyan-300" },
  { bg: "bg-red-50 dark:bg-red-950/30",       border: "border-red-200 dark:border-red-800/40",     icon: "text-red-500",    label: "text-red-700 dark:text-red-300" },
  { bg: "bg-teal-50 dark:bg-teal-950/30",     border: "border-teal-200 dark:border-teal-800/40",   icon: "text-teal-500",   label: "text-teal-700 dark:text-teal-300" },
  { bg: "bg-indigo-50 dark:bg-indigo-950/30", border: "border-indigo-200 dark:border-indigo-800/40",icon:"text-indigo-500", label: "text-indigo-700 dark:text-indigo-300" },
  { bg: "bg-rose-50 dark:bg-rose-950/30",     border: "border-rose-200 dark:border-rose-800/40",   icon: "text-rose-500",   label: "text-rose-700 dark:text-rose-300" },
  { bg: "bg-fuchsia-50 dark:bg-fuchsia-950/30",border:"border-fuchsia-200 dark:border-fuchsia-800/40",icon:"text-fuchsia-500",label:"text-fuchsia-700 dark:text-fuchsia-300"},
]

// Tech icon / emoji map
const TECH_ICONS: Record<string, string> = {
  "JavaScript": "JS",  "TypeScript": "TS",   "Python": "🐍",   "Swift": "◆",
  "Kotlin": "K",       "PHP": "PHP",         "Ruby": "💎",     "Go": "Go",
  "Rust": "🦀",        "Java": "☕",          "C#": "C#",       "Dart": "🎯",
  "React": "⚛",        "Next.js": "▲",       "Vue.js": "V",    "Angular": "🔺",
  "Svelte": "S",       "Nuxt": "N",          "Remix": "R",     "Astro": "🚀",
  "Tailwind CSS": "🎨","SASS": "Sass",       "Bootstrap": "B",
  "React Native": "⚛", "Flutter": "🦋",      "Expo": "Expo",   "Ionic": "⚡",
  "Xamarin": "X",
  "Node.js": "🟢",     "Express.js": "Ex",   "Fastify": "Fx",  "Django": "Dj",
  "FastAPI": "FA",     "Laravel": "L",       "Spring Boot": "🍃","NestJS": "🐈",
  "GraphQL": "◈",      "REST API": "API",
  "MongoDB": "🍃",     "PostgreSQL": "🐘",   "MySQL": "🗄",    "Redis": "♦",
  "Supabase": "⚡",     "Firebase": "🔥",     "DynamoDB": "◈",  "SQLite": "🗃",
  "Realm": "◉",
  "AWS": "☁",          "Azure": "☁",         "GCP": "☁",       "Docker": "🐳",
  "Kubernetes": "⎈",   "Jenkins": "🔧",      "Git": "⎇",      "Terraform": "🏗",
  "Ansible": "⚙",      "GitHub Actions": "⚙","Vercel": "▲",   "Netlify": "N",
  "Heroku": "H",
  "TensorFlow": "🧠",  "PyTorch": "🔥",      "Scikit-learn": "📊","OpenAI": "✦",
  "Hugging Face": "🤗","LangChain": "🔗",    "Keras": "K",     "Pandas": "🐼",
  "NumPy": "N",        "Jupyter": "📓",      "MLflow": "⚗",   "YOLO": "👁",
  "OpenCV": "👁",
  "Shopify": "🛍",     "WooCommerce": "🛒",  "Magento": "M",   "Strapi": "S",
  "Contentful": "C",   "Sanity": "🪄",       "Prismic": "P",   "WordPress": "W",
  "Liquid": "💧",
  "HubSpot": "H",      "Salesforce": "☁",    "Zoho CRM": "Z",  "Pipedrive": "P",
  "Google Analytics": "📊","Segment": "S",   "Mixpanel": "M",  "Mailchimp": "✉",
  "Stripe": "💳",      "PayPal": "P",        "Razorpay": "R",  "Twilio": "T",
  "Zapier": "Z",       "Prisma": "◈",        "Webhooks": "⚓",
  "Elasticsearch": "🔍","Algolia": "A",      "Nginx": "N",     "Apache": "A",
  "Webpack": "📦",     "Vite": "⚡",          "Babel": "B",
  "OAuth": "🔑",       "JWT": "🔐",          "HTTPS/SSL": "🔒","Auth0": "🔑",
  "Keycloak": "🔑",    "Datadog": "🐕",      "Grafana": "📈",  "Prometheus": "🔥",
  "Sentry": "🔴",      "New Relic": "📡",
  "Push Notifications":"🔔","In-App Purchases":"💰","WebSockets":"🔌",
  "MobX": "M",         "Redux": "R",         "SAP": "SAP",     "Oracle": "☀",
  "Microsoft 365": "M","Power BI": "📊",     "Tableau": "T",
}

function TechCard({ tech, paletteIndex }: { tech: string; paletteIndex: number }) {
  const p = CARD_PALETTES[paletteIndex % CARD_PALETTES.length]
  const icon = TECH_ICONS[tech] ?? tech.slice(0, 2).toUpperCase()
  return (
    <div
      className={`
        flex-shrink-0 flex flex-col items-center justify-center gap-2
        w-28 h-28 rounded-2xl border-2 mx-2
        ${p.bg} ${p.border}
        shadow-sm cursor-default select-none
        transition-all duration-300 group
        hover:-translate-y-2 hover:scale-[1.1] hover:shadow-xl hover:z-10
      `}
    >
      <span className={`text-2xl leading-none ${p.icon} transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6`}>
        {icon}
      </span>
      <span className={`text-[11px] font-bold text-center leading-tight px-2 ${p.label}`}>
        {tech}
      </span>
    </div>
  )
}

interface TechStackGridProps {
  technologies: string[]
  title?: string
  subtitle?: string
}

export function TechStackGrid({ technologies, title = "Technologies We Use", subtitle }: TechStackGridProps) {
  // Split into two rows
  const half = Math.ceil(technologies.length / 2)
  const row1 = technologies.slice(0, half)
  const row2 = technologies.slice(half).length > 0 ? technologies.slice(half) : technologies

  // Duplicate for seamless infinite loop (must be at least ~20 items to fill screen)
  const fill = (arr: string[]) => {
    const copies = Math.ceil(24 / arr.length)
    return Array(copies * 2).fill(arr).flat()
  }

  const row1Items = fill(row1)
  const row2Items = fill(row2)

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/20 border-y border-black/[0.05] dark:border-white/[0.08] overflow-hidden">
      {/* Title */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">{title}</h2>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>
          )}
        </div>
      </div>

      {/* Row 1 — scrolls RIGHT → */}
      <div className="relative mb-5 marquee-track">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-slate-50 dark:from-[#0f172a] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-slate-50 dark:from-[#0f172a] to-transparent" />
        <div className="flex animate-marquee-right">
          {row1Items.map((tech, i) => (
            <TechCard key={`r1-${i}`} tech={tech} paletteIndex={i % row1.length} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls LEFT ← */}
      <div className="relative marquee-track">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-slate-50 dark:from-[#0f172a] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-slate-50 dark:from-[#0f172a] to-transparent" />
        <div className="flex animate-marquee-left">
          {row2Items.map((tech, i) => (
            <TechCard key={`r2-${i}`} tech={tech} paletteIndex={(i % row2.length) + half} />
          ))}
        </div>
      </div>
    </section>
  )
}
