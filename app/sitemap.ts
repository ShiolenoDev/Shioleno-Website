import type { MetadataRoute } from 'next'
import { getSiteOrigin } from '@/lib/seo'

const base = getSiteOrigin()

const routes: {
  path: string
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}[] = [
  { path: '', changeFrequency: 'monthly', priority: 1 },
  { path: '/what-we-do', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/gallery', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.25 },
  { path: '/terms-of-use', changeFrequency: 'yearly', priority: 0.25 }
]

export default function sitemap (): MetadataRoute.Sitemap {
  const now = new Date()
  return routes.map((r) => ({
    url: r.path === '' ? `${base}/` : `${base}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority
  }))
}
