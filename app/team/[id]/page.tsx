import { notFound } from "next/navigation"
import { getTeamMember, TEAM_MEMBERS } from "@/data/team"
import { MemberProfileView } from "@/components/team/member-profile-view"
import type { Metadata } from "next"

export const dynamicParams = false

export function generateStaticParams() {
  return TEAM_MEMBERS.map((member) => ({
    id: member.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const member = getTeamMember(id)
  if (!member) {
    return { title: "Team Member Not Found | Boosting Agency BD" }
  }

  const isFounder = member.id === "siddiqur-rahman-turjoy"

  const title = isFounder 
    ? "Siddiqur Rahman Turjoy | Founder & CEO, Boosting Agency BD"
    : `${member.name} — ${member.role} | Boosting Agency BD`

  const description = isFounder
    ? "Official professional profile of Siddiqur Rahman Turjoy, Founder & CEO of Boosting Agency BD. Full-stack digital growth strategist, performance marketing consultant, and AI automation specialist based in Bangladesh."
    : member.description

  const canonicalUrl = `https://boostingagencyofficial.site/team/${member.id}`

  const imageUrl = isFounder
    ? "https://boostingagencyofficial.site/images/team/siddiqur-rahman-turjoy.webp"
    : (member.defaultImages[0]?.url 
        ? (member.defaultImages[0].url.startsWith("http") 
            ? member.defaultImages[0].url 
            : `https://boostingagencyofficial.site${member.defaultImages[0].url}`)
        : "https://boostingagencyofficial.site/logo.webp")

  const cleanName = member.name.replace(/[\(\)]/g, "").trim()
  const nameParts = cleanName.split(/\s+/)
  const firstName = nameParts[0] || member.name
  const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : undefined

  const memberKeywords = [
    member.name,
    cleanName,
    ...(member.preferredName ? [`${member.name} ${member.preferredName}`, member.preferredName] : []),
    ...(member.nameBn ? [member.nameBn] : []),
    `${member.name} Boosting Agency BD`,
    `${cleanName} Boosting Agency BD`,
    `${member.name} ${member.role}`,
    member.role,
    "Boosting Agency BD team",
    ...member.expertise.slice(0, 8),
  ]

  return {
    title,
    description,
    keywords: memberKeywords,
    authors: [
      { name: member.name, url: canonicalUrl },
      { name: "Boosting Agency BD", url: "https://boostingagencyofficial.site" },
    ],
    creator: member.name,
    publisher: "Boosting Agency BD",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Boosting Agency BD",
      type: "profile",
      firstName,
      ...(lastName ? { lastName } : {}),
      username: member.id,
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 1000,
          alt: isFounder 
            ? "Siddiqur Rahman Turjoy, Founder and CEO of Boosting Agency BD" 
            : `${member.name} — ${member.role} at Boosting Agency BD`,
          type: "image/webp",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export default async function TeamMemberPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const member = getTeamMember(id)

  if (!member) {
    notFound()
  }

  const isFounder = member.id === "siddiqur-rahman-turjoy"
  const canonicalUrl = `https://boostingagencyofficial.site/team/${member.id}`
  const imageUrl = isFounder
    ? "https://boostingagencyofficial.site/images/team/siddiqur-rahman-turjoy.webp"
    : (member.defaultImages[0]?.url 
        ? (member.defaultImages[0].url.startsWith("http") 
            ? member.defaultImages[0].url 
            : `https://boostingagencyofficial.site${member.defaultImages[0].url}`)
        : `https://boostingagencyofficial.site/images/team/${member.id}.webp`)

  const cleanName = member.name.replace(/[\(\)]/g, "").trim()
  const nameParts = cleanName.split(/\s+/)
  const givenName = nameParts[0] || member.name
  const familyName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : undefined
  const personId = isFounder
    ? "https://turjoy.boostingagencyofficial.site/#person"
    : `${canonicalUrl}#person`
  const imageId = `${imageUrl}#primaryimage`

  const alternateNames = Array.from(
    new Set([
      member.name,
      cleanName,
      ...(member.preferredName ? [member.preferredName, `${member.name} ${member.preferredName}`, `${member.name} (${member.preferredName})`] : []),
      ...(member.nameBn ? [member.nameBn] : []),
      `${member.name} — ${member.role} at Boosting Agency BD`,
      `${cleanName} — Boosting Agency BD`,
    ])
  )

  const personStructuredData = isFounder ? {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${canonicalUrl}#profilepage`,
        "url": canonicalUrl,
        "name": "Siddiqur Rahman Turjoy | Founder & CEO, Boosting Agency BD",
        "description": member.bio || member.description,
        "isPartOf": {
          "@id": "https://boostingagencyofficial.site/#website"
        },
        "mainEntity": {
          "@id": personId
        },
        "primaryImageOfPage": {
          "@id": imageId
        },
        "inLanguage": ["en-US", "bn-BD"]
      },
      {
        "@type": "Person",
        "@id": personId,
        "name": "Siddiqur Rahman",
        "givenName": "Siddiqur",
        "familyName": "Rahman",
        "additionalName": "Turjoy",
        "alternateName": [
          "Turjoy",
          "Siddiqur Rahman Turjoy",
          "Turjoy Siddiqur Rahman",
          "সিদ্দিকুর রহমান (তুর্য)",
          "Turjoy — Founder & CEO of Boosting Agency BD"
        ],
        "url": canonicalUrl,
        "jobTitle": "Founder & CEO",
        "description": "Founder & CEO of Boosting Agency BD. Full-stack digital growth strategist, performance marketing consultant, branding advisor, and AI automation specialist.",
        "worksFor": {
          "@type": "Organization",
          "@id": "https://boostingagencyofficial.site/#organization",
          "name": "Boosting Agency BD",
          "url": "https://boostingagencyofficial.site/",
          "logo": "https://boostingagencyofficial.site/logo.webp"
        },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Bangladesh University of Business and Technology (BUBT)",
          "url": "https://www.bubt.edu.bd"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dhaka",
          "addressCountry": "BD"
        },
        "nationality": {
          "@type": "Country",
          "name": "Bangladesh"
        },
        "image": {
          "@type": "ImageObject",
          "@id": imageId,
          "url": imageUrl,
          "contentUrl": imageUrl,
          "name": "Siddiqur Rahman Turjoy — Founder & CEO of Boosting Agency BD",
          "caption": "Siddiqur Rahman Turjoy, Founder and CEO of Boosting Agency BD",
          "description": "Official portrait of Siddiqur Rahman Turjoy, Founder & CEO of Boosting Agency BD",
          "representativeOfPage": true,
          "width": 800,
          "height": 1000,
          "encodingFormat": "image/webp"
        },
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Bachelor of Science in Computer Science & Engineering (B.Sc. in CSE)",
            "credentialCategory": "degree",
            "recognizedBy": {
              "@type": "EducationalOrganization",
              "name": "Bangladesh University of Business and Technology (BUBT)"
            }
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Meta Blueprint Certification",
            "credentialCategory": "certification",
            "recognizedBy": {
              "@type": "Organization",
              "name": "Meta"
            }
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Google Ads Certification",
            "credentialCategory": "certification",
            "recognizedBy": {
              "@type": "Organization",
              "name": "Google"
            }
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Google Data Analytics Professional Certificate",
            "credentialCategory": "certification",
            "recognizedBy": {
              "@type": "Organization",
              "name": "Google"
            }
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "HubSpot Marketing Software Certification",
            "credentialCategory": "certification",
            "recognizedBy": {
              "@type": "Organization",
              "name": "HubSpot Academy"
            }
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Ethical Hacking Certification",
            "credentialCategory": "certification",
            "recognizedBy": {
              "@type": "Organization",
              "name": "Creative IT Institute"
            }
          }
        ],
        "knowsAbout": [
          "Performance Marketing",
          "Meta Ads (Facebook & Instagram)",
          "Google Ads (Search, Display, Video, PMax)",
          "YouTube Advertising",
          "TikTok Advertising",
          "Brand Strategy & Positioning",
          "Business Growth Consulting",
          "AI Automation & Intelligent Agents",
          "Customer Support Automation",
          "Meta Conversion API (CAPI)",
          "Google Analytics 4 (GA4)",
          "Google Tag Manager (GTM)",
          "Conversion Rate Optimization (CRO)",
          "Server-Side Tracking",
          "Computer Science & Engineering Fundamentals"
        ],
        "sameAs": [
          "https://turjoy.boostingagencyofficial.site/",
          "https://boostingagencyofficial.site/team/siddiqur-rahman-turjoy",
          "https://boostingagencyofficial.site/about"
        ],
        "mainEntityOfPage": {
          "@type": "ProfilePage",
          "@id": `${canonicalUrl}#profilepage`
        }
      }
    ]
  } : {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${canonicalUrl}#profilepage`,
        "url": canonicalUrl,
        "name": `${member.name} — ${member.role} | Boosting Agency BD`,
        "description": member.bio || member.description,
        "isPartOf": {
          "@id": "https://boostingagencyofficial.site/#website"
        },
        "mainEntity": {
          "@id": personId
        },
        "primaryImageOfPage": {
          "@id": imageId
        },
        "inLanguage": ["en-US", "bn-BD"]
      },
      {
        "@type": "Person",
        "@id": personId,
        "name": member.name,
        "givenName": givenName,
        ...(familyName ? { "familyName": familyName } : {}),
        "alternateName": alternateNames,
        "url": canonicalUrl,
        "jobTitle": member.role,
        "description": member.bio || member.description,
        "worksFor": {
          "@type": "Organization",
          "@id": "https://boostingagencyofficial.site/#organization",
          "name": "Boosting Agency BD",
          "url": "https://boostingagencyofficial.site/",
          "logo": "https://boostingagencyofficial.site/logo.webp"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dhaka",
          "addressCountry": "BD"
        },
        "nationality": {
          "@type": "Country",
          "name": "Bangladesh"
        },
        "image": {
          "@type": "ImageObject",
          "@id": imageId,
          "url": imageUrl,
          "contentUrl": imageUrl,
          "name": `${member.name} — ${member.role} at Boosting Agency BD`,
          "caption": `${member.name}, ${member.role} at Boosting Agency BD`,
          "description": `Official profile portrait of ${member.name}, ${member.role} at Boosting Agency BD`,
          "representativeOfPage": true,
          "width": 800,
          "height": 1000,
          "encodingFormat": "image/webp"
        },
        "knowsAbout": member.expertise,
        "sameAs": [
          canonicalUrl,
          "https://boostingagencyofficial.site/team",
          "https://boostingagencyofficial.site/about"
        ],
        "mainEntityOfPage": {
          "@type": "ProfilePage",
          "@id": `${canonicalUrl}#profilepage`
        }
      }
    ]
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://boostingagencyofficial.site/",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Team",
        "item": "https://boostingagencyofficial.site/team",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": member.name,
        "item": `https://boostingagencyofficial.site/team/${member.id}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <MemberProfileView member={member} />
    </>
  )
}
