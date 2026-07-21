export interface LocationItem {
  name: string
  slug: string
  category: string
}

// Cleaned list of categories and their raw locations for both Chennai and Dindigul
export const regionsRaw: Record<string, string[]> = {
  // ── Chennai Regions ──
  "North Chennai": [
    "Tondiarpet", "Washermanpet", "Royapuram", "Tiruvottiyur", "Manali", 
    "Madhavaram", "Perambur", "Vyasarpadi", "Korukkupet", "Ennore", 
    "Kodungaiyur", "Moolakadai", "Basin Bridge", "Mint", "Sowcarpet", 
    "George Town", "Broadway", "Seven Wells", "Elephant Gate", "Red Hills", 
    "Puzhal", "Kathivakkam", "Ernavoor"
  ],
  "Central Chennai": [
    "Egmore", "Chetpet", "Kilpauk", "Purasawalkam", "Vepery", "Choolai", 
    "Nungambakkam", "Thousand Lights", "Triplicane", "Royapettah", 
    "Gopalapuram", "Mylapore", "Mandaveli", "Alwarpet", "Teynampet", 
    "Kodambakkam", "Chintadripet", "Pudupet", "Park Town", "Chennai Central", 
    "Anna Salai", "Mount Road", "Santhome", "T. Nagar"
  ],
  "South Chennai": [
    "Adyar", "Besant Nagar", "Thiruvanmiyur", "Kottivakkam", "Neelankarai", 
    "Palavakkam", "Injambakkam", "Akkarai", "Uthandi", "Karapakkam", 
    "Sholinganallur", "Perungudi", "Kandanchavadi", "Thoraipakkam", 
    "Taramani", "Velachery", "Madipakkam", "Nanganallur", "Keelkattalai", 
    "Medavakkam", "Pallikaranai", "Perumbakkam", "Sithalapakkam", "Selaiyur", 
    "Camp Road", "Sembakkam", "Santhosapuram", "Kovilambakkam", "Nanmangalam", 
    "Chromepet", "Hasthinapuram", "Chitlapakkam", "Tambaram", "East Tambaram", 
    "West Tambaram", "Tambaram Sanatorium", "Mudichur", "Perungalathur", 
    "Vandalur", "Guduvanchery", "Urapakkam", "Pammal", "Anakaputhur", 
    "Pozhichalur", "Meenambakkam", "Pallavaram", "St. Thomas Mount", "Pazhavanthangal"
  ],
  "West Chennai": [
    "Anna Nagar", "Anna Nagar East", "Anna Nagar West", "Mogappair East", 
    "Mogappair West", "Ambattur", "Korattur", "Avadi", "Padi", "Villivakkam", 
    "Kolathur", "Koyambedu", "Arumbakkam", "Aminjikarai", "Shenoy Nagar", 
    "Ayanavaram", "ICF Colony", "Nolambur", "Vanagaram", "Maduravoyal", 
    "Porur", "Iyyappanthangal", "Ramapuram", "Valasaravakkam", "Virugambakkam", 
    "Saligramam", "KK Nagar", "Ashok Nagar", "Nesapakkam", "MGR Nagar", "Alapakkam"
  ],
  "OMR (IT Corridor)": [
    "Tidel Park", "Taramani", "Perungudi", "Kandanchavadi", "Thoraipakkam", 
    "Karapakkam", "Sholinganallur", "Semmenchery", "Navalur", "Siruseri", 
    "Padur", "Kelambakkam", "Thaiyur", "Egattur"
  ],
  "ECR (East Coast Road)": [
    "Thiruvanmiyur", "Kottivakkam", "Palavakkam", "Neelankarai", "Injambakkam", 
    "Akkarai", "Uthandi", "Kanathur", "Panaiyur", "Muttukadu", "Kovalam",
    "Mamallapuram", "Mahabalipuram", "Kalpakkam", "Nemmeli", "Thiruporur", "Cheyyur"
  ],
  "Industrial Areas": [
    "Ambattur Industrial Estate", "Guindy Industrial Estate", "SIDCO Industrial Estate", 
    "Manali Industrial Area", "Ennore Industrial Area", "Padi Industrial Estate", 
    "Oragadam", "Sriperumbudur", "Irungattukottai", "Sunguvarchatram",
    "Vallam Vadagal", "Kakkalur Industrial Estate", "Oragadam Industrial Corridor"
  ],
  "IT & Business Hubs": [
    "Tidel Park", "DLF IT Park", "Olympia Tech Park", "RMZ Millenia", "Guindy", 
    "OMR", "ELCOT SEZ", "Siruseri SIPCOT", "Chennai One IT Park", "Bahwan CyberTek Park", 
    "Ramanujan IT City", "World Trade Center Chennai", "International Tech Park Chennai"
  ],
  "Growing Suburbs": [
    "Avadi", "Pattabiram", "Thirumullaivoyal", "Poonamallee", "Chembarambakkam", 
    "Mangadu", "Kundrathur", "Kovur", "Gerugambakkam", "Mugalivakkam", 
    "Manapakkam", "Polichalur", "Urapakkam", "Guduvanchery", "Maraimalai Nagar", 
    "Mahindra World City", "Sevvapet", "Veppampattu", "Thiruvallur Town",
    "Kanchipuram Town", "Wallajahbad", "Thiruthani"
  ],

  // ── Dindigul Regions ──
  "Dindigul City Core": [
    "Dindigul", "Clock Tower", "Junction", "Old Bus Stand", "New Bus Stand",
    "Collectorate", "Gandhi Nagar", "Nehru Nagar", "Sivasakthi Nagar",
    "Maharaja Nagar", "Mullai Nagar", "Kanaka Nagar", "Nagal Nagar",
    "Thirunagar", "Alagapuri", "LMS Junction", "Palani Road", "Kodaikanal Road"
  ],
  "Dindigul City Neighbourhoods": [
    "Begampur", "Chinnalapatti", "Thadikombu", "Reddiarchatram",
    "Pappakovil", "Thamaraikulam", "Kallimadai", "Kumbalapatti",
    "Usampatti", "Vakkampatti", "Mullipadi", "Keelakuyilkudi",
    "Melakuyilkudi", "Thottipalayam", "Ayyalur", "Thottanuthu",
    "Neikarapatti", "Sakkimangalam", "Keelamangalam", "Kamarajar Nagar",
    "Ambedkar Nagar", "Thiruvalluvar Nagar", "Pappampalayam",
    "Kudalnagar", "Anna Nagar Dindigul"
  ],
  "Dindigul District Major Towns": [
    "Palani", "Kodaikanal", "Oddanchatram", "Vedasandur", "Natham",
    "Nilakottai", "Batlagundu", "Vadamadurai", "Athoor", "Gujiliamparai",
    "Vembarpatti", "Ayakudi", "Ayyampatti", "Shanarpatti"
  ],
  "Palani Taluk Areas": [
    "Palani Hill", "Palani Temple Road", "Thirupuvanam", "Pattiveeranpatti",
    "Ammainaickanur", "Ayyampalayam", "Balasamudram", "Keeranur",
    "Govindaperi", "Sempatti"
  ],
  "Kodaikanal & Hill Areas": [
    "Kodaikanal Lake", "Kodaikanal Town", "Pillar Rocks", "Berijam",
    "Poomparai", "Sirumalai", "Pallangi", "Mannavanur"
  ],
  "Industrial & Commercial Zones (Dindigul)": [
    "SIDCO Industrial Estate Dindigul", "Dindigul Fort Area",
    "Palam", "Dindigul Railway Station", "Dindigul Lock Factory Area",
    "Textiles Hub Dindigul", "MSME Hub Dindigul",
    "Dindigul Leather Tannery Zone", "Dindigul Textile Mills Cluster",
    "Oddanchatram Wholesale Agro Hub", "Dindigul Bypass Junction",
    "Dindigul Brass & Lock Works Cluster"
  ],
  "Educational & College Tech Zones (Dindigul)": [
    "Gandhigram Tech Zone", "Muthanampatti PSNA Campus",
    "SSM Tech Zone Dindigul", "Mavoor Road Anna Univ Campus",
    "Christian College Zone Oddanchatram", "GTN Arts College Area"
  ],
  "Growing Suburbs & Small Towns (Dindigul)": [
    "Ambathurai", "Gopalpatti", "Sellur", "Periavadipatti", "Ookadu",
    "Kuttiampatti", "Nagalnaickenpatti", "Mettupatti", "Viruveedu",
    "Thoppampatti", "Keelapatti", "Krishnankoil", "Annamalainagar",
    "Seelapadi", "Ramanathapuram Dindigul", "Palanichettipatti",
    "Eriodu", "Sitharevu", "Kanthampatti", "Thenkarai",
    "Valayapatti", "Poolankulam", "Orikkai", "Ayikudy",
    "Kallimanthayam", "Chatrapatti", "Markampatti", "Virupachi", "Ambilikai",
    "Sevugampatti", "Mattaparai", "Silukuvarpatti", "Sendurai",
    "R.Vellodu", "Palayam", "Karikali", "Shenbaganur", "Perumal Malai"
  ],

  // ── Combined High-Value Clusters ──
  "High-Value SEO Clusters": [
    // Chennai
    "Velachery", "Anna Nagar", "Adyar", "T. Nagar", "Nungambakkam", "Porur", 
    "Guindy", "Tambaram", "Pallavaram", "Chromepet", "Sholinganallur", 
    "Perungudi", "Medavakkam", "Pallikaranai", "Thoraipakkam", "Karapakkam", 
    "Navalur", "Siruseri", "Ambattur", "Mogappair", "KK Nagar", "Ashok Nagar", 
    "Kodambakkam", "Mylapore", "Besant Nagar", "Thiruvanmiyur", "ECR", "OMR", "Kilpauk",
    // Dindigul
    "Dindigul", "Palani", "Kodaikanal", "Batlagundu", "Oddanchatram",
    "Natham", "Nilakottai", "Vedasandur", "Chinnalapatti", "Athoor",
    "Thadikombu", "Vadamadurai", "Gujiliamparai", "Reddiarchatram"
  ]
}

