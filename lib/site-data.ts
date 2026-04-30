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
    title: "Days Inn - Guest Room",
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
    description: "Full-room casegoods, millwork, and guest environment.",
    imageSrc:
      "/images/gallery/hospitality/hawthorn-ceres-california-property.jpeg",
  },
  {
    id: "g-6",
    category: "hospitality",
    title: "Hawthorn Suites — Guest Room",
    description: "Guest room suite with brand millwork and accent package.",
    imageSrc:
      "/images/gallery/hospitality/hawthorn-suites-red-accent-studio.png",
  },
  {
    id: "g-7",
    category: "hospitality",
    title: "Hospitality Lobby — Reception",
    description: "Lobby reception, guest seating, and public-area casework.",
    imageSrc:
      "/images/gallery/hospitality/hospitality-lobby-seating-reception.png",
  },
  {
    id: "g-8",
    category: "hospitality",
    title: "Howard Johnson — Guest Room",
    description: "Full-room casegoods, millwork, and guest environment.",
    imageSrc: "/images/gallery/hospitality/howard-johnson-guest-room.jpg",
  },
  {
    id: "g-9",
    category: "hospitality",
    title: "Motel 6 — Guest Room",
    description: "Economy motel guest room millwork and fixture package.",
    imageSrc: "/images/gallery/hospitality/motel-6-guest-room.png",
  },
  {
    id: "g-10",
    category: "hospitality",
    title: "Ramada — Guest Room",
    description: "Branded guest room casework, millwork, and room package.",
    imageSrc: "/images/gallery/hospitality/ramada-guest-room.png",
  },
  {
    id: "g-11",
    category: "retail",
    title: "Commercial Retail — Custom Millwork",
    description:
      "Retail environment built from the ground up with custom casework.",
    imageSrc:
      "/images/gallery/retail/commercial-retail-millwork-installation.png",
  },
  {
    id: "g-12",
    category: "retail",
    title: "Retail — Optical wear",
    description: "Optical retail sales floor, displays, and service fixtures.",
    imageSrc: "/images/gallery/retail/eyemart-express-optical-retail.png",
  },
  {
    id: "g-13",
    category: "retail",
    title: "Retail — Optical wear",
    description: "Alternate view of optical retail and merchandising layout.",
    imageSrc: "/images/gallery/retail/eyemart-express-retail-alternate.png",
  },
  {
    id: "g-14",
    category: "retail",
    title: "Retail — Cashwrap and Checkout",
    description:
      "Point-of-sale counter, cashwrap, and front-end transaction area.",
    imageSrc: "/images/gallery/retail/retail-cashwrap-and-checkout.png",
  },
  {
    id: "g-15",
    category: "retail",
    title: "Retail - Display and Checkout",
    description: "Merchandising run with integrated checkout and service zone.",
    imageSrc: "/images/gallery/retail/retail-display-and-checkout.png",
  },
  {
    id: "g-16",
    category: "retail",
    title: "Retail — U-Shaped Checkout Counter",
    description:
      "Specialty retail environment with high-traffic service counter.",
    imageSrc: "/images/gallery/retail/retail-u-shaped-checkout-counter.png",
  },
  {
    id: "g-17",
    category: "retail",
    title: "Retail — Bespoke Cashwrap",
    description:
      "Custom point-of-sale counter and front-of-house retail millwork.",
    imageSrc: "/images/gallery/retail/bespoke-retail-cashwrap.png",
  },
  {
    id: "g-18",
    category: "retail",
    title: "Retail — Bin Display",
    description:
      "Floor merchandising with bin-style display and integrated casework.",
    imageSrc: "/images/gallery/retail/retail-bin-display.jpg",
  },
  {
    id: "g-19",
    category: "retail",
    title: "Retail — Cashwrap with Slatwall Shelving",
    description:
      "Checkout run with integrated slatwall shelving for impulse and accessories.",
    imageSrc:
      "/images/gallery/retail/retail-cashwrap-integrated-slatwall-shelves.png",
  },
  {
    id: "g-20",
    category: "retail",
    title: "Retail — Designer Cashwrap Finish",
    description:
      "High-finish cashwrap with durable surfacing and brand-forward detailing.",
    imageSrc: "/images/gallery/retail/retail-cashwrap-designer-finish.png",
  },
  {
    id: "g-21",
    category: "retail",
    title: "Retail — Endcap Merchandising at Cashwrap",
    description:
      "Front-end layout with endcap display tied into the service counter.",
    imageSrc:
      "/images/gallery/retail/retail-cashwrap-integrated-endcap-merchandising.png",
  },
  {
    id: "g-22",
    category: "retail",
    title: "Retail — Slatwall Showcase",
    description:
      "Slatwall-backed showcase wall at the transaction zone for flexible fixtures.",
    imageSrc: "/images/gallery/retail/retail-cashwrap-slatwall-showcase.png",
  },
  {
    id: "g-23",
    category: "retail",
    title: "Retail — Glass Display at Cashwrap",
    description:
      "Glass-forward merchandising integrated with the checkout and wrap.",
    imageSrc: "/images/gallery/retail/retail-cashwrap-glass-displays.png",
  },
  {
    id: "g-24",
    category: "retail",
    title: "Retail — Eyewear Display",
    description:
      "Optical or specialty eyewear floor with fixture-ready millwork.",
    imageSrc: "/images/gallery/retail/retail-eyewear-display.jpg",
  },
  {
    id: "g-25",
    category: "retail",
    title: "Retail — Media and Slatwall Panel",
    description:
      "Digital or graphic media zone with slatwall-compatible surround.",
    imageSrc:
      "/images/gallery/retail/retail-media-display-slatwall-panel.jpg",
  },
  {
    id: "g-26",
    category: "retail",
    title: "Retail — Storage Display and Backwrap",
    description:
      "Sales floor storage, backwrap, and display integration in one run.",
    imageSrc: "/images/gallery/retail/retail-storage-display-backwrap.png",
  },
  {
    id: "g-27",
    category: "healthcare",
    title: "Medical Back Office — Clinic",
    description: "Clinic back office millwork and support spaces.",
    imageSrc: "/images/gallery/healthcare/arista-advanced-pet-care-clinic.jpg",
  },
  {
    id: "g-28",
    category: "healthcare",
    title: "Medical Back Office — Clinic",
    description:
      "Additional view of back office millwork and support millwork.",
    imageSrc:
      "/images/gallery/healthcare/arista-advanced-pet-care-clinic-2.jpg",
  },
  {
    id: "g-29",
    category: "healthcare",
    title: "Medical - Exam Room",
    description: "Exam room casework and clinical millwork support.",
    imageSrc: "/images/gallery/healthcare/medical-exam-room-casework.png",
  },
  {
    id: "g-30",
    category: "healthcare",
    title: "Medical Office — Reception Desk",
    description: "Healthcare reception desk, waiting, and public circulation.",
    imageSrc: "/images/gallery/healthcare/medical-office-reception-desk.png",
  },
  {
    id: "g-31",
    category: "healthcare",
    title: "Medical — Nurse Station and Casework",
    description:
      "Healthcare reception, floor-to-ceiling storage, and integrated workstation with clinical millwork.",
    imageSrc: "/images/gallery/healthcare/hta-cabinets-nurse-station.jpg",
  },
  {
    id: "g-32",
    category: "healthcare",
    title: "Medical — Hallway and Reception",
    description:
      "Reception millwork, corridor circulation, and built-in back-office support in a healthcare facility.",
    imageSrc: "/images/gallery/healthcare/hta-hallway-reception.jpg",
  },
  {
    id: "g-33",
    category: "trade",
    title: "Industrial Trade — Checkout Counter",
    description:
      "Trade and industrial service counter and customer checkout line.",
    imageSrc: "/images/gallery/trade/industrial-trade-checkout-counter.png",
  },
  {
    id: "g-34",
    category: "trade",
    title: "Trade — Desk and Sales Area",
    description: "Trade center sales environment with primary service desk.",
    imageSrc: "/images/gallery/trade/trade-desk-and-sales-area.png",
  },
  {
    id: "g-35",
    category: "trade",
    title: "Trade — Service Counter",
    description:
      "Showroom and trade counter for industrial and trade customers.",
    imageSrc: "/images/gallery/trade/trade-showroom-service-counter.png",
  },
  {
    id: "g-36",
    category: "trade",
    title: "Trade — Architectural Door Surround",
    description:
      "Commercial trade millwork and surround detailing at door openings.",
    imageSrc: "/images/gallery/trade/trade-architectural-door-surround.png",
  },
  {
    id: "g-37",
    category: "trade",
    title: "Trade — Bin Display",
    description:
      "Sales-floor bin merchandising for bulk product and high-volume SKUs.",
    imageSrc: "/images/gallery/trade/trade-bin-display.jpg",
  },
  {
    id: "g-38",
    category: "trade",
    title: "Trade — Commercial Gondola",
    description:
      "Gondola run with integrated shelving for trade showroom floors.",
    imageSrc: "/images/gallery/trade/trade-commercial-gondola.jpg",
  },
  {
    id: "g-39",
    category: "trade",
    title: "Trade — Display Shelf Unit",
    description: "Freestanding shelf unit for parts, samples, and merchandise.",
    imageSrc: "/images/gallery/trade/trade-display-shelf-unit.jpg",
  },
  {
    id: "g-40",
    category: "trade",
    title: "Trade — Entertainment Display",
    description:
      "Entertainment category display built for demos, signage, and product focus.",
    imageSrc: "/images/gallery/trade/trade-entertainment-display.png",
  },
  {
    id: "g-41",
    category: "trade",
    title: "Trade — Eyewear Retail Display",
    description:
      "Eyewear fixture package with frame presentation and service adjacency.",
    imageSrc: "/images/gallery/trade/trade-eyewear-retail-display.jpg",
  },
  {
    id: "g-42",
    category: "trade",
    title: "Trade — Eyewear Unit",
    description:
      "Compact eyewear merchandising unit for trade and showroom environments.",
    imageSrc: "/images/gallery/trade/trade-eyewear-unit.jpg",
  },
  {
    id: "g-43",
    category: "trade",
    title: "Trade — Eyewear Display System",
    description:
      "Full-height eyewear display with integrated lighting and storage.",
    imageSrc: "/images/gallery/trade/trade-eyewear-unit-render.png",
  },
  {
    id: "g-44",
    category: "trade",
    title: "Trade — Integrated Checkout and Merchandising Counter",
    description:
      "Combined service counter with front-end merchandising and transaction zone.",
    imageSrc:
      "/images/gallery/trade/trade-integrated-checkout-merchandising-counter.png",
  },
  {
    id: "g-45",
    category: "trade",
    title: "Trade — Media and Slatwall Panel",
    description:
      "Media-forward slatwall panel for digital content and flexible fixturing.",
    imageSrc: "/images/gallery/trade/trade-media-display-slatwall-panel.jpg",
  },
  {
    id: "g-46",
    category: "trade",
    title: "Trade — Modular Divider Display System",
    description:
      "Modular dividers that segment space while supporting product presentation.",
    imageSrc:
      "/images/gallery/trade/trade-modular-divider-display-system.jpg",
  },
  {
    id: "g-47",
    category: "trade",
    title: "Trade — Point of Sale and Glass Display Cases",
    description:
      "POS zone with glass cases for high-value merchandise and secure display.",
    imageSrc:
      "/images/gallery/trade/trade-point-of-sale-glass-display-cases.png",
  },
  {
    id: "g-48",
    category: "trade",
    title: "Trade — Sales Floor Kiosk",
    description:
      "Compact kiosk footprint for assisted selling on the trade floor.",
    imageSrc: "/images/gallery/trade/trade-sales-floor-kiosk.jpg",
  },
  {
    id: "g-49",
    category: "trade",
    title: "Trade — Showroom Checkout Center",
    description:
      "Central checkout hub for showroom traffic and customer wrap-up.",
    imageSrc: "/images/gallery/trade/trade-showroom-checkout-center.png",
  },
  {
    id: "g-50",
    category: "trade",
    title: "Trade — Showroom Informational Desk",
    description:
      "Information and greeter desk for wayfinding and service handoff.",
    imageSrc: "/images/gallery/trade/trade-showroom-informational-desk.png",
  },
  {
    id: "g-51",
    category: "trade",
    title: "Trade — Slatwall Display Tower",
    description: "Vertical slatwall tower for dense merchandising in a small footprint.",
    imageSrc: "/images/gallery/trade/trade-slatwall-display-tower.jpg",
  },
  {
    id: "g-52",
    category: "trade",
    title: "Trade — Slatwall Display",
    description:
      "Slatwall-based merchandising wall with accessory hooks and shelves.",
    imageSrc: "/images/gallery/trade/trade-slatwall-display.png",
  },
  {
    id: "g-53",
    category: "trade",
    title: "Trade — Specialty Display",
    description:
      "Specialty fixture for focused categories and showroom storytelling.",
    imageSrc: "/images/gallery/trade/trade-specialty-display.jpg",
  },
  {
    id: "g-54",
    category: "trade",
    title: "Trade — Storage Display and Backwrap",
    description:
      "Back-of-counter storage with customer-facing display integration.",
    imageSrc: "/images/gallery/trade/trade-storage-display-backwrap.png",
  },
  {
    id: "g-55",
    category: "trade",
    title: "Trade — Styling Consultation Station",
    description:
      "Consultation bar and workspace for assisted styling and appointments.",
    imageSrc: "/images/gallery/trade/trade-styling-consultation-station.png",
  },
  {
    id: "g-56",
    category: "trade",
    title: "Trade — Tiered Merchandising Display Table",
    description:
      "Tiered table display for featured products and showroom promos.",
    imageSrc:
      "/images/gallery/trade/trade-tiered-merchandising-display-table.png",
  },
  {
    id: "g-57",
    category: "trade",
    title: "Trade — Trade Show Display",
    description:
      "Portable-style trade show display system for events and demonstrations.",
    imageSrc: "/images/gallery/trade/trade-trade-show-display.png",
  },
  {
    id: "g-58",
    category: "trade",
    title: "Trade — Wall Panels",
    description:
      "Architectural wall panels for finish, acoustics, and brand surfaces.",
    imageSrc: "/images/gallery/trade/trade-wall-panels.jpg",
  },
  {
    id: "g-59",
    category: "trade",
    title: "Trade — Writing Station with Literature Holder",
    description:
      "Customer writing ledge with brochure and literature integration.",
    imageSrc:
      "/images/gallery/trade/trade-writing-station-literature-holder.jpg",
  },
  {
    id: "g-60",
    category: "trade",
    title: "Trade — Architectural Display Units",
    description:
      "Architectural-grade display units for showroom and corporate programs.",
    imageSrc: "/images/gallery/trade/trade-architectural-display-units.png",
  },
  {
    id: "g-61",
    category: "trade",
    title: "Trade — Corporate Reception Desk",
    description:
      "Corporate reception millwork with guest greeting and transaction support.",
    imageSrc: "/images/gallery/trade/trade-corporate-reception-desk.jpg",
  },
  {
    id: "g-62",
    category: "trade",
    title: "Trade — Display Cabinets",
    description:
      "Full-height display cabinetry with glass fronts and integrated storage.",
    imageSrc: "/images/gallery/trade/trade-display-cabinets.png",
  },
  {
    id: "g-63",
    category: "trade",
    title: "Trade — Multifunction Modular Counter System",
    description:
      "Modular counter system reconfigurable for service, wrap, and display.",
    imageSrc:
      "/images/gallery/trade/trade-multifunction-modular-counter-system.png",
  },
  {
    id: "g-64",
    category: "trade",
    title: "Trade — Pedestal Displays",
    description:
      "Pedestal platforms for hero products and showroom focal points.",
    imageSrc: "/images/gallery/trade/trade-pedestal-displays.png",
  },
  {
    id: "g-65",
    category: "trade",
    title: "Trade — Sales Floor Display",
    description:
      "Primary sales floor display for traffic zones and category blocks.",
    imageSrc: "/images/gallery/trade/trade-sales-floor-display.jpg",
  },
];

export const galleryCategoryLabels: Record<GalleryCategory, string> = {
  hospitality: "Hospitality",
  retail: "Retail",
  healthcare: "Healthcare",
  trade: "Commercial Trade",
};

/** Millwork public addresses — single source of truth (metal uses hotmail in footer/landing). */
export const millworkEmails = {
  /** Root landing millwork column, millwork footer, legal pages, Organization JSON-LD */
  info: "info@shiolenomillwork.com",
  /** /millwork/contact card, Resend `CONTACT_TO_EMAIL` fallback in API */
  sales: "sales@shiolenomillwork.com",
} as const;

export const contactInfo = {
  company: "Shioleno Industries, Inc.",
  addressLine1: "1715 Peyco Dr North",
  cityStateZip: "Arlington, TX 76001",
  phone: "817-557-9365",
  phoneDisplay: "817-557-9365",
  email: millworkEmails.sales,
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
    email: millworkEmails.info,
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
    email: millworkEmails.info,
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
