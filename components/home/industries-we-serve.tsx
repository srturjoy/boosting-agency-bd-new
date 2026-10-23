"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ShoppingBag,
  Shirt,
  Sofa,
  GraduationCap,
  Plane,
  Sparkles,
  Briefcase,
  Store,
  Cpu,
  ArrowRight,
  Building2,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { ScrollReveal, fadeInUp, staggerContainer } from "@/components/ui/motion"

const industries = [
  {
    id: "ecommerce-retail",
    name: "E-commerce & Online Retail",
    nameBn: "ই-কমার্স ও অনলাইন রিটেইল",
    description:
      "Catalog ads, conversion tracking (Meta Pixel & CAPI), and full-funnel store campaigns for online retailers.",
    descriptionBn:
      "অনলাইন রিটেইল স্টোরের জন্য ক্যাটালগ বিজ্ঞাপন, কনভার্সন ট্র্যাকিং (মেটা পিক্সেল ও CAPI) এবং ফুল-ফানেল ক্যাম্পেইন।",
    evidence: "Portfolio: SURAH, Dubai Haul BD & multi-product online stores",
    evidenceBn: "পোর্টফোলিও: SURAH, Dubai Haul BD ও মাল্টি-প্রোডাক্ট অনলাইন শপ",
    icon: ShoppingBag,
    primaryHref: "/portfolio",
    primaryLabel: "View E-commerce Portfolio",
    primaryLabelBn: "ই-কমার্স পোর্টফোলিও দেখুন",
    secondaryHref: "/services#social-ads",
    secondaryLabel: "Meta Ads Service",
    secondaryLabelBn: "মেটা অ্যাডস সেবা",
  },
  {
    id: "fashion-apparel",
    name: "Fashion & Apparel",
    nameBn: "ফ্যাশন ও পোশাক ব্র্যান্ড",
    description:
      "Targeted Facebook & Instagram campaigns, seasonal collection launches, and inbox/website order funnels for clothing brands.",
    descriptionBn:
      "পোশাক ও ফ্যাশন ব্র্যান্ডের জন্য টার্গেটেড ফেসবুক ও ইনস্টাগ্রাম ক্যাম্পেইন, সিজনাল কালেকশন প্রমোশন এবং অর্ডার ফানেল।",
    evidence: "Portfolio: Unique Point, Nahar Atelier, Denim Point & 20+ fashion pages",
    evidenceBn: "পোর্টফোলিও: Unique Point, Nahar Atelier, Denim Point সহ ২০+ ফ্যাশন পেজ",
    icon: Shirt,
    primaryHref: "/portfolio",
    primaryLabel: "Explore Fashion Clients",
    primaryLabelBn: "ফ্যাশন ক্লায়েন্ট দেখুন",
    secondaryHref: "/services#social-ads",
    secondaryLabel: "Social Advertising",
    secondaryLabelBn: "সোশ্যাল বিজ্ঞাপন",
  },
  {
    id: "furniture-home-decor",
    name: "Furniture & Home Décor",
    nameBn: "ফার্নিচার ও হোম ডেকর",
    description:
      "Visual showcase ads, custom-order messaging campaigns, and local showroom inquiry generation for home & interior brands.",
    descriptionBn:
      "হোম ডেকর ও ফার্নিচার শোরুমের জন্য ভিজ্যুয়াল ক্যারোসেল বিজ্ঞাপন, কাস্টম অর্ডার মেসেজিং এবং কাস্টমার ইনকোয়ারি ক্যাম্পেইন।",
    evidence: "Portfolio: UpScale Decor, Elegant Furniture, Furniture Expert & Rainbow Furniture Mart",
    evidenceBn: "পোর্টফোলিও: UpScale Decor, Elegant Furniture, Furniture Expert ও Rainbow Furniture",
    icon: Sofa,
    primaryHref: "/portfolio",
    primaryLabel: "View Furniture Clients",
    primaryLabelBn: "ফার্নিচার ক্লায়েন্ট দেখুন",
    secondaryHref: "/services#social-ads",
    secondaryLabel: "Lead Campaigns",
    secondaryLabelBn: "লিড ক্যাম্পেইন",
  },
  {
    id: "education-training",
    name: "Education & Training",
    nameBn: "শিক্ষা ও প্রশিক্ষণ প্রতিষ্ঠান",
    description:
      "Student admission campaigns, course promotion funnels, and qualified inquiry generation for institutes and training centers.",
    descriptionBn:
      "ট্রেনিং ইনস্টিটিউট ও শিক্ষা প্রতিষ্ঠানের জন্য ভর্তি প্রচারণা, কোর্স প্রমোশন এবং আগ্রহী শিক্ষার্থীদের ইনকোয়ারি জেনারেশন।",
    evidence: "Portfolio: BIMUR (Medical & Ultrasound Training) & educational pages",
    evidenceBn: "পোর্টফোলিও: BIMUR (মেডিকেল ও আল্ট্রাসাউন্ড ট্রেনিং) ও শিক্ষা পেজসমূহ",
    icon: GraduationCap,
    primaryHref: "/portfolio",
    primaryLabel: "See Education Portfolio",
    primaryLabelBn: "শিক্ষা পোর্টফোলিও দেখুন",
    secondaryHref: "/services#strategy",
    secondaryLabel: "Marketing Strategy",
    secondaryLabelBn: "মার্কেটিং কৌশল",
  },
  {
    id: "travel-tourism",
    name: "Travel & Tourism",
    nameBn: "ট্রাভেল ও ট্যুরিজম",
    description:
      "Domestic and international tour package promotions, seasonal travel campaigns, and direct WhatsApp/inbox booking inquiries.",
    descriptionBn:
      "দেশি-বিদেশি ট্যুর প্যাকেজ প্রমোশন, সিজনাল ট্রাভেল ক্যাম্পেইন এবং সরাসরি হোয়াটসঅ্যাপ ও ইনবক্স বুকিং ইনকোয়ারি।",
    evidence: "Portfolio: Heaven Touch Tourism Ltd.",
    evidenceBn: "পোর্টফোলিও: Heaven Touch Tourism Ltd.",
    icon: Plane,
    primaryHref: "/portfolio",
    primaryLabel: "View Travel Portfolio",
    primaryLabelBn: "ট্রাভেল পোর্টফোলিও দেখুন",
    secondaryHref: "/services#social-ads",
    secondaryLabel: "Campaign Setup",
    secondaryLabelBn: "ক্যাম্পেইন সেটআপ",
  },
  {
    id: "beauty-personal-care",
    name: "Beauty & Personal Care",
    nameBn: "বিউটি ও পার্সোনাল কেয়ার",
    description:
      "Audience-segmented skincare, cosmetics, and personal care product promotions designed for repeat social & website orders.",
    descriptionBn:
      "স্কিনকেয়ার, কসমেটিকস এবং বিউটি পণ্যের জন্য সঠিক অডিয়েন্স টার্গেটিং এবং সোশ্যাল ও ওয়েবসাইট অর্ডার ক্যাম্পেইন।",
    evidence: "Portfolio: Secret Beauty Hub & cosmetics retail pages",
    evidenceBn: "পোর্টফোলিও: Secret Beauty Hub ও কসমেটিকস রিটেইল পেজ",
    icon: Sparkles,
    primaryHref: "/portfolio",
    primaryLabel: "View Beauty Clients",
    primaryLabelBn: "বিউটি ক্লায়েন্ট দেখুন",
    secondaryHref: "/services#content",
    secondaryLabel: "Content & Video",
    secondaryLabelBn: "কন্টেন্ট ও ভিডিও",
  },
  {
    id: "professional-services",
    name: "Professional Services",
    nameBn: "প্রফেশনাল ও কনসালটিং সার্ভিস",
    description:
      "Search intent campaigns, professional web presence, and lead generation workflows for consultancies and service providers.",
    descriptionBn:
      "কনসালটেন্সি ও প্রফেশনাল সার্ভিস প্রতিষ্ঠানের জন্য গুগল সার্চ বিজ্ঞাপন, প্রফেশনাল ওয়েবসাইট এবং লিড জেনারেশন ফানেল।",
    evidence: "Supported via Google Ads, SEO & custom landing pages",
    evidenceBn: "গুগল অ্যাডস, এসইও এবং কাস্টম ল্যান্ডিং পেজের মাধ্যমে পরিচালিত",
    icon: Briefcase,
    primaryHref: "/services#google-ads",
    primaryLabel: "Google Ads Service",
    primaryLabelBn: "গুগল অ্যাডস সেবা",
    secondaryHref: "/services#web-design",
    secondaryLabel: "Web Development",
    secondaryLabelBn: "ওয়েব ডেভেলপমেন্ট",
  },
  {
    id: "local-businesses",
    name: "Local Businesses",
    nameBn: "লোকাল বিজনেস ও সার্ভিস",
    description:
      "Geo-targeted Meta & Google campaigns, Local SEO optimization, and direct phone/WhatsApp call generation for city services.",
    descriptionBn:
      "নির্দিষ্ট এলাকার কাস্টমারদের কাছে পৌঁছাতে জিও-টার্গেটেড বিজ্ঞাপন, লোকাল SEO এবং সরাসরি কল/হোয়াটসঅ্যাপ লিড জেনারেশন।",
    evidence: "Portfolio: VIP AC Service, local showrooms & service centers",
    evidenceBn: "পোর্টফোলিও: VIP AC Service, লোকাল শোরুম ও সার্ভিস সেন্টার",
    icon: Store,
    primaryHref: "/services#seo",
    primaryLabel: "Explore Local SEO",
    primaryLabelBn: "লোকাল SEO দেখুন",
    secondaryHref: "/portfolio",
    secondaryLabel: "Client Directory",
    secondaryLabelBn: "ক্লায়েন্ট ডিরেক্টরি",
  },
  {
    id: "b2b-technology",
    name: "B2B & Technology Businesses",
    nameBn: "বিটুবি (B2B) ও টেকনোলজি ব্যবসা",
    description:
      "Corporate digital branding, textile & manufacturing web presence, server-side analytics, and AI workflow automation.",
    descriptionBn:
      "করপোরেট ও ম্যানুফ্যাকচারিং ব্র্যান্ডিং, ওয়েব ডেভেলপমেন্ট, সার্ভার-সাইড অ্যানালিটিক্স এবং এআই ওয়ার্কফ্লো অটোমেশন।",
    evidence: "Portfolio: HAOR TEX & AI/automation service capabilities",
    evidenceBn: "পোর্টফোলিও: HAOR TEX ও এআই অটোমেশন সলিউশন",
    icon: Cpu,
    primaryHref: "/services#ai-automation",
    primaryLabel: "AI & Tech Solutions",
    primaryLabelBn: "এআই ও টেক সলিউশন",
    secondaryHref: "/portfolio",
    secondaryLabel: "View B2B Work",
    secondaryLabelBn: "বিটুবি কাজ দেখুন",
  },
]

