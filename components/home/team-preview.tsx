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
    <section id="team-preview" className="py-14 lg:py-20 bg-secondary/30 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold mb-3 border border-cyan-500/20">
              <Users className="h-3.5 w-3.5" />
              <span>{isEnglish ? "Leadership & Specialist Team" : "লিডারশিপ ও বিশেষজ্ঞ টিম"}</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              {isEnglish
                ? "Meet the Team Behind Boosting Agency BD"
                : "বুস্টিং এজেন্সি বিডি-এর নেপথ্যের বিশেষজ্ঞ টিম"}
            </h2>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              {isEnglish
                ? "Our campaigns, tracking architectures, and creative strategies are led by experienced digital marketers, media buyers, and marketing technologists."
                : "আমাদের প্রতিটি ক্যাম্পেইন, সার্ভার-সাইড ট্র্যাকিং এবং ক্রিয়েটিভ কৌশল পরিচালিত হয় অভিজ্ঞ ডিজিটাল মার্কেটার, মিডিয়া বায়ার এবং টেকনোলজিস্টদের সমন্বয়ে।"}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Button asChild size="lg" className="gradient-primary text-white rounded-2xl shadow-md shadow-cyan-500/20">
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
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
                <Card className="group h-full rounded-2xl sm:rounded-3xl border border-border/75 hover:border-cyan-500/70 bg-card card-3d hover:shadow-xl hover:shadow-cyan-500/15 transition-all duration-300 flex flex-col justify-between overflow-hidden">
                  <div className="aspect-[4/4] relative overflow-hidden bg-slate-900">
                    <img
                      src={photoUrl}
                      alt={`${displayName} — ${isEnglish ? member.role : member.roleBn || member.role} at Boosting Agency BD`}
                      width={800}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-cyan-500/20 backdrop-blur-md text-cyan-300 border border-cyan-500/30 text-[10px] font-semibold">
                        <ShieldCheck className="h-3 w-3" />
                        <span>{isEnglish ? member.role : member.roleBn || member.role}</span>
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-3">
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-cyan-500 transition-colors leading-snug">
                        {displayName}
                      </h3>
                      <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                        {isEnglish ? member.description : member.descriptionBn || member.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-border/60">
                      <Link
                        href={`/team/${member.id}`}
                        className="inline-flex items-center justify-between w-full text-xs font-semibold text-primary dark:text-cyan-400 hover:text-cyan-500 transition-colors"
                      >
                        <span>{isEnglish ? "View Profile" : "প্রোফাইল দেখুন"}</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
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