// Convert a name to a URL slug (e.g. "Anna Nagar East" -> "anna-nagar-east")
export function slugify(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

// Generate the unique, deduplicated list of locations
const uniqueMap = new Map<string, LocationItem>()

Object.entries(regionsRaw).forEach(([category, names]) => {
  names.forEach((name) => {
    const slug = slugify(name)
    // Keep high-value category classification or first category hit
    if (!uniqueMap.has(slug) || category === "High-Value SEO Clusters") {
      uniqueMap.set(slug, {
        name,
        slug,
        category
      })
    }
  })
})

export const locationsList: LocationItem[] = Array.from(uniqueMap.values())

// Cleaned list of local SEO keywords (deduplicated automatically)
export const rawKeywords: string[] = Array.from(new Set([
  "Software Development Company in [Location]",
  "Web Development Company in [Location]",
  "Website Development in [Location]",
  "Website Design in [Location]",
  "Website Development Near Me",
  "Website Design Near Me",
  "Mobile App Development in [Location]",
  "Mobile App Development Company in [Location]",
  "Mobile App Development Near Me",
  "Android App Development in [Location]",
  "iOS App Development in [Location]",
  "Flutter App Development in [Location]",
  "React Native App Development in [Location]",
  "Full Stack Software Developers in [Location]",
  "Enterprise Software Development in [Location]",
  "Web Application Development in [Location]",
  "Custom Website Development in [Location]",
  "Responsive Website Design in [Location]",
  "Ecommerce Website Development in [Location]",
  "Business Website Development in [Location]",
  "Professional Website Design in [Location]",
  "Website Redesign in [Location]",
  "Landing Page Design in [Location]",
  "SEO Services in [Location]",
  "Local SEO in [Location]",
  "Technical SEO in [Location]",
  "On-Page SEO in [Location]",
  "Off-Page SEO in [Location]",
  "SEO Audit in [Location]",
  "Google Ads in [Location]",
  "Google Ads Management in [Location]",
  "PPC Services in [Location]",
  "Search Engine Marketing in [Location]",
  "Meta Ads in [Location]",
  "Facebook Ads in [Location]",
  "Instagram Ads in [Location]",
  "Social Media Marketing in [Location]",
  "Digital Marketing in [Location]",
  "Online Marketing in [Location]",
  "Lead Generation in [Location]",
  "Website Maintenance in [Location]",
  "Website Speed Optimization in [Location]",
  "Website Security Services in [Location]",
  "UI UX Design in [Location]",
  "Custom Software Development in [Location]",
  "CRM Development in [Location]",
  "ERP Software Development in [Location]",
  "ERP Software Development for Textile & Industries in [Location]",
  "Leather & Manufacturing Software Solutions in [Location]",
  "Inventory & Billing Software Developers in [Location]",
  "Hospital Management Software Development in [Location]",
  "Educational Institution Portal Developers in [Location]",
  "AI Chatbot Development in [Location]",
  "AI Software Development Company in [Location]",
  "Machine Learning Solutions Provider in [Location]",
  "Cloud Software Development & AWS Migration in [Location]",
  "Business Automation in [Location]",
  "Website Development for Small Business in [Location]",
  "Ecommerce Website Design Near Me",
  "SEO Expert Near Me in [Location]",
  "Mobile App Developer Near Me in [Location]",
  "Web Designer Near Me in [Location]",
  "Digital Marketing Services Near Me in [Location]",
  "Software Development Agency in [Location]",
  "Web Development Agency in [Location]",
  "Mobile App Development Agency in [Location]",
  "Shopify Developer in [Location]",
  "Shopify Store Development Services in [Location]",
  "WordPress Developer in [Location]",
  "Next.js Web Developer in [Location]",
  "Custom Software Development Agency in [Location]",
  "SaaS Product Development Company in [Location]",
  "API Development & Integration Services in [Location]",
  "Software Maintenance & Support Services in [Location]"
]))

// Helper to check if a location belongs to Dindigul region
export function isDindigulLocation(category: string): boolean {
  const cat = (category || "").toLowerCase()
  return cat.includes("dindigul") || cat.includes("kodaikanal") || cat.includes("palani")
}

// Helper to get formatted region name
export function getLocationRegionName(category: string): string {
  return isDindigulLocation(category) ? "Dindigul, Tamil Nadu" : "Chennai, Tamil Nadu"
}

// Get keywords formatted for a specific location
export function getKeywordsForLocation(locationName: string): string[] {
  return rawKeywords.map(keyword => 
    keyword.replace(/\[Location\]/g, locationName)
  )
}

export interface ParsedSeoSlug {
  serviceType: 'generic' | 'web-development' | 'mobile-app-development' | 'seo-services' | 'custom-software' | 'e-commerce-development' | 'ai-ml-solutions'
  serviceTitle: string
  location: LocationItem
}

export const seoServicesList = [
  { prefix: 'web-development-in-', type: 'web-development' as const, title: 'Web Development Services' },
  { prefix: 'mobile-app-development-in-', type: 'mobile-app-development' as const, title: 'Mobile App Development' },
  { prefix: 'seo-services-in-', type: 'seo-services' as const, title: 'SEO Agency & Local Search' },
  { prefix: 'custom-software-development-in-', type: 'custom-software' as const, title: 'Custom Software Development' },
  { prefix: 'e-commerce-development-in-', type: 'e-commerce-development' as const, title: 'E-Commerce & Shopify Development' },
  { prefix: 'ai-ml-solutions-in-', type: 'ai-ml-solutions' as const, title: 'AI & ML Software Solutions' },
]

export function parseSeoSlug(slug: string): ParsedSeoSlug | null {
  for (const svc of seoServicesList) {
    if (slug.startsWith(svc.prefix)) {
      const locSlug = slug.slice(svc.prefix.length)
      const loc = locationsList.find((l) => l.slug === locSlug)
      if (loc) {
        return {
          serviceType: svc.type,
          serviceTitle: svc.title,
          location: loc,
        }
      }
    }
  }

  const loc = locationsList.find((l) => l.slug === slug)
  if (loc) {
    return {
      serviceType: 'generic',
      serviceTitle: 'Software Development Agency',
      location: loc,
    }
  }

  return null
}
