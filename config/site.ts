export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Shioleno Industries",
  url: "https://www.shiolenoindustries.com/",
  description: `Nationwide manufacturing partner for custom casework, millwork, and fixtures across hospitality, healthcare, retail, and commercial trade environments — including special projects. Precision-built, engineered for scale.`,
  /** Meta keywords: comma-separated; keep aligned with page topics for SEO */
  keywords: [
    'Shioleno Industries',
    'custom casework',
    'millwork',
    'store fixtures',
    'hospitality casegoods',
    'healthcare millwork',
    'retail fixtures',
    'TFL',
    'HPL',
    'metal fabrication',
    'manufacturing',
    'Arlington Texas',
    'nationwide distribution'
  ].join(', '),
  mainNav: [],
  descriptions: {},
  metal: {
    phone: "(817) 465 9361",
    fax: "(817) 465-9364",
    email: "sii2013@hotmail.com",
    contact: "Anthony Shioleno",
  },
  wood: {
    phone: "(817) 557 9365",
    fax: "(817) 557-9495 ",
    email: "shioleno@swbell.net",
    contact: "Chris Shioleno",
  },
  links: {},
};

export type LinksType = typeof siteConfig.links;
