import type { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "Digital Marketing, Meta Ads, Google Ads, SEO & Web Design Services | Boosting Agency BD",
  description:
    "Explore Boosting Agency BD's digital marketing services in Bangladesh: Facebook & Instagram Ads, Google Ads, Technical & Local SEO, Web Design & Development, Branding, Content Production, and AI Automation.",
  keywords: [
    "Digital Marketing Services Bangladesh",
    "Facebook Boosting Service BD",
    "Meta Ads Management Dhaka",
    "Instagram Ads Agency Bangladesh",
    "Google Ads Management Bangladesh",
    "SEO Services Bangladesh",
    "Web Design and Development Dhaka",
    "AI Automation Services Bangladesh",
    "Branding Agency Dhaka",
    "Boosting Agency BD Services",
    "ডিজিটাল মার্কেটিং সার্ভিস বাংলাদেশ",
    "ফেসবুক বুস্টিং সার্ভিস",
    "গুগল অ্যাডস এজেন্সি বাংলাদেশ",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://boostingagencyofficial.site/services",
    languages: {
      "en-US": "https://boostingagencyofficial.site/services",
      "bn-BD": "https://boostingagencyofficial.site/services",
      "x-default": "https://boostingagencyofficial.site/services",
    },
  },
  openGraph: {
    title: "Digital Marketing, Meta Ads, Google Ads, SEO & Web Design Services | Boosting Agency BD",
    description:
      "Full-funnel Facebook & Instagram Ads, Google Ads, SEO, Web Development, Branding, and AI Automation services in Bangladesh.",
    url: "https://boostingagencyofficial.site/services",
    siteName: "Boosting Agency BD",
    locale: "en_US",
    alternateLocale: ["bn_BD"],
    type: "website",
    images: [
      {
        url: "https://boostingagencyofficial.site/images/services/social-ads.webp",
        width: 800,
        height: 500,
        alt: "Boosting Agency BD — Facebook & Instagram Ads and Digital Marketing Services",
        type: "image/webp",
      },
      {
        url: "https://boostingagencyofficial.site/hero/hero-slide-1.webp",
        width: 1080,
        height: 1080,
        alt: "Boosting Agency BD — Digital Marketing & Performance Advertising Services",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing, Meta Ads, Google Ads, SEO & Web Design Services | Boosting Agency BD",
    description:
      "Full-funnel Facebook & Instagram Ads, Google Ads, SEO, Web Development, Branding, and AI Automation services in Bangladesh.",
    images: ["https://boostingagencyofficial.site/images/services/social-ads.webp"],
    creator: "@boostingagencybd",
    site: "@boostingagencybd",
  },
}

const servicesPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["WebPage", "CollectionPage"],
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
      breadcrumb: {
        "@id": "https://boostingagencyofficial.site/services#breadcrumb",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        "@id": "https://boostingagencyofficial.site/images/services/social-ads.webp#primaryimage",
        url: "https://boostingagencyofficial.site/images/services/social-ads.webp",
        contentUrl: "https://boostingagencyofficial.site/images/services/social-ads.webp",
        width: 800,
        height: 500,
        encodingFormat: "image/webp",
        caption: "Facebook & Instagram Ads and Digital Marketing Services — Boosting Agency BD",
      },
      datePublished: "2024-01-01T00:00:00+06:00",
      dateModified: "2026-10-24T12:00:00+06:00",
      inLanguage: ["en-US", "bn-BD"],
    },
    {
      "@type": "ItemList",
      "@id": "https://boostingagencyofficial.site/services#servicelist",
      name: "Boosting Agency BD Digital Marketing Services",
      numberOfItems: 8,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Service",
            "@id": "https://boostingagencyofficial.site/services#social-ads",
            name: "Facebook & Instagram Ads Management",
            serviceType: "Social Media Advertising & Meta Boosting",
            url: "https://boostingagencyofficial.site/services#social-ads",
            image: "https://boostingagencyofficial.site/images/services/social-ads.webp",
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
            "@id": "https://boostingagencyofficial.site/services#google-ads",
            name: "Google Ads Management",
            serviceType: "Search, Display, Shopping & YouTube Advertising",
            url: "https://boostingagencyofficial.site/services#google-ads",
            image: "https://boostingagencyofficial.site/images/services/google-ads.webp",
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
            "@id": "https://boostingagencyofficial.site/services#seo",
            name: "Search Engine Optimization (SEO)",
            serviceType: "Technical, On-Page & Local SEO",
            url: "https://boostingagencyofficial.site/services#seo",
            image: "https://boostingagencyofficial.site/images/services/seo.webp",
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
            "@id": "https://boostingagencyofficial.site/services#web-design",
            name: "Web Design & Development",
            serviceType: "Custom Website, Landing Page & E-commerce Development",
            url: "https://boostingagencyofficial.site/services#web-design",
            image: "https://boostingagencyofficial.site/images/services/web-design.webp",
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
            "@id": "https://boostingagencyofficial.site/services#strategy",
            name: "Digital Marketing Strategy",
            serviceType: "Multi-Channel Growth & Media Planning",
            url: "https://boostingagencyofficial.site/services#strategy",
            image: "https://boostingagencyofficial.site/images/services/strategy.webp",
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
            "@id": "https://boostingagencyofficial.site/services#branding",
            name: "Branding & Visual Identity Design",
            serviceType: "Brand Identity, Logo & Creative Design",
            url: "https://boostingagencyofficial.site/services#branding",
            image: "https://boostingagencyofficial.site/images/services/branding.webp",
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
            "@id": "https://boostingagencyofficial.site/services#content",
            name: "Content Marketing & Video Production",
            serviceType: "Video Production, Copywriting & Social Media Content",
            url: "https://boostingagencyofficial.site/services#content",
            image: "https://boostingagencyofficial.site/images/services/content.webp",
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
            "@id": "https://boostingagencyofficial.site/services#ai-automation",
            name: "AI Automation & Smart Chatbots",
            serviceType: "Business AI Automation, Messenger & WhatsApp Chatbots",
            url: "https://boostingagencyofficial.site/services#ai-automation",
            image: "https://boostingagencyofficial.site/images/services/ai-automation.webp",
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
        key="services-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesPageSchema) }}
      />
      {children}
    </>
  )
}
