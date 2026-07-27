import { locationsList, seoServicesList } from "../src/lib/seo-data"

const HOST = "mahixinfotech.com"
const BASE_URL = `https://${HOST}`
const INDEXNOW_KEY = "mahix8608610760indexnowkey2026"
const KEY_LOCATION = `${BASE_URL}/${INDEXNOW_KEY}.txt`

const baseRoutes = [
  "",
  "/about",
  "/careers",
  "/contact",
  "/portfolio",
  "/blog",
  "/services",
  "/services/web-development",
  "/services/mobile-apps",
  "/services/custom-software",
  "/services/shopify-development",
  "/services/cloud",
  "/services/ai-ml",
  "/services/crm-solutions",
  "/services/it-consulting",
  "/services/digital-transformation",
  "/services/e-commerce-development",
  "/services/digital-marketing",
  "/services/seo",
  "/services/google-ads",
  "/services/meta-ads",
]

async function runIndexNow() {
  console.log("🚀 Starting IndexNow URL Generation & Instant Search Indexing...")

  const seoRoutes: string[] = []
  locationsList.forEach((loc) => {
    seoRoutes.push(`/seo/${loc.slug}`)
    seoServicesList.forEach((svc) => {
      seoRoutes.push(`/seo/${svc.prefix}${loc.slug}`)
    })
  })

  const allRelativeRoutes = Array.from(new Set([...baseRoutes, ...seoRoutes]))
  const allFullUrls = allRelativeRoutes.map((route) => `${BASE_URL}${route}`)

  console.log(`📍 Generated ${allFullUrls.length} unique URLs for IndexNow submission.`)
  console.log(`🔑 Verification Key File: ${KEY_LOCATION}`)

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: allFullUrls,
  }

  const endpoints = [
    "https://api.indexnow.org/indexnow",
    "https://www.bing.com/indexnow",
  ]

  for (const endpoint of endpoints) {
    try {
      console.log(`📡 Submitting ${allFullUrls.length} URLs to ${endpoint}...`)
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(payload),
      })

      if (response.status === 200 || response.status === 202) {
        console.log(`✅ [${endpoint}] Submission Successful! Status: ${response.status}`)
      } else {
        const text = await response.text()
        console.log(`⚠️ [${endpoint}] Response Status ${response.status}: ${text || "No response body"}`)
      }
    } catch (err) {
      console.error(`❌ Error submitting to ${endpoint}:`, err)
    }
  }

  console.log("\n🎉 IndexNow instant indexing pipeline completed successfully!")
}

runIndexNow()
