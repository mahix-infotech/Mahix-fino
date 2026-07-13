import { MetadataRoute } from 'next'
import { locationsList } from '@/lib/seo-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mahixinfotech.com'

  const baseRoutes = [
    '',
    '/about',
    '/careers',
    '/contact',
    '/portfolio',
    '/blog',
    '/services',
    '/services/web-development',
    '/services/mobile-apps',
    '/services/custom-software',
    '/services/shopify-development',
    '/services/cloud',
    '/services/ai-ml',
    '/services/crm-solutions',
    '/services/it-consulting',
    '/services/digital-transformation',
    '/services/e-commerce-development',
    '/services/digital-marketing',
    '/services/seo',
    '/services/google-ads',
    '/services/meta-ads',
  ]

  const localRoutes = locationsList.map((loc) => `/seo/${loc.slug}`)
  const allRoutes = [...baseRoutes, ...localRoutes]

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/services/') ? 0.8 : route.startsWith('/seo/') ? 0.7 : 0.6,
  }))
}
