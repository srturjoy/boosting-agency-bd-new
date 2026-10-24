"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, ShieldCheck } from "lucide-react"
import { TEAM_MEMBERS } from "@/data/team"
import { useLanguage } from "@/lib/language-context"
import { ScrollReveal, fadeInUp, staggerContainer } from "@/components/ui/motion"

export function TeamPreview() {
  const { language } = useLanguage()
  const isEnglish = language === "en"

  return (
    <section id="team-preview" className="py-10 sm:py-14 lg:py-20 bg-secondary/30 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-7 sm:mb-12 text-center md:text-left">
          <div className="max-w-2xl mx-auto md:mx-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-[11px] sm:text-xs font-semibold mb-2.5 sm:mb-3 border border-cyan-500/20">
              <Users className="h-3.5 w-3.5" />
              <span>{isEnglish ? "Leadership & Specialist Team" : "লিডারশিপ ও বিশেষজ্ঞ টিম"}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground text-balance leading-tight">
              {isEnglish
                ? "Meet the Team Behind Boosting Agency BD"
                : "বুস্টিং এজেন্সি বিডি-এর নেপথ্যের বিশেষজ্ঞ টিম"}
            </h2>
            <p className="mt-2 sm:mt-3 text-xs sm:text-base text-muted-foreground leading-relaxed">
              {isEnglish
                ? "Our campaigns, tracking architectures, and creative strategies are led by experienced digital marketers, media buyers, and marketing technologists."
                : "আমাদের প্রতিটি ক্যাম্পেইন, সার্ভার-সাইড ট্র্যাকিং এবং ক্রিয়েটিভ কৌশল পরিচালিত হয় অভিজ্ঞ ডিজিটাল মার্কেটার, মিডিয়া বায়ার এবং টেকনোলজিস্টদের সমন্বয়ে।"}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 shrink-0">
            <Button asChild size="lg" className="gradient-primary text-white rounded-xl sm:rounded-2xl shadow-md shadow-cyan-500/20 text-xs sm:text-sm h-10 sm:h-11 px-5">
              <Link href="/about#team">
                <span>{isEnglish ? "Meet Our Team" : "আমাদের টিম পরিচিতি"}</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={staggerContainer}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-5"
        >
          {TEAM_MEMBERS.map((member) => {
            const photoUrl = member.defaultImages[0]?.url || `/images/team/${member.id}.webp`
            const displayName = isEnglish
              ? member.preferredName
                ? `${member.name} (${member.preferredName})`
                : member.name
              : member.preferredNameBn
                ? `${member.nameBn || member.name} (${member.preferredNameBn})`
                : member.nameBn || member.name

            return (
              <motion.div key={member.id} variants={fadeInUp} className="h-full">
                <Card
                  itemScope
                  itemType="https://schema.org/Person"
                  className="group h-full rounded-xl sm:rounded-3xl border border-border/75 hover:border-cyan-500/70 bg-card card-3d hover:shadow-xl hover:shadow-cyan-500/15 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <meta itemProp="url" content={`https://boostingagencyofficial.site/team/${member.id}`} />
                  <meta itemProp="worksFor" content="Boosting Agency BD" />
                  <div className="aspect-[4/4] relative overflow-hidden bg-slate-900">
                    <img
                      src={photoUrl}
                      alt={`${displayName} — ${isEnglish ? member.role : member.roleBn || member.role} at Boosting Agency BD`}
                      title={`${member.name} — ${member.role} | Boosting Agency BD`}
                      itemProp="image"
                      width={800}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                    <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3">
                      <span className="inline-flex items-center gap-1 max-w-full px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-md bg-cyan-500/20 backdrop-blur-md text-cyan-300 border border-cyan-500/30 text-[9px] sm:text-[10px] font-semibold">
                        <ShieldCheck className="h-2.5 w-2.5 sm:h-3 sm:w-3 shrink-0" />
                        <span itemProp="jobTitle" className="truncate">{isEnglish ? member.role : member.roleBn || member.role}</span>
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-3 sm:p-5 flex flex-col flex-1 justify-between gap-2 sm:gap-3">
                    <div>
                      <h3 itemProp="name" className="text-xs sm:text-base font-bold text-foreground group-hover:text-cyan-500 transition-colors leading-snug line-clamp-1 sm:line-clamp-2">
                        {displayName}
                      </h3>
                      <p itemProp="description" className="mt-1 sm:mt-1.5 text-[11px] sm:text-xs text-muted-foreground leading-snug sm:leading-relaxed line-clamp-2">
                        {isEnglish ? member.description : member.descriptionBn || member.description}
                      </p>
                    </div>

                    <div className="pt-2 sm:pt-3 border-t border-border/60">
                      <Link
                        href={`/team/${member.id}`}
                        className="inline-flex items-center justify-between w-full text-[11px] sm:text-xs font-semibold text-primary dark:text-cyan-400 hover:text-cyan-500 transition-colors"
                      >
                        <span>{isEnglish ? "View Profile" : "প্রোফাইল দেখুন"}</span>
                        <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
