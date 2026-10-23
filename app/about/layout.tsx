import type { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "About Us & Executive Leadership | Boosting Agency BD",
  description:
    "Learn about Boosting Agency BD, our mission, core values, Founder & CEO Siddiqur Rahman Turjoy, and our specialist digital marketing team in Dhaka, Bangladesh.",
  alternates: {
    canonical: "https://boostingagencyofficial.site/about",
  },
  openGraph: {
    title: "About Us & Executive Leadership | Boosting Agency BD",
    description:
      "Meet the Founder & CEO Siddiqur Rahman Turjoy and the specialist digital marketing team behind Boosting Agency BD.",
    url: "https://boostingagencyofficial.site/about",
    siteName: "Boosting Agency BD",
    type: "website",
    images: [
      {
        url: "https://boostingagencyofficial.site/images/team/siddiqur-rahman-turjoy.webp",
        width: 800,
        height: 1000,
        alt: "Siddiqur Rahman Turjoy — Founder & CEO of Boosting Agency BD",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us & Executive Leadership | Boosting Agency BD",
    description:
      "Learn about Boosting Agency BD, Founder & CEO Siddiqur Rahman Turjoy, and our specialist digital marketing team in Dhaka, Bangladesh.",
    images: ["https://boostingagencyofficial.site/images/team/siddiqur-rahman-turjoy.webp"],
  },
}

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://boostingagencyofficial.site/about#webpage",
      url: "https://boostingagencyofficial.site/about",
      name: "About Us & Executive Leadership | Boosting Agency BD",
      description:
        "Learn about Boosting Agency BD, our mission, core values, Founder & CEO Siddiqur Rahman Turjoy, and our specialist digital marketing team in Dhaka, Bangladesh.",
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
      "@id": "https://boostingagencyofficial.site/about#breadcrumb",
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
          name: "About Us",
          item: "https://boostingagencyofficial.site/about",
        },
      ],
    },
  ],
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      {children}
    </>
  )
}
