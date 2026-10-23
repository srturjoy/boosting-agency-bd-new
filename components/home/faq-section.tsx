"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HelpCircle, ChevronDown, ArrowRight, MessageSquare } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { ScrollReveal } from "@/components/ui/motion"

interface FaqItem {
  id: string
  question: string
  questionBn: string
  answer: string
  answerBn: string
  linkHref: string
  linkLabel: string
  linkLabelBn: string
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "available-services",
    question: "What digital marketing services does Boosting Agency BD provide?",
    questionBn: "বুস্টিং এজেন্সি বিডি কী কী ডিজিটাল মার্কেটিং সেবা প্রদান করে?",
    answer:
      "We provide Facebook & Instagram Ads management, Google Ads (Search, Display, and YouTube), Search Engine Optimization (Technical, On-Page, and Local SEO), custom Web Design & E-commerce Development, Branding & Graphic Design, Content & Video Production, and AI Automation workflows for businesses.",
    answerBn:
      "আমরা ফেসবুক ও ইনস্টাগ্রাম বিজ্ঞাপন ম্যানেজমেন্ট, গুগল অ্যাডস (সার্চ, ডিসপ্লে ও ইউটিউব), সার্চ ইঞ্জিন অপটিমাইজেশন (টেকনিক্যাল, অন-পেজ ও লোকাল SEO), ওয়েব ডিজাইন ও ই-কমার্স ডেভেলপমেন্ট, ব্র্যান্ডিং, কন্টেন্ট ও ভিডিও প্রোডাকশন এবং বিজনেস এআই অটোমেশন সেবা প্রদান করি।",
    linkHref: "/services",
    linkLabel: "Explore All Services",
    linkLabelBn: "সকল সেবাসমূহ দেখুন",
  },
  {
    id: "campaign-setup-management",
    question: "How do you set up and manage Meta and Google advertising campaigns?",
    questionBn: "আপনারা কীভাবে মেটা (ফেসবুক/ইনস্টাগ্রাম) এবং গুগল বিজ্ঞাপন ক্যাম্পেইন পরিচালনা করেন?",
    answer:
      "We begin by reviewing your business goals, product catalog or service offer, and target audience. Our media buyers structure campaigns around clear objectives—such as messaging conversations, lead generation, or website purchases—and handle audience segmentation, creative testing, budget pacing, and ongoing optimization.",
    answerBn:
      "প্রথমে আমরা আপনার ব্যবসার লক্ষ্য, পণ্য বা সেবা এবং টার্গেট অডিয়েন্স বিশ্লেষণ করি। এরপর মেসেজ লিড বা ওয়েবসাইট পারচেজের মতো সুনির্দিষ্ট অবজেক্টিভ অনুযায়ী অডিয়েন্স টার্গেটিং, ক্রিয়েটিভ টেস্টিং, বাজেট পেসিং এবং ধারাবাহিক অপটিমাইজেশনের মাধ্যমে ক্যাম্পেইন পরিচালনা করি।",
    linkHref: "/portfolio",
    linkLabel: "View Real Campaign Screenshots",
    linkLabelBn: "বাস্তব ক্যাম্পেইন স্ক্রিনশট দেখুন",
  },
  {
    id: "budgets-and-fees",
    question: "How do advertising budgets and agency service fees work?",
    questionBn: "বিজ্ঞাপনের বাজেট এবং এজেন্সি সার্ভিস ফি কীভাবে নির্ধারিত হয়?",
    answer:
      "Advertising spend is allocated to the ad platforms (such as Meta or Google) according to your chosen campaign budget, while agency management or project fees depend on the scope of services, number of channels, creative requirements, and technical setup. We provide a clear, customized quotation before starting any campaign.",
    answerBn:
      "বিজ্ঞাপনের মূল বাজেট আপনার নির্বাচিত ক্যাম্পেইন অনুযায়ী সরাসরি অ্যাড প্ল্যাটফর্মে (মেটা বা গুগল) ব্যয় হয়, এবং এজেন্সি সার্ভিস বা ম্যানেজমেন্ট ফি নির্ভর করে কাজের পরিধি, চ্যানেল সংখ্যা ও টেকনিক্যাল সেটআপের ওপর। যেকোনো কাজ শুরুর আগে আমরা স্বচ্ছ কোটেশন প্রদান করি।",
    linkHref: "/terms#payment-and-billing-policy",
    linkLabel: "Read Billing & Service Terms",
    linkLabelBn: "বিলিং ও সার্ভিস নীতিমালা পড়ুন",
  },
  {
    id: "reporting-and-tracking",
    question: "How do you track conversions and report campaign performance?",
    questionBn: "কনভার্সন ট্র্যাকিং এবং ক্যাম্পেইন পারফরম্যান্স রিপোর্টিং কীভাবে করা হয়?",
    answer:
      "For website and e-commerce campaigns, we configure Meta Pixel, server-side Meta Conversion API (CAPI), Google Analytics 4 (GA4), and Google Tag Manager to ensure accurate event attribution. Clients receive transparent performance updates covering amount spent, verified results (messages, leads, or purchases), and cost per result.",
    answerBn:
      "ওয়েবসাইট ও ই-কমার্স ক্যাম্পেইনের সঠিক ডেটা ট্র্যাকিংয়ের জন্য আমরা মেটা পিক্সেল, সার্ভার-সাইড কনভার্সন এপিআই (CAPI), গুগল অ্যানালিটিক্স ৪ (GA4) এবং গুগল ট্যাগ ম্যানেজার সেটআপ করি। ক্লায়েন্টদের মোট খরচ, প্রাপ্ত রেজাল্ট (মেসেজ বা পারচেজ) এবং কস্ট-পার-রেজাল্টের স্বচ্ছ রিপোর্ট প্রদান করা হয়।",
    linkHref: "/services#social-ads",
    linkLabel: "Learn About Ads & Tracking",
    linkLabelBn: "বিজ্ঞাপন ও ট্র্যাকিং সম্পর্কে জানুন",
  },
  {
    id: "project-timelines",
    question: "What are the typical timelines for launching campaigns or digital projects?",
    questionBn: "নতুন বিজ্ঞাপন ক্যাম্পেইন বা ওয়েবসাইট/এসইও প্রজেক্ট শুরু করতে কত সময় লাগে?",
    answer:
      "Standard social media or search advertising campaigns can typically be structured and launched within a few business days once assets, tracking access, and approvals are finalized. Custom website development, e-commerce setups, and technical SEO campaigns follow a milestone-based schedule depending on project complexity.",
    answerBn:
      "প্রয়োজনীয় অ্যাসেট ও পেজ/অ্যাকাউন্ট অ্যাক্সেস পাওয়ার পর সাধারণত কয়েক কার্যদিবসের মধ্যেই সোশ্যাল মিডিয়া বা গুগল অ্যাড ক্যাম্পেইন প্রস্তুত ও চালু করা যায়। কাস্টম ওয়েবসাইট ডেভেলপমেন্ট, ই-কমার্স স্টোর এবং এসইও প্রজেক্টের সময়সীমা কাজের পরিধি অনুযায়ী ধাপে ধাপে নির্ধারিত হয়।",
    linkHref: "/contact",
    linkLabel: "Discuss Your Timeline",
    linkLabelBn: "সময়সীমা নিয়ে আলোচনা করুন",
  },
  {
    id: "web-development-and-seo",
    question: "Do you build e-commerce websites and provide ongoing SEO services?",
    questionBn: "আপনারা কি ই-কমার্স ওয়েবসাইট তৈরি এবং দীর্ঘমেয়াদী এসইও (SEO) সেবা দেন?",
    answer:
      "Yes. Our web and SEO specialists build fast, mobile-responsive websites, landing pages, and e-commerce stores integrated with analytics and conversion tracking. We also conduct technical SEO audits, on-page optimization, content planning, and Local SEO to strengthen long-term organic search visibility.",
    answerBn:
      "হ্যাঁ। আমাদের ওয়েব ও এসইও টিম মোবাইল-রেসপন্সিভ ওয়েবসাইট, হাই-কনভার্টিং ল্যান্ডিং পেজ এবং কনভার্সন ট্র্যাকিং যুক্ত ই-কমার্স সাইট তৈরি করে। পাশাপাশি অর্গানিক সার্চ ভিজিবিলিটি বাড়াতে আমরা টেকনিক্যাল SEO অডিট, অন-পেজ অপটিমাইজেশন এবং লোকাল SEO সেবা দিয়ে থাকি।",
    linkHref: "/services#web-design",
    linkLabel: "Web Design & SEO Services",
    linkLabelBn: "ওয়েব ডিজাইন ও এসইও সেবা",
  },
  {
    id: "getting-started",
    question: "How can I get started with Boosting Agency BD?",
    questionBn: "বুস্টিং এজেন্সি বিডি-এর সাথে আমি কীভাবে কাজ শুরু করতে পারি?",
    answer:
      "You can get started by submitting an inquiry through our Contact page or messaging us directly on WhatsApp at +880 1518 961899. Share your business page or website, your primary goals, and the services you are interested in, and our team will schedule a consultation.",
    answerBn:
      "আমাদের Contact পেজে ফর্ম পূরণ করে অথবা সরাসরি +880 1518 961899 নম্বরে হোয়াটসঅ্যাপে মেসেজ দিয়ে কাজ শুরু করতে পারেন। আপনার বিজনেস পেজ বা ওয়েবসাইটের লিংক এবং আপনার লক্ষ্য আমাদের জানান, আমাদের টিম দ্রুত আপনার সাথে পরামর্শের জন্য যোগাযোগ করবে।",
    linkHref: "/contact",
    linkLabel: "Contact Us to Get Started",
    linkLabelBn: "কাজ শুরু করতে যোগাযোগ করুন",
  },
]

