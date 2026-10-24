"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { TEAM_MEMBERS } from "@/data/team"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Globe, 
  ExternalLink, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle,
  Sparkles,
  GraduationCap,
  Award,
  Briefcase,
  ChevronRight
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function FounderCeoSpotlight() {
  const { language } = useLanguage()
  const isEnglish = language === "en"

  const founder = TEAM_MEMBERS.find((m) => m.id === "siddiqur-rahman-turjoy") || TEAM_MEMBERS[0]

  const photoUrl = founder.defaultImages[0]?.url || "/images/team/siddiqur-rahman-turjoy.webp"

  const websiteUrl = founder.website || "https://turjoy.boostingagencyofficial.site/"

  const ambientParticles = [
    { top: "12%", left: "6%", size: 4, delay: "0s", color: "bg-cyan-400/70" },
    { top: "24%", right: "8%", size: 3, delay: "0.8s", color: "bg-sky-400/65" },
    { top: "68%", left: "4%", size: 3.5, delay: "1.5s", color: "bg-purple-400/60" },
    { top: "78%", right: "12%", size: 4, delay: "2.1s", color: "bg-cyan-300/70" },
    { top: "42%", left: "44%", size: 3, delay: "1.2s", color: "bg-blue-400/60" },
    { top: "18%", left: "52%", size: 3.5, delay: "2.6s", color: "bg-purple-300/55" },
  ]

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-14 relative z-10">
      <Card
        data-leadership-ceo-node="true"
        itemScope
        itemType="https://schema.org/Person"
        className="leadership-ceo-node rounded-3xl border border-cyan-500/50 bg-gradient-to-br from-card via-card to-secondary/40 shadow-2xl overflow-visible relative group"
      >
        <meta itemProp="url" content="https://boostingagencyofficial.site/team/siddiqur-rahman-turjoy" />
        <meta itemProp="worksFor" content="Boosting Agency BD" />

        {/* Ambient Background Layer (Clipped to Card Rounded Corners) */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none z-0">
          <div className="leadership-ceo-pulse-aura absolute -top-12 -right-12 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl" />
          <div className="leadership-ceo-pulse-aura absolute -bottom-12 -left-12 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl" style={{ animationDelay: "1.8s" }} />
          <div className="leadership-ceo-pulse-aura absolute top-1/2 left-1/3 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" style={{ animationDelay: "3.1s" }} />

          {/* Top Electric-Blue Rim Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/75 to-transparent" />

          {/* Restrained Ambient Particles */}
          {ambientParticles.map((p, idx) => (
            <span
              key={idx}
              style={{
                top: p.top,
                left: p.left,
                right: p.right,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDelay: p.delay,
              }}
              className={`leadership-ambient-particle absolute rounded-full ${p.color} shadow-[0_0_8px_rgba(34,211,238,0.65)]`}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-10 relative z-10">
          {/* Photo Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] relative rounded-3xl overflow-hidden bg-slate-900 border border-cyan-500/35 shadow-2xl">
              <img
                src={photoUrl}
                alt="Siddiqur Rahman Turjoy, Founder and CEO of Boosting Agency BD"
                title="Siddiqur Rahman Turjoy — Founder & CEO | Boosting Agency BD"
                itemProp="image"
                width={800}
                height={1000}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5">
                <span className="inline-block px-3 py-1 rounded-xl bg-cyan-500/25 backdrop-blur-md text-cyan-300 border border-cyan-500/40 text-xs font-bold">
                  {isEnglish ? founder.role : (founder.roleBn || founder.role)}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1.5 leading-tight">
                  {isEnglish 
                    ? (founder.preferredName ? `${founder.name} (${founder.preferredName})` : founder.name)
                    : (founder.preferredNameBn ? `${founder.nameBn || founder.name} (${founder.preferredNameBn})` : (founder.nameBn || founder.name))}
                </h3>
                <p className="text-xs text-slate-300 font-medium mt-0.5">
                  Boosting Agency BD
                </p>
              </div>
            </div>
          </div>

          {/* Details & Biography Column */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold border border-cyan-500/20">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>{isEnglish ? "Founder & Executive Leadership" : "প্রতিষ্ঠাতা ও নির্বাহী নেতৃত্ব"}</span>
                </div>
                <Badge variant="outline" className="text-[11px] border-emerald-500/30 text-emerald-500 bg-emerald-500/10">
                  {isEnglish ? "5+ Years Stated Experience" : "৫+ বছরের অভিজ্ঞতা"}
                </Badge>
                <Badge variant="outline" className="text-[11px] border-cyan-500/30 text-cyan-500 bg-cyan-500/10">
                  {isEnglish ? "B.Sc. in CSE (BUBT, 2024)" : "বিএসসি ইন সিএসই (বিইউবিটি, ২০২৪)"}
                </Badge>
              </div>

              <div>
                <h2 itemProp="name" className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                  {isEnglish 
                    ? (founder.preferredName ? `${founder.name} (${founder.preferredName})` : founder.name)
                    : (founder.preferredNameBn ? `${founder.nameBn || founder.name} (${founder.preferredNameBn})` : (founder.nameBn || founder.name))}
                </h2>
                <p itemProp="jobTitle" className="text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 mt-1">
                  {isEnglish ? founder.role : (founder.roleBn || founder.role)}
                </p>
                <p className="text-xs sm:text-sm text-foreground dark:text-slate-200 font-semibold leading-relaxed mt-1.5">
                  {isEnglish ? founder.titles : (founder.titlesBn || founder.titles)}
                </p>
              </div>

              {/* Supporting Positioning Statement */}
              <div className="p-4 rounded-2xl bg-secondary/60 border border-cyan-500/20">
                <p className="text-xs sm:text-sm text-foreground dark:text-slate-100 font-medium italic leading-relaxed">
                  &ldquo;{isEnglish ? founder.positioning : (founder.positioningBn || founder.positioning)}&rdquo;
                </p>
              </div>

              {/* 4 Connected Expertise Pillars Quick Badges */}
              <div className="space-y-2 pt-1">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground dark:text-slate-400">
                  {isEnglish ? "Four Core Practice Areas" : "দক্ষতার চারটি মূল স্তম্ভ"}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { en: "Performance Marketing", bn: "পারফরম্যান্স মার্কেটিং" },
                    { en: "Branding & Consulting", bn: "ব্র্যান্ডিং ও কনসালটিং" },
                    { en: "AI & Automation", bn: "এআই ও অটোমেশন" },
                    { en: "MarTech & Software", bn: "মারটেক ও সফটওয়্যার" },
                  ].map((p, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-secondary/70 border border-border/80 text-center text-[11px] font-semibold text-foreground dark:text-slate-200"
                    >
                      {isEnglish ? p.en : p.bn}
                    </div>
                  ))}
                </div>
              </div>

              {/* Accredited Certifications Pill Row */}
              <div className="space-y-2 pt-1">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground dark:text-slate-400">
                  {isEnglish ? "Verified Industry Certifications" : "যাচাইকৃত পেশাদার সনদসমূহ"}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Meta Blueprint",
                    "Google Ads Certified",
                    "Google Data Analytics",
                    "HubSpot Marketing",
                    "Ethical Hacking (Creative IT)",
                  ].map((cert, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20"
                    >
                      <Award className="h-3 w-3 text-cyan-500" />
                      <span>{cert}</span>
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground dark:text-slate-300 leading-relaxed whitespace-pre-line line-clamp-3">
                {isEnglish ? founder.bio : (founder.bioBn || founder.bio)}
              </p>
            </div>

            {/* Action Buttons: View Profile + Personal Website + WhatsApp */}
            <div className="pt-6 border-t border-border/60 flex flex-wrap items-center gap-3">
              <Button
                asChild
                className="rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-lg shadow-cyan-500/25 cursor-pointer h-11 px-5"
              >
                <Link href={`/team/${founder.id}`} className="inline-flex items-center gap-2">
                  <span>{isEnglish ? "View Full Profile, Experience & Credentials" : "সম্পূর্ণ প্রোফাইল, অভিজ্ঞতা ও সনদ দেখুন"}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-xl border-border/80 hover:bg-secondary text-xs sm:text-sm font-semibold cursor-pointer h-11 px-5"
              >
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Globe className="h-4 w-4" />
                  <span>{isEnglish ? "Founder Website" : "ফাউন্ডার ওয়েবসাইট"}</span>
                  <ExternalLink className="h-3 w-3 opacity-80" />
                </a>
              </Button>

              <Button
                asChild
                variant="ghost"
                className="rounded-xl text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 text-xs sm:text-sm font-semibold cursor-pointer h-11 px-4"
              >
                <a
                  href={`https://wa.me/8801518961899?text=${encodeURIComponent(founder.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>{isEnglish ? "WhatsApp Consultation" : "হোয়াটসঅ্যাপ পরামর্শ"}</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Central Node Output Emitter Anchor for SVG Knowledge Network */}
        <div
          data-leadership-ceo-emitter="true"
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-2.5 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center h-5 w-5 rounded-full bg-slate-950/90 border border-cyan-400/70 shadow-[0_0_16px_rgba(34,211,238,0.75)]"
        >
          <span className="h-2 w-2 rounded-full bg-cyan-300 animate-ping opacity-75 absolute" />
          <span className="h-2 w-2 rounded-full bg-cyan-300 relative" />
        </div>
      </Card>
    </div>
  )
}
