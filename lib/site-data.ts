export type NavLink = {
  label: string;
  href: string;
};

/** Millwork section primary navigation (all paths under `/millwork`). */
export const navLinks: NavLink[] = [
  { label: "Home", href: "/millwork" },
  { label: "What We Do", href: "/millwork/what-we-do" },
  { label: "Gallery", href: "/millwork/gallery" },
  { label: "About", href: "/millwork/about" },
  { label: "Contact", href: "/millwork/contact" },
];

/** Metal fabrication section — expand as new routes are added. */
export const metalNavLinks: NavLink[] = [{ label: "Home", href: "/metal" }];

type WhatWeDoSectionImage = { src: string; alt: string };

export type WhatWeDoCategory = {
  id: "retail" | "healthcare" | "hospitality" | "trade";
  title: string;
  headline: string;
  description: string;
  bullets: string[];
  /** Optional hero image for the sector card on /what-we-do (text overlays the image). */
  tileImage?: { src: string; alt: string };
  /** Three project photos in each sector’s detail section on /what-we-do */
  sectionImages: [
    WhatWeDoSectionImage,
    WhatWeDoSectionImage,
    WhatWeDoSectionImage,
  ];
};

export const whatWeDoCategories: WhatWeDoCategory[] = [
  {
    id: "hospitality",
    title: "Integrated Hospitality Environments",
    headline: "Integrated Hospitality Environments",
    description:
      "Blending function, comfort, and brand experience through custom lobby, guest room, and hospitality casework solutions.",
    bullets: [
      "Hospitality room furniture",
      "Lobby furniture and reception millwork",
      "Casegoods and storage solutions",
      "Durable materials built for high-use environments",
    ],
    tileImage: {
      src: "/images/what-we-do-hospitality.png",
      alt: "Hotel lobby with wood flooring, a striped rug, a dark-wood reception desk, a coffee and snack area, and warm overhead lighting.",
    },
    sectionImages: [
      {
        src: "/images/gallery/hospitality/g6-motel-lobby-reception.png",
        alt: "Motel 6 lobby with reception desk, brand feature wall, coffee station, and built-in seating with millwork and casework.",
      },
      {
        src: "/images/gallery/hospitality/hawthorn-suites-red-accent-studio.png",
        alt: "Hawthorn Suites studio guest room with integrated headboard millwork, kitchenette, living area, and red accent furniture.",
      },
      {
        src: "/images/gallery/hospitality/ramada-guest-room.png",
        alt: "Branded guest room with hospitality casegoods and room package millwork.",
      },
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare Environments",
    headline: "Healthcare Environments",
    description:
      "Clean, welcoming spaces built for trust, efficiency, and long-term performance in patient-facing and back-office healthcare settings.",
    bullets: [
      "Reception desks and waiting area millwork",
      "Back-office casework",
      "Exam room fixtures",
      "Durable, cleanable materials and finishes",
    ],
    tileImage: {
      src: "/images/what-we-do-healthcare.png",
      alt: "Healthcare reception with a white and blue desk, pendant lighting, and a wall message about care, with office workstations beyond.",
    },
    sectionImages: [
      {
        src: "/images/gallery/healthcare/medical-office-reception-desk.png",
        alt: "Medical office reception desk, waiting, and public circulation millwork.",
      },
      {
        src: "/images/gallery/healthcare/hta-cabinets-nurse-station.jpg",
        alt: "Healthcare nurse station with L-shaped counter, white casework, tall storage, and integrated workstation with grey countertops.",
      },
      {
        src: "/images/gallery/healthcare/arista-advanced-pet-care-clinic.jpg",
        alt: "Arista Advanced Pet Care veterinary reception and support millwork.",
      },
    ],
  },
  {
    id: "retail",
    title: "Retail Environments",
    headline: "Retail Environments",
    description:
      "Designed to drive traffic, increase visibility, and support sales through durable, functional, and brand-focused retail fixtures.",
    bullets: [
      "Retail fixtures and display systems",
      "Point-of-sale counters",
      "Cash stands and merchandising units",
      "Custom casework and store fixture solutions",
    ],
    tileImage: {
      src: "/images/what-we-do-retail.png",
      alt: "Modern retail store with a white and wood point-of-sale counter and apparel displays on the sales floor.",
    },
    sectionImages: [
      {
        src: "/images/gallery/retail/eyemart-express-optical-retail.png",
        alt: "Optical retail sales floor, Eyemart Express, with displays and point-of-service fixtures.",
      },
      {
        src: "/images/gallery/retail/retail-cashwrap-and-checkout.png",
        alt: "Retail cashwrap, checkout counter, and front-of-store transaction area.",
      },
      {
        src: "/images/gallery/retail/commercial-retail-millwork-installation.png",
        alt: "Commercial retail install with custom black casework, glass display cases, and slatwall merchandising on counter and tall units.",
      },
    ],
  },
  {
    id: "trade",
    title: "Commercial Trade",
    headline: "Commercial Trade",
    description:
      "Engineered for workflow, durability, and efficiency across trade counters, sales environments, and industrial customer-facing spaces.",
    bullets: [
      "Trade and industrial sales counters",
      "Durable work surfaces and storage",
      "Custom fixtures for high-traffic environments",
      "Built for efficient customer and team workflows",
    ],
    tileImage: {
      src: "/images/what-we-do-trade.png",
      alt: "Trade service counter with a wood and black worktop, POS stations, bar stools, and fully stocked black shelving of fittings and supplies.",
    },
    sectionImages: [
      {
        src: "/images/gallery/trade/trade-showroom-service-counter.png",
        alt: "Trade showroom service counter, industrial sales, and point-of-purchase line.",
      },
      {
        src: "/images/gallery/trade/industrial-trade-checkout-counter.png",
        alt: "Industrial trade checkout counter, customer line, and service desk.",
      },
      {
        src: "/images/gallery/trade/trade-desk-and-sales-area.png",
        alt: "Trade center main desk, sales area, and customer-facing work surfaces.",
      },
    ],
  },
];

export const aboutWhatSetsUsApart = [
  "Precision-built manufacturing systems",
  "Engineered durability and long-term performance",
  "Scalable production capacity",
  "Quality control at every stage",
];

export const aboutManufacturingAdvantage = {
  heading: "Precision That Reduces Delays & Rework",
  bullets: [
    "CNC-driven precision manufacturing",
    "Advanced panel processing and fabrication",
    "In-house TFL & HPL production",
    "Continuous investment in equipment and systems",
  ],
};

export const aboutEngineeredForDurability = {
  heading: "Stronger Construction. Better Results.",
  bullets: [
    "European cam-lock construction",
    "No staples or screws in cabinet construction",
    "99.9% product performance rate",
    "Consistent fit and finish across large orders",
    "Reduced damage, repairs, and long-term replacement costs",
  ],
};

export const aboutWhatYouCanExpect = [
  "A partner that delivers — every time",
  "A team that understands project demands",
  "Clear communication from start to finish",
  "Predictable timelines & cost-effective solutions",
];

export const aboutExecution = {
  quote:
    "We don't just manufacture — we help ensure your project runs smoothly from production to delivery.",
  bullets: [
    "Coordinated logistics and delivery",
    "Pre-shipment verification",
    "Production accuracy at scale",
    "On-time performance aligned with your schedule",
  ],
};

export const aboutOnePartner = {
  quote:
    "From engineering and manufacturing to logistics and delivery, Shioleno Industries provides a complete, end-to-end solution — so you can focus on your project, not your vendors.",
  columns: {
    manufacturing: [
      "Hospitality casegoods",
      "Healthcare millwork",
      "Retail fixtures & POS units",
      "Commercial Trade fixtures",
      "TFL & HPL panel production",
    ],
    projectSupport: [
      "Design assistance & renderings",
      "Rapid prototyping",
      "Value engineering",
    ],
    logistics: [
      "Consolidation services",
      "Just-in-time (JIT) delivery",
      "Nationwide distribution",
    ],
  },
};

/** Logos in `public/images/partner-logos` — used on /about. */
type PartnerLogo = { src: string; alt: string };

export const aboutPartnerLogos: PartnerLogo[] = [
  { src: "/images/partner-logos/cityvet.png", alt: "CityVet" },
  { src: "/images/partner-logos/daysinn.png", alt: "Days Inn" },
  {
    src: "/images/partner-logos/extendedstay.png",
    alt: "Extended Stay America",
  },
  { src: "/images/partner-logos/eyemart.png", alt: "Eyemart Express" },
  { src: "/images/partner-logos/gamestop.png", alt: "GameStop" },
  { src: "/images/partner-logos/h.png", alt: "Hilton" },
  { src: "/images/partner-logos/hawthorn.png", alt: "Hawthorn Suites" },
  { src: "/images/partner-logos/howardjohnson.png", alt: "Howard Johnson" },
  { src: "/images/partner-logos/motel6.png", alt: "Motel 6" },
  { src: "/images/partner-logos/rallyhouse.png", alt: "Rally House" },
  { src: "/images/partner-logos/ramada.png", alt: "Ramada" },
  { src: "/images/partner-logos/reece.png", alt: "Reece" },
  { src: "/images/partner-logos/rfihage.png", alt: "RFI Hage" },
  { src: "/images/partner-logos/super8.png", alt: "Super 8" },
  { src: "/images/partner-logos/titan.png", alt: "Titan" },
  { src: "/images/partner-logos/tmobile.png", alt: "T-Mobile" },
  { src: "/images/partner-logos/vpbuild.png", alt: "VP Build" },
  { src: "/images/partner-logos/wbuilders.png", alt: "W Builders" },
  { src: "/images/partner-logos/wyndam.png", alt: "Wyndham" },
];

export type GalleryCategory = "hospitality" | "retail" | "healthcare" | "trade";

/** Query key for /gallery?filter=... — sync with WhatWeDoCategory ids. */
export const GALLERY_FILTER_QUERY_KEY = "filter" as const;

const GALLERY_CATEGORY_SLUGS: readonly GalleryCategory[] = [
  "hospitality",
  "healthcare",
  "retail",
  "trade",
];

export function parseGalleryFilterParam(
  value: string | null | undefined,
): GalleryCategory | "all" {
  if (value === null || value === undefined || value === "") return "all";
  const v = value.trim().toLowerCase();
  if (v === "all") return "all";
  return (GALLERY_CATEGORY_SLUGS as readonly string[]).includes(v)
    ? (v as GalleryCategory)
    : "all";
}

export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  title: string;
  /** One-line caption for the card; also used for image alt with `title` */
  description: string;
  /** `public` path, e.g. `/images/gallery/hospitality/...` */
  imageSrc: string;
};