export function HomeFaq() {
  const { language } = useLanguage()
  const isEnglish = language === "en"
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0].id)

  const faqSchema = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://boostingagencyofficial.site/#faq",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    }
  }, [])

  return (
    <section id="faq" className="py-14 lg:py-20 bg-background relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold mb-3 border border-cyan-500/20">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>{isEnglish ? "Frequently Asked Questions" : "সচরাচর জিজ্ঞাসিত প্রশ্নাবলী (FAQ)"}</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            {isEnglish
              ? "Common Questions About Our Services & Process"
              : "আমাদের সেবা ও কাজের প্রক্রিয়া সম্পর্কে সাধারণ প্রশ্নোত্তর"}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {isEnglish
              ? "Clear, straightforward answers about campaign setup, budgets, conversion tracking, web development, and how we work."
              : "ক্যাম্পেইন সেটআপ, বাজেট, কনভার্সন ট্র্যাকিং, ওয়েব ডেভেলপমেন্ট এবং আমাদের কাজের নিয়ম সম্পর্কে স্পষ্ট ধারণা নিন।"}
          </p>
        </ScrollReveal>

        <div className="mt-10 space-y-3.5">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-cyan-500/60 bg-card shadow-md shadow-cyan-500/5"
                    : "border-border/70 bg-card/70 hover:border-border"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? "" : item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                  >
                    <span className="text-sm sm:text-base font-bold text-foreground leading-snug">
                      {isEnglish ? item.question : item.questionBn}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-cyan-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={`faq-panel-${item.id}`}
                    className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 space-y-3 border-t border-border/40"
                  >
                    <p className="pt-3 text-xs sm:text-sm text-muted-foreground dark:text-slate-300 leading-relaxed">
                      {isEnglish ? item.answer : item.answerBn}
                    </p>
                    <div>
                      <Link
                        href={item.linkHref}
                        className="inline-flex items-center text-xs font-semibold text-primary dark:text-cyan-400 hover:text-cyan-500 transition-colors"
                      >
                        <span>{isEnglish ? item.linkLabel : item.linkLabelBn}</span>
                        <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Post-FAQ Contact & WhatsApp CTA */}
        <ScrollReveal className="mt-10 rounded-3xl border border-cyan-500/30 bg-secondary/40 p-6 sm:p-8 text-center">
          <h3 className="text-lg sm:text-xl font-bold text-foreground">
            {isEnglish
              ? "Still have questions about your business campaign?"
              : "আপনার ব্যবসার ক্যাম্পেইন সম্পর্কে আরও কিছু জানতে চান?"}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto">
            {isEnglish
              ? "Reach out to our team directly for a customized strategy discussion or service quotation tailored to your goals."
              : "আপনার ব্যবসার লক্ষ্য অনুযায়ী কাস্টমাইজড কৌশল বা কোটেশনের জন্য সরাসরি আমাদের টিমের সাথে কথা বলুন।"}
          </p>
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button asChild size="lg" className="gradient-primary text-white rounded-2xl shadow-md shadow-cyan-500/20">
              <Link href="/contact">
                <span>{isEnglish ? "Contact Our Team" : "আমাদের সাথে যোগাযোগ করুন"}</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-2xl border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20"
            >
              <a
                href="https://wa.me/8801518961899?text=Hello%20Boosting%20Agency%20BD%2C%20I%20have%20a%20question%20about%20your%20digital%20marketing%20services."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                <span>{isEnglish ? "Chat on WhatsApp (+880 1518 961899)" : "হোয়াটসঅ্যাপে মেসেজ করুন"}</span>
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
