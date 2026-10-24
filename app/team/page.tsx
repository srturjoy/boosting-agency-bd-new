import Link from "next/link"
import Image from "next/image"
import { TEAM_MEMBERS } from "@/data/team"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, ShieldCheck, MessageCircle } from "lucide-react"
import { FounderCeoSpotlight } from "@/components/about/founder-ceo-spotlight"
import { LeadershipNetworkContainer } from "@/components/about/leadership-network"

export const metadata = {
  title: "Meet Our Team & Growth Experts | Boosting Agency BD",
  description: "Meet the executive leadership and performance marketing specialists driving scalable business growth at Boosting Agency BD: Siddiqur Rahman Turjoy, Joynal Abedin (Joy), Mohidul Islam Sojib, Abir Islam Joy, and Azom.",
  keywords: [
    "Boosting Agency BD team",
    "Siddiqur Rahman Turjoy",
    "Joynal Abedin Joy",
    "Joynal Abedin",
    "Mohidul Islam Sojib",
    "Abir Islam Joy",
    "Azom Boosting Agency BD",
    "Digital Marketing Experts Bangladesh",
  ],
  alternates: {
    canonical: "https://boostingagencyofficial.site/team",
  },
  openGraph: {
    title: "Meet Our Team & Growth Experts | Boosting Agency BD",
    description: "Meet the executive leadership and performance marketing specialists at Boosting Agency BD.",
    url: "https://boostingagencyofficial.site/team",
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
    title: "Meet Our Team & Growth Experts | Boosting Agency BD",
    description: "Meet the executive leadership and performance marketing specialists at Boosting Agency BD.",
    images: TEAM_MEMBERS.map((member) => {
      const imgPath = member.defaultImages[0]?.url || `/images/team/${member.id}.webp`
      return imgPath.startsWith("http") ? imgPath : `https://boostingagencyofficial.site${imgPath}`
    }),
  },
}

const teamBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://boostingagencyofficial.site/team#webpage",
      url: "https://boostingagencyofficial.site/team",
      name: "Meet Our Team & Growth Experts | Boosting Agency BD",
      description: "Meet the executive leadership and performance marketing specialists driving scalable business growth at Boosting Agency BD.",
      isPartOf: { "@id": "https://boostingagencyofficial.site/#website" },
      about: { "@id": "https://boostingagencyofficial.site/#organization" },
      mainEntity: {
        "@type": "ItemList",
        "@id": "https://boostingagencyofficial.site/team#teamlist",
        name: "Boosting Agency BD Leadership & Specialist Team",
        numberOfItems: TEAM_MEMBERS.length,
        itemListElement: TEAM_MEMBERS.map((member, index) => {
          const profileUrl = `https://boostingagencyofficial.site/team/${member.id}`
          const imgPath = member.defaultImages[0]?.url || `/images/team/${member.id}.webp`
          const imageUrl = imgPath.startsWith("http") ? imgPath : `https://boostingagencyofficial.site${imgPath}`
          const personId = member.id === "siddiqur-rahman-turjoy"
            ? "https://turjoy.boostingagencyofficial.site/#person"
            : `${profileUrl}#person`

          return {
            "@type": "ListItem",
            position: index + 1,
            url: profileUrl,
            item: {
              "@type": "Person",
              "@id": personId,
              name: member.name,
              alternateName: [
                member.name.replace(/[\(\)]/g, "").trim(),
                ...(member.nameBn ? [member.nameBn] : []),
              ],
              jobTitle: member.role,
              description: member.description,
              url: profileUrl,
              worksFor: {
                "@id": "https://boostingagencyofficial.site/#organization",
              },
              image: {
                "@type": "ImageObject",
                "@id": `${imageUrl}#primaryimage`,
                url: imageUrl,
                contentUrl: imageUrl,
                name: `${member.name} — ${member.role} at Boosting Agency BD`,
                caption: `${member.name}, ${member.role} at Boosting Agency BD`,
                width: 800,
                height: 1000,
                encodingFormat: "image/webp",
              },
              sameAs: [profileUrl],
            },
          }
        }),
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://boostingagencyofficial.site/team#breadcrumb",
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
          name: "Team",
          item: "https://boostingagencyofficial.site/team",
        },
      ],
    },
  ],
}

