export type NavLink = {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'What We Do', href: '/what-we-do' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
]

export type WhatWeDoSectionImage = { src: string; alt: string }

export type WhatWeDoCategory = {
  id: 'retail' | 'healthcare' | 'hospitality' | 'trade'
  title: string
  shortLabel: string
  headline: string
  description: string
  bullets: string[]
  /** Optional hero image for the sector card on /what-we-do (text overlays the image). */
  tileImage?: { src: string; alt: string }
  /** Three project photos in each sector’s detail section on /what-we-do */
  sectionImages: [WhatWeDoSectionImage, WhatWeDoSectionImage, WhatWeDoSectionImage]
}

export const whatWeDoCategories: WhatWeDoCategory[] = [
  {
    id: 'retail',
    title: 'Retail Environments',
    shortLabel: 'Retail',
    headline: 'Retail Environments',
    description:
      'Designed to drive traffic, increase visibility, and support sales through durable, functional, and brand-focused retail fixtures.',
    bullets: [
      'Retail fixtures and display systems',
      'Point-of-sale counters',
      'Cash stands and merchandising units',
      'Custom casework and store fixture solutions'
    ],
    tileImage: {
      src: '/images/what-we-do-retail.png',
      alt:
        'Modern retail store with a white and wood point-of-sale counter and apparel displays on the sales floor.'
    },
    sectionImages: [
      {
        src: '/images/gallery/retail/eyemart-express-optical-retail.png',
        alt: 'Optical retail sales floor, Eyemart Express, with displays and point-of-service fixtures.'
      },
      {
        src: '/images/gallery/retail/retail-cashwrap-and-checkout.png',
        alt: 'Retail cashwrap, checkout counter, and front-of-store transaction area.'
      },
      {
        src: '/images/gallery/retail/video-game-store-checkout-cashwrap.png',
        alt: 'Specialty retail store checkout, cashwrap, and service counter.'
      }
    ]
  },
  {
    id: 'healthcare',
    title: 'Healthcare Environments',
    shortLabel: 'Healthcare',
    headline: 'Healthcare Environments',
    description:
      'Clean, welcoming spaces built for trust, efficiency, and long-term performance in patient-facing and back-office healthcare settings.',
    bullets: [
      'Reception desks and waiting area millwork',
      'Back-office casework',
      'Exam room fixtures',
      'Durable, cleanable materials and finishes'
    ],
    tileImage: {
      src: '/images/what-we-do-healthcare.png',
      alt:
        'Healthcare reception with a white and blue desk, pendant lighting, and a wall message about care, with office workstations beyond.'
    },
    sectionImages: [
      {
        src: '/images/gallery/healthcare/medical-office-reception-desk.png',
        alt: 'Medical office reception desk, waiting, and public circulation millwork.'
      },
      {
        src: '/images/gallery/healthcare/medical-exam-room-casework.png',
        alt: 'Medical exam room with clinical casework and exam millwork.'
      },
      {
        src: '/images/gallery/healthcare/arista-advanced-pet-care-clinic.jpg',
        alt: 'Arista Advanced Pet Care veterinary reception and support millwork.'
      }
    ]
  },
  {
    id: 'hospitality',
    title: 'Integrated Hospitality Environments',
    shortLabel: 'Hospitality',
    headline: 'Integrated Hospitality Environments',
    description:
      'Blending function, comfort, and brand experience through custom lobby, guest room, and hospitality casework solutions.',
    bullets: [
      'Hospitality room furniture',
      'Lobby furniture and reception millwork',
      'Casegoods and storage solutions',
      'Durable materials built for high-use environments'
    ],
    tileImage: {
      src: '/images/what-we-do-hospitality.png',
      alt:
        'Hotel lobby with wood flooring, a striped rug, a dark-wood reception desk, a coffee and snack area, and warm overhead lighting.'
    },
    sectionImages: [
      {
        src: '/images/gallery/hospitality/extended-stay-america-lobby.png',
        alt: 'Extended-stay hotel lobby, reception, and public circulation millwork.'
      },
      {
        src: '/images/gallery/hospitality/hotel-lobby-reception-desk.png',
        alt: 'Hotel front desk, lobby millwork, and guest reception feature.'
      },
      {
        src: '/images/gallery/hospitality/ramada-guest-room.png',
        alt: 'Branded guest room with hospitality casegoods and room package millwork.'
      }
    ]
  },
  {
    id: 'trade',
    title: 'Trade & Industrial',
    shortLabel: 'Trade',
    headline: 'Trade & Industrial',
    description:
      'Engineered for workflow, durability, and efficiency across trade counters, sales environments, and industrial customer-facing spaces.',
    bullets: [
      'Trade and industrial sales counters',
      'Durable work surfaces and storage',
      'Custom fixtures for high-traffic environments',
      'Built for efficient customer and team workflows'
    ],
    tileImage: {
      src: '/images/what-we-do-trade.png',
      alt:
        'Trade service counter with a wood and black worktop, POS stations, bar stools, and fully stocked black shelving of fittings and supplies.'
    },
    sectionImages: [
      {
        src: '/images/gallery/trade/trade-showroom-service-counter.png',
        alt: 'Trade showroom service counter, industrial sales, and point-of-purchase line.'
      },
      {
        src: '/images/gallery/trade/industrial-trade-checkout-counter.png',
        alt: 'Industrial trade checkout counter, customer line, and service desk.'
      },
      {
        src: '/images/gallery/trade/trade-desk-and-sales-area.png',
        alt: 'Trade center main desk, sales area, and customer-facing work surfaces.'
      }
    ]
  }
]

