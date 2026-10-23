"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  CheckCircle2,
  Target,
  Compass,
  BarChart3,
  Layers,
  Activity,
  MessageSquare,
  ArrowRight,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { ScrollReveal, fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/components/ui/motion"

const features = [
  {
    name: "Data-Driven Marketing",
    nameBn: "ডেটা-চালিত মার্কেটিং",
    description: "Campaign decisions guided by real performance metrics and audience behavior.",
    descriptionBn: "প্রকৃত পারফরম্যান্স মেট্রিক্স এবং অডিয়েন্স ডেটার ভিত্তিতে প্রতিটি ক্যাম্পেইন সিদ্ধান্ত।",
    icon: Target,
  },
  {
    name: "Customized Strategies",
    nameBn: "কাস্টমাইজড কৌশল",
    description: "Tailored marketing plans aligned with your industry, goals, and budget.",
    descriptionBn: "আপনার ব্যবসার ধরন, লক্ষ্য এবং বাজেট অনুযায়ী কাস্টমাইজড মার্কেটিং পরিকল্পনা।",
    icon: Compass,
  },
  {
    name: "Transparent Reporting",
    nameBn: "স্বচ্ছ রিপোর্টিং",
    description: "Clear visibility into ad spend, verified results, and cost per outcome.",
    descriptionBn: "অ্যাড স্পেন্ড, প্রাপ্ত রেজাল্ট এবং কস্ট-পার-রেজাল্টের স্পষ্ট ও স্বচ্ছ হিসাব।",
    icon: BarChart3,
  },
  {
    name: "Multi-Platform Capabilities",
    nameBn: "মাল্টি-প্ল্যাটফর্ম সক্ষমতা",
    description: "Integrated execution across Meta Ads, Google Ads, SEO, Web, and Automation.",
    descriptionBn: "মেটা অ্যাডস, গুগল অ্যাডস, এসইও, ওয়েব ডেভেলপমেন্ট ও অটোমেশনের সমন্বিত সেবা।",
    icon: Layers,
  },
  {
    name: "Tracking & Analytics Expertise",
    nameBn: "ট্র্যাকিং ও অ্যানালিটিক্স দক্ষতা",
    description: "Reliable Meta Pixel, Conversion API (CAPI), GA4, and Tag Manager setup.",
    descriptionBn: "মেটা পিক্সেল, কনভার্সন এপিআই (CAPI), GA4 এবং ট্যাগ ম্যানেজারের নিখুঁত সেটআপ।",
    icon: Activity,
  },
  {
    name: "Dedicated Client Communication",
    nameBn: "নিবেদিত ক্লায়েন্ট কমিউনিকেশন",
    description: "Responsive communication via WhatsApp, phone, and scheduled strategy reviews.",
    descriptionBn: "হোয়াটসঅ্যাপ, ফোন এবং নিয়মিত স্ট্র্যাটেজি রিভিউয়ের মাধ্যমে দ্রুত যোগাযোগ।",
    icon: MessageSquare,
  },
]

const benefits = [
  { en: "Transparent reporting and analytics", bn: "স্বচ্ছ রিপোর্টিং এবং অ্যানালিটিক্স" },
  { en: "Custom strategies for your business", bn: "আপনার ব্যবসার জন্য কাস্টম কৌশল" },
  { en: "No long-term contracts required", bn: "দীর্ঘমেয়াদী চুক্তির প্রয়োজন নেই" },
  { en: "Free initial consultation", bn: "বিনামূল্যে প্রাথমিক পরামর্শ" },
  { en: "Regular strategy reviews", bn: "নিয়মিত কৌশল পর্যালোচনা" },
  { en: "Dedicated account manager", bn: "ডেডিকেটেড অ্যাকাউন্ট ম্যানেজার" },
]

export function WhyChooseUs() {
  const { language, t } = useLanguage()
  const isEnglish = language === "en"

  return (
    <section id="why-choose-us" className="py-14 lg:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
          <ScrollReveal variants={slideInLeft}>
            <p className="text-sm font-semibold text-primary uppercase tracking-wide">{t("whyChooseUs")}</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              {t("whyChooseUsTitle")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {t("whyChooseUsDescription")}
            </p>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              variants={staggerContainer}
              className="mt-10 grid grid-cols-2 gap-3.5 sm:gap-5"
            >
              {features.map((feature) => (
                <motion.div 
                  key={feature.name} 
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-card/85 backdrop-blur-sm border border-border/70 hover:border-cyan-500/50 card-3d group shadow-sm hover:shadow-xl hover:shadow-cyan-500/10"
                >
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl gradient-primary text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300">
                    <feature.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-base font-bold text-foreground leading-snug">
                      {isEnglish ? feature.name : feature.nameBn}
                    </h3>
                    <p className="mt-1 text-[11px] sm:text-sm text-muted-foreground dark:text-slate-300 leading-snug sm:leading-relaxed">
                      {isEnglish ? feature.description : feature.descriptionBn}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold">
              <Link
                href="/services"
                className="inline-flex items-center text-primary dark:text-cyan-400 hover:text-cyan-500 transition-colors"
              >
                <span>{isEnglish ? "Explore Our Services" : "আমাদের সেবাসমূহ দেখুন"}</span>
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
              <span className="text-border">•</span>
              <Link
                href="/portfolio"
                className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <span>{isEnglish ? "View Verified Campaign Portfolio" : "ক্যাম্পেইন পোর্টফোলিও দেখুন"}</span>
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
          
          <ScrollReveal variants={slideInRight} className="relative">
            <motion.div 
              className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/20 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt={isEnglish ? "Team collaboration in modern office" : "আধুনিক অফিসে টিম সহযোগিতা"}
                width={800}
                height={600}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </motion.div>
            {/* Benefits card - 3D Glass Surface */}
            <motion.div 
              initial={{ opacity: 0, y: 30, x: 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-4 lg:-right-8 rounded-2xl sm:rounded-3xl glass-card-3d p-4 sm:p-6 max-w-[280px] sm:max-w-sm card-3d border border-white/80 dark:border-white/10 shadow-2xl"
            >
              <h4 className="font-bold text-sm sm:text-base text-foreground mb-3 sm:mb-4">{t("whatYouGet")}</h4>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={benefit.en} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className="flex items-center gap-2 text-xs sm:text-sm text-foreground dark:text-slate-100 font-medium"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-500 shrink-0" />
                    {isEnglish ? benefit.en : benefit.bn}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