/**
 * Gallery images live under `public/images/gallery/{hospitality|retail|healthcare|trade}/`
 * with SEO-oriented kebab-case filenames. Add or reorder here for the /gallery page.
 */
export const galleryItems: GalleryItem[] = [
  {
    id: "g-1",
    category: "hospitality",
    title: "Days Inn Guest Room",
    description: "Hospitality millwork in guest-facing and public areas.",
    imageSrc: "/images/gallery/hospitality/days-inn-guest-areas.png",
  },
  {
    id: "g-2",
    category: "hospitality",
    title: "Extended Stay America — Lobby",
    description: "Updated extended-stay lobby reception and casework layout.",
    imageSrc:
      "/images/gallery/hospitality/extended-stay-america-lobby-revision.png",
  },
  {
    id: "g-3",
    category: "hospitality",
    title: "Extended Stay America — Lobby",
    description: "Extended-stay hotel lobby, reception, and millwork package.",
    imageSrc: "/images/gallery/hospitality/extended-stay-america-lobby.png",
  },
  {
    id: "g-4",
    category: "hospitality",
    title: "G6 Motel — Lobby and Reception",
    description:
      "Economy motel lobby, reception, and public circulation millwork.",
    imageSrc: "/images/gallery/hospitality/g6-motel-lobby-reception.png",
  },
  {
    id: "g-5",
    category: "hospitality",
    title: "Howard Johnson — Guest Room",
    description: "Hawthorn property millwork in Ceres, CA.",
    imageSrc:
      "/images/gallery/hospitality/hawthorn-ceres-california-property.jpeg",
  },
  {
    id: "g-6",
    category: "hospitality",
    title: "Hawthorn Suites — Guest Room",
    description: "Guest room suite with custom millwork and accent package.",
    imageSrc:
      "/images/gallery/hospitality/hawthorn-suites-red-accent-studio.png",
  },
  {
    id: "g-7",
    category: "hospitality",
    title: "Hospitality lobby — Reception",
    description: "Lobby reception, guest seating, and public-area casework.",
    imageSrc:
      "/images/gallery/hospitality/hospitality-lobby-seating-reception.png",
  },
  {
    id: "g-8",
    category: "hospitality",
    title: "Howard Johnson — Guest room",
    description: "Full-room casegoods, millwork, and guest environment.",
    imageSrc: "/images/gallery/hospitality/howard-johnson-guest-room.jpg",
  },
  {
    id: "g-9",
    category: "hospitality",
    title: "Motel 6 — Guest room",
    description: "Economy lodging guest room millwork and fixture package.",
    imageSrc: "/images/gallery/hospitality/motel-6-guest-room.png",
  },
  {
    id: "g-10",
    category: "hospitality",
    title: "Ramada — guest room",
    description: "Branded guest room casework, millwork, and room package.",
    imageSrc: "/images/gallery/hospitality/ramada-guest-room.png",
  },
  {
    id: "g-11",
    category: "retail",
    title: "Commercial retail — Custom Millwork",
    description:
      "Retail environment built from the ground up with custom casework.",
    imageSrc:
      "/images/gallery/retail/commercial-retail-millwork-installation.png",
  },
  {
    id: "g-12",
    category: "retail",
    title: "Eyeglass Store — Optical Retail",
    description: "Optical retail sales floor, displays, and service fixtures.",
    imageSrc: "/images/gallery/retail/eyemart-express-optical-retail.png",
  },
  {
    id: "g-13",
    category: "retail",
    title: "Eyeglass Store",
    description: "Alternate view of optical retail and merchandising layout.",
    imageSrc: "/images/gallery/retail/eyemart-express-retail-alternate.png",
  },
  {
    id: "g-14",
    category: "retail",
    title: "Retail — cashwrap and checkout",
    description:
      "Point-of-sale counter, cashwrap, and front-end transaction area.",
    imageSrc: "/images/gallery/retail/retail-cashwrap-and-checkout.png",
  },
  {
    id: "g-15",
    category: "retail",
    title: "Retail display and checkout",
    description: "Merchandising run with integrated checkout and service zone.",
    imageSrc: "/images/gallery/retail/retail-display-and-checkout.png",
  },
  {
    id: "g-16",
    category: "retail",
    title: "Video game store — checkout and cashwrap",
    description:
      "Specialty retail environment with high-traffic service counter.",
    imageSrc: "/images/gallery/retail/video-game-store-checkout-cashwrap.png",
  },
  {
    id: "g-17",
    category: "healthcare",
    title: "Medical Back Office — Clinic",
    description: "Veterinary clinic millwork, reception, and support spaces.",
    imageSrc: "/images/gallery/healthcare/arista-advanced-pet-care-clinic.jpg",
  },
  {
    id: "g-18",
    category: "healthcare",
    title: "Medical Back Office — Clinic",
    description: "Additional view of patient-facing and support millwork.",
    imageSrc:
      "/images/gallery/healthcare/arista-advanced-pet-care-clinic-2.jpg",
  },
  {
    id: "g-19",
    category: "healthcare",
    title: "Medical Exam Room",
    description: "Exam room casework, panels, and clinical millwork support.",
    imageSrc: "/images/gallery/healthcare/medical-exam-room-casework.png",
  },
  {
    id: "g-20",
    category: "healthcare",
    title: "Medical Office — Reception Desk",
    description: "Healthcare reception desk, waiting, and public circulation.",
    imageSrc: "/images/gallery/healthcare/medical-office-reception-desk.png",
  },
  {
    id: "g-21",
    category: "healthcare",
    title: "Medical — Nurse Station and Casework",
    description:
      "L-shaped healthcare reception, floor-to-ceiling storage, and integrated workstation with clinical millwork.",
    imageSrc: "/images/gallery/healthcare/hta-cabinets-nurse-station.jpg",
  },
  {
    id: "g-22",
    category: "healthcare",
    title: "Medical — Hallway and Reception",
    description:
      "Reception millwork, corridor circulation, and built-in back-office support in a healthcare facility.",
    imageSrc: "/images/gallery/healthcare/hta-hallway-reception.jpg",
  },
  {
    id: "g-23",
    category: "trade",
    title: "Industrial Trade — Checkout counter",
    description:
      "Trade and industrial service counter and customer checkout line.",
    imageSrc: "/images/gallery/trade/industrial-trade-checkout-counter.png",
  },
  {
    id: "g-24",
    category: "trade",
    title: "Trade — Desk and Sales Area",
    description:
      "Trade center sales environment with primary service desk and floor plan.",
    imageSrc: "/images/gallery/trade/trade-desk-and-sales-area.png",
  },
  {
    id: "g-25",
    category: "trade",
    title: "Trade — Service Counter",
    description:
      "Showroom and trade counter for industrial and trade customers.",
    imageSrc: "/images/gallery/trade/trade-showroom-service-counter.png",
  },
];

