import type { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "Terms & Conditions, Billing, Refund & Privacy Policies | Boosting Agency BD",
  description:
    "Read the official Terms & Conditions, Payment & Billing Policy, Refund Policy, and Privacy & Data Protection standards of Boosting Agency BD.",
  alternates: {
    canonical: "https://boostingagencyofficial.site/terms",
  },
  openGraph: {
    title: "Terms & Conditions, Billing, Refund & Privacy Policies | Boosting Agency BD",
    description:
      "Official service terms, payment rules, refund policies, and data protection standards of Boosting Agency BD.",
    url: "https://boostingagencyofficial.site/terms",
    siteName: "Boosting Agency BD",
    type: "website",
    images: [
      {
        url: "https://boostingagencyofficial.site/logo.webp",
        width: 512,
        height: 512,
        alt: "Boosting Agency BD Official Logo",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions, Billing, Refund & Privacy Policies | Boosting Agency BD",
    description:
      "Official service terms, payment rules, refund policies, and data protection standards of Boosting Agency BD.",
    images: ["https://boostingagencyofficial.site/logo.webp"],
  },
}

const termsPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://boostingagencyofficial.site/terms#webpage",
      url: "https://boostingagencyofficial.site/terms",
      name: "Terms & Conditions, Billing, Refund & Privacy Policies | Boosting Agency BD",
      description:
        "Official Terms & Conditions, Payment & Billing Policy, Refund Policy, and Privacy & Data Protection standards of Boosting Agency BD.",
      isPartOf: {
        "@id": "https://boostingagencyofficial.site/#website",
      },
      inLanguage: ["en-US", "bn-BD"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://boostingagencyofficial.site/terms#breadcrumb",
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
          name: "Terms & Conditions",
          item: "https://boostingagencyofficial.site/terms",
        },
      ],
    },
  ],
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsPageSchema) }}
      />
      {children}
    </>
  )
}
