import type { Metadata } from "next"
import React from "react"
import { TEAM_MEMBERS } from "@/data/team"

export const metadata: Metadata = {
  title: "About Us & Executive Leadership | Boosting Agency BD",
  description:
    "Learn about Boosting Agency BD, our mission, core values, Founder & CEO Siddiqur Rahman Turjoy, and our specialist digital marketing team: Joynal Abedin (Joy), Mohidul Islam Sojib, Abir Islam Joy, and Azom.",
  alternates: {
    canonical: "https://boostingagencyofficial.site/about",
  },
  openGraph: {
    title: "About Us & Executive Leadership | Boosting Agency BD",
    description:
      "Meet Founder & CEO Siddiqur Rahman Turjoy and the specialist digital marketing team behind Boosting Agency BD.",
    url: "https://boostingagencyofficial.site/about",
    siteName: "Boosting Agency BD",
    type: "website",
    images: TEAM_MEMBERS.map((member) => {
      const imgPath = member.defaultImages[0]?.url || `/images/team/${member.id}.webp`
      const fullImgUrl = imgPath.startsWith("http") ? imgPath : `https://boostingagencyofficial.site${imgPath}`
      return {
        url: fullImgUrl,
        width: 800,
        height: 1000,
        alt: `${member.name} — ${member.role} at Boosting Agency BD`,
        type: "image/webp",
      }
    }),
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us & Executive Leadership | Boosting Agency BD",
    description:
      "Learn about Boosting Agency BD, Founder & CEO Siddiqur Rahman Turjoy, and our specialist digital marketing team in Dhaka, Bangladesh.",
    images: TEAM_MEMBERS.map((member) => {
      const imgPath = member.defaultImages[0]?.url || `/images/team/${member.id}.webp`
      return imgPath.startsWith("http") ? imgPath : `https://boostingagencyofficial.site${imgPath}`
    }),
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
      mentions: TEAM_MEMBERS.map((member) => {
        const profileUrl = `https://boostingagencyofficial.site/team/${member.id}`
        const imgPath = member.defaultImages[0]?.url || `/images/team/${member.id}.webp`
        const imageUrl = imgPath.startsWith("http") ? imgPath : `https://boostingagencyofficial.site${imgPath}`
        return {
          "@type": "Person",
          "@id": member.id === "siddiqur-rahman-turjoy" ? "https://turjoy.boostingagencyofficial.site/#person" : `${profileUrl}#person`,
          name: member.name,
          jobTitle: member.role,
          url: profileUrl,
          image: {
            "@type": "ImageObject",
            "@id": `${imageUrl}#primaryimage`,
            url: imageUrl,
            contentUrl: imageUrl,
            name: `${member.name} — ${member.role} at Boosting Agency BD`,
            caption: `${member.name}, ${member.role} at Boosting Agency BD`,
          },
        }
      }),
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
