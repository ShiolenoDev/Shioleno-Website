import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import { contactInfo } from '@/lib/site-data'

/** Canonical site origin, no trailing slash (for building URLs) */
export function getSiteOrigin (): string {
  return siteConfig.url.replace(/\/$/, '')
}

/** Open Graph + Twitter default for the whole site (1200×630-style branding asset) */
export const defaultOgImagePath = '/images/opengraph-image.png'

export const defaultOgImageAlt =
  'Shioleno Industries — reliable timelines, controlled costs, proven execution'

/** Home / social share — marketing hero (page content, not default OG) */
export const homeHeroImagePath = '/images/hero-landing.png'

/**
 * Social previews resolve via `metadataBase` in `app/layout.tsx` (see `defaultOgImagePath`).
 */
export function absoluteUrl (path: string): string {
  const base = getSiteOrigin()
  if (path === '' || path === '/') return `${base}/`
  return `${base}${path.startsWith('/') ? path : `/${path}`}`
}

const defaultRobots: Metadata['robots'] = {
  index: true,
  follow: true,
  googleBot: { index: true, follow: true, 'max-image-preview': 'large' }
}

type PageSeoInput = {
  /** Segment title only — root layout template adds " | Shioleno Industries" (except when absoluteTitle is set on the home page) */
  title: string
  description: string
  /** Path with leading slash, e.g. /about */
  path: string
  /** Set false for legal/supporting pages to reduce focus on secondary keywords */
  includeKeywords?: boolean
}

/**
 * Per-route metadata: canonical, Open Graph, Twitter, robots.
 * Home page should not use this; it sets an absolute `title` and can merge selected fields.
 */
export function buildPageMetadata ({
  title,
  description,
  path,
  includeKeywords = true
}: PageSeoInput): Metadata {
  const canonical = absoluteUrl(path)
  const openGraphTitle = `${title} | Shioleno Industries`
  const images = [
    {
      url: defaultOgImagePath,
      alt: defaultOgImageAlt
    }
  ]

  return {
    title,
    description,
    keywords: includeKeywords ? siteConfig.keywords : undefined,
    alternates: { canonical },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: canonical,
      siteName: siteConfig.name,
      title: openGraphTitle,
      description,
      images
    },
    twitter: {
      card: 'summary_large_image',
      title: openGraphTitle,
      description,
      images: [defaultOgImagePath]
    },
    robots: defaultRobots
  }
}

/** Home: unique absolute title; full URL is canonical / */
export function homeMetadata (description: string): Metadata {
  const title =
    'Shioleno Industries | Custom Casework, Millwork & Fixtures'
  const url = absoluteUrl('/')
  const images = [
    {
      url: defaultOgImagePath,
      alt: defaultOgImageAlt
    }
  ]
  return {
    title: { absolute: title },
    description,
    keywords: siteConfig.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      siteName: siteConfig.name,
      title,
      description,
      images
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [defaultOgImagePath]
    },
    robots: defaultRobots
  }
}

const orgId = () => `${getSiteOrigin()}/#organization`
const webId = () => `${getSiteOrigin()}/#website`

function organizationNode () {
  const base = getSiteOrigin()
  return {
    '@type': 'Organization' as const,
    '@id': orgId(),
    name: contactInfo.company,
    url: base,
    logo: absoluteUrl('/images/shioleno_full.svg'),
    image: absoluteUrl('/images/shioleno_full.svg'),
    email: contactInfo.email,
    telephone: '+1-817-557-9365',
    address: {
      '@type': 'PostalAddress' as const,
      streetAddress: contactInfo.addressLine1,
      addressLocality: 'Arlington',
      addressRegion: 'TX',
      postalCode: '76001',
      addressCountry: 'US'
    },
    sameAs: [contactInfo.website]
  }
}

export function ldJsonScriptContent (): string {
  const org = organizationNode()
  const website = {
    '@type': 'WebSite' as const,
    '@id': webId(),
    name: siteConfig.name,
    url: getSiteOrigin(),
    description: siteConfig.description,
    publisher: { '@id': orgId() }
  }
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [org, website]
  })
}
