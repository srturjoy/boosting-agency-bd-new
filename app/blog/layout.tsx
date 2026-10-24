import type { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "Digital Marketing Blog, Meta Ads & SEO Guides | Boosting Agency BD",
  description:
    "Read practical digital marketing guides, Facebook & Instagram Ads strategies, Conversion API tutorials, and SEO insights from Boosting Agency BD.",
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
    canonical: "https://boostingagencyofficial.site/blog",
    languages: {
      "en-US": "https://boostingagencyofficial.site/blog",
      "bn-BD": "https://boostingagencyofficial.site/blog",
      "x-default": "https://boostingagencyofficial.site/blog",
    },
  },
  openGraph: {
    title: "Digital Marketing Blog, Meta Ads & SEO Guides | Boosting Agency BD",
    description:
      "Actionable insights on Meta Ads, Google Ads, SEO, E-commerce scaling, and AI Automation in Bangladesh.",
    url: "https://boostingagencyofficial.site/blog",
    siteName: "Boosting Agency BD",
    type: "website",
    images: [
      {
        url: "https://boostingagencyofficial.site/hero/hero-slide-1.webp",
        width: 1080,
        height: 1080,
        alt: "Digital Marketing Blog & Guides — Boosting Agency BD",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Blog, Meta Ads & SEO Guides | Boosting Agency BD",
    description:
      "Read practical digital marketing guides, Facebook & Instagram Ads strategies, Conversion API tutorials, and SEO insights from Boosting Agency BD.",
    images: ["https://boostingagencyofficial.site/hero/hero-slide-1.webp"],
  },
}

const blogPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://boostingagencyofficial.site/blog#webpage",
      url: "https://boostingagencyofficial.site/blog",
      name: "Digital Marketing Blog, Meta Ads & SEO Guides | Boosting Agency BD",
      description:
        "Practical digital marketing guides, Facebook & Instagram Ads strategies, Conversion API tutorials, and SEO insights from Boosting Agency BD.",
      isPartOf: {
        "@id": "https://boostingagencyofficial.site/#website",
      },
      publisher: {
        "@id": "https://boostingagencyofficial.site/#organization",
      },
      inLanguage: ["en-US", "bn-BD"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://boostingagencyofficial.site/blog#breadcrumb",
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
          name: "Blog",
          item: "https://boostingagencyofficial.site/blog",
        },
      ],
    },
  ],
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPageSchema) }}
      />
      {children}
    </>
  )
}
