import type { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "Client Portfolio & Real Meta Ads Campaign Screenshots | Boosting Agency BD",
  description:
    "View 49+ verified client business pages and 44 real Meta Ads Manager campaign screenshots (Message Lead Campaigns and Website Purchase Campaigns) by Boosting Agency BD.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://boostingagencyofficial.site/portfolio",
    languages: {
      "en-US": "https://boostingagencyofficial.site/portfolio",
      "bn-BD": "https://boostingagencyofficial.site/portfolio",
      "x-default": "https://boostingagencyofficial.site/portfolio",
    },
  },
  openGraph: {
    title: "Client Portfolio & Real Meta Ads Campaign Screenshots | Boosting Agency BD",
    description:
      "Explore real Meta Ads Manager campaign screenshots and 49+ client businesses across e-commerce, fashion, furniture, education, and local services.",
    url: "https://boostingagencyofficial.site/portfolio",
    siteName: "Boosting Agency BD",
    type: "website",
    images: [
      {
        url: "https://boostingagencyofficial.site/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_650757177_122222877572514031_7591552409511033891_n_jpg_123754.webp",
        width: 1200,
        height: 750,
        alt: "Real Meta Ads Campaign Results & Client Portfolio — Boosting Agency BD",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Portfolio & Real Meta Ads Campaign Screenshots | Boosting Agency BD",
    description:
      "View 49+ verified client business pages and 44 real Meta Ads Manager campaign screenshots by Boosting Agency BD.",
    images: [
      "https://boostingagencyofficial.site/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_650757177_122222877572514031_7591552409511033891_n_jpg_123754.webp",
    ],
  },
}

const portfolioPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://boostingagencyofficial.site/portfolio#webpage",
      url: "https://boostingagencyofficial.site/portfolio",
      name: "Client Portfolio & Real Meta Ads Campaign Screenshots | Boosting Agency BD",
      description:
        "49+ verified client business pages and 44 real Meta Ads Manager campaign screenshots (24 Message Lead Campaigns and 20 Website Purchase Campaigns) managed by Boosting Agency BD.",
      isPartOf: {
        "@id": "https://boostingagencyofficial.site/#website",
      },
      about: {
        "@id": "https://boostingagencyofficial.site/#organization",
      },
      inLanguage: ["en-US", "bn-BD"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://boostingagencyofficial.site/portfolio#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://boostingagencyofficial.site/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Portfolio",
          item: "https://boostingagencyofficial.site/portfolio",
        },
      ],
    },
  ],
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioPageSchema) }}
      />
      {children}
    </>
  )
}
