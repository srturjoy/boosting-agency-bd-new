import type { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "Digital Marketing, Meta Ads, Google Ads, SEO & Web Design Services | Boosting Agency BD",
  description:
    "Explore Boosting Agency BD's digital marketing services: Facebook & Instagram Ads, Google Ads, Technical & Local SEO, Web Design & Development, Branding, Content Production, and AI Automation.",
  alternates: {
    canonical: "https://boostingagencyofficial.site/services",
  },
  openGraph: {
    title: "Digital Marketing, Meta Ads, Google Ads, SEO & Web Design Services | Boosting Agency BD",
    description:
      "Full-funnel Facebook & Instagram Ads, Google Ads, SEO, Web Development, Branding, and AI Automation services in Bangladesh.",
    url: "https://boostingagencyofficial.site/services",
    siteName: "Boosting Agency BD",
    type: "website",
    images: [
      {
        url: "https://boostingagencyofficial.site/hero/hero-slide-1.png",
        width: 1200,
        height: 630,
        alt: "Boosting Agency BD — Digital Marketing & Performance Advertising Services",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing, Meta Ads, Google Ads, SEO & Web Design Services | Boosting Agency BD",
    description:
      "Full-funnel Facebook & Instagram Ads, Google Ads, SEO, Web Development, Branding, and AI Automation services in Bangladesh.",
    images: ["https://boostingagencyofficial.site/hero/hero-slide-1.png"],
  },
}

const servicesPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://boostingagencyofficial.site/services#webpage",
      url: "https://boostingagencyofficial.site/services",
      name: "Digital Marketing, Meta Ads, Google Ads, SEO & Web Design Services | Boosting Agency BD",
      description:
        "Explore Boosting Agency BD's digital marketing services: Facebook & Instagram Ads, Google Ads, Technical & Local SEO, Web Design & Development, Branding, Content Production, and AI Automation.",
      isPartOf: {
        "@id": "https://boostingagencyofficial.site/#website",
      },
      about: {
        "@id": "https://boostingagencyofficial.site/#organization",
      },
      inLanguage: ["en-US", "bn-BD"],
    },
    {
      "@type": "ItemList",
      "@id": "https://boostingagencyofficial.site/services#servicelist",
      name: "Boosting Agency BD Digital Marketing Services",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Service",
            name: "Facebook & Instagram Ads Management",
            url: "https://boostingagencyofficial.site/services#social-ads",
            provider: { "@id": "https://boostingagencyofficial.site/#organization" },
            areaServed: ["BD", "Worldwide"],
            description:
              "Precision-targeted Facebook and Instagram ad campaigns, Meta Pixel & Conversions API (CAPI) setup, dynamic catalog ads, and retargeting funnels.",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Service",
            name: "Google Ads Management",
            url: "https://boostingagencyofficial.site/services#google-ads",
            provider: { "@id": "https://boostingagencyofficial.site/#organization" },
            areaServed: ["BD", "Worldwide"],
            description:
              "Search, Display, Shopping, Performance Max, and YouTube video advertising campaigns with Google Tag Manager conversion tracking.",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Service",
            name: "Search Engine Optimization (SEO)",
            url: "https://boostingagencyofficial.site/services#seo",
            provider: { "@id": "https://boostingagencyofficial.site/#organization" },
            areaServed: ["BD", "Worldwide"],
            description:
              "Technical SEO audits, on-page optimization, keyword strategy, local SEO, and white-hat link building.",
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "Service",
            name: "Web Design & Development",
            url: "https://boostingagencyofficial.site/services#web-design",
            provider: { "@id": "https://boostingagencyofficial.site/#organization" },
            areaServed: ["BD", "Worldwide"],
            description:
              "Responsive, conversion-optimized corporate websites, landing pages, and e-commerce platforms.",
          },
        },
        {
          "@type": "ListItem",
          position: 5,
          item: {
            "@type": "Service",
            name: "Digital Marketing Strategy",
            url: "https://boostingagencyofficial.site/services#strategy",
            provider: { "@id": "https://boostingagencyofficial.site/#organization" },
            areaServed: ["BD", "Worldwide"],
            description:
              "Market analysis, audience segmentation, multi-channel campaign planning, and KPI tracking.",
          },
        },
        {
          "@type": "ListItem",
          position: 6,
          item: {
            "@type": "Service",
            name: "Branding & Visual Identity Design",
            url: "https://boostingagencyofficial.site/services#branding",
            provider: { "@id": "https://boostingagencyofficial.site/#organization" },
            areaServed: ["BD", "Worldwide"],
            description:
              "Logo design, brand guidelines, visual identity systems, and high-converting social media ad creatives.",
          },
        },
        {
          "@type": "ListItem",
          position: 7,
          item: {
            "@type": "Service",
            name: "Content Marketing & Production",
            url: "https://boostingagencyofficial.site/services#content",
            provider: { "@id": "https://boostingagencyofficial.site/#organization" },
            areaServed: ["BD", "Worldwide"],
            description:
              "Blog articles, social media copywriting, video scripts, and brand storytelling.",
          },
        },
        {
          "@type": "ListItem",
          position: 8,
          item: {
            "@type": "Service",
            name: "AI Automation & Smart Chatbots",
            url: "https://boostingagencyofficial.site/services#ai-automation",
            provider: { "@id": "https://boostingagencyofficial.site/#organization" },
            areaServed: ["BD", "Worldwide"],
            description:
              "Automated Messenger and WhatsApp customer support chatbots, CRM integration, and workflow automation.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://boostingagencyofficial.site/services#breadcrumb",
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
          name: "Services",
          item: "https://boostingagencyofficial.site/services",
        },
      ],
    },
  ],
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesPageSchema) }}
      />
      {children}
    </>
  )
}