export const galleryCategoryLabels: Record<GalleryCategory, string> = {
  hospitality: "Hospitality",
  retail: "Retail",
  healthcare: "Healthcare",
  trade: "Commercial Trade",
};

export const contactInfo = {
  company: "Shioleno Industries, Inc.",
  addressLine1: "1715 Peyco Dr North",
  cityStateZip: "Arlington, TX 76001",
  phone: "817-557-9365",
  phoneDisplay: "817-557-9365",
  email: "sales@shiolenomillwork.com",
  website: "https://www.shiolenoindustries.com",
  websiteDisplay: "www.shiolenoindustries.com",
};

export const homeHeadline =
  "Purpose-Built Environments with Seamless Integration — Across Industries";

export const homeSubheadline =
  "Nationwide manufacturing partner for Hospitality, Healthcare, Retail and Commercial Trade Environments, including your special project.";

type HomeDepartmentContact = {
  id: "millwork" | "metal";
  title: string;
  phoneTel: string;
  phoneDisplay: string;
  email: string;
};

/** Phone / email lines in the footer by fabrication team (millwork vs metal). */
export const homeDepartmentContacts: [
  HomeDepartmentContact,
  HomeDepartmentContact,
] = [
  {
    id: "millwork",
    title: "Millwork fabrication",
    phoneTel: "8175579365",
    phoneDisplay: "(817) 557-9365",
    email: "info@shiolenomillwork.com",
  },
  {
    id: "metal",
    title: "Metal fabrication",
    phoneTel: "8174659361",
    phoneDisplay: "(817) 465-9361",
    email: "sii2013@hotmail.com",
  },
];

type SplitLandingDepartment = {
  id: "wood" | "metal";
  title: string;
  /** Destination when the panel heading or block is activated */
  href: string;
  phoneTel: string;
  phoneDisplay: string;
  email: string;
};

/**
 * Root landing split — matches legacy division lines (wood millwork vs metal).
 * Headlines link to `/millwork` and `/metal`.
 */
export const splitLandingDepartments: [
  SplitLandingDepartment,
  SplitLandingDepartment,
] = [
  {
    id: "wood",
    title: "Millwork fabrication",
    href: "/millwork",
    phoneTel: "8175579365",
    phoneDisplay: "(817) 557 9365",
    email: "info@shioleno.com",
  },
  {
    id: "metal",
    title: "Metal fabrication",
    href: "/metal",
    phoneTel: "8174659361",
    phoneDisplay: "(817) 465 9361",
    email: "sii2013@hotmail.com",
  },
];