export function IndustriesWeServe() {
  const { language } = useLanguage()
  const isEnglish = language === "en"

  return (
    <section id="industries" className="py-14 lg:py-20 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold mb-3 border border-cyan-500/20">
            <Building2 className="h-3.5 w-3.5" />
            <span>{isEnglish ? "Industries We Serve" : "যেসব খাতে আমরা কাজ করি"}</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            {isEnglish
              ? "Tailored Digital Marketing Across Core Business Sectors"
              : "বিভিন্ন শিল্প ও ব্যবসায়িক খাতের জন্য কাস্টমাইজড ডিজিটাল মার্কেটিং"}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {isEnglish
              ? "Every industry has distinct customer buying behavior. We align our advertising channels, creative formats, and conversion tracking with your specific business model—backed by our active client portfolio."
              : "প্রতিটি ব্যবসার ক্রেতাদের আচরণ ও ক্রয় প্রক্রিয়া আলাদা। আমাদের ৪৯+ যাচাইকৃত ক্লায়েন্ট পোর্টফোলিও এবং বাস্তব অভিজ্ঞতার আলোকে আমরা আপনার ব্যবসার ধরন অনুযায়ী বিজ্ঞাপন, ট্র্যাকিং ও মার্কেটিং কৌশল সাজাই।"}
          </p>
        </ScrollReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={staggerContainer}
          className="mt-8 sm:mt-12 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6"
        >
          {industries.map((industry) => (
            <motion.div key={industry.id} variants={fadeInUp}>
              <Card className="group h-full rounded-xl sm:rounded-3xl border border-border/70 hover:border-cyan-500/60 bg-card/95 backdrop-blur-sm card-3d hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between overflow-hidden">
                <CardContent className="p-3 sm:p-6 flex flex-col h-full justify-between gap-2.5 sm:gap-4">
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3.5">
                      <div className="flex h-8 w-8 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-lg sm:rounded-xl gradient-primary text-white shadow-sm group-hover:scale-105 transition-transform duration-300">
                        <industry.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <h3 className="text-xs sm:text-lg font-bold text-foreground group-hover:text-cyan-500 transition-colors leading-snug line-clamp-2">
                        {isEnglish ? industry.name : industry.nameBn}
                      </h3>
                    </div>

                    <p className="text-[11px] sm:text-sm text-muted-foreground dark:text-slate-300 leading-snug sm:leading-relaxed line-clamp-3 sm:line-clamp-none">
                      {isEnglish ? industry.description : industry.descriptionBn}
                    </p>

                    <p className="text-[10px] sm:text-xs font-medium text-cyan-600 dark:text-cyan-400 pt-0.5 sm:pt-1 line-clamp-1 sm:line-clamp-none">
                      {isEnglish ? industry.evidence : industry.evidenceBn}
                    </p>
                  </div>

                  <div className="pt-2 sm:pt-3.5 border-t border-border/60 flex flex-wrap items-center justify-between gap-1 sm:gap-2 text-[10px] sm:text-xs font-semibold">
                    <Link
                      href={industry.primaryHref}
                      className="inline-flex items-center text-primary dark:text-cyan-400 hover:text-cyan-500 transition-colors group/link truncate"
                    >
                      <span className="truncate">{isEnglish ? industry.primaryLabel : industry.primaryLabelBn}</span>
                      <ArrowRight className="ml-1 h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0 transition-transform group-hover/link:translate-x-1" />
                    </Link>

                    <Link
                      href={industry.secondaryHref}
                      className="hidden sm:inline-block text-muted-foreground hover:text-foreground transition-colors truncate"
                    >
                      {isEnglish ? industry.secondaryLabel : industry.secondaryLabelBn}
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <ScrollReveal className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="gradient-primary text-white rounded-2xl shadow-md shadow-cyan-500/20">
            <Link href="/portfolio">
              <span>{isEnglish ? "Explore Our 49+ Client Portfolio" : "আমাদের ৪৯+ ক্লায়েন্ট পোর্টফোলিও দেখুন"}</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-2xl border-border hover:bg-secondary">
            <Link href="/services">
              <span>{isEnglish ? "View All Marketing Services" : "সকল মার্কেটিং সেবা দেখুন"}</span>
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
