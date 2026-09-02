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
    "Saligramam", "Vadapalani", "KK Nagar", "Ashok Nagar", "Nesapakkam", "MGR Nagar", "Alapakkam"
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
    "Thirunagar", "Alagapuri", "LMS Junction", "Palani Road", "Kodaikanal Road",
    "RMTC Nagar", "Round Road", "YMR Patti", "MNS Nagar", "Balakrishnapuram",
    "Nethaji Nagar", "Spencer Compound", "Trichy Road Dindigul", "Karur Road Dindigul", "Madurai Road Dindigul",
    "Dindigul West", "Dindigul East", "Dindigul North", "Dindigul South",
    "MSP School Road", "GTN Road Dindigul", "Solai Hall Road", "Salai Road Dindigul",
    "Subramaniapuram Dindigul", "Mendonsa Nagar", "RVS Nagar", "VGP Nagar Dindigul",
    "Vadamadurai Road", "Batlagundu Main Road", "Bharathipuram Dindigul", "Meenakshinayakanpatti", "Adiyanuthu"
  ],
  "Dindigul City Neighbourhoods": [
    "Begampur", "Chinnalapatti", "Thadikombu", "Reddiarchatram",
    "Pappakovil", "Thamaraikulam", "Kallimadai", "Kumbalapatti",
    "Usampatti", "Vakkampatti", "Mullipadi", "Keelakuyilkudi",
    "Melakuyilkudi", "Thottipalayam", "Ayyalur", "Thottanuthu",
    "Neikarapatti", "Sakkimangalam", "Keelamangalam", "Kamarajar Nagar",
    "Ambedkar Nagar", "Thiruvalluvar Nagar", "Pappampalayam",
    "Kudalnagar", "Anna Nagar Dindigul", "Kuzhithurai Dindigul",
    "Sanarpatti", "Kullalagundu", "Pachamalayankottai", "Mallanampatti"
  ],
  "Dindigul District Major Towns": [
    "Palani", "Kodaikanal", "Oddanchatram", "Vedasandur", "Natham",
    "Nilakottai", "Batlagundu", "Vadamadurai", "Athoor", "Gujiliamparai",
    "Vembarpatti", "Ayakudi", "Ayyampatti", "Shanarpatti", "Usilampatti",
    "Vadipatti", "Sholavandan"
  ],
  "Palani Taluk Areas": [
    "Palani Hill", "Palani Temple Road", "Thirupuvanam", "Pattiveeranpatti",
    "Ammainaickanur", "Ayyampalayam", "Balasamudram", "Keeranur",
    "Govindaperi", "Sempatti", "Palani Handloom Cluster"
  ],
  "Kodaikanal & Hill Areas": [
    "Kodaikanal Lake", "Kodaikanal Town", "Pillar Rocks", "Berijam",
    "Poomparai", "Sirumalai", "Pallangi", "Mannavanur",
    "Thandikudi", "Perumparai", "Adalur", "Pannaikadu", "Kookal", "Vilpatti"
  ],
  "Industrial & Commercial Zones (Dindigul)": [
    "SIDCO Industrial Estate Dindigul", "Dindigul Fort Area",
    "Palam", "Dindigul Railway Station", "Dindigul Lock Factory Area",
    "Textiles Hub Dindigul", "MSME Hub Dindigul",
    "Dindigul Leather Tannery Zone", "Dindigul Textile Mills Cluster",
    "Oddanchatram Wholesale Agro Hub", "Dindigul Bypass Junction",
    "Dindigul Brass & Lock Works Cluster",
    "Nilakottai SIPCOT", "Chettinaickenpatti Tannery Cluster",
    "Dindigul SIDCO Phase 2", "Dindigul Coir Products Cluster",
    "Dindigul Spices & Agro Processing Park", "Chinnalapatti Handloom Saree Cluster",
    "Vedasandur Spinning & Textile Belt", "Karur Bypass Dindigul", "Trichy-Dindigul Highway Corridor"
  ],
  "Educational & College Tech Zones (Dindigul)": [
    "Gandhigram Tech Zone", "Muthanampatti PSNA Campus",
    "SSM Tech Zone Dindigul", "Mavoor Road Anna Univ Campus",
    "Christian College Zone Oddanchatram", "GTN Arts College Area",
    "NPR College Campus Natham", "RVS Engineering Campus Dindigul", "Gandhigram University Campus"
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
    "R.Vellodu", "Palayam", "Karikali", "Shenbaganur", "Perumal Malai",
    "D.Gudalur", "Devarmalai", "Sirugudi", "Pillaiyarnatham",
    "Jothampatti", "Kallupatti Dindigul", "Kombai Dindigul", "Kottaipatti",
    "Singarakottai", "Piranmalai Road", "Natham Road", "Vittalapatti", "Kallathupatti"
  ],

  // ── Coimbatore Regions (Headquarters - Comprehensive 90+ Locations) ──
  "Coimbatore City Core & Central Hubs": [
    "Gandhipuram", "RS Puram", "Peelamedu", "Saibaba Colony", "Ramanathapuram Coimbatore",
    "Race Course Coimbatore", "Town Hall Coimbatore", "Ukkadam", "Singanallur", "Ganapathy",
    "Tatabad", "Cross Cut Road", "100 Feet Road Coimbatore", "Gopalapuram Coimbatore",
    "Sivananda Colony", "Rathinapuri", "Avarampalayam", "Papanaickenpalayam", "Puliakulam",
    "Sowripalayam", "Red Fields Coimbatore", "Sukrawarpet", "R.S. Puram West", "Ram Nagar Coimbatore"
  ],
  "Coimbatore IT Parks, SEZ & Tech Corridors": [
    "Saravanampatti", "TIDEL Park Coimbatore", "CHIL SEZ IT Park", "Keeranatham",
    "KGISL Tech Park", "Vilankurichi IT SEZ", "Kalapatti", "Hopes College",
    "Avinashi Road IT Belt", "Rathinam Techzone Eachanari", "PSG Tech Zone Peelamedu",
    "Kumaraguru Tech Belt", "Neelambur IT Corridor", "Kallapalayam Tech Hub", "Vellakinar IT Hub",
    "Civil Aerodrome Coimbatore", "SITRA Coimbatore", "Goldwins Coimbatore", "Chinniyampalayam",
    "Sivanandapuram", "Saravanampatti Road"
  ],
  "Coimbatore Industrial Estates & Manufacturing Belts": [
    "Kurichi Industrial Estate", "SIDCO Malumichampatti", "Thudiyalur", "Periyanaickenpalayam",
    "Karamadai", "Mettupalayam", "Annur", "Sulur", "Palladam Road", "Pollachi",
    "Kinathukadavu", "Eachanari Industrial Belt", "Irugur", "Arasur", "Chinnavedampatti",
    "Ganapathy Foundry Cluster", "Singanallur Industrial Area", "Othakalmandapam",
    "Podanur Industrial Belt", "Chettipalayam SEZ", "Vellalore Industrial Belt",
    "Kangeyampalayam", "Sirumugai Industrial Area"
  ],
  "Coimbatore West & South Suburbs": [
    "Kuniyamuthur", "Sundarapuram", "Kovaipudur", "Vadavalli", "Kavundampalayam",
    "Idikarai", "Thondamuthur", "Perur", "Madukkarai", "Vedapatti",
    "Alandurai", "Kaniyur", "Goundampalayam", "Telungupalayam", "Selvapuram",
    "Veerakeralam", "Somayampalayam", "Chinna Thadagam", "Thadagam Road",
    "Sundakkamuthur", "Karunya Nagar", "Siruvani Road", "Pooluvapatti"
  ],
  "Coimbatore North & Greater District Towns": [
    "Narasimhanaickenpalayam", "Pannimadai", "Urumandampalayam", "Vadamadurai Coimbatore",
    "Nanjundapuram", "Anaimalai", "Valparai", "Negamam", "Kottur Coimbatore"
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

// Helper to determine exact region from category
export function getRegionFromCategory(category: string): "Coimbatore" | "Dindigul" | "Chennai" {
  const cat = (category || "").toLowerCase()
  if (cat.includes("coimbatore")) return "Coimbatore"
  if (cat.includes("dindigul") || cat.includes("kodaikanal") || cat.includes("palani")) return "Dindigul"
  return "Chennai"
}

// Generate the unique, deduplicated list of locations
const uniqueMap = new Map<string, LocationItem>()

Object.entries(regionsRaw).forEach(([category, names]) => {
  names.forEach((name) => {
    const slug = slugify(name)
    if (!uniqueMap.has(slug)) {
      uniqueMap.set(slug, {
        name,
        slug,
        category
      })
    }
  })
})

export const locationsList: LocationItem[] = Array.from(uniqueMap.values())

// Cleaned list of local SEO keywords (deduplicated automatically via Set)
export const rawKeywords: string[] = Array.from(new Set([
  // ── Core Application & Software Development ──
  "Software Development Company in [Location]",
  "Software Development Services Company in [Location]",
  "Software Development Companies in [Location]",
  "Software Developer Company in [Location]",
  "Software Developer in [Location]",
  "Software Development in [Location]",
  "Software Testing Company in [Location]",
  "Custom Software Development in [Location]",
  "Custom Software Development Agency in [Location]",
  "Full Stack Software Developers in [Location]",
  "Enterprise Software Development in [Location]",
  "Offshore Development Company in [Location]",
  "SaaS Product Development Company in [Location]",
  "API Development & Integration Services in [Location]",
  "Software Maintenance & Support Services in [Location]",
  "Application Development in [Location]",
  "Custom ERP Software Developers in [Location]",
  "Custom CRM Software Development in [Location]",
  "Enterprise Automation Solutions in [Location]",
  "Software Outsourcing Company in [Location]",
  "Dedicated Software Development Team in [Location]",

  // ── Mobile App Development ──
  "Mobile App Development in [Location]",
  "Mobile App Development Company in [Location]",
  "Mobile App Development Companies in [Location]",
  "Mobile Application Development in [Location]",
  "Mobile Application Development Company in [Location]",
  "Mobile Application Developers in [Location]",
  "Mobile App Developers in [Location]",
  "Best Mobile App Developers in [Location]",
  "Best Mobile Application Development Company in [Location]",
  "Best Mobile App Development Company in [Location]",
  "Best Mobile App Development Companies in [Location]",
  "Top Mobile App Development Companies in [Location]",
  "Top 10 Mobile App Development Companies in [Location]",
  "Mobile App (Android & iOS) Development Company in [Location]",
  "Mobile App (Android & iOS) Flutter Development Companies in [Location]",
  "Mobile App Development Company in [Location] (Android, iOS, Flutter, Hybrid)",
  "App Development in [Location]",
  "App Development Company in [Location]",
  "App Development Companies in [Location]",
  "App Developer in [Location]",
  "App Developers in [Location]",
  "Best App Developers in [Location]",
  "Android App Development in [Location]",
  "Android Application Development in [Location]",
  "Android App Development Company in [Location]",
  "Android & iOS Application Development Company in [Location]",
  "Android & iOS App Development in [Location]",
  "Android App Developer in [Location]",
  "Android Development Company in [Location]",
  "iOS App Development in [Location]",
  "iOS App Development Company in [Location]",
  "iOS Application Development Company in [Location]",
  "iOS Developer in [Location]",
  "Flutter App Development in [Location]",
  "Flutter App Development Agency in [Location]",
  "React Native App Development Company in [Location]",
  "React Native App Developers in [Location]",
  "Mobile App Developer Near Me in [Location]",
  "Mobile App & Custom Web App Developers in [Location]",
  "Hybrid Mobile App Development in [Location]",
  "Cross Platform App Developers in [Location]",

  // ── Web Design & Web Development ──
  "Web Development Company in [Location]",
  "Web Development Agency in [Location]",
  "Web Application Development in [Location]",
  "Web App Development Company in [Location]",
  "Web Design Company in [Location]",
  "Website Development in [Location]",
  "Website Design in [Location]",
  "Website Development Near Me in [Location]",
  "Website Design Near Me in [Location]",
  "Custom Website Development in [Location]",
  "Customized Website Development Company in [Location]",
  "Customized Website Designing Company in [Location]",
  "Dynamic Website Designing Company in [Location]",
  "Dynamic Website Development Company in [Location]",
  "Static Website Designing Company in [Location]",
  "Static Website Development Company in [Location]",
  "Mobile Responsive Website Designing Company in [Location]",
  "Responsive Web Designing Company in [Location]",
  "Responsive Website Design in [Location]",
  "Business Website Development in [Location]",
  "Professional Website Design in [Location]",
  "Website Redesign in [Location]",
  "Landing Page Design in [Location]",
  "Ecommerce Website Development in [Location]",
  "Ecommerce Web Development Company in [Location]",
  "Ecommerce Website Designing Company in [Location]",
  "Ecommerce Website Design Near Me in [Location]",
  "Web Designer Near Me in [Location]",
  "Website Development for Small Business in [Location]",
  "Shopify Developer in [Location]",
  "Shopify Store Development Services in [Location]",
  "Shopify Plus Development Agency in [Location]",
  "WordPress Developer in [Location]",
  "WordPress & WooCommerce Website Developers in [Location]",
  "Next.js Web Developer in [Location]",
  "Next.js Full Stack Web Development in [Location]",
  "PHP Web Development in [Location]",
  "Python Web Development Company in [Location]",
  "Web Hosting Company in [Location]",
  "Web Hosting Services Company in [Location]",
  "Website Maintenance in [Location]",
  "Website Speed Optimization in [Location]",
  "Website Security Services in [Location]",
  "Headless CMS Website Development in [Location]",
  "Jamstack Web Development Agency in [Location]",

  // ── GPS Tracking, IoT & Hardware Solutions (50+ New Specialized Additions) ──
  "GPS Vehicle Tracking System in [Location]",
  "GPS Fleet Management Software in [Location]",
  "Truck & Commercial Vehicle GPS Tracker in [Location]",
  "School Bus GPS Tracking System in [Location]",
  "Asset Tracking Software & BLE Beacon Solutions in [Location]",
  "RFID Asset Tracking System in [Location]",
  "Biometric Attendance Machine & Software in [Location]",
  "eSSL Attendance Machine Installation & Support in [Location]",
  "HRMS & Payroll Software in [Location]",
  "Employee Time Tracking Software in [Location]",
  "Industrial IoT Solutions Provider in [Location]",
  "IoT Energy Monitoring System in [Location]",
  "Smart Factory & Industry 4.0 Solutions in [Location]",
  "Industrial Power & Electricity Monitoring IoT in [Location]",
  "Garment Industry IoT & Production Monitoring in [Location]",
  "Textile Mill IoT & Automation Software in [Location]",
  "LPG Gas Leak Detection IoT System in [Location]",
  "Industrial Gas Safety & Flame Sensor IoT in [Location]",
  "Water Level & Flow Rate Monitoring IoT in [Location]",
  "Cold Storage Temperature Monitoring IoT in [Location]",
  "Smart Agriculture IoT & Automated Irrigation in [Location]",
  "IoT Gateway & Sensor Integration Services in [Location]",
  "Custom Embedded Hardware & Firmware Developers in [Location]",
  "MQTT & SCADA IoT Cloud Dashboard in [Location]",
  "Foundry & Casting Industry ERP Software in [Location]",
  "Pump & Motor Manufacturing ERP Software in [Location]",
  "Textile Spinning & Weaving ERP Software in [Location]",
  "Coir & Agro Processing ERP in [Location]",
  "Warehouse & Inventory Barcode Management Software in [Location]",
  "Retail POS Billing Software in [Location]",
  "Supermarket POS Billing System in [Location]",
  "Restaurant Billing & QR Menu Ordering Software in [Location]",
  "Hospital & Clinic Management Software in [Location]",
  "Pharmacy Billing & Expiry Tracking Software in [Location]",
  "School & College ERP Management System in [Location]",
  "Real Estate CRM & Lead Management Portal in [Location]",
  "Jewellery POS & Billing Software in [Location]",
  "Automobile Workshop & Service Center Software in [Location]",

  // ── AI, ML & Modern Automation ──
  "AI Chatbot Development in [Location]",
  "AI Software Development Company in [Location]",
  "Machine Learning Solutions Provider in [Location]",
  "Generative AI & LLM Integration in [Location]",
  "Custom AI Agent Development in [Location]",
  "WhatsApp Business API Integration & Automation in [Location]",
  "WhatsApp Chatbot Developers in [Location]",
  "Computer Vision & Quality Inspection AI in [Location]",
  "Natural Language Processing Solutions in [Location]",
  "Business Process Automation Software in [Location]",
  "AI Powered CRM & Sales Automation in [Location]",

  // ── SEO, Ads & Digital Marketing ──
  "SEO Company in [Location]",
  "SEO Services Company in [Location]",
  "SEO Services in [Location]",
  "Local SEO in [Location]",
  "Technical SEO in [Location]",
  "On-Page SEO in [Location]",
  "Off-Page SEO in [Location]",
  "SEO Audit in [Location]",
  "SEO Expert Near Me in [Location]",
  "Search Engine Optimization Services Company in [Location]",
  "Search Engine Marketing Company in [Location]",
  "Search Engine Marketing Services Company in [Location]",
  "Google Business Profile Optimization in [Location]",
  "Digital Marketing Company in [Location]",
  "Digital Marketing Services Company in [Location]",
  "Digital Marketing in [Location]",
  "Digital Marketing Services Near Me in [Location]",
  "Online Marketing in [Location]",
  "Social Media Marketing Company in [Location]",
  "Social Media Marketing Services Company in [Location]",
  "Facebook Marketing Company in [Location]",
  "Facebook Marketing Services Company in [Location]",
  "Instagram Ads in [Location]",
  "Meta Ads in [Location]",
  "Google Ads in [Location]",
  "Google Ads Management in [Location]",
  "PPC Services in [Location]",
  "SMS Marketing Services Company in [Location]",
  "Lead Generation in [Location]",
  "Lead Generation & Local SEO Agency in [Location]",

  // ── Cloud, DevOps & Full Stack Engineering ──
  "Cloud Software Development & AWS Migration in [Location]",
  "Cloud Migration & AWS Services in [Location]",
  "DevOps Services in [Location]",
  "Kubernetes & Docker Services in [Location]",
  "UI UX Design Agency in [Location]",
  "UI UX Website Designing in [Location]",
  "Figma Design Services in [Location]",
  "Progressive Web App Development in [Location]",
  "MERN Stack Developer in [Location]",
  "Node.js Developer in [Location]",
  "Python Web Development in [Location]",
  "React.js Development Company in [Location]",
  "Tailwind CSS & Frontend Engineering in [Location]",

  // ── Learning & IT Training ──
  "Programming Course in [Location]",
  "Coding Bootcamp in [Location]",
  "Online Tech Courses in [Location]",
  "Web Development Course in [Location]",
  "Python Course in [Location]",
  "Full Stack Development Course in [Location]",
  "AI & ML Course in [Location]",
  "Flutter Course in [Location]",
  "React Course in [Location]",
  "Cloud Computing Course in [Location]",
  "Software Training Institute in [Location]",
  "IT Training Center in [Location]",
  "Corporate Tech Training in [Location]",
  "Programming Training Near Me in [Location]",
  "Coding Classes in [Location]",
  "Full Stack Bootcamp in [Location]",
  "Data Science & AI Training in [Location]",
  "Java & Full Stack Course in [Location]",
  "Software Development Course in [Location]"
]))

// Helper to check if a location belongs to Coimbatore region (Headquarters)
export function isCoimbatoreLocation(category: string): boolean {
  return getRegionFromCategory(category) === "Coimbatore"
}

// Helper to check if a location belongs to Dindigul region
export function isDindigulLocation(category: string): boolean {
  return getRegionFromCategory(category) === "Dindigul"
}

// Helper to get formatted region name
export function getLocationRegionName(category: string): string {
  const region = getRegionFromCategory(category)
  return `${region}, Tamil Nadu`
}

// Get keywords formatted for a specific location
export function getKeywordsForLocation(locationName: string): string[] {
  return rawKeywords.map(keyword => 
    keyword.replace(/\[Location\]/g, locationName)
  )
}

export interface ParsedSeoSlug {
  serviceType: 'generic' | 'web-development' | 'mobile-app-development' | 'seo-services' | 'custom-software' | 'e-commerce-development' | 'ai-ml-solutions' | 'tech-training' | 'coding-bootcamp'
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
  { prefix: 'tech-training-in-', type: 'tech-training' as const, title: 'Tech Training & IT Courses' },
  { prefix: 'coding-bootcamp-in-', type: 'coding-bootcamp' as const, title: 'Coding Bootcamp & Live Mentorship' },
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