export const aboutWhatSetsUsApart = [
  'Precision-built manufacturing systems',
  'Engineered durability and long-term performance',
  'Scalable production capacity',
  'Quality control at every stage'
]

export const aboutManufacturingAdvantage = {
  heading: 'Precision That Reduces Delays & Rework',
  bullets: [
    'CNC-driven precision manufacturing',
    'Advanced panel processing and fabrication',
    'In-house TFL & HPL production',
    'Continuous investment in equipment and systems'
  ]
}

export const aboutEngineeredForDurability = {
  heading: 'Stronger Construction. Better Results.',
  bullets: [
    'European cam-lock construction',
    'No staples or screws in cabinet construction',
    '99.9% product performance rate',
    'Consistent fit and finish across large orders',
    'Reduced damage, repairs, and long-term replacement costs'
  ]
}

export const aboutWhatYouCanExpect = [
  'A partner that delivers — every time',
  'A team that understands project demands',
  'Clear communication from start to finish',
  'Predictable timelines & cost-effective solutions'
]

export const aboutExecution = {
  quote:
    "We don't just manufacture — we help ensure your project runs smoothly from production to delivery.",
  bullets: [
    'Coordinated logistics and delivery',
    'Pre-shipment verification',
    'Production accuracy at scale',
    'On-time performance aligned with your schedule'
  ]
}

export const aboutOnePartner = {
  quote:
    'From engineering and manufacturing to logistics and delivery, Shioleno Industries provides a complete, end-to-end solution — so you can focus on your project, not your vendors.',
  columns: {
    manufacturing: [
      'Hospitality casegoods',
      'TFL & HPL panel production',
      'Metal fabrication & finishing',
      'Retail fixtures & POS units',
      'Healthcare millwork'
    ],
    projectSupport: [
      'Design assistance & renderings',
      'Rapid prototyping',
      'Value engineering'
    ],
    logistics: [
      'Consolidation services',
      'Just-in-time (JIT) delivery',
      'Nationwide distribution'
    ]
  }
}

/** Logos in `public/images/partner-logos` — used on /about. */
export type PartnerLogo = { src: string; alt: string }

export const aboutPartnerLogos: PartnerLogo[] = [
  { src: '/images/partner-logos/cityvet.png', alt: 'CityVet' },
  { src: '/images/partner-logos/daysinn.png', alt: 'Days Inn' },
  { src: '/images/partner-logos/extendedstay.png', alt: 'Extended Stay America' },
  { src: '/images/partner-logos/eyemart.png', alt: 'Eyemart Express' },
  { src: '/images/partner-logos/gamestop.png', alt: 'GameStop' },
  { src: '/images/partner-logos/h.png', alt: 'Hilton' },
  { src: '/images/partner-logos/hawthorn.png', alt: 'Hawthorn Suites' },
  { src: '/images/partner-logos/howardjohnson.png', alt: 'Howard Johnson' },
  { src: '/images/partner-logos/jdm.png', alt: 'JDM' },
  { src: '/images/partner-logos/rallyhouse.png', alt: 'Rally House' },
  { src: '/images/partner-logos/ramada.png', alt: 'Ramada' },
  { src: '/images/partner-logos/reece.png', alt: 'Reece' },
  { src: '/images/partner-logos/rfihage.png', alt: 'RFI Hage' },
  { src: '/images/partner-logos/super8.png', alt: 'Super 8' },
  { src: '/images/partner-logos/titan.png', alt: 'Titan' },
  { src: '/images/partner-logos/tmobile.png', alt: 'T-Mobile' },
  { src: '/images/partner-logos/vpbuild.png', alt: 'VP Build' },
  { src: '/images/partner-logos/wbuilders.png', alt: 'W Builders' },
  { src: '/images/partner-logos/wyndam.png', alt: 'Wyndham' }
]