export default function TeamPage() {
  const specialistMembers = TEAM_MEMBERS.filter((m) => m.id !== "siddiqur-rahman-turjoy")

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamBreadcrumbSchema) }}
      />
      {/* Hero Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-secondary/40 via-background to-background text-center relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold mb-4 border border-cyan-500/20">
            <ShieldCheck className="h-4 w-4" />
            <span>Executive Leadership & Specialists</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground text-balance">
            Meet the Experts Behind <span className="text-gradient">Boosting Agency BD</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From technical software architecture and high-ROI Meta & Google ads to creative media buying and eCommerce scaling—explore our full leadership and specialist team.
          </p>
        </div>
      </section>

      {/* Executive Leadership & Specialist Network */}
      <LeadershipNetworkContainer className="pb-12 lg:pb-16">
        {/* Founder & CEO Spotlight on Top */}
        <FounderCeoSpotlight />

        {/* Specialist Team Roster Grid (4 Experts) */}
        <section className="pt-4 relative z-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-10 px-6 py-4 rounded-2xl bg-background/85 backdrop-blur-md border border-cyan-500/20 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Specialist Growth &amp; Marketing Team
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                Our 4 specialized growth practitioners managing media buying, tracking, web development, and store scaling.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
              {specialistMembers.map((member) => (
                <Card
                  key={member.id}
                  data-leadership-team-node={member.id}
                  itemScope
                  itemType="https://schema.org/Person"
                  className="group rounded-2xl sm:rounded-3xl border border-border/80 hover:border-cyan-500/70 transition-all duration-300 card-3d hover:shadow-2xl hover:shadow-cyan-500/15 bg-card flex flex-col justify-between overflow-hidden relative"
                >
                  <meta itemProp="url" content={`https://boostingagencyofficial.site/team/${member.id}`} />
                  <meta itemProp="worksFor" content="Boosting Agency BD" />
                  {/* Top Energy Receptor Bar */}
                  <div
                    data-leadership-receptor="true"
                    aria-hidden="true"
                    className="pointer-events-none absolute top-0 left-1/4 right-1/4 h-[2.5px] z-20 rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                  />
                  {/* Photo Thumbnail */}
                  <div className="aspect-[4/3] relative overflow-hidden bg-slate-900">
                    <img
                      src={member.defaultImages[0]?.url || `/images/team/${member.id}.webp`}
                      alt={`${member.name} — ${member.role} at Boosting Agency BD`}
                      title={`${member.name} — ${member.role} | Boosting Agency BD`}
                      itemProp="image"
                      width={800}
                      height={600}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                      <p data-leadership-role="true" itemProp="jobTitle" className="text-[10px] sm:text-xs font-medium text-cyan-300 mb-0.5 line-clamp-1">
                        {member.role}
                      </p>
                      <h3 itemProp="name" className="text-sm sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                        {member.name}
                      </h3>
                    </div>
                  </div>

                  <CardContent className="p-3.5 sm:p-6 flex flex-col flex-grow justify-between space-y-3 sm:space-y-4">
                    <div className="space-y-2.5 sm:space-y-3">
                      <p itemProp="description" className="text-[11px] sm:text-sm text-muted-foreground leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-3">
                        {member.description}
                      </p>

                      <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-0.5">
                        {member.expertise.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            data-leadership-expertise="true"
                            className="text-[10px] sm:text-[11px] font-medium bg-secondary/80 text-foreground dark:text-slate-200 px-2 py-0.5 rounded-lg border border-border/50"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 sm:pt-4 border-t border-border/60 flex items-center justify-between text-[11px] sm:text-xs font-semibold text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-500 transition-colors">
                      <Link href={`/team/${member.id}`} className="flex items-center justify-between w-full">
                        <span className="truncate">View Profile &amp; Details</span>
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </LeadershipNetworkContainer>
    </div>
  )
}
