import { Metadata } from "next";
import {
  BreadcrumbList,
  FAQPage,
  ListItem,
  ProfessionalService,
  Question,
  Service
} from "schema-dts";

const BUSINESS_NAME = "Bessa Community Apps";
export const KEYWORD = "Mobile Development and Consulting";
export const TITLE = "Mobile Development and Consulting for Impactful Apps";
const DESCRIPTION =
  "Building and publishing revolutionary cross-platform apps to the Apple App Store and Google Play for innovators, organizations, and communities.";
export const URL = "https://bessaapps.com";

export const BOOKING_LINK = "https://calendar.app.google/uGBwb7WfWXLUgSU6A";

export const LINKS = [
  { href: "/#works", anchor: "Works" },
  { href: "/#about", anchor: "About" },
  { href: "/contact", anchor: "Contact" }
];

export const SOCIALS = [
  "https://linkedin.com/company/bessaapps",
  "https://github.com/bessaapps",
  "https://x.com/bessaapps"
];

export const FAQS = {
  "What services do you provide?":
    "I provide people with a full spectrum of services, including validation, development, quality assurance, distribution, maintenance, and marketing to ensure your app goes all the way from ideation to a successful launch. If you’re interested in any one or all of these app services or if you need something more custom, don’t hesitate to book a consultation.",
  "Who do you serve?":
    "My services are available but not limited to innovative communities and organizations such as non-profits and educational institutions. But if you have an idea you think will enable others to live more plentiful and meaningful lives, then I’d love to work together.",
  "What does cross-platform mean?":
    '"Cross-platform" describes apps that work on mobile devices as well as on the web. You can download and use them directly on your desktop or smartphone or use them from within a browser. The advantage of developing and keeping a cross-platform app is that you can maximize your app’s impact and reach.',
  "What are the Apple App Store and Google Play?":
    "Publishing your app to the Apple App Store, Google Play, and other app stores is an effective way to get your impactful idea in the hands of those who want and need it the most. I’ll develop your app to be cross-platform, making it quick and easy to distribute via the app stores as well as via the web.",
  "Will my app be available online?":
    "Yes! Your app will be accessible on just about any device. In addition to being able to download your app, your audience can access your app from within a browser. This gives your app idea more reach.",
  "What is React Native?":
    "React Native is what I use to ensure your app is cross-platform and accessible from any device. With this framework, we’ll ensure your app is accessible on any device.",
  "How much do your services cost?":
    "I offer a free consultation. I charge $50/hr. after that. Typical projects range from $3,000 to $10,000.",
  "Will you sign a non-disclosure agreement (NDA)?":
    "Yes, of course! Your ideas are your own. I’m just here to help turn your ideas into an impactful app that you own, profit from, and can be proud of."
};

export const METADATA: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: TITLE,
    images: [
      {
        url: `${URL}/images/opengraph-image.png`
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
    card: "summary_large_image",
    creator: "@bessaapps",
    images: [
      {
        url: `${URL}/images/twitter-image.png`
      }
    ]
  }
};

export const PROFESSIONAL_SERVICE: ProfessionalService = {
  "@type": "ProfessionalService",
  name: BUSINESS_NAME,
  url: URL,
  logo: `${URL}/logo.png`,
  image: `${URL}/images/opengraph-image.png`,
  description: DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89104",
    addressCountry: "US"
  },
  priceRange: "$1500+",
  sameAs: SOCIALS
};

export const FAQ_PAGE: FAQPage = {
  "@type": "FAQPage",
  mainEntity: Object.entries(FAQS).map(
    ([key, value]): Question => ({
      "@type": "Question",
      name: key,
      acceptedAnswer: { "@type": "Answer", text: value }
    })
  )
};

export const BREADCRUMB_LIST: BreadcrumbList = {
  "@type": "BreadcrumbList",
  itemListElement: [
    ...LINKS.map(
      ({ href, anchor }, index): ListItem => ({
        "@type": "ListItem",
        position: index + 1,
        name: anchor,
        item: `${URL}${href}`
      })
    ),
    {
      "@type": "ListItem",
      position: LINKS.length + 1,
      name: "Launchpad",
      item: `${URL}/launchpad`
    }
  ]
};

export const SERVICE: Service = {
  "@type": "Service",
  provider: {
    "@type": "Organization",
    name: BUSINESS_NAME
  },
  areaServed: "Worldwide"
};
