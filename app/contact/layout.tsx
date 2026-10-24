import type { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "Contact Us & Book a Free Consultation | Boosting Agency BD",
  description:
    "Contact Boosting Agency BD in Mirpur, Dhaka-1216, Bangladesh. Call or message on WhatsApp at +880 1518 961899 for Facebook Ads, Google Ads, SEO, and Web Development consultations.",
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
    canonical: "https://boostingagencyofficial.site/contact",
    languages: {
      "en-US": "https://boostingagencyofficial.site/contact",
      "bn-BD": "https://boostingagencyofficial.site/contact",
      "x-default": "https://boostingagencyofficial.site/contact",
    },
  },
  openGraph: {
    title: "Contact Us & Book a Free Consultation | Boosting Agency BD",
    description:
      "Get in touch with Boosting Agency BD via WhatsApp (+880 1518 961899), phone, or our online inquiry form.",
    url: "https://boostingagencyofficial.site/contact",
    siteName: "Boosting Agency BD",
    type: "website",
    images: [
      {
        url: "https://boostingagencyofficial.site/hero/hero-slide-1.webp",
        width: 1080,
        height: 1080,
        alt: "Contact Boosting Agency BD — Dhaka, Bangladesh",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us & Book a Free Consultation | Boosting Agency BD",
    description:
      "Get in touch with Boosting Agency BD via WhatsApp (+880 1518 961899), phone, or our online inquiry form.",
    images: ["https://boostingagencyofficial.site/hero/hero-slide-1.webp"],
  },
}

const contactPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://boostingagencyofficial.site/contact#webpage",
      url: "https://boostingagencyofficial.site/contact",
      name: "Contact Us & Book a Free Consultation | Boosting Agency BD",
      description:
        "Contact Boosting Agency BD in Mirpur, Dhaka-1216, Bangladesh. Call or message on WhatsApp at +880 1518 961899 for Facebook Ads, Google Ads, SEO, and Web Development consultations.",
      isPartOf: {
        "@id": "https://boostingagencyofficial.site/#website",
      },
      mainEntity: {
        "@id": "https://boostingagencyofficial.site/#organization",
      },
      inLanguage: ["en-US", "bn-BD"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://boostingagencyofficial.site/contact#breadcrumb",
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
          name: "Contact",
          item: "https://boostingagencyofficial.site/contact",
        },
      ],
    },
  ],
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      {children}
    </>
  )
}
