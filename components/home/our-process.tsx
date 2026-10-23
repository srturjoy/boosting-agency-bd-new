"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  SearchCheck,
  Compass,
  Rocket,
  Sliders,
  BarChart3,
  ArrowRight,
  MessageSquare,
  Layers,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { ScrollReveal, fadeInUp, staggerContainer } from "@/components/ui/motion"

const processSteps = [
  {
    number: "01",
    title: "Discovery & Business Analysis",
    titleBn: "ডিসকভারি ও ব্যবসায়িক বিশ্লেষণ",
    description:
      "We review your current digital presence, product or service offering, target audience demographics, and business objectives to identify practical growth opportunities.",
    descriptionBn:
      "আমরা আপনার বর্তমান ডিজিটাল উপস্থিতি, পণ্য বা সেবার ধরন, টার্গেট অডিয়েন্স এবং ব্যবসায়িক লক্ষ্যমাত্রা বিশ্লেষণ করে বাস্তবসম্মত মার্কেটিং সুযোগগুলো চিহ্নিত করি।",
    icon: SearchCheck,
    linkHref: "/contact",
    linkLabel: "Book a Discovery Call",
    linkLabelBn: "ডিসকভারি কনসালটেশন নিন",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    titleBn: "কৌশল ও পরিকল্পনা প্রণয়ন",
    description:
      "We design a customized channel roadmap—selecting the right mix of Meta Ads, Google Ads, SEO, landing pages, or automation aligned with your budget and timeline.",
    descriptionBn:
      "আপনার বাজেট ও লক্ষ্য অনুযায়ী মেটা অ্যাডস, গুগল অ্যাডস, এসইও, ল্যান্ডিং পেজ বা অটোমেশনের সঠিক সমন্বয়ে একটি কাস্টমাইজড মার্কেটিং রোডম্যাপ তৈরি করা হয়।",
    icon: Compass,
    linkHref: "/services#strategy",
    linkLabel: "Strategy Services",
    linkLabelBn: "মার্কেটিং কৌশল সেবা",
  },
  {
    number: "03",
    title: "Campaign Setup & Implementation",
    titleBn: "ক্যাম্পেইন সেটআপ ও বাস্তবায়ন",
    description:
      "Our specialists configure ad accounts, audience segments, ad creatives, copywriting, catalog feeds, and landing pages with clean campaign architecture.",
    descriptionBn:
      "আমাদের বিশেষজ্ঞ টিম অ্যাড অ্যাকাউন্ট স্ট্রাকচার, অডিয়েন্স সেগমেন্টেশন, ক্রিয়েটিভ, কপিরাইটিং, ক্যাটালগ ফিড এবং ল্যান্ডিং পেজ পেশাদারভাবে সেটআপ করে।",
    icon: Rocket,
    linkHref: "/services#social-ads",
    linkLabel: "Explore Ad Management",
    linkLabelBn: "অ্যাড ম্যানেজমেন্ট দেখুন",
  },
  {
    number: "04",
    title: "Tracking, Testing & Optimization",
    titleBn: "ট্র্যাকিং, টেস্টিং ও অপটিমাইজেশন",
    description:
      "We implement Meta Pixel, Conversion API (CAPI), Google Analytics 4 (GA4), and Tag Manager, continuously testing creatives and audiences to improve cost efficiency.",
    descriptionBn:
      "সঠিক ডেটা অ্যাট্রিবিউশনের জন্য আমরা মেটা পিক্সেল, কনভার্সন এপিআই (CAPI), GA4 ও GTM সেটআপ করি এবং নিয়মিত এ/বি টেস্টিংয়ের মাধ্যমে বিজ্ঞাপনের কার্যকারিতা উন্নত করি।",
    icon: Sliders,
    linkHref: "/portfolio",
    linkLabel: "See Real Campaign Data",
    linkLabelBn: "ক্যাম্পেইন ডেটা দেখুন",
  },
  {
    number: "05",
    title: "Reporting & Continuous Improvement",
    titleBn: "রিপোর্টিং ও ধারাবাহিক উন্নয়ন",
    description:
      "You receive clear, transparent reports on ad spend, leads, purchases, and cost per result—followed by regular strategy reviews to refine ongoing execution.",
    descriptionBn:
      "অ্যাড স্পেন্ড, মেসেজ লিড, ওয়েবসাইট পারচেজ এবং কস্ট-পার-রেজাল্টের স্বচ্ছ রিপোর্ট প্রদান করা হয় এবং পারফরম্যান্স ডেটার ভিত্তিতে পরবর্তী ধাপের উন্নয়ন করা হয়।",
    icon: BarChart3,
    linkHref: "/contact",
    linkLabel: "Start Your Project",
    linkLabelBn: "প্রজেক্ট শুরু করুন",
  },
]

export function OurProcess() {
  const { language } = useLanguage()
  const isEnglish = language === "en"

  return (
    <section id="our-process" className="py-14 lg:py-20 bg-secondary/30 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold mb-3 border border-cyan-500/20">
            <Layers className="h-3.5 w-3.5" />
            <span>{isEnglish ? "Our Process" : "আমাদের কাজের প্রক্রিয়া"}</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            {isEnglish
              ? "How We Plan, Execute & Optimize Your Campaigns"
              : "যেভাবে আমরা আপনার মার্কেটিং ক্যাম্পেইন পরিকল্পনা ও পরিচালনা করি"}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {isEnglish
              ? "A structured, transparent five-step workflow designed to align your marketing investment with measurable business objectives."
              : "আপনার ব্যবসার লক্ষ্যমাত্রার সাথে সামঞ্জস্য রেখে স্বচ্ছ ও সুশৃঙ্খল ৫-ধাপের কর্মপদ্ধতি।"}
          </p>
        </ScrollReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={staggerContainer}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5"
        >
          {processSteps.map((step) => (
            <motion.div key={step.number} variants={fadeInUp} className="h-full">
              <Card className="group h-full rounded-2xl sm:rounded-3xl border border-border/70 hover:border-cyan-500/60 bg-card/95 backdrop-blur-sm card-3d hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between">
                <CardContent className="p-5 sm:p-6 flex flex-col h-full justify-between gap-4">
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 tabular-nums">
                        {step.number}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary text-white shadow-sm group-hover:scale-105 transition-transform duration-300">
                        <step.icon className="h-5 w-5" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-foreground group-hover:text-cyan-500 transition-colors leading-snug">
                      {step.number} — {isEnglish ? step.title : step.titleBn}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-foreground dark:text-slate-300 leading-relaxed">
                      {isEnglish ? step.description : step.descriptionBn}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border/60">
                    <Link
                      href={step.linkHref}
                      className="inline-flex items-center text-xs font-semibold text-primary dark:text-cyan-400 hover:text-cyan-500 transition-colors group/link"
                    >
                      <span>{isEnglish ? step.linkLabel : step.linkLabelBn}</span>
                      <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <ScrollReveal className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="gradient-primary text-white rounded-2xl shadow-md shadow-cyan-500/20">
            <Link href="/contact">
              <span>{isEnglish ? "Request a Free Strategy Consultation" : "ফ্রি স্ট্র্যাটেজি কনসালটেশন নিন"}</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-2xl border-border hover:bg-secondary">
            <a
              href="https://wa.me/8801518961899?text=Hello%20Boosting%20Agency%20BD%2C%20I%20would%20like%20to%20discuss%20your%205-step%20marketing%20process%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="mr-2 h-4 w-4 text-emerald-500" />
              <span>{isEnglish ? "Discuss on WhatsApp" : "হোয়াটসঅ্যাপে আলোচনা করুন"}</span>
            </a>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