export type GalleryCategory = 'hospitality' | 'retail' | 'healthcare' | 'trade'

export type GalleryItem = {
  id: string
  category: GalleryCategory
  title: string
  /** One-line caption for the card; also used for image alt with `title` */
  description: string
  /** `public` path, e.g. `/images/gallery/hospitality/...` */
  imageSrc: string
}

/**
 * Gallery images live under `public/images/gallery/{hospitality|retail|healthcare|trade}/`
 * with SEO-oriented kebab-case filenames. Add or reorder here for the /gallery page.
 */
export const galleryItems: GalleryItem[] = [
  {
    id: 'g-1',
    category: 'hospitality',
    title: 'Days Inn guest areas',
    description: 'Hospitality millwork in guest-facing and public areas.',
    imageSrc: '/images/gallery/hospitality/days-inn-guest-areas.png'
  },
  {
    id: 'g-2',
    category: 'hospitality',
    title: 'Extended Stay America — lobby (revision)',
    description: 'Updated extended-stay lobby reception and casework layout.',
    imageSrc: '/images/gallery/hospitality/extended-stay-america-lobby-revision.png'
  },
  {
    id: 'g-3',
    category: 'hospitality',
    title: 'Extended Stay America — lobby',
    description: 'Extended-stay hotel lobby, reception, and millwork package.',
    imageSrc: '/images/gallery/hospitality/extended-stay-america-lobby.png'
  },
  {
    id: 'g-4',
    category: 'hospitality',
    title: 'G6 motel — lobby and reception',
    description: 'Economy motel lobby, reception, and public circulation millwork.',
    imageSrc: '/images/gallery/hospitality/g6-motel-lobby-reception.png'
  },
  {
    id: 'g-5',
    category: 'hospitality',
    title: 'Hawthorn — Ceres, California',
    description: 'Hawthorn property millwork in Ceres, CA.',
    imageSrc: '/images/gallery/hospitality/hawthorn-ceres-california-property.jpeg'
  },
  {
    id: 'g-6',
    category: 'hospitality',
    title: 'Hawthorn Suites — studio with red accents',
    description: 'Studio suite guest room with custom millwork and accent package.',
    imageSrc: '/images/gallery/hospitality/hawthorn-suites-red-accent-studio.png'
  },
  {
    id: 'g-7',
    category: 'hospitality',
    title: 'Hospitality lobby — reception and seating',
    description: 'Lobby reception, guest seating, and public-area casework.',
    imageSrc: '/images/gallery/hospitality/hospitality-lobby-seating-reception.png'
  },
  {
    id: 'g-8',
    category: 'hospitality',
    title: 'Hotel cabinetry and casegoods',
    description: 'Guest-room and back-of-house cabinet and casegood installation.',
    imageSrc: '/images/gallery/hospitality/hotel-cabinetry-casegoods.jpg'
  },
  {
    id: 'g-9',
    category: 'hospitality',
    title: 'Hotel corridor millwork',
    description: 'Hallway casegoods and corridor millwork in a full-service hotel.',
    imageSrc: '/images/gallery/hospitality/hotel-hallway-casegoods.jpg'
  },
  {
    id: 'g-10',
    category: 'hospitality',
    title: 'Hotel lobby — reception desk',
    description: 'Front-desk and lobby reception feature as part of a hospitality program.',
    imageSrc: '/images/gallery/hospitality/hotel-lobby-reception-desk.png'
  },
  {
    id: 'g-11',
    category: 'hospitality',
    title: 'Howard Johnson — guest room',
    description: 'Full-room casegoods, millwork, and guest environment.',
    imageSrc: '/images/gallery/hospitality/howard-johnson-guest-room.jpg'
  },
  {
    id: 'g-12',
    category: 'hospitality',
    title: 'Motel 6 — guest room',
    description: 'Economy lodging guest room millwork and fixture package.',
    imageSrc: '/images/gallery/hospitality/motel-6-guest-room.png'
  },
  {
    id: 'g-13',
    category: 'hospitality',
    title: 'Ramada — guest room',
    description: 'Branded guest room casework, millwork, and room package.',
    imageSrc: '/images/gallery/hospitality/ramada-guest-room.png'
  },
  {
    id: 'g-14',
    category: 'retail',
    title: 'Commercial retail — millwork installation',
    description: 'Retail environment built from the ground up with custom casework.',
    imageSrc: '/images/gallery/retail/commercial-retail-millwork-installation.png'
  },
  {
    id: 'g-15',
    category: 'retail',
    title: 'Eyemart Express — optical retail',
    description: 'Optical retail sales floor, displays, and service fixtures.',
    imageSrc: '/images/gallery/retail/eyemart-express-optical-retail.png'
  },
  {
    id: 'g-16',
    category: 'retail',
    title: 'Eyemart Express — retail (alternate)',
    description: 'Alternate view of optical retail and merchandising layout.',
    imageSrc: '/images/gallery/retail/eyemart-express-retail-alternate.png'
  },
  {
    id: 'g-17',
    category: 'retail',
    title: 'Retail — cashwrap and checkout',
    description: 'Point-of-sale counter, cashwrap, and front-end transaction area.',
    imageSrc: '/images/gallery/retail/retail-cashwrap-and-checkout.png'
  },
  {
    id: 'g-18',
    category: 'retail',
    title: 'Retail display and checkout',
    description: 'Merchandising run with integrated checkout and service zone.',
    imageSrc: '/images/gallery/retail/retail-display-and-checkout.png'
  },
  {
    id: 'g-19',
    category: 'retail',
    title: 'Video game store — checkout and cashwrap',
    description: 'Specialty retail environment with high-traffic service counter.',
    imageSrc: '/images/gallery/retail/video-game-store-checkout-cashwrap.png'
  },
  {
    id: 'g-20',
    category: 'healthcare',
    title: 'Arista Advanced Pet Care — clinic',
    description: 'Veterinary clinic millwork, reception, and support spaces.',
    imageSrc: '/images/gallery/healthcare/arista-advanced-pet-care-clinic.jpg'
  },
  {
    id: 'g-21',
    category: 'healthcare',
    title: 'Arista Advanced Pet Care — detail',
    description: 'Additional view of patient-facing and support millwork.',
    imageSrc: '/images/gallery/healthcare/arista-advanced-pet-care-clinic-2.jpg'
  },
  {
    id: 'g-22',
    category: 'healthcare',
    title: 'Medical exam room',
    description: 'Exam room casework, panels, and clinical millwork support.',
    imageSrc: '/images/gallery/healthcare/medical-exam-room-casework.png'
  },
  {
    id: 'g-23',
    category: 'healthcare',
    title: 'Medical office — reception desk',
    description: 'Healthcare reception desk, waiting, and public circulation.',
    imageSrc: '/images/gallery/healthcare/medical-office-reception-desk.png'
  },
  {
    id: 'g-24',
    category: 'trade',
    title: 'Industrial trade — checkout counter',
    description: 'Trade and industrial service counter and customer checkout line.',
    imageSrc: '/images/gallery/trade/industrial-trade-checkout-counter.png'
  },
  {
    id: 'g-25',
    category: 'trade',
    title: 'Trade — desk and sales area',
    description: 'Trade center sales environment with primary service desk and floor plan.',
    imageSrc: '/images/gallery/trade/trade-desk-and-sales-area.png'
  },
  {
    id: 'g-26',
    category: 'trade',
    title: 'Trade showroom — service counter',
    description: 'Showroom and trade counter for industrial and trade customers.',
    imageSrc: '/images/gallery/trade/trade-showroom-service-counter.png'
  }
]

