"use client"

import { useEffect, useRef, useState, useMemo } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Star, 
  Quote, 
  ExternalLink, 
  Globe, 
  ShieldCheck, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause,
  LayoutGrid,
  SlidersHorizontal,
  Sparkles
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { ScrollReveal } from "@/components/ui/motion"
import { CLIENTS, CLIENT_CATEGORIES, ClientRecord } from "@/data/clients"

export function Testimonials() {
  const { language } = useLanguage()
  const isEnglish = language === "en"

  const scrollRef = useRef<HTMLDivElement>(null)
  const [isAutoScroll, setIsAutoScroll] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<typeof CLIENT_CATEGORIES[number]>("All")
  const [viewMode, setViewMode] = useState<"carousel" | "grid">("carousel")
  const [gridLimit, setGridLimit] = useState(12)
  const isHoveredRef = useRef(false)

  // Filter clients by category
  const filteredReviews = useMemo(() => {
    if (selectedCategory === "All") return CLIENTS
    return CLIENTS.filter((c) => c.category === selectedCategory)
  }, [selectedCategory])

  // Duplicated list for infinite seamless marquee
  const duplicatedReviews = useMemo(() => {
    return [...filteredReviews, ...filteredReviews]
  }, [filteredReviews])

  // Continuous marquee animation
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer || viewMode !== "carousel") return

    let animationId: number
    let scrollPosition = scrollContainer.scrollLeft || 0
    const scrollSpeed = 0.55

    const scroll = () => {
      if (isAutoScroll && !isHoveredRef.current) {
        scrollPosition += scrollSpeed

        // Reset position when we've scrolled through half (the original items)
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0
        }

        scrollContainer.scrollLeft = scrollPosition
      } else {
        scrollPosition = scrollContainer.scrollLeft
      }
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    const handleMouseEnter = () => {
      isHoveredRef.current = true
    }
    const handleMouseLeave = () => {
      isHoveredRef.current = false
    }

    scrollContainer.addEventListener("mouseenter", handleMouseEnter)
    scrollContainer.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter)
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isAutoScroll, viewMode, filteredReviews])

  const handleScrollManual = (direction: "left" | "right") => {
    const container = scrollRef.current
    if (!container) return
    const amount = direction === "left" ? -350 : 350
    container.scrollBy({ left: amount, behavior: "smooth" })
  }

  const getInitials = (name: string) => {
    const clean = name.replace(/[^a-zA-Z0-9\s]/g, "").trim()
    const parts = clean.split(/\s+/).filter(Boolean)
    if (parts.length === 0) return "BA"
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
    return (parts[0][0] + parts[1][0]).toUpperCase()
  }

  return (
    <section id="testimonials" className="py-14 lg:py-20 gradient-dark text-primary-foreground overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-xs font-semibold mb-3 border border-cyan-400/20">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>
              {isEnglish
                ? "49 Official Client Pages & Project Summaries"
                : "৪৯টি অফিশিয়াল ক্লায়েন্ট পেজ ও প্রজেক্ট সামারি"}
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
            {isEnglish ? "Client Testimonials & Portfolio Highlights" : "ক্লায়েন্টদের প্রতিক্রিয়া ও পোর্টফোলিও হাইলাইট"}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {isEnglish
              ? "Explore the businesses we support across Bangladesh, complete with direct links to their official Facebook pages and websites. Project engagement notes are shown alongside each verified business link."
              : "বাংলাদেশ জুড়ে যেসব ব্যবসার সাথে আমরা কাজ করি তাদের অফিশিয়াল ফেসবুক পেজ ও ওয়েবসাইটের ডিরেক্ট লিংকসহ আমাদের কাজের সংক্ষিপ্ত বিবরণ এক্সপ্লোর করুন।"}
          </p>

          {/* Category Filter Pills & Mode Switcher */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <div className="flex gap-1.5 overflow-x-auto p-1 bg-slate-900/80 rounded-2xl border border-slate-800 max-w-full">
              {CLIENT_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat)
                    setGridLimit(12)
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-cyan-500/20"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* View Mode & Carousel Controls */}
            <div className="flex items-center gap-1.5 bg-slate-900/80 p-1 rounded-2xl border border-slate-800">
              <button
                type="button"
                onClick={() => setViewMode("carousel")}
                className={`p-1.5 rounded-xl text-xs font-medium flex items-center gap-1 transition-all ${
                  viewMode === "carousel" ? "bg-slate-800 text-cyan-300 shadow-xs" : "text-slate-300 hover:text-white"
                }`}
                title={isEnglish ? "Carousel View" : "ক্যারোসেল ভিউ"}
                aria-label="Carousel View"
              >
                <SlidersHorizontal className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded-xl text-xs font-medium flex items-center gap-1 transition-all ${
                  viewMode === "grid" ? "bg-slate-800 text-cyan-300 shadow-xs" : "text-slate-300 hover:text-white"
                }`}
                title={isEnglish ? "Grid View" : "গ্রিড ভিউ"}
                aria-label="Grid View"
              >
                <LayoutGrid className="h-3.5 w-3.5" />
              </button>

              {viewMode === "carousel" && (
                <>
                  <div className="w-[1px] h-4 bg-slate-700 mx-1" />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleScrollManual("left")}
                    className="h-7 w-7 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="h-3.5 w-3.5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsAutoScroll(!isAutoScroll)}
                    className="h-7 w-7 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
                    title={isAutoScroll ? "Pause carousel" : "Resume carousel"}
                    aria-label={isAutoScroll ? "Pause carousel" : "Resume carousel"}
                  >
                    {isAutoScroll ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleScrollManual("right")}
                    className="h-7 w-7 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
                    aria-label="Next review"
                  >
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Button>
                </>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* RENDER VIEW 1: CONTINUOUS MARQUEE CAROUSEL (2 Cards Side-by-Side on Mobile) */}
      {viewMode === "carousel" ? (
        <div
          ref={scrollRef}
          className="mt-8 sm:mt-14 flex gap-3 sm:gap-6 overflow-x-hidden px-3 sm:px-6"
          style={{ scrollBehavior: "auto" }}
        >
          {duplicatedReviews.map((client, index) => (
            <Card
              key={`${client.id}-${index}`}
              className="flex-shrink-0 w-[calc(50vw-18px)] min-w-[155px] max-w-[195px] sm:max-w-none sm:w-[350px] bg-slate-900/90 border border-slate-700/80 backdrop-blur-md hover:bg-slate-900 hover:border-cyan-400/70 card-3d rounded-xl sm:rounded-3xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 relative overflow-hidden flex flex-col justify-between group"
            >
              {/* Corner Glow */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-400/20 transition-colors" />

              <CardContent className="p-3 sm:p-6 relative flex flex-col h-full justify-between">
                <div>
                  {/* Top Bar: 5 Golden Stars & Category Badge */}
                  <div className="flex items-center justify-between mb-2 sm:mb-4 gap-1">
                    <div className="flex gap-0.5 sm:gap-1 items-center">
                      {[...Array(client.rating || 5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-amber-400 text-amber-400 drop-shadow-xs" />
                      ))}
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-[8px] sm:text-[10px] font-semibold bg-slate-800 text-cyan-300 border-slate-700 px-1.5 sm:px-2 py-0.5 rounded-md sm:rounded-lg truncate max-w-[70px] sm:max-w-none"
                    >
                      {client.category}
                    </Badge>
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-200 text-[10px] sm:text-sm leading-snug sm:leading-relaxed mb-1.5 sm:mb-3 font-normal italic line-clamp-3 sm:line-clamp-none">
                    &ldquo;{isEnglish ? client.review : (client.reviewBn || client.review)}&rdquo;
                  </p>
                  <p className="hidden sm:block text-[10px] text-slate-400 mb-4">
                    {isEnglish
                      ? "Verified official page link · Quote flagged for written sign-off review"
                      : "যাচাইকৃত অফিশিয়াল পেজ লিংক · লিখিত অনুমোদন পর্যালোচনার অধীন"}
                  </p>
                </div>

                {/* Reviewer / Client Identity */}
                <div>
                  <div className="border-t border-slate-800 pt-2 sm:pt-4 flex items-center justify-between gap-1.5 sm:gap-3">
                    <div className="flex items-center gap-1.5 sm:gap-3 min-w-0">
                      <div className="flex h-7 w-7 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl gradient-primary text-white text-[10px] sm:text-xs font-bold shadow-md shadow-cyan-500/20 shrink-0">
                        {getInitials(client.name)}
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-white text-[11px] sm:text-sm truncate">
                          {isEnglish ? client.name : (client.nameBn || client.name)}
                        </p>
                        <p className="text-cyan-300 text-[9px] sm:text-[11px] font-medium truncate">
                          {isEnglish ? client.reviewerRole : (client.reviewerRoleBn || client.reviewerRole)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action Link to Official Facebook Page */}
                  <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-slate-800/60 flex items-center justify-between gap-1">
                    <a
                      href={client.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[9px] sm:text-[11px] font-semibold text-cyan-300 hover:text-white transition-colors truncate"
                      aria-label={`Visit Facebook page of ${client.name}`}
                    >
                      <svg className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-current shrink-0" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      <span className="truncate">Facebook</span>
                    </a>

                    {client.websiteUrl && (
                      <a
                        href={client.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-0.5 text-[9px] sm:text-[11px] font-semibold text-cyan-400 hover:text-white transition-colors shrink-0"
                        aria-label={`Visit official website of ${client.name}`}
                      >
                        <Globe className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                        <span className="hidden xs:inline">Web</span>
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        /* RENDER VIEW 2: RESPONSIVE GRID (ALL 49 REVIEWS) */
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 mt-8 sm:mt-14">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {filteredReviews.slice(0, gridLimit).map((client) => (
              <Card
                key={client.id}
                className="bg-slate-900/90 border border-slate-700/80 backdrop-blur-md hover:border-cyan-400/70 card-3d rounded-xl sm:rounded-3xl p-3 sm:p-6 flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-2 sm:mb-4 gap-1">
                    <div className="flex gap-0.5 sm:gap-1 items-center">
                      {[...Array(client.rating || 5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-[8px] sm:text-[10px] font-semibold bg-slate-800 text-cyan-300 border-slate-700 px-1.5 sm:px-2 py-0.5 rounded-md sm:rounded-lg truncate max-w-[70px] sm:max-w-none"
                    >
                      {client.category}
                    </Badge>
                  </div>

                  <p className="text-slate-200 text-[10px] sm:text-sm leading-snug sm:leading-relaxed mb-1.5 sm:mb-3 italic line-clamp-3 sm:line-clamp-none">
                    &ldquo;{isEnglish ? client.review : (client.reviewBn || client.review)}&rdquo;
                  </p>
                  <p className="hidden sm:block text-[10px] text-slate-400 mb-4">
                    {isEnglish
                      ? "Verified official page link · Quote flagged for written sign-off review"
                      : "যাচাইকৃত অফিশিয়াল পেজ লিংক · লিখিত অনুমোদন পর্যালোচনার অধীন"}
                  </p>
                </div>

                <div>
                  <div className="border-t border-slate-800 pt-2 sm:pt-4 flex items-center justify-between gap-1.5 sm:gap-3">
                    <div className="flex items-center gap-1.5 sm:gap-3 min-w-0">
                      <div className="flex h-7 w-7 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl gradient-primary text-white text-[10px] sm:text-xs font-bold shadow-md shrink-0">
                        {getInitials(client.name)}
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-white text-[11px] sm:text-sm truncate">
                          {isEnglish ? client.name : (client.nameBn || client.name)}
                        </p>
                        <p className="text-cyan-300 text-[9px] sm:text-[11px] font-medium truncate">
                          {isEnglish ? client.reviewerRole : (client.reviewerRoleBn || client.reviewerRole)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-slate-800/60 flex items-center justify-between gap-1">
                    <a
                      href={client.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[9px] sm:text-[11px] font-semibold text-cyan-300 hover:text-white transition-colors truncate"
                    >
                      <svg className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-current shrink-0" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      <span className="truncate">Facebook</span>
                      <ExternalLink className="h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0" />
                    </a>

                    {client.websiteUrl && (
                      <a
                        href={client.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-0.5 text-[9px] sm:text-[11px] font-semibold text-cyan-400 hover:text-white transition-colors shrink-0"
                      >
                        <Globe className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                        <span className="hidden xs:inline">Web</span>
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Show More in Grid */}
          {gridLimit < filteredReviews.length && (
            <div className="mt-10 text-center">
              <Button
                variant="outline"
                onClick={() => setGridLimit(filteredReviews.length)}
                className="bg-slate-900 border-slate-700 text-white hover:bg-slate-800 rounded-xl px-6"
              >
                {isEnglish
                  ? `Show All ${filteredReviews.length} Reviews`
                  : `সব ${filteredReviews.length} টি রিভিউ দেখুন`}
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Footer CTA leading to full /portfolio directory */}
      <div className="mt-14 text-center relative z-10 px-6">
        <Button asChild size="lg" className="gradient-primary text-white rounded-2xl shadow-lg shadow-cyan-500/25">
          <Link href="/portfolio">
            <span>
              {isEnglish
                ? "Explore Complete Client Directory (49 Pages)"
                : "সম্পূর্ণ ক্লায়েন্ট ডিরেক্টরি দেখুন (৪৯টি পেজ)"}
            </span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
