import type { Metadata } from "next"
import TermsAndConditionsPage from "../terms/page"

export const metadata: Metadata = {
  title: "Privacy Policy | Boosting Agency BD",
  description:
    "Official Privacy Policy, Client Non-Disclosure Standards, and Data Protection Policies of Boosting Agency BD.",
  alternates: {
    canonical: "https://boostingagencyofficial.site/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Boosting Agency BD",
    description:
      "Official Privacy Policy, Client Non-Disclosure Standards, and Data Protection Policies of Boosting Agency BD.",
    url: "https://boostingagencyofficial.site/privacy",
    siteName: "Boosting Agency BD",
    type: "website",
    images: [
      {
        url: "https://boostingagencyofficial.site/logo.webp",
        width: 1024,
        height: 1024,
        alt: "Boosting Agency BD Official Logo",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Boosting Agency BD",
    description:
      "Official Privacy Policy, Client Non-Disclosure Standards, and Data Protection Policies of Boosting Agency BD.",
    images: ["https://boostingagencyofficial.site/logo.webp"],
  },
}

const privacyPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://boostingagencyofficial.site/privacy#webpage",
      url: "https://boostingagencyofficial.site/privacy",
      name: "Privacy Policy | Boosting Agency BD",
      description:
        "Official Privacy Policy, Client Non-Disclosure Standards, and Data Protection Policies of Boosting Agency BD.",
      isPartOf: {
        "@id": "https://boostingagencyofficial.site/#website",
      },
      inLanguage: ["en-US", "bn-BD"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://boostingagencyofficial.site/privacy#breadcrumb",
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
          name: "Privacy Policy",
          item: "https://boostingagencyofficial.site/privacy",
        },
      ],
    },
  ],
}

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyPageSchema) }}
      />
      <TermsAndConditionsPage />
    </>
  )
}