export const galleryCategoryLabels: Record<GalleryCategory, string> = {
  hospitality: 'Hospitality',
  retail: 'Retail',
  healthcare: 'Healthcare',
  trade: 'Trade'
}

export const contactInfo = {
  company: 'Shioleno Industries, Inc.',
  addressLine1: '1715 Peyco Dr North',
  cityStateZip: 'Arlington, TX 76001',
  phone: '817-557-9365',
  phoneDisplay: '817-557-9365',
  email: 'sales@shiolenomillwork.com',
  website: 'https://www.shiolenoindustries.com',
  websiteDisplay: 'www.shiolenoindustries.com'
}

export const homeHeadline =
  'Purpose-Built Environments with Seamless Integration — Across Industries'

export const homeSubheadline =
  'Nationwide manufacturing partner for Hospitality, Healthcare, Retail and Trade Environments'

export type HomeDepartmentContact = {
  id: 'millwork' | 'metal'
  title: string
  phoneTel: string
  phoneDisplay: string
  email: string
}

/** Shown on the home page — direct lines by fabrication team. */
export const homeDepartmentContacts: [HomeDepartmentContact, HomeDepartmentContact] = [
  {
    id: 'millwork',
    title: 'Millwork fabrication',
    phoneTel: '8175579365',
    phoneDisplay: '(817) 557-9365',
    email: 'info@shiolenomillwork.com'
  },
  {
    id: 'metal',
    title: 'Metal fabrication',
    phoneTel: '8174659361',
    phoneDisplay: '(817) 465-9361',
    email: 'sii2013@hotmail.com'
  }
]
