export interface LocationItem {
  name: string
  slug: string
  category: string
}

// Cleaned list of categories and their raw locations
export const regionsRaw: Record<string, string[]> = {
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
    "Akkarai", "Uthandi", "Kanathur", "Panaiyur", "Muttukadu", "Kovalam"
  ],
  "Industrial Areas": [
    "Ambattur Industrial Estate", "Guindy Industrial Estate", "SIDCO Industrial Estate", 
    "Manali Industrial Area", "Ennore Industrial Area", "Padi Industrial Estate", 
    "Oragadam", "Sriperumbudur", "Irungattukottai"
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
    "Mahindra World City"
  ],
  "High-Value SEO Clusters": [
    "Velachery", "Anna Nagar", "Adyar", "T. Nagar", "Nungambakkam", "Porur", 
    "Guindy", "Tambaram", "Pallavaram", "Chromepet", "Sholinganallur", 
    "Perungudi", "Medavakkam", "Pallikaranai", "Thoraipakkam", "Karapakkam", 
    "Navalur", "Siruseri", "Ambattur", "Mogappair", "KK Nagar", "Ashok Nagar", 
    "Kodambakkam", "Mylapore", "Besant Nagar", "Thiruvanmiyur", "ECR", "OMR", "Kilpauk"
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

// Cleaned list of 50 local SEO keywords (with [Location] placeholder for replacement)
export const rawKeywords = [
  "Website Development in [Location]",
  "Website Design in [Location]",
  "Website Development Near Me",
  "Website Design Near Me",
  "Mobile App Development in [Location]",
  "Mobile App Development Near Me",
  "Android App Development in [Location]",
  "iOS App Development in [Location]",
  "Flutter App Development in [Location]",
  "React Native App Development in [Location]",
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
  "AI Chatbot Development in [Location]",
  "Business Automation in [Location]",
  "Website Development for Small Business in [Location]",
  "Ecommerce Website Design Near Me",
  "SEO Expert Near Me in [Location]",
  "Mobile App Developer Near Me in [Location]",
  "Web Designer Near Me in [Location]",
  "Digital Marketing Services Near Me in [Location]"
]

// Get keywords formatted for a specific location
export function getKeywordsForLocation(locationName: string): string[] {
  return rawKeywords.map(keyword => 
    keyword.replace(/\[Location\]/g, locationName)
  )
}
