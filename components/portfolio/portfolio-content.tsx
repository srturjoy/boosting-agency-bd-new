"use client"

import { useState, useMemo, useEffect, useCallback, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { 
  Search, 
  ExternalLink, 
  Globe, 
  MessageCircle, 
  Sparkles, 
  CheckCircle2, 
  X, 
  ArrowRight,
  ShieldCheck,
  Building2,
  ChevronDown,
  Eye,
  TrendingUp,
  DollarSign,
  Target,
  BarChart3,
  Calendar,
  Activity,
  MousePointerClick,
  Users,
  ShoppingBag,
  ZoomIn,
  Layers
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { CLIENTS, CLIENT_CATEGORIES, ClientRecord } from "@/data/clients"
import { getCampaignBackupUrl } from "./campaign-image-registry"

interface RealCampaignItem {
  id: string
  matchKey: string
  imageUrl: string
  title: string
  campaignName: string
  category: string
  results: string
  resultLabel: string
  costPerResult: string
  amountSpent: string
  shortDescription: string
  extraMetrics: { label: string; value: string }[]
  detailedExplanation: string
  agencyStrategy: string
}

const MESSAGE_LEAD_CAMPAIGNS_DATA: RealCampaignItem[] = [
  {
    id: "msg-1",
    matchKey: "592261293_122206722236514031",
    imageUrl:
      "/images/campaigns/message-lead-campaigns/message-lead-campaigns_592261293_122206722236514031_4358856224825328988_n_jpg_64830.jpg",
    title: "Promotional Offer Messaging Campaign",
    campaignName: "কাল প্রতি অর্ডার এ ৫ হাজার ফ্রি — Engagement Campaign",
    category: "Promotional Retail Offer",
    results: "226 Messages",
    resultLabel: "Messaging conversations started",
    costPerResult: "$0.02",
    amountSpent: "$4.00",
    shortDescription:
      "Generated 226 direct customer inbox conversations for just $4.00 total ad spend at an ultra-low $0.02 per message.",
    extraMetrics: [
      { label: "Total Conversations", value: "226 Messaging Conversations Started" },
      { label: "Cost Per Conversation", value: "$0.02" },
      { label: "Total Ad Spend", value: "$4.00" },
      { label: "Reporting Period", value: "2 Nov 2022 – 2 Dec 2025" },
    ],
    detailedExplanation:
      "In this Meta Ads Manager performance report, the campaign generated 226 verified messaging conversations started with a total spend of only $4.00. The average cost per messaging conversation was maintained at just $0.02, proving how even a micro-budget promotional campaign can drive immediate inbox inquiries.",
    agencyStrategy:
      "Boosting Agency BD crafted an attention-grabbing Bangla promotional hook ('কাল প্রতি অর্ডার এ ৫ হাজার ফ্রি') paired with high-intent Messenger click-to-chat targeting to maximize inbox response volume at minimal ad spend.",
  },
  {
    id: "msg-2",
    matchKey: "591629386_122206722914514031",
    imageUrl:
      "/images/campaigns/message-lead-campaigns/message-lead-campaigns_591629386_122206722914514031_214039811972614365_n_jpg_64836.jpg",
    title: "New Engagement Messaging Lead Campaign",
    campaignName: "New engagement ad — Messaging Campaign",
    category: "Direct-to-Consumer Lead Gen",
    results: "911 Messages",
    resultLabel: "Messaging conversations started",
    costPerResult: "$0.05",
    amountSpent: "$49.94",
    shortDescription:
      "Delivered 911 verified customer messaging conversations from a $49.94 budget at an efficient $0.05 cost per lead.",
    extraMetrics: [
      { label: "Total Conversations", value: "911 Messaging Conversations Started" },
      { label: "Cost Per Conversation", value: "$0.05" },
      { label: "Total Ad Spend", value: "$49.94" },
      { label: "Reporting Period", value: "2 Nov 2022 – 2 Dec 2025" },
    ],
    detailedExplanation:
      "This screenshot shows 911 messaging conversations started at a cost of $0.05 per conversation, with a total amount spent of $49.94. The delivery curve highlights a sharp, consistent surge in customer messages once optimization locked onto high-converting placements.",
    agencyStrategy:
      "Our team structured targeted audience segments and optimized automated Messenger ice-breakers so interested shoppers initiated conversations immediately after viewing the ad creative.",
  },
  {
    id: "msg-3",
    matchKey: "592258780_122206723376514031",
    imageUrl:
      "/images/campaigns/message-lead-campaigns/message-lead-campaigns_592258780_122206723376514031_949721135675756771_n_jpg_73978.jpg",
    title: "High-Efficiency $35 Budget Messaging Campaign",
    campaignName: "New engagement campaign ($35 Budget)",
    category: "E-Commerce Inbox Sales",
    results: "1,359 Messages",
    resultLabel: "Messaging conversations started",
    costPerResult: "$0.02",
    amountSpent: "$28.96",
    shortDescription:
      "Captured 1,359 direct customer messages while spending only $28.96 — achieving a rock-bottom $0.02 cost per conversation.",
    extraMetrics: [
      { label: "Total Conversations", value: "1,359 Messaging Conversations Started" },
      { label: "Cost Per Conversation", value: "$0.02" },
      { label: "Total Ad Spend", value: "$28.96 (of $35.00 budget)" },
      { label: "Reporting Period", value: "2 Nov 2022 – 2 Dec 2025" },
    ],
    detailedExplanation:
      "This Meta Ads report verifies 1,359 messaging conversations started from just $28.96 in ad spend (out of a $35.00 budget), maintaining a $0.02 cost per messaging conversation started.",
    agencyStrategy:
      "Boosting Agency BD combined thumb-stopping product visuals with narrow buyer-intent targeting and bid control to generate over 1,350 inbox leads under $30.",
  },
  {
    id: "msg-4",
    matchKey: "469059355_122130042656514031",
    imageUrl:
      "/images/campaigns/message-lead-campaigns/message-lead-campaigns_469059355_122130042656514031_369102855538254387_n_jpg_63750.jpg",
    title: "Rishat Ridi Leather — Messaging Campaign",
    campaignName: "Rishat ridi leather",
    category: "Leather & Footwear Brand",
    results: "2,946 Messages",
    resultLabel: "Messaging conversations started",
    costPerResult: "$0.03",
    amountSpent: "$102.33",
    shortDescription:
      "Generated 2,946 direct buyer conversations for Rishat Ridi Leather at $0.03 per message with $102.33 total spend.",
    extraMetrics: [
      { label: "Total Conversations", value: "2,946 Messaging Conversations Started" },
      { label: "Cost Per Conversation", value: "$0.03" },
      { label: "Total Ad Spend", value: "$102.33" },
      { label: "Reporting Period", value: "23 Nov 2022 – 1 Sep 2024" },
    ],
    detailedExplanation:
      "This campaign for Rishat Ridi Leather delivered 2,946 messaging conversations started at an average cost of $0.03 per conversation and $102.33 total spend. The performance graph demonstrates sustained lead volume for high-quality leather footwear.",
    agencyStrategy:
      "We targeted fashion and leather footwear shoppers across Bangladesh using product showcase creatives and direct inbox order prompts.",
  },
  {
    id: "msg-5",
    matchKey: "514027894_122175761390514031",
    imageUrl:
      "/images/campaigns/message-lead-campaigns/message-lead-campaigns_514027894_122175761390514031_1004080647476241184_n_jpg_34292.jpg",
    title: "High-Volume Retail Inbox Lead Campaign",
    campaignName: "Retail Messaging Lead Campaign",
    category: "Fashion & Retail",
    results: "2,946 Messages",
    resultLabel: "Messaging conversations started",
    costPerResult: "$0.03",
    amountSpent: "$102.33",
    shortDescription:
      "Drove 2,946 customer messaging conversations at $0.03 per conversation with $102.33 total ad spend.",
    extraMetrics: [
      { label: "Total Conversations", value: "2,946 Messaging Conversations Started" },
      { label: "Cost Per Conversation", value: "$0.03" },
      { label: "Total Ad Spend", value: "$102.33" },
      { label: "Reporting Period", value: "30 May 2022 – 30 Jun 2025" },
    ],
    detailedExplanation:
      "Verified Meta Ads performance chart showing 2,946 messaging conversations started, $0.03 per messaging conversation started, and $102.33 total amount spent across the reporting window.",
    agencyStrategy:
      "Boosting Agency BD optimized placement delivery for Messenger inbox and Facebook Feed to ensure maximum buyer inquiry volume at minimal cost.",
  },
  {
    id: "msg-6",
    matchKey: "516531500_122177199812514031",
    imageUrl:
      "/images/campaigns/message-lead-campaigns/message-lead-campaigns_516531500_122177199812514031_6905019251829299086_n_jpg_141864.jpg",
    title: "Rishat Leather — 47-Campaign Account Summary",
    campaignName: "Rishat Leather Multi-Campaign Portfolio",
    category: "Footwear & Leather Portfolio",
    results: "14,791+ Msgs",
    resultLabel: "Top Campaign: 3,727 Messages ($0.02)",
    costPerResult: "$0.02 – $0.05",
    amountSpent: "$1,266.76",
    shortDescription:
      "Full ad account view across 47 campaigns showing 3,727 messages ($0.02/msg), 3,119 messages ($0.04/msg), and 1.04M+ reach.",
    extraMetrics: [
      { label: "Top Campaign #1", value: "3,727 Messages @ $0.02 ($76.95 spent)" },
      { label: "Top Campaign #2", value: "3,119 Messages @ $0.04 ($131.71 spent)" },
      { label: "Top Campaign #3", value: "2,946 Messages @ $0.03 ($102.33 spent)" },
      { label: "Top Campaign #4", value: "2,190 Messages @ $0.05 ($107.72 spent)" },
      { label: "Account Reach", value: "1,047,066 People Reached" },
      { label: "Account Impressions", value: "3,146,306 Impressions" },
    ],
    detailedExplanation:
      "This full Meta Ads Manager dashboard table captures 47 campaigns with $1,266.76 total spend, 1,047,066 reach, and 3,146,306 impressions. Top individual campaigns delivered 3,727 messages at $0.02 each, 3,119 messages at $0.04 each, 2,946 messages at $0.03 each, and 2,190 messages at $0.05 each.",
    agencyStrategy:
      "By continuously testing multiple ad sets and scaling the lowest-cost winners, Boosting Agency BD maintained a $0.02–$0.05 cost per lead across more than 3.1 million impressions.",
  },
  {
    id: "msg-7",
    matchKey: "517278887_122177854142514031",
    imageUrl:
      "/images/campaigns/message-lead-campaigns/message-lead-campaigns_517278887_122177854142514031_8042573549680543604_n_jpg_128733.jpg",
    title: "Multi-Client Active Messaging & Engagement Suite",
    campaignName: "12 Active Messaging & Engagement Campaigns",
    category: "Multi-Category Active Campaigns",
    results: "405 Messages",
    resultLabel: "405 Messages + 52,947 Post Engagements",
    costPerResult: "$0.10 – $0.29",
    amountSpent: "$107.42+",
    shortDescription:
      "Live dashboard of 12 active campaigns generating 405 inbox leads, 52,947 post engagements, and 8,985 page follows.",
    extraMetrics: [
      { label: "Active Messaging Leads", value: "405 Conversations ($0.10 – $0.29/msg)" },
      { label: "Post Engagements", value: "52,947 Engagements (@ $0.0001)" },
      { label: "ThruPlay Video Views", value: "14,553 Views (@ $0.001)" },
      { label: "Page Follows / Likes", value: "8,985 Follows (@ $0.002)" },
    ],
    detailedExplanation:
      "This live Meta Ads Manager view shows 12 simultaneously active campaigns delivering 405 messaging conversations ($0.10 to $0.29 per message), 52,947 post engagements, 14,553 video views, and 8,985 new page follows.",
    agencyStrategy:
      "Boosting Agency BD balanced direct inbox lead generation with high-volume video engagement and page growth campaigns to build a warm retargeting funnel.",
  },
  {
    id: "msg-8",
    matchKey: "518354575_122179825526514031",
    imageUrl:
      "/images/campaigns/message-lead-campaigns/message-lead-campaigns_518354575_122179825526514031_8241287023402131388_n_jpg_116660.jpg",
    title: "Multi-Campaign Messaging & Reach Dashboard",
    campaignName: "Active Messaging Lead Portfolio",
    category: "E-Commerce & Service Brands",
    results: "730+ Messages",
    resultLabel: "Messaging conversations + 1.8M Reach",
    costPerResult: "$0.03 – $0.16",
    amountSpent: "$1,838.09",
    shortDescription:
      "Account-wide dashboard recording $1,838.09 total spend, 1,800,992 reach, 3,517,036 impressions, and $0.03–$0.16 cost per message.",
    extraMetrics: [
      { label: "Active Messaging Rows", value: "730+ Conversations ($0.03 – $0.16/msg)" },
      { label: "Page Follows Generated", value: "1,937 Follows (@ $0.01)" },
      { label: "Total Account Spend", value: "$1,838.09" },
      { label: "Total Account Reach", value: "1,800,992 People" },
      { label: "Total Impressions", value: "3,517,036 Impressions" },
    ],
    detailedExplanation:
      "This multi-campaign Ads Manager report verifies 1,800,992 people reached and 3,517,036 impressions across $1,838.09 in total ad spend, with active messaging campaigns consistently achieving $0.03 to $0.16 per messaging conversation.",
    agencyStrategy:
      "We managed daily budget allocation across more than a dozen active ad sets, pausing underperformers and scaling ad sets with sub-$0.10 messaging costs.",
  },
  {
    id: "msg-9",
    matchKey: "599962407_122209675322514031",
    imageUrl:
      "/images/campaigns/message-lead-campaigns/message-lead-campaigns_599962407_122209675322514031_7704999519092585729_n_jpg_96553.jpg",
    title: "Ultra-Low Cost $20 Messaging Campaign",
    campaignName: "Lifetime Budget $20 Messaging Ad",
    category: "Consumer Product Lead Gen",
    results: "1,445 Messages",
    resultLabel: "Messaging conversations started",
    costPerResult: "$0.0138",
    amountSpent: "$20.00",
    shortDescription:
      "Generated 1,445 messaging conversations from a $20.00 lifetime budget — an extraordinary $0.0138 per message.",
    extraMetrics: [
      { label: "Total Conversations", value: "1,445 Messaging Conversations Started" },
      { label: "Cost Per Conversation", value: "$0.0138" },
      { label: "Amount Spent", value: "$20.00 (Lifetime Budget)" },
      { label: "Reach", value: "46,358 People" },
      { label: "Impressions", value: "53,419 Impressions" },
    ],
    detailedExplanation:
      "From a $20.00 lifetime budget, this campaign reached 46,358 people, generated 53,419 impressions, and delivered 1,445 messaging conversations started at just $0.0138 per conversation.",
    agencyStrategy:
      "Boosting Agency BD used high-CTR native video creatives and broad engagement signals to drive massive inbox inquiry volume at just 1.38 cents per lead.",
  },
  {
    id: "msg-10",
    matchKey: "600416344_122209675166514031",
    imageUrl:
      "/images/campaigns/message-lead-campaigns/message-lead-campaigns_600416344_122209675166514031_1986049422276954564_n_jpg_97395.jpg",
    title: "$40 Lifetime Budget Messaging Campaign",
    campaignName: "Completed $40 Messaging Lead Ad",
    category: "Retail & Direct Orders",
    results: "624 Messages",
    resultLabel: "Messaging conversations started",
    costPerResult: "$0.0641",
    amountSpent: "$40.00",
    shortDescription:
      "Delivered 624 customer messaging conversations on a $40.00 lifetime budget with 43,488 reach and 78,262 impressions.",
    extraMetrics: [
      { label: "Total Conversations", value: "624 Messaging Conversations Started" },
      { label: "Cost Per Conversation", value: "$0.0641" },
      { label: "Amount Spent", value: "$40.00 (Lifetime Budget)" },
      { label: "Reach", value: "43,488 People" },
      { label: "Impressions", value: "78,262 Impressions" },
    ],
    detailedExplanation:
      "This completed campaign spent its exact $40.00 lifetime budget to generate 624 messaging conversations started at $0.0641 per conversation, reaching 43,488 unique users with 78,262 total impressions.",
    agencyStrategy:
      "We refined audience age, location, and interest layers to ensure every inbox conversation came from qualified buyers ready to place an order.",
  },
  {
    id: "msg-11",
    matchKey: "600664670_122209832786514031",
    imageUrl:
      "/images/campaigns/message-lead-campaigns/message-lead-campaigns_600664670_122209832786514031_2278875621983301162_n_jpg_92230.jpg",
    title: "Rapid Inbox Lead Generation Campaign",
    campaignName: "$20 Rapid Lead Generation Ad",
    category: "Viral Product Promotion",
    results: "1,445 Messages",
    resultLabel: "Messaging conversations started",
    costPerResult: "$0.0138",
    amountSpent: "$20.00",
    shortDescription:
      "Achieved 1,445 inbox conversations for $20.00 spent ($0.0138 per conversation) across 46,358 reach and 53,419 impressions.",
    extraMetrics: [
      { label: "Total Conversations", value: "1,445 Messaging Conversations Started" },
      { label: "Cost Per Conversation", value: "$0.0138" },
      { label: "Amount Spent", value: "$20.00" },
      { label: "Reach", value: "46,358 People" },
      { label: "Impressions", value: "53,419 Impressions" },
    ],
    detailedExplanation:
      "This mobile Meta Ads Manager report confirms 1,445 messaging conversations started on a $20.00 budget at $0.0138 per result, reaching 46,358 people and delivering 53,419 impressions.",
    agencyStrategy:
      "Boosting Agency BD leveraged social proof and fast-loading mobile creative formats to convert feed scrollers into active Messenger leads.",
  },
  {
    id: "msg-12",
    matchKey: "602334305_122209832576514031",
    imageUrl:
      "/images/campaigns/message-lead-campaigns/message-lead-campaigns_602334305_122209832576514031_3361030893700368438_n_jpg_131719.jpg",
    title: "Money89 10$ — Micro-Budget Lead Campaign",
    campaignName: "Money89 10$",
    category: "Fashion & Apparel",
    results: "512 Messages",
    resultLabel: "Messaging conversations started",
    costPerResult: "$0.0195",
    amountSpent: "$9.99",
    shortDescription:
      "Generated 512 messaging conversations from just $9.99 spent ($0.0195 per message) with 22,581 reach.",
    extraMetrics: [
      { label: "Total Conversations", value: "512 Messaging Conversations Started" },
      { label: "Cost Per Conversation", value: "$0.0195" },
      { label: "Amount Spent", value: "$9.99 ($5.00 daily budget)" },
      { label: "Reach", value: "22,581 People" },
      { label: "Impressions", value: "25,223 Impressions" },
    ],
    detailedExplanation:
      "Running on a $5.00 daily budget, the 'Money89 10$' campaign generated 512 messaging conversations started for $9.99 total spend, achieving a $0.0195 cost per conversation across 22,581 reach and 25,223 impressions.",
    agencyStrategy:
      "Our team tested compact $10 budget bursts to validate product demand quickly and deliver over 500 buyer inquiries under $10.",
  },
  {
    id: "msg-13",
    matchKey: "603012010_122210986682514031",
    imageUrl:
      "/images/campaigns/message-lead-campaigns/message-lead-campaigns_603012010_122210986682514031_7572243519308252920_n_jpg_129167.jpg",
    title: "Active Menswear & Apparel Messaging Campaign",
    campaignName: "Active $74 Lifetime Budget Apparel Ad",
    category: "Menswear & Clothing",
    results: "1,065 Messages",
    resultLabel: "Messaging conversations started",
    costPerResult: "$0.0618",
    amountSpent: "$65.84",
    shortDescription:
      "Active menswear campaign delivering 1,065 messaging conversations at $0.0618 per lead with 62,500 reach and 108,218 impressions.",
    extraMetrics: [
      { label: "Total Conversations", value: "1,065 Messaging Conversations Started" },
      { label: "Cost Per Conversation", value: "$0.0618" },
      { label: "Amount Spent", value: "$65.84 (of $74.00 budget)" },
      { label: "Reach", value: "62,500 People" },
      { label: "Impressions", value: "108,218 Impressions" },
    ],
    detailedExplanation:
      "This active campaign generated 1,065 messaging conversations started while spending $65.84 of its $74.00 lifetime budget ($8.16 remaining), averaging $0.0618 per conversation with 62,500 reach and 108,218 impressions.",
    agencyStrategy:
      "Boosting Agency BD targeted men's fashion shoppers with clear sizing and cash-on-delivery details in the ad copy to drive high-intent inbox orders.",
  },
  {
    id: "msg-14",
    matchKey: "603787489_122210986730514031",
    imageUrl:
      "/images/campaigns/message-lead-campaigns/message-lead-campaigns_603787489_122210986730514031_6014978866424503527_n_jpg_137529.jpg",
    title: "High-Volume $100 Budget Messaging Campaign",
    campaignName: "Active $100 Lifetime Budget Campaign",
    category: "Apparel & Retail Scaling",
    results: "3,161 Messages",
    resultLabel: "Messaging conversations started",
    costPerResult: "$0.0192",
    amountSpent: "$60.76",
    shortDescription:
      "Delivered 3,161 customer messaging conversations for only $60.76 spent ($0.0192 per message) across 129,874 impressions.",
    extraMetrics: [
      { label: "Total Conversations", value: "3,161 Messaging Conversations Started" },
      { label: "Cost Per Conversation", value: "$0.0192" },
      { label: "Amount Spent", value: "$60.76 (of $100.00 budget)" },
      { label: "Reach", value: "64,972 People" },
      { label: "Impressions", value: "129,874 Impressions" },
    ],
    detailedExplanation:
      "With $60.76 spent out of a $100.00 lifetime budget ($39.24 remaining), this active campaign generated 3,161 messaging conversations started at an ultra-low $0.0192 per conversation, reaching 64,972 people with 129,874 impressions.",
    agencyStrategy:
      "We scaled lifetime budget pacing alongside high-engagement product imagery to cross 3,100 direct customer messages at under 2 cents per lead.",
  },
  {
    id: "msg-15",
    matchKey: "603849026_122210986592514031",
    imageUrl:
      "/images/campaigns/message-lead-campaigns/message-lead-campaigns_603849026_122210986592514031_5792985738735537371_n_jpg_118072.jpg",
    title: "জাপানি লাইট — Gadget Messaging Campaign",
    campaignName: "জাপানি লাইট-Message-ads 3",
    category: "Gadgets & Electronics",
    results: "2,161 Messages",
    resultLabel: "Messaging conversations started",
    costPerResult: "$0.0606",
    amountSpent: "$130.86",
    shortDescription:
      "Generated 2,161 inbox leads for 'জাপানি লাইট' at $0.0606 per conversation, reaching 246,922 people across 306,549 impressions.",
    extraMetrics: [
      { label: "Total Conversations", value: "2,161 Messaging Conversations Started" },
      { label: "Cost Per Conversation", value: "$0.0606" },
      { label: "Amount Spent", value: "$130.86" },
      { label: "Reach", value: "246,922 People" },
      { label: "Impressions", value: "306,549 Impressions" },
    ],
    detailedExplanation:
      "The 'জাপানি লাইট-Message-ads 3' campaign generated 2,161 messaging conversations started at $0.0606 per conversation with $130.86 total spend, reaching 246,922 people and generating 306,549 impressions.",
    agencyStrategy:
      "Boosting Agency BD highlighted practical product benefits and real usage demonstrations to capture over 2,160 electronics buyers via Messenger.",
  },
  {
    id: "msg-16",
    matchKey: "604618064_122210986904514031",
    imageUrl:
      "/images/campaigns/message-lead-campaigns/message-lead-campaigns_604618064_122210986904514031_3110132742273449186_n_jpg_94489.jpg",
    title: "Scaled $75 Budget Messaging Lead Campaign",
    campaignName: "Active $75 Lifetime Budget Campaign",
    category: "Online Retail & Apparel",
    results: "1,215 Messages",
    resultLabel: "Messaging conversations started",
    costPerResult: "$0.0573",
    amountSpent: "$69.56",
    shortDescription:
      "Produced 1,215 messaging conversations at $0.0573 per message from $69.56 spent, with 67,561 reach and 123,498 impressions.",
    extraMetrics: [
      { label: "Total Conversations", value: "1,215 Messaging Conversations Started" },
      { label: "Cost Per Conversation", value: "$0.0573" },
      { label: "Amount Spent", value: "$69.56 (of $75.00 budget)" },
      { label: "Reach", value: "67,561 People" },
      { label: "Impressions", value: "123,498 Impressions" },
    ],
    detailedExplanation:
      "This active campaign recorded 1,215 messaging conversations started at $0.0573 per conversation with $69.56 spent out of a $75.00 lifetime budget ($5.44 remaining), reaching 67,561 users and 123,498 impressions.",
    agencyStrategy:
      "Our media buyers optimized frequency and placement breakdown to keep lead quality high and cost per message under $0.06.",
  },
  {
    id: "msg-17",
    matchKey: "605473441_122210986550514031",
    imageUrl:
      "/images/campaigns/message-lead-campaigns/message-lead-campaigns_605473441_122210986550514031_4176941776262603287_n_jpg_129121.jpg",
    title: "এলার্ম লক — Mamabazar24 Messaging Campaign",
    campaignName: "এলার্ম লক - Mamabazar24 Message Campaign",
    category: "Security & Hardware Gadgets",
    results: "2,293 Messages",
    resultLabel: "Messaging conversations started",
    costPerResult: "$0.0757",
    amountSpent: "$173.65",
    shortDescription:
      "Delivered 2,293 inbox conversations for Mamabazar24's Alarm Lock at $0.0757 per message across 242,683 reach and 431,719 impressions.",
    extraMetrics: [
      { label: "Total Conversations", value: "2,293 Messaging Conversations Started" },
      { label: "Cost Per Conversation", value: "$0.0757" },
      { label: "Amount Spent", value: "$173.65 ($5.00 daily budget)" },
      { label: "Reach & Impressions", value: "242,683 Reach / 431,719 Impressions" },
      { label: "CPC & Frequency", value: "$0.0500 CPC / 1.78 Frequency" },
    ],
    detailedExplanation:
      "Managed for Mamabazar24, the 'এলার্ম লক' campaign generated 2,293 messaging conversations started at $0.0757 per result and $173.65 total spend. It reached 242,683 people with 431,719 impressions, $0.0500 CPC, and a 1.78 frequency.",
    agencyStrategy:
      "Boosting Agency BD targeted bike, home, and shop owners interested in security gadgets, using problem-solving video creatives to drive 2,293 buyer inquiries.",
  },
  {
    id: "msg-18",
    matchKey: "605708655_122210986862514031",
    imageUrl:
      "/images/campaigns/message-lead-campaigns/message-lead-campaigns_605708655_122210986862514031_2726238510088191091_n_jpg_92230.jpg",
    title: "Direct Response $20 Messaging Campaign",
    campaignName: "Direct Inbox Lead Campaign",
    category: "Consumer Goods",
    results: "1,445 Messages",
    resultLabel: "Messaging conversations started",
    costPerResult: "$0.0138",
    amountSpent: "$20.00",
    shortDescription:
      "Captured 1,445 direct messaging conversations on a $20.00 lifetime budget at $0.0138 per message with 46,358 reach.",
    extraMetrics: [
      { label: "Total Conversations", value: "1,445 Messaging Conversations Started" },
      { label: "Cost Per Conversation", value: "$0.0138" },
      { label: "Amount Spent", value: "$20.00" },
      { label: "Reach", value: "46,358 People" },
      { label: "Impressions", value: "53,419 Impressions" },
    ],
    detailedExplanation:
      "This screenshot verifies 1,445 messaging conversations started from a $20.00 lifetime budget ($0.0138 cost per result), reaching 46,358 people and delivering 53,419 impressions.",
    agencyStrategy:
      "We combined high-relevance local copy with automated Messenger quick replies to maximize lead capture efficiency.",
  },
  {
    id: "msg-19",
    matchKey: "606389664_122210986634514031",
    imageUrl:
      "/images/campaigns/message-lead-campaigns/message-lead-campaigns_606389664_122210986634514031_6570477245486508953_n_jpg_126250.jpg",
    title: "Jamboo Light Metal — High-Volume Lead Campaign",
    campaignName: "Jamboo Light Metal",
    category: "Electronics & Lighting",
    results: "4,035 Messages",
    resultLabel: "Messaging conversations started",
    costPerResult: "$0.0592",
    amountSpent: "$238.76",
    shortDescription:
      "Generated 4,035 messaging conversations for 'Jamboo Light Metal' at $0.0592 per message across 299,857 reach and 433,945 impressions.",
    extraMetrics: [
      { label: "Total Conversations", value: "4,035 Messaging Conversations Started" },
      { label: "Cost Per Conversation", value: "$0.0592" },
      { label: "Amount Spent", value: "$238.76 ($9.00 daily budget)" },
      { label: "Reach", value: "299,857 People" },
      { label: "Impressions", value: "433,945 Impressions" },
    ],
    detailedExplanation:
      "The 'Jamboo Light Metal' campaign delivered 4,035 messaging conversations started at $0.0592 per conversation with $238.76 total ad spend on a $9.00 daily budget, reaching 299,857 people and generating 433,945 impressions.",
    agencyStrategy:
      "Boosting Agency BD scaled this winning gadget campaign steadily using highest-volume bid strategy to generate over 4,000 direct inbox leads.",
  },
  {
    id: "msg-20",
    matchKey: "625371417_122216943386514031",
    imageUrl:
      "/images/campaigns/message-lead-campaigns/message-lead-campaigns_625371417_122216943386514031_6641575878736972195_n_jpg_63833.jpg",
    title: "Rishat Newlo 25 — Leather Messaging Campaign",
    campaignName: "rishat newlo 25",
    category: "Leather & Footwear",
    results: "2,118 Messages",
    resultLabel: "Messaging conversations started",
    costPerResult: "$0.04",
    amountSpent: "$86.63",
    shortDescription:
      "Drove 2,118 customer messaging conversations for 'rishat newlo 25' at $0.04 per message with $86.63 total spend.",
    extraMetrics: [
      { label: "Total Conversations", value: "2,118 Messaging Conversations Started" },
      { label: "Cost Per Conversation", value: "$0.04" },
      { label: "Amount Spent", value: "$86.63" },
      { label: "Reporting Period", value: "23 Nov 2022 – 1 Sep 2024" },
    ],
    detailedExplanation:
      "This Meta Ads Manager report for 'rishat newlo 25' shows 2,118 messaging conversations started at a cost of $0.04 per conversation with $86.63 spent.",
    agencyStrategy:
      "We paired clean product catalog visuals with direct-to-inbox call-to-actions to maintain a steady $0.04 cost per lead.",
  },
  {
    id: "msg-21",
    matchKey: "626030571_122216943278514031",
    imageUrl:
      "/images/campaigns/message-lead-campaigns/message-lead-campaigns_626030571_122216943278514031_4092817830625850002_n_jpg_66879.jpg",
    title: "Rishat Ridi — Footwear Lead Campaign",
    campaignName: "Rishat Ridi",
    category: "Footwear & Retail",
    results: "723 Messages",
    resultLabel: "Messaging conversations started",
    costPerResult: "$0.05",
    amountSpent: "$32.83",
    shortDescription:
      "Generated 723 messaging conversations for 'Rishat Ridi' at $0.05 per message from just $32.83 in total ad spend.",
    extraMetrics: [
      { label: "Total Conversations", value: "723 Messaging Conversations Started" },
      { label: "Cost Per Conversation", value: "$0.05" },
      { label: "Amount Spent", value: "$32.83" },
      { label: "Reporting Period", value: "23 Nov 2022 – 1 Sep 2024" },
    ],
    detailedExplanation:
      "The 'Rishat Ridi' campaign generated 723 messaging conversations started for $32.83 spent, achieving an average cost per messaging conversation of $0.05.",
    agencyStrategy:
      "Boosting Agency BD targeted high-intent footwear shoppers and optimized ad delivery windows for peak evening shopping hours.",
  },
  {
    id: "msg-22",
    matchKey: "627189227_122216943248514031",
    imageUrl:
      "/images/campaigns/message-lead-campaigns/message-lead-campaigns_627189227_122216943248514031_8284434465264696406_n_jpg_67201.jpg",
    title: "Rishat Newlo 25 — Seasonal Footwear Campaign",
    campaignName: "rishat newlo 25 (Aug 2024 Report)",
    category: "Leather & Footwear",
    results: "2,118 Messages",
    resultLabel: "Messaging conversations started",
    costPerResult: "$0.04",
    amountSpent: "$86.63",
    shortDescription:
      "Delivered 2,118 customer messaging conversations at $0.04 per lead with a total ad spend of $86.63.",
    extraMetrics: [
      { label: "Total Conversations", value: "2,118 Messaging Conversations Started" },
      { label: "Cost Per Conversation", value: "$0.04" },
      { label: "Amount Spent", value: "$86.63" },
      { label: "Reporting Period", value: "23 Nov 2022 – 31 Aug 2024" },
    ],
    detailedExplanation:
      "Verified campaign report for 'rishat newlo 25' confirming 2,118 messaging conversations started at $0.04 per conversation and $86.63 total spend.",
    agencyStrategy:
      "Consistent creative refreshing and lookalike audience layering kept messaging costs stable at $0.04 throughout the campaign lifecycle.",
  },
  {
    id: "msg-23",
    matchKey: "628053711_122216943314514031",
    imageUrl:
      "/images/campaigns/message-lead-campaigns/message-lead-campaigns_628053711_122216943314514031_4860961609898335480_n_jpg_64125.jpg",
    title: "Rishat Ridi Leather — Direct Inbox Campaign",
    campaignName: "Rishat ridi leather (Aug 2024 Report)",
    category: "Leather Goods",
    results: "2,946 Messages",
    resultLabel: "Messaging conversations started",
    costPerResult: "$0.03",
    amountSpent: "$102.33",
    shortDescription:
      "Produced 2,946 verified messaging conversations at $0.03 per conversation from $102.33 total ad spend.",
    extraMetrics: [
      { label: "Total Conversations", value: "2,946 Messaging Conversations Started" },
      { label: "Cost Per Conversation", value: "$0.03" },
      { label: "Amount Spent", value: "$102.33" },
      { label: "Reporting Period", value: "23 Nov 2022 – 31 Aug 2024" },
    ],
    detailedExplanation:
      "This report for 'Rishat ridi leather' confirms 2,946 messaging conversations started at $0.03 per conversation with $102.33 spent between Nov 2022 and Aug 2024.",
    agencyStrategy:
      "Boosting Agency BD scaled winning ad creatives across Facebook and Instagram Feeds to sustain high daily message volume at $0.03 per inquiry.",
  },
  {
    id: "msg-24",
    matchKey: "628189254_122216943344514031",
    imageUrl:
      "/images/campaigns/message-lead-campaigns/message-lead-campaigns_628189254_122216943344514031_827828437086750959_n_jpg_64300.jpg",
    title: "Rishat Rp — High-Intent Messaging Campaign",
    campaignName: "Rishat Rp",
    category: "Footwear & Accessories",
    results: "2,549 Messages",
    resultLabel: "Messaging conversations started",
    costPerResult: "$0.03",
    amountSpent: "$86.76",
    shortDescription:
      "Generated 2,549 messaging conversations for 'Rishat Rp' at $0.03 per message with $86.76 in total ad spend.",
    extraMetrics: [
      { label: "Total Conversations", value: "2,549 Messaging Conversations Started" },
      { label: "Cost Per Conversation", value: "$0.03" },
      { label: "Amount Spent", value: "$86.76" },
      { label: "Reporting Period", value: "23 Nov 2022 – 1 Sep 2024" },
    ],
    detailedExplanation:
      "The 'Rishat Rp' campaign achieved 2,549 messaging conversations started at $0.03 per conversation with a total spend of $86.76.",
    agencyStrategy:
      "By combining customer review social proof with direct Messenger CTA prompts, Boosting Agency BD delivered over 2,500 buyer conversations under $87.",
  },
]

const WEBSITE_PURCHASE_CAMPAIGNS_DATA: RealCampaignItem[] = [
  {
    id: "pur-1",
    matchKey: "650757177_122222877572514031",
    imageUrl:
      "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_650757177_122222877572514031_7591552409511033891_n_jpg_123754.jpg",
    title: "Unique Point Sales Campaign (CAPI + Pixel)",
    campaignName: "New Sales campaign unique point (4 Ad Sets, 10 Ads)",
    category: "E-Commerce Website Sales",
    results: "542 Purchases",
    resultLabel: "Website purchases",
    costPerResult: "$1.86",
    amountSpent: "$1,010.25",
    shortDescription:
      "Generated 542 verified website purchases at $1.86 per purchase across $1,010.25 in scaled e-commerce ad spend.",
    extraMetrics: [
      { label: "Total Purchases", value: "542 Website Purchases" },
      { label: "Cost Per Purchase", value: "$1.86" },
      { label: "Total Ad Spend", value: "$1,010.25" },
      { label: "Campaign Structure", value: "4 Ad Sets, 10 Ads (CAPI + Pixel Active)" },
      { label: "Reporting Period", value: "13 Feb 2023 – 13 Mar 2026" },
    ],
    detailedExplanation:
      "This Meta Ads Manager conversion report shows 542 website purchases generated at an average cost of $1.86 per purchase with $1,010.25 spent across 4 ad sets and 10 ads, backed by active Conversions API (CAPI) and Meta Pixel tracking.",
    agencyStrategy:
      "Boosting Agency BD implemented server-side CAPI + Pixel event deduplication and scaled 4 conversion ad sets with 10 creative variations to drive 542 direct website checkouts.",
  },
  {
    id: "pur-2",
    matchKey: "656818636_122224696070514031",
    imageUrl:
      "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_656818636_122224696070514031_3280436921714703977_n_jpg_92548.jpg",
    title: "Single-Day Flash Scaling Sales Campaign",
    campaignName: "New Sales Campaign (4 Ad Sets, 10 Ads)",
    category: "Direct Checkout E-Commerce",
    results: "114 Purchases",
    resultLabel: "Website purchases",
    costPerResult: "$0.91",
    amountSpent: "$103.50",
    shortDescription:
      "Delivered 114 website purchases in a single day for $103.50 spent — achieving an outstanding $0.91 cost per purchase.",
    extraMetrics: [
      { label: "Total Purchases", value: "114 Website Purchases" },
      { label: "Cost Per Purchase", value: "$0.91" },
      { label: "Total Ad Spend", value: "$103.50" },
      { label: "Campaign Structure", value: "4 Ad Sets, 10 Ads" },
      { label: "Reporting Date", value: "14 Mar 2026" },
    ],
    detailedExplanation:
      "On 14 Mar 2026, this 4-ad-set, 10-ad conversion campaign generated 114 website purchases from $103.50 in ad spend, keeping the cost per website purchase at just $0.91.",
    agencyStrategy:
      "Our media buyers used intraday conversion scaling and high-converting video hooks to capture 114 website orders at under $1.00 CPA.",
  },
  {
    id: "pur-3",
    matchKey: "657293649_122224698050514031",
    imageUrl:
      "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_657293649_122224698050514031_3224995908435152501_n_jpg_43694.jpg",
    title: "E-Commerce Direct Checkout Campaign",
    campaignName: "Website Conversion Campaign (6 Mar)",
    category: "Online Store Conversions",
    results: "45 Purchases",
    resultLabel: "Website purchases",
    costPerResult: "$1.64",
    amountSpent: "$73.97",
    shortDescription:
      "Generated 45 direct website purchases from $73.97 ad spend at a profitable $1.64 cost per purchase.",
    extraMetrics: [
      { label: "Total Purchases", value: "45 Website Purchases" },
      { label: "Cost Per Purchase", value: "$1.64" },
      { label: "Total Ad Spend", value: "$73.97" },
      { label: "Reporting Date", value: "6 Mar" },
    ],
    detailedExplanation:
      "This campaign snapshot confirms 45 website purchases at $1.64 per purchase with a total spend of $73.97, showing steady hourly checkout conversions throughout the day.",
    agencyStrategy:
      "Boosting Agency BD optimized landing page load speed and retargeted cart-initiators to convert 45 orders at $1.64 per checkout.",
  },
  {
    id: "pur-4",
    matchKey: "657333974_122224696808514031",
    imageUrl:
      "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_657333974_122224696808514031_1817429351967677198_n_jpg_53000.jpg",
    title: "Low-CPA Micro-Budget Purchase Campaign",
    campaignName: "Micro-Budget Conversion Test (15 Mar 2026)",
    category: "E-Commerce Product Launch",
    results: "9 Purchases",
    resultLabel: "Website purchases",
    costPerResult: "$0.56",
    amountSpent: "$5.07",
    shortDescription:
      "Captured 9 website purchases from just $5.07 in ad spend — achieving an ultra-profitable $0.56 cost per purchase.",
    extraMetrics: [
      { label: "Total Purchases", value: "9 Website Purchases" },
      { label: "Cost Per Purchase", value: "$0.56" },
      { label: "Total Ad Spend", value: "$5.07" },
      { label: "Reporting Date", value: "15 Mar 2026" },
    ],
    detailedExplanation:
      "With just $5.07 spent on 15 Mar 2026, this conversion campaign generated 9 verified website purchases at a cost per purchase of only $0.56.",
    agencyStrategy:
      "We ran a focused conversion test on warm website visitors and engaged shoppers to generate immediate purchases at $0.56 CPA.",
  },
  {
    id: "pur-5",
    matchKey: "657391903_122224697672514031",
    imageUrl:
      "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_657391903_122224697672514031_8715767215055026999_n_jpg_67748.jpg",
    title: "Multi-Ad-Set Website Sales Campaign",
    campaignName: "Scaled Conversion Campaign (9 Mar 2026)",
    category: "E-Commerce Scaling",
    results: "87 Purchases",
    resultLabel: "Website purchases",
    costPerResult: "$1.70",
    amountSpent: "$147.85",
    shortDescription:
      "Drove 87 website purchases for $147.85 in ad spend, maintaining a strong $1.70 cost per purchase.",
    extraMetrics: [
      { label: "Total Purchases", value: "87 Website Purchases" },
      { label: "Cost Per Purchase", value: "$1.70" },
      { label: "Total Ad Spend", value: "$147.85" },
      { label: "Reporting Date", value: "9 Mar 2026" },
    ],
    detailedExplanation:
      "Recorded on 9 Mar 2026, this campaign delivered 87 website purchases at $1.70 per purchase with $147.85 total spend.",
    agencyStrategy:
      "Boosting Agency BD combined broad value-optimized targeting with clear product offer creatives to sustain 87 daily website orders.",
  },
  {
    id: "pur-6",
    matchKey: "657391903_122224697672514031_8715767215055026999_n__1__",
    imageUrl:
      "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_657391903_122224697672514031_8715767215055026999_n__1__jpg_6774.jpg",
    title: "High-Volume Daily Checkout Campaign",
    campaignName: "E-Commerce Sales Campaign (9 Mar 2026)",
    category: "Online Retail Sales",
    results: "87 Purchases",
    resultLabel: "Website purchases",
    costPerResult: "$1.70",
    amountSpent: "$147.85",
    shortDescription:
      "Verified 87 website purchases at $1.70 cost per purchase from $147.85 total ad spend.",
    extraMetrics: [
      { label: "Total Purchases", value: "87 Website Purchases" },
      { label: "Cost Per Purchase", value: "$1.70" },
      { label: "Total Ad Spend", value: "$147.85" },
      { label: "Reporting Date", value: "9 Mar 2026" },
    ],
    detailedExplanation:
      "This Meta Ads Manager conversion report verifies 87 website purchases generated for $147.85 total spend at an average cost of $1.70 per purchase.",
    agencyStrategy:
      "Our team scaled winning conversion ad sets while keeping checkout acquisition costs well below client target CPA.",
  },
  {
    id: "pur-7",
    matchKey: "658445757_122224698416514031",
    imageUrl:
      "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_658445757_122224698416514031_7438331536548449762_n_jpg_64239.jpg",
    title: "New Sales Ad Set — Benchmark-Beating CPA",
    campaignName: "New Sales Ad Set (14 Mar 2026)",
    category: "E-Commerce Conversion Ad Set",
    results: "59 Purchases",
    resultLabel: "Website purchases",
    costPerResult: "$1.27",
    amountSpent: "$74.98",
    shortDescription:
      "Delivered 59 website purchases for $74.98 spent at $1.27 per purchase — outperforming the $2.23 peer benchmark.",
    extraMetrics: [
      { label: "Total Purchases", value: "59 Website Purchases" },
      { label: "Cost Per Purchase", value: "$1.27 (vs $2.23 peer median)" },
      { label: "Total Ad Spend", value: "$74.98" },
      { label: "Reporting Date", value: "14 Mar 2026" },
    ],
    detailedExplanation:
      "This Meta Ads Manager report shows 59 website purchases at $1.27 per purchase from $74.98 spent. Meta's benchmark insight directly confirms this ad set achieved a significantly lower cost per result than similar peer ad sets ($2.23 median).",
    agencyStrategy:
      "Boosting Agency BD used conversion-rate-optimized landing page funnels and lookalike buyer audiences to beat industry CPA benchmarks.",
  },
  {
    id: "pur-8",
    matchKey: "703896729_122232124814514031",
    imageUrl:
      "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_703896729_122232124814514031_2008624678293446595_n_jpg_93322.jpg",
    title: "Unique Point Video Sales — Daily Snapshot",
    campaignName: "Test - Unique Point Sale New Video (1 Ad Set, 3 Ads)",
    category: "Video Commerce Sales",
    results: "12 Purchases",
    resultLabel: "Website purchases",
    costPerResult: "$1.27",
    amountSpent: "$15.20",
    shortDescription:
      "Generated 12 website purchases from $15.20 spent today at $1.27 per purchase (beating the $2.01 peer median).",
    extraMetrics: [
      { label: "Total Purchases", value: "12 Website Purchases" },
      { label: "Cost Per Purchase", value: "$1.27 (vs $2.01 peer median)" },
      { label: "Total Ad Spend", value: "$15.20" },
      { label: "Campaign Structure", value: "1 Ad Set, 3 Video Ads (A/B Test)" },
      { label: "Reporting Date", value: "Today: 21 May 2026" },
    ],
    detailedExplanation:
      "This intraday snapshot ('Today: 21 May 2026') for 'Test - Unique Point Sale New Video' shows 12 website purchases at $1.27 per purchase from $15.20 spent, outperforming the $2.01 peer median while running an active creative test across 3 video ads.",
    agencyStrategy:
      "We split-tested 3 distinct video hooks inside a single conversion ad set to identify the lowest-CPA video creative early in the day.",
  },
  {
    id: "pur-9",
    matchKey: "705238146_122232125144514031",
    imageUrl:
      "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_705238146_122232125144514031_2742035857755383947_n_jpg_97895.jpg",
    title: "Unique Point Video Sales — 7-Day Scaling",
    campaignName: "Test - Unique Point Sale New Video (Last 7 Days)",
    category: "Scaled Video Commerce",
    results: "190 Purchases",
    resultLabel: "Website purchases",
    costPerResult: "$2.17",
    amountSpent: "$412.90",
    shortDescription:
      "Scaled to 190 website purchases in 7 days with $412.90 spent at $2.17 per purchase.",
    extraMetrics: [
      { label: "Total Purchases", value: "190 Website Purchases" },
      { label: "Cost Per Purchase", value: "$2.17" },
      { label: "Total Ad Spend", value: "$412.90" },
      { label: "Reporting Period", value: "Last 7 Days: 14 May – 20 May 2026" },
    ],
    detailedExplanation:
      "Over the 7-day period from 14 May to 20 May 2026, 'Test - Unique Point Sale New Video' generated 190 verified website purchases at $2.17 per purchase with $412.90 in total ad spend.",
    agencyStrategy:
      "Boosting Agency BD scaled the winning video creative across broader conversion audiences to deliver nearly 200 weekly website orders.",
  },
  {
    id: "pur-10",
    matchKey: "747334073_1488332569733528",
    imageUrl:
      "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_747334073_1488332569733528_9141966056937279092_n_jpg_151518.jpg",
    title: "MSAStorebd — Multi-Campaign Sales Overview",
    campaignName: "MSAStorebd Ad Account (lan 24 & New Sales 22)",
    category: "E-Commerce Account Overview",
    results: "467+ Purchases",
    resultLabel: "Top Campaign: 432 Purchases @ $0.37",
    costPerResult: "$0.37 – $0.47",
    amountSpent: "$175.32+",
    shortDescription:
      "MSAStorebd account dashboard featuring 'lan 24' (432 purchases at $0.37/purchase) and 'New Sales 22' (32 purchases at $0.47/purchase).",
    extraMetrics: [
      { label: "Campaign: lan 24", value: "432 Website Purchases @ $0.37 ($160.35 spent)" },
      { label: "Campaign: New Sales 22", value: "32 Website Purchases @ $0.47 ($14.97 spent)" },
      { label: "Campaign: Tarbo fan new", value: "3 Website Purchases @ $1.04 ($3.12 spent)" },
      { label: "Messaging Campaigns", value: "651 Leads (@ $0.07) & 197 Leads (@ $0.05)" },
      { label: "Impressions (lan 24)", value: "174,253 Impressions" },
    ],
    detailedExplanation:
      "This desktop Meta Ads Manager view of the MSAStorebd ad account highlights Meta's 'High performing' badge on 'lan 24', which achieved 432 website purchases at just $0.37 per purchase ($160.35 spent, 174,253 impressions), alongside 'New Sales 22' with 32 website purchases at $0.47 per purchase ($14.97 spent).",
    agencyStrategy:
      "Boosting Agency BD combined single-product landing pages with CAPI purchase optimization to drive sub-$0.40 website purchases at scale.",
  },
  {
    id: "pur-11",
    matchKey: "748597799_28020160680921890",
    imageUrl:
      "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_748597799_28020160680921890_7813687782749355665_n_jpg_68978.jpg",
    title: "lan 24 — High-Performing Purchase Campaign",
    campaignName: "lan 24 (High Performing)",
    category: "Landing Page E-Commerce",
    results: "432 Purchases",
    resultLabel: "Website purchases",
    costPerResult: "$0.37",
    amountSpent: "$160.35",
    shortDescription:
      "Generated 432 website purchases for $160.35 total spend — achieving a remarkable $0.37 cost per website purchase.",
    extraMetrics: [
      { label: "Total Purchases", value: "432 Website Purchases" },
      { label: "Cost Per Purchase", value: "$0.37" },
      { label: "Total Ad Spend", value: "$160.35" },
      { label: "Reporting Period", value: "17 Jun 2023 – 17 Jul 2026" },
    ],
    detailedExplanation:
      "The 'lan 24' campaign generated 432 verified website purchases from $160.35 in ad spend, maintaining an extraordinary $0.37 cost per purchase.",
    agencyStrategy:
      "We built a dedicated high-converting landing page funnel paired with Pixel + CAPI purchase tracking to convert 432 orders at $0.37 CPA.",
  },
  {
    id: "pur-12",
    matchKey: "748829606_3186493041543045",
    imageUrl:
      "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_748829606_3186493041543045_2122049881093404436_n_jpg_83567.jpg",
    title: "New Sales 22 — 63% Lower CPA Purchase Campaign",
    campaignName: "New Sales 22",
    category: "E-Commerce Conversion Funnel",
    results: "32 Purchases",
    resultLabel: "Website purchases",
    costPerResult: "$0.47",
    amountSpent: "$14.97",
    shortDescription:
      "Delivered 32 website purchases for just $14.97 spent at $0.47 per purchase — 63% lower cost than the $1.27 peer median.",
    extraMetrics: [
      { label: "Total Purchases", value: "32 Website Purchases" },
      { label: "Cost Per Purchase", value: "$0.47 (63% lower than $1.27 peer median)" },
      { label: "Total Ad Spend", value: "$14.97" },
      { label: "Reporting Period", value: "17 Jun 2023 – 17 Jul 2026" },
    ],
    detailedExplanation:
      "This Meta Ads Manager report for 'New Sales 22' verifies 32 website purchases from $14.97 spent at $0.47 per purchase. Meta's benchmark note explicitly confirms this campaign achieved 63% lower cost per result than similar peer ad sets ($1.27).",
    agencyStrategy:
      "Boosting Agency BD used precision audience exclusions and irresistible bundle pricing to cut acquisition cost 63% below industry peers.",
  },
  {
    id: "pur-13",
    matchKey: "748969736_1370757955014127",
    imageUrl:
      "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_748969736_1370757955014127_8930111228125870161_n_jpg_50324.jpg",
    title: "New Sales Copy — Fast Split-Test Campaign",
    campaignName: "New Sales campaign – Copy (2 Ad Sets, 2 Ads)",
    category: "Conversion Split Test",
    results: "3 Purchases",
    resultLabel: "Website purchases",
    costPerResult: "$0.92",
    amountSpent: "$2.76",
    shortDescription:
      "Captured 3 immediate website purchases from just $2.76 in initial test spend at $0.92 per purchase.",
    extraMetrics: [
      { label: "Total Purchases", value: "3 Website Purchases" },
      { label: "Cost Per Purchase", value: "$0.92" },
      { label: "Total Ad Spend", value: "$2.76" },
      { label: "Campaign Structure", value: "2 Ad Sets, 2 Ads" },
      { label: "Reporting Date", value: "Today: 17 Jul 2026" },
    ],
    detailedExplanation:
      "On its launch day ('Today: 17 Jul 2026'), 'New Sales campaign – Copy' generated 3 website purchases after spending just $2.76 across 2 ad sets, achieving a $0.92 cost per purchase right out of the gate.",
    agencyStrategy:
      "We duplicated winning ad sets into low-budget test structures to validate immediate checkout conversion before scaling daily budgets.",
  },
  {
    id: "pur-14",
    matchKey: "749132986_2415265302332227",
    imageUrl:
      "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_749132986_2415265302332227_4783399223205638241_n_jpg_130423.jpg",
    title: "46-Campaign E-Commerce Account Summary",
    campaignName: "3 in 1 landing & Multi-Campaign Sales Summary",
    category: "Full E-Commerce Account",
    results: "175+ Purchases",
    resultLabel: "Top Row: 143 Purchases @ $0.04",
    costPerResult: "$0.04 – $0.47",
    amountSpent: "$599.14",
    shortDescription:
      "Full 46-campaign dashboard showing '3 in 1 landing' (143 purchases at $0.04/purchase) and 1,393,321 total impressions.",
    extraMetrics: [
      { label: "Campaign: 3 in 1 landing", value: "143 Website Purchases @ $0.04 ($6.20 spent)" },
      { label: "Campaign: New Sales 22", value: "32 Website Purchases @ $0.47 ($14.97 spent)" },
      { label: "Messaging Campaigns", value: "651 Leads (@ $0.07) & 197 Leads (@ $0.05)" },
      { label: "Total Account Spend", value: "$599.14 across 46 campaigns" },
      { label: "Total Impressions", value: "1,393,321 Impressions" },
    ],
    detailedExplanation:
      "This comprehensive 46-campaign dashboard records $599.14 in total spend and 1,393,321 total impressions. The standout campaign '3 in 1 landing' generated 143 website purchases at $0.04 per purchase ($6.20 spent), alongside 'New Sales 22' with 32 website purchases at $0.47 per purchase.",
    agencyStrategy:
      "Boosting Agency BD engineered high-velocity 3-in-1 product landing pages and conversion tracking to achieve industry-leading ROAS.",
  },
  {
    id: "pur-15",
    matchKey: "749197955_1065357709779922",
    imageUrl:
      "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_749197955_1065357709779922_1570792922458747889_n_jpg_67482.jpg",
    title: "Unique Point Sales — Daily Conversion Run",
    campaignName: "New Sales campaign unique point (Yesterday: 18 Jul 2026)",
    category: "Daily Website Sales",
    results: "15 Purchases",
    resultLabel: "Website purchases",
    costPerResult: "$1.22",
    amountSpent: "$18.23",
    shortDescription:
      "Generated 15 website purchases from $18.23 spent at $1.22 per purchase — beating the $1.65 peer benchmark.",
    extraMetrics: [
      { label: "Total Purchases", value: "15 Website Purchases" },
      { label: "Cost Per Purchase", value: "$1.22 (vs $1.65 peer median)" },
      { label: "Total Ad Spend", value: "$18.23" },
      { label: "Reporting Date", value: "Yesterday: 18 Jul 2026" },
    ],
    detailedExplanation:
      "For 'Yesterday: 18 Jul 2026', 'New Sales campaign unique point' delivered 15 website purchases at $1.22 per purchase with $18.23 spent, outperforming the $1.65 peer median.",
    agencyStrategy:
      "Consistent daily budget optimization and retargeting of high-intent store visitors kept cost per purchase 26% below peer averages.",
  },
  {
    id: "pur-16",
    matchKey: "749315025_2076533886271372",
    imageUrl:
      "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_749315025_2076533886271372_2353768655858490844_n_jpg_63318.jpg",
    title: "New Sales Copy 2 — Conversion Ad Set",
    campaignName: "New Sales campaign – Copy 2 (2 Ad Sets)",
    category: "E-Commerce Checkout",
    results: "9 Purchases",
    resultLabel: "Website purchases",
    costPerResult: "$1.58",
    amountSpent: "$14.21",
    shortDescription:
      "Delivered 9 website purchases for $14.21 spent across 2 ad sets at a $1.58 cost per purchase.",
    extraMetrics: [
      { label: "Total Purchases", value: "9 Website Purchases" },
      { label: "Cost Per Purchase", value: "$1.58" },
      { label: "Total Ad Spend", value: "$14.21" },
      { label: "Campaign Structure", value: "2 Ad Sets, 2 Ads" },
      { label: "Reporting Period", value: "17 Jun 2023 – 17 Jul 2026" },
    ],
    detailedExplanation:
      "This Meta Ads Manager report for 'New Sales campaign – Copy 2' shows 9 website purchases generated at $1.58 per purchase from $14.21 in total ad spend.",
    agencyStrategy:
      "Boosting Agency BD tested parallel ad sets to isolate responsive buyer pockets and maintain profitable small-budget conversion delivery.",
  },
  {
    id: "pur-17",
    matchKey: "749329689_1679237933373742",
    imageUrl:
      "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_749329689_1679237933373742_8510395576206573493_n_jpg_61882.jpg",
    title: "New Sales Copy 3 — Compact Conversion Run",
    campaignName: "New Sales campaign – Copy 3 (2 Ad Sets)",
    category: "E-Commerce Checkout",
    results: "5 Purchases",
    resultLabel: "Website purchases",
    costPerResult: "$1.37",
    amountSpent: "$6.85",
    shortDescription:
      "Generated 5 website purchases from just $6.85 spent across 2 ad sets at $1.37 per purchase.",
    extraMetrics: [
      { label: "Total Purchases", value: "5 Website Purchases" },
      { label: "Cost Per Purchase", value: "$1.37" },
      { label: "Total Ad Spend", value: "$6.85" },
      { label: "Campaign Structure", value: "2 Ad Sets, 2 Ads" },
      { label: "Reporting Period", value: "17 Jun 2023 – 17 Jul 2026" },
    ],
    detailedExplanation:
      "With only $6.85 in total ad spend, 'New Sales campaign – Copy 3' generated 5 verified website purchases at $1.37 per purchase.",
    agencyStrategy:
      "Our micro-budget testing framework allowed the client to acquire customers profitably from day one without risking large ad budgets.",
  },
  {
    id: "pur-18",
    matchKey: "750020724_3536172703224686",
    imageUrl:
      "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_750020724_3536172703224686_8682389938618938520_n_jpg_78497.jpg",
    title: "3 in 1 Landing — Ultra-Low CPA Purchase Campaign",
    campaignName: "3 in 1 landing",
    category: "Landing Page Funnel",
    results: "143 Purchases",
    resultLabel: "Website purchases",
    costPerResult: "$0.04",
    amountSpent: "$6.20",
    shortDescription:
      "Generated 143 website purchases from just $6.20 in ad spend — an extraordinary $0.04 cost per website purchase.",
    extraMetrics: [
      { label: "Total Purchases", value: "143 Website Purchases" },
      { label: "Cost Per Purchase", value: "$0.04" },
      { label: "Total Ad Spend", value: "$6.20" },
      { label: "Reporting Period", value: "17 Jun 2023 – 17 Jul 2026" },
    ],
    detailedExplanation:
      "The '3 in 1 landing' campaign delivered 143 verified website purchases for just $6.20 in total ad spend, achieving an ultra-low $0.04 cost per website purchase.",
    agencyStrategy:
      "Boosting Agency BD combined an irresistible 3-in-1 combo offer with a frictionless 1-step checkout landing page to maximize conversion rate.",
  },
  {
    id: "pur-19",
    matchKey: "751021704_2392641221259354",
    imageUrl:
      "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_751021704_2392641221259354_2647093322391690081_n_jpg_68327.jpg",
    title: "New Sales Copy — 2-Ad-Set Conversion Campaign",
    campaignName: "New Sales campaign – Copy (2 Ad Sets)",
    category: "Online Store Sales",
    results: "20 Purchases",
    resultLabel: "Website purchases",
    costPerResult: "$1.79",
    amountSpent: "$35.76",
    shortDescription:
      "Delivered 20 website purchases from $35.76 total ad spend at a steady $1.79 cost per purchase.",
    extraMetrics: [
      { label: "Total Purchases", value: "20 Website Purchases" },
      { label: "Cost Per Purchase", value: "$1.79" },
      { label: "Total Ad Spend", value: "$35.76" },
      { label: "Campaign Structure", value: "2 Ad Sets, 2 Ads" },
      { label: "Reporting Period", value: "17 Jun 2023 – 17 Jul 2026" },
    ],
    detailedExplanation:
      "This campaign report for 'New Sales campaign – Copy' shows 20 website purchases generated at $1.79 per purchase with $35.76 spent across 2 ad sets.",
    agencyStrategy:
      "We optimized conversion event bidding and ad placement delivery to drive consistent website orders under $1.80 CPA.",
  },
  {
    id: "pur-20",
    matchKey: "842143274_1442158361193580",
    imageUrl:
      "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_842143274_1442158361193580_3784843313342543215_n_jpg_98398.jpg",
    title: "New Sales LE — Scaled E-Commerce Campaign",
    campaignName: "New Sales LE (1 Ad Set, 3 Ads)",
    category: "E-Commerce Conversion Scaling",
    results: "114 Purchases",
    resultLabel: "Website purchases",
    costPerResult: "$1.51",
    amountSpent: "$172.49",
    shortDescription:
      "Generated 114 website purchases for $172.49 spent at $1.51 per purchase — beating the $1.81 peer benchmark.",
    extraMetrics: [
      { label: "Total Purchases", value: "114 Website Purchases" },
      { label: "Cost Per Purchase", value: "$1.51 (vs $1.81 peer median)" },
      { label: "Total Ad Spend", value: "$172.49" },
      { label: "Campaign Structure", value: "1 Ad Set, 3 Ads" },
      { label: "Reporting Period", value: "9 Sep 2023 – 9 Oct 2026" },
    ],
    detailedExplanation:
      "The 'New Sales LE' campaign generated 114 website purchases at $1.51 per purchase with $172.49 total ad spend across 1 ad set and 3 ads, outperforming the $1.81 peer median cost per result.",
    agencyStrategy:
      "Boosting Agency BD rotated 3 high-converting creatives inside a consolidated conversion ad set to sustain 114 website purchases below benchmark CPA.",
  },
]

function BulkUploadCampaignSection({
  sectionKey,
  title,
}: {
  sectionKey: "message-lead-campaigns" | "website-purchase-campaigns"
  title: string
}) {
  const isPurchaseSection = sectionKey === "website-purchase-campaigns"
  const campaigns = isPurchaseSection
    ? WEBSITE_PURCHASE_CAMPAIGNS_DATA
    : MESSAGE_LEAD_CAMPAIGNS_DATA

  const [selectedCampaign, setSelectedCampaign] = useState<RealCampaignItem | null>(null)
  const [isFullZoom, setIsFullZoom] = useState(false)
  const [showAll, setShowAll] = useState(false)

  const displayedCampaigns = showAll ? campaigns : campaigns.slice(0, 6)

  return (
    <div className="rounded-3xl border border-border/80 bg-card p-4 sm:p-6 lg:p-8 space-y-5 sm:space-y-6 shadow-xs">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/60 pb-4 sm:pb-5">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 text-xs font-semibold">
            {isPurchaseSection ? (
              <ShoppingBag className="h-3.5 w-3.5" />
            ) : (
              <MessageCircle className="h-3.5 w-3.5" />
            )}
            <span>
              {isPurchaseSection
                ? "Verified Website Purchase Screenshot Results"
                : "Verified Message Lead Screenshot Results"}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-foreground">
              {title}
            </h3>
            <Badge
              variant="secondary"
              className="rounded-full px-3 py-0.5 text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
            >
              {campaigns.length} Verified Screenshots
            </Badge>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-3xl leading-relaxed">
            {isPurchaseSection
              ? "Real Meta Ads Manager website purchase results managed by Boosting Agency BD. Click View Details on any card to inspect the full screenshot and complete data breakdown."
              : "Real Meta Ads Manager message lead results managed by Boosting Agency BD. Click View Details on any card to inspect the full screenshot and complete data breakdown."}
          </p>
        </div>
      </div>

      {/* Compact, Clean Campaign Screenshot Cards Grid (4 on Mobile in 2x2, 6 on Tablet/Desktop initially) */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5 pt-1">
        {displayedCampaigns.map((item, idx) => (
          <Card
            key={item.id}
            onClick={() => {
              setIsFullZoom(false)
              setSelectedCampaign(item)
            }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                setIsFullZoom(false)
                setSelectedCampaign(item)
              }
            }}
            aria-label={`View details for ${item.title}`}
            className={`group p-0 py-0 gap-0 rounded-xl sm:rounded-2xl border border-border/80 hover:border-cyan-500/70 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 bg-card flex-col justify-between overflow-hidden cursor-pointer text-left ${
              !showAll && idx >= 4 ? "hidden sm:flex" : "flex"
            }`}
          >
            {/* Original Screenshot Image */}
            <div
              itemScope
              itemType="https://schema.org/ImageObject"
              className="relative aspect-[16/10] w-full bg-slate-100 dark:bg-slate-900/90 border-b border-border/60 overflow-hidden flex items-center justify-center p-1 sm:p-2"
            >
              <img
                src={item.imageUrl}
                alt={`${item.title} — ${item.results} at ${item.costPerResult} — Boosting Agency BD`}
                title={`${item.title} (${item.results})`}
                itemProp="contentUrl"
                width={800}
                height={500}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  const backup = getCampaignBackupUrl(item.imageUrl)
                  if (backup && e.currentTarget.src !== backup) {
                    e.currentTarget.src = backup
                  }
                }}
                className="h-full w-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <meta itemProp="name" content={item.title} />
              <meta itemProp="description" content={item.shortDescription} />
              <div className="absolute inset-0 bg-slate-950/35 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <span className="inline-flex items-center gap-1 sm:gap-1.5 rounded-lg sm:rounded-xl bg-slate-900/95 text-white border border-white/15 px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-semibold shadow-md">
                  <ZoomIn className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-cyan-400" />
                  <span className="hidden xs:inline">Click to </span>
                  <span>View Details</span>
                </span>
              </div>
            </div>

            {/* Compact Card Content: Title + Exact Screenshot Results + Short Description + View Details */}
            <CardContent className="p-2.5 sm:p-5 flex flex-col flex-1 justify-between gap-2 sm:gap-4">
              <div className="space-y-2 sm:space-y-3">
                {/* Clean Category & Title */}
                <div className="space-y-0.5 sm:space-y-1">
                  <div className="flex items-center justify-between gap-1 sm:gap-2">
                    <span className="text-[10px] sm:text-[11px] font-semibold text-cyan-600 dark:text-cyan-400 truncate">
                      {item.category}
                    </span>
                    <span className="inline-flex items-center gap-0.5 sm:gap-1 text-[9px] sm:text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 shrink-0">
                      <CheckCircle2 className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                      <span className="hidden xs:inline">Verified</span>
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-[15px] font-bold text-foreground group-hover:text-cyan-500 transition-colors line-clamp-1 leading-snug">
                    {item.title}
                  </h4>
                </div>

                {/* Symmetrical 3-Column Real Screenshot Metrics Strip */}
                <div className="grid grid-cols-3 divide-x divide-cyan-500/20 rounded-lg sm:rounded-xl bg-cyan-500/[0.06] dark:bg-cyan-500/10 border border-cyan-500/25 py-1.5 sm:py-2.5 px-0.5 sm:px-1 text-center">
                  <div className="px-0.5 sm:px-1.5 flex flex-col items-center justify-center min-w-0">
                    <span className="text-[7px] sm:text-[10px] font-semibold uppercase tracking-wider text-muted-foreground block truncate w-full">
                      Result
                    </span>
                    <span className="text-[9px] sm:text-[13px] font-extrabold text-foreground block mt-0.5 whitespace-nowrap">
                      {item.results}
                    </span>
                  </div>
                  <div className="px-0.5 sm:px-1.5 flex flex-col items-center justify-center min-w-0">
                    <span className="text-[7px] sm:text-[10px] font-semibold uppercase tracking-wider text-muted-foreground block truncate w-full">
                      Cost
                    </span>
                    <span className="text-[9px] sm:text-[13px] font-extrabold text-emerald-600 dark:text-emerald-400 block mt-0.5 whitespace-nowrap">
                      {item.costPerResult}
                    </span>
                  </div>
                  <div className="px-0.5 sm:px-1.5 flex flex-col items-center justify-center min-w-0">
                    <span className="text-[7px] sm:text-[10px] font-semibold uppercase tracking-wider text-muted-foreground block truncate w-full">
                      Spent
                    </span>
                    <span className="text-[9px] sm:text-[13px] font-extrabold text-foreground block mt-0.5 whitespace-nowrap">
                      {item.amountSpent}
                    </span>
                  </div>
                </div>

                {/* Short 2-line Description with consistent height */}
                <p className="text-[10px] sm:text-xs text-muted-foreground leading-snug sm:leading-relaxed line-clamp-2 min-h-[1.75rem] sm:min-h-[2.5rem]">
                  {item.shortDescription}
                </p>
              </div>

              {/* View Details Button */}
              <Button
                type="button"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsFullZoom(false)
                  setSelectedCampaign(item)
                }}
                className="w-full rounded-lg sm:rounded-xl gradient-primary text-white text-[10px] sm:text-xs font-semibold shadow-xs hover:opacity-95 transition-all cursor-pointer h-7 sm:h-9 px-2"
              >
                <Eye className="h-3 w-3 sm:h-3.5 sm:w-3.5 mr-1 sm:mr-1.5 shrink-0" />
                <span className="truncate">View Details</span>
                <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 ml-auto shrink-0" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* View All / See More Toggle */}
      {campaigns.length > 4 && (
        <div className="pt-2 flex justify-center">
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={() => setShowAll((prev) => !prev)}
            className="rounded-2xl px-6 sm:px-8 border-border hover:border-cyan-500/60 hover:bg-secondary text-xs sm:text-sm font-semibold group shadow-xs cursor-pointer"
          >
            <span>
              {showAll
                ? "Show Less Campaigns"
                : `View All ${campaigns.length} Campaigns (See More)`}
            </span>
            <ChevronDown
              className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                showAll ? "rotate-180" : "group-hover:translate-y-0.5"
              }`}
            />
          </Button>
        </div>
      )}

      {/* View Details Modal — Explains the Real Screenshot Data in Full */}
      <Dialog
        open={!!selectedCampaign}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedCampaign(null)
            setIsFullZoom(false)
          }
        }}
      >
        <DialogContent
          showCloseButton={false}
          className="w-[95vw] sm:max-w-3xl lg:max-w-4xl max-h-[92vh] overflow-y-auto p-0 rounded-3xl border-border bg-card shadow-2xl z-[100]"
        >
          {selectedCampaign && (
            <div className="relative">
              {/* Modal Header */}
              <div className="relative p-5 sm:p-7 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-t-3xl border-b border-border/40">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCampaign(null)
                    setIsFullZoom(false)
                  }}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-20"
                  aria-label="Close details modal"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="space-y-1.5 pr-8">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      <span>{selectedCampaign.category}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      <span>Verified Screenshot Data</span>
                    </span>
                  </div>

                  <DialogHeader>
                    <DialogTitle className="text-lg sm:text-2xl font-bold text-white text-left">
                      {selectedCampaign.title}
                    </DialogTitle>
                    <DialogDescription className="text-xs sm:text-sm text-cyan-200/90 text-left">
                      Campaign in Screenshot: {selectedCampaign.campaignName}
                    </DialogDescription>
                  </DialogHeader>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-5 sm:p-7 space-y-6">
                {/* Full Screenshot Viewer */}
                <div className="space-y-2.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Original Campaign Screenshot
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      <a
                        href={selectedCampaign.imageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-xl border border-border bg-background hover:bg-secondary px-3 text-xs font-semibold h-8 transition-colors"
                      >
                        <ExternalLink className="h-3.5 w-3.5 mr-1.5 text-cyan-500" />
                        <span>Open Image Link</span>
                      </a>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => setIsFullZoom((z) => !z)}
                        className="rounded-xl text-xs font-semibold cursor-pointer h-8"
                      >
                        <ZoomIn className="h-3.5 w-3.5 mr-1.5" />
                        {isFullZoom ? "Fit to Window" : "Zoom Full Size"}
                      </Button>
                    </div>
                  </div>

                  <div
                    className={`rounded-2xl border border-border/80 bg-slate-950 p-2 sm:p-3 overflow-auto ${
                      isFullZoom ? "max-h-[78vh]" : "max-h-[48vh]"
                    }`}
                  >
                    <img
                      src={selectedCampaign.imageUrl}
                      alt={`${selectedCampaign.title} — ${selectedCampaign.results} at ${selectedCampaign.costPerResult}`}
                      onError={(e) => {
                        const backup = getCampaignBackupUrl(selectedCampaign.imageUrl)
                        if (backup && e.currentTarget.src !== backup) {
                          e.currentTarget.src = backup
                        }
                      }}
                      className={`mx-auto rounded-lg ${
                        isFullZoom ? "max-w-none w-auto" : "max-h-[44vh] w-auto object-contain"
                      }`}
                    />
                  </div>
                </div>

                {/* Primary 3 Screenshot Numbers */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div className="rounded-2xl bg-cyan-500/10 border border-cyan-500/30 p-4 overflow-hidden">
                    <div className="flex items-center justify-between gap-2 text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                      <span>Verified Result</span>
                      <TrendingUp className="h-4 w-4 shrink-0" />
                    </div>
                    <p className="text-lg sm:text-xl font-black text-foreground mt-1.5 leading-snug break-words">
                      {selectedCampaign.results}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      {selectedCampaign.resultLabel}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/25 p-4 overflow-hidden">
                    <div className="flex items-center justify-between gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      <span>Cost Per Result</span>
                      <Target className="h-4 w-4 shrink-0" />
                    </div>
                    <p className="text-lg sm:text-xl font-black text-emerald-600 dark:text-emerald-400 mt-1.5 leading-snug break-words">
                      {selectedCampaign.costPerResult}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      Exact cost shown in screenshot
                    </p>
                  </div>

                  <div className="rounded-2xl bg-secondary/60 border border-border/80 p-4 overflow-hidden">
                    <div className="flex items-center justify-between gap-2 text-xs font-bold uppercase tracking-wider text-foreground">
                      <span>Amount Spent</span>
                      <DollarSign className="h-4 w-4 text-cyan-500 shrink-0" />
                    </div>
                    <p className="text-lg sm:text-xl font-black text-foreground mt-1.5 leading-snug break-words">
                      {selectedCampaign.amountSpent}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      Total spend recorded in screenshot
                    </p>
                  </div>
                </div>

                {/* Explanation of Real Screenshot Data */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-secondary/35 border border-border/70 p-4 sm:p-5 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5">
                      <BarChart3 className="h-4 w-4 shrink-0" />
                      <span>Screenshot Result Explanation</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-foreground leading-relaxed">
                      {selectedCampaign.detailedExplanation}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-emerald-500/5 border border-emerald-500/25 p-4 sm:p-5 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                      <Sparkles className="h-4 w-4 shrink-0" />
                      <span>How Boosting Agency BD Achieved This</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground dark:text-slate-300 leading-relaxed">
                      {selectedCampaign.agencyStrategy}
                    </p>
                  </div>
                </div>

                {/* Exact Data Breakdown from Screenshot */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Verified Data Inside This Screenshot
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedCampaign.extraMetrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-border/70 bg-secondary/25 p-3.5 flex flex-col items-start justify-center gap-1 overflow-hidden"
                      >
                        <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
                          {metric.label}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-foreground leading-snug break-words w-full">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="pt-3 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>100% real Meta Ads Manager campaign data by Boosting Agency BD.</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <a
                      href={`https://wa.me/8801518961899?text=${encodeURIComponent(
                        `Hello Boosting Agency BD, I saw your "${selectedCampaign.title}" result (${selectedCampaign.results} at ${selectedCampaign.costPerResult}) and want to discuss running campaigns for my business.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs px-4 py-2 shadow-sm transition-all"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>WhatsApp Us</span>
                    </a>
                    <Button
                      type="button"
                      size="sm"
                      onClick={() => {
                        setSelectedCampaign(null)
                        setIsFullZoom(false)
                      }}
                      className="rounded-xl gradient-primary text-white text-xs font-semibold px-4 cursor-pointer"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export function RealCampaignResultsSection() {
  const imageGalleryJsonLd = useMemo(() => {
    const allCampaigns = [
      ...MESSAGE_LEAD_CAMPAIGNS_DATA,
      ...WEBSITE_PURCHASE_CAMPAIGNS_DATA,
    ]
    return {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      name: "Real Campaign Results — 100% Real Meta Ads Account Screenshots — Boosting Agency BD",
      description:
        "Explore real campaign screenshots and actual performance results from Meta Ads Manager including Message Lead Campaigns and Website Purchase Campaigns by Boosting Agency BD.",
      url: "https://boostingagencyofficial.site/portfolio",
      image: allCampaigns.map((item) => ({
        "@type": "ImageObject",
        name: `${item.title} — Boosting Agency BD`,
        description: `${item.shortDescription} (${item.results} at ${item.costPerResult}, Spent: ${item.amountSpent})`,
        caption: `${item.category}: ${item.title} — ${item.results} at ${item.costPerResult}`,
        contentUrl: `https://boostingagencyofficial.site${item.imageUrl}`,
        url: `https://boostingagencyofficial.site${item.imageUrl}`,
      })),
    }
  }, [])

  return (
    <section className="py-12 lg:py-16 bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGalleryJsonLd) }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Main Combined Section Header */}
        <div className="max-w-3xl space-y-2.5 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold border border-cyan-500/20">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>100% Verified Meta Ads Manager Reports</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground text-balance">
            Real Campaign Results — 100% Real Meta Ads Account Screenshots
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Explore real campaign screenshots and actual performance results from Meta Ads Manager.
          </p>
        </div>

        {/* Two Separate Campaign Categories */}
        <div className="space-y-8">
          <BulkUploadCampaignSection
            sectionKey="message-lead-campaigns"
            title="Real Campaign Screenshots — Message Lead Campaigns"
          />
          <BulkUploadCampaignSection
            sectionKey="website-purchase-campaigns"
            title="Real Campaign Screenshots — Website Purchase Campaigns"
          />
        </div>
      </div>
    </section>
  )
}

export function PortfolioContent() {
  const { language } = useLanguage()
  const isEnglish = language === "en"

  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<typeof CLIENT_CATEGORIES[number]>("All")
  const [visibleCount, setVisibleCount] = useState(15)
  const [selectedClient, setSelectedClient] = useState<ClientRecord | null>(null)

  // Open modal cleanly without modifying browser history stack
  const handleOpenClient = useCallback((client: ClientRecord) => {
    setSelectedClient(client)
  }, [])

  // Close modal cleanly
  const handleCloseClient = useCallback(() => {
    setSelectedClient(null)
  }, [])

  // Keyboard Escape key listener to close modal
  useEffect(() => {
    if (!selectedClient) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault()
        handleCloseClient()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedClient, handleCloseClient])

  // Reset pagination count when category or search changes
  useEffect(() => {
    setVisibleCount(15)
  }, [activeCategory, searchQuery])

  // Filter and sort clients: Priority Group A first, then Group B
  const filteredClients = useMemo(() => {
    let result = CLIENTS

    if (activeCategory !== "All") {
      result = result.filter((client) => client.category === activeCategory)
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim()
      result = result.filter(
        (client) =>
          client.name.toLowerCase().includes(q) ||
          (client.nameBn && client.nameBn.toLowerCase().includes(q)) ||
          client.description.toLowerCase().includes(q) ||
          client.category.toLowerCase().includes(q)
      )
    }

    // Stable sort: priority ascending (1 -> 49)
    return [...result].sort((a, b) => a.priority - b.priority)
  }, [activeCategory, searchQuery])

  // Paginated slice
  const displayedClients = useMemo(() => {
    return filteredClients.slice(0, visibleCount)
  }, [filteredClients, visibleCount])

  // Count by category for filter pills
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: CLIENTS.length }
    CLIENTS.forEach((c) => {
      counts[c.category] = (counts[c.category] || 0) + 1
    })
    return counts
  }, [])

  // Generate initials for avatar badge
  const getInitials = (name: string) => {
    const clean = name.replace(/[^a-zA-Z0-9\s]/g, "").trim()
    const parts = clean.split(/\s+/).filter(Boolean)
    if (parts.length === 0) return "BA"
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
    return (parts[0][0] + parts[1][0]).toUpperCase()
  }

  return (
    <>
      {/* Search & Category Filter Navigation Bar */}
      <section className="border-b border-border sticky top-[73px] bg-background/95 backdrop-blur-md z-40 shadow-xs">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4 space-y-4">
          {/* Top row: Live search bar & results summary */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isEnglish ? "Search business or page name..." : "ব্যবসা বা পেজের নাম দিয়ে খুঁজুন..."}
                className="w-full pl-10 pr-9 py-2 rounded-xl bg-secondary/80 border border-border/80 text-foreground dark:text-slate-100 placeholder:text-muted-foreground dark:placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground dark:text-slate-300 hover:text-foreground"
                  aria-label="Clear search"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground dark:text-slate-300 font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>
                {isEnglish
                  ? `Showing ${displayedClients.length} of ${filteredClients.length} verified pages (${CLIENTS.length} total)`
                  : `${CLIENTS.length} টির মধ্যে ${displayedClients.length} টি ভেরিফাইড পেজ প্রদর্শিত`}
              </span>
            </div>
          </div>

          {/* Bottom row: Category Filter Pills */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {CLIENT_CATEGORIES.map((cat) => {
              const count = categoryCounts[cat] || 0
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-flex items-center whitespace-nowrap rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-cyan-500/20"
                      : "bg-secondary/70 text-secondary-foreground hover:bg-secondary border border-border/70"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`ml-2 text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isActive ? "bg-white/25 text-white" : "bg-muted text-muted-foreground dark:text-slate-200"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Combined Real Campaign Results Section */}
      <RealCampaignResultsSection />

      {/* Main Client Portfolio Grid */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Introduction */}
          <div className="mb-10 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 text-xs font-semibold mb-2">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>{isEnglish ? "Authentic Client Portfolio" : "প্রামাণিক ক্লায়েন্ট পোর্টফোলিও"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              {isEnglish ? "Our Clients & Marketing Projects" : "আমাদের ক্লায়েন্ট ও মার্কেটিং প্রজেক্টসমূহ"}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-3xl leading-relaxed">
              {isEnglish
                ? "At Boosting Agency BD, we work with businesses across fashion, e-commerce, furniture, education, healthcare, travel, and other industries. Explore a selection of business pages and websites associated with our marketing work."
                : "বুস্টিং এজেন্সি বিডি-তে আমরা ফ্যাশন, ই-কমার্স, ফার্নিচার, শিক্ষা, স্বাস্থ্যসেবা, ট্রাভেল এবং অন্যান্য বিভিন্ন খাতের ব্যবসার সাথে কাজ করি। আমাদের মার্কেটিং কাজের সাথে যুক্ত বিজনেস পেজ ও ওয়েবসাইটগুলোর একটি নির্বাচিত তালিকা এখানে এক্সপ্লোর করুন।"}
            </p>
          </div>

          {/* Grid of Client Cards (2-Columns on Mobile) */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {displayedClients.map((client) => (
              <Card
                key={client.id}
                onClick={() => handleOpenClient(client)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    handleOpenClient(client)
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View details of ${isEnglish ? client.name : (client.nameBn || client.name)}`}
                className="group rounded-xl sm:rounded-3xl border border-border/80 hover:border-cyan-500/70 transition-all duration-300 card-3d hover:shadow-xl hover:shadow-cyan-500/15 bg-card flex flex-col justify-between overflow-hidden relative cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              >
                {/* Subtle corner hover glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardContent className="p-3 sm:p-6 relative flex flex-col h-full justify-between gap-2.5 sm:gap-4">
                  <div>
                    {/* Card Header: Initials Avatar + Category & Featured Tag */}
                    <div className="flex items-start justify-between gap-2 mb-2 sm:mb-4">
                      <div className="flex h-9 w-9 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl gradient-primary text-white text-xs sm:text-lg font-black shadow-md shadow-cyan-500/20 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300 flex-shrink-0">
                        {getInitials(client.name)}
                      </div>

                      <div className="flex flex-col items-end gap-1">
                        <Badge
                          variant="secondary"
                          className="text-[9px] sm:text-[10px] font-semibold bg-secondary/90 hover:bg-secondary text-secondary-foreground border border-border/60 px-1.5 sm:px-2 py-0.5 rounded-md sm:rounded-lg"
                        >
                          {client.category}
                        </Badge>
                        {client.isGroupA && (
                          <span className="inline-flex items-center gap-0.5 sm:gap-1 text-[8px] sm:text-[10px] font-bold text-amber-500 dark:text-amber-400 bg-amber-500/10 px-1.5 sm:px-2 py-0.5 rounded-full">
                            <Sparkles className="h-2 w-2 sm:h-2.5 sm:w-2.5" />
                            <span className="hidden xs:inline">{isEnglish ? "Featured" : "ফিচার্ড"}</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Business Name */}
                    <h3 className="text-xs sm:text-lg font-bold text-foreground group-hover:text-cyan-500 transition-colors line-clamp-1 sm:line-clamp-2 leading-snug">
                      {isEnglish ? client.name : (client.nameBn || client.name)}
                    </h3>

                    {/* Description */}
                    <p className="mt-1 sm:mt-2 text-[10px] sm:text-sm text-muted-foreground dark:text-slate-300 leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-3">
                      {isEnglish ? client.description : (client.descriptionBn || client.description)}
                    </p>

                    {/* Verified Follower Count (ONLY shown if verified) */}
                    {client.followerCount && (
                      <div className="mt-2 sm:mt-3 flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/10 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg sm:rounded-xl w-fit">
                        <CheckCircle2 className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5" />
                        <span className="truncate">{client.followerCount} Verified</span>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons: Facebook & Official Website */}
                  <div className="pt-2 sm:pt-4 border-t border-border/60 flex flex-wrap items-center gap-1.5 sm:gap-2">
                    {/* Facebook Button (Always Present) */}
                    <a
                      href={client.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-blue-600/10 hover:bg-blue-600 text-blue-600 hover:text-white dark:bg-cyan-500/10 dark:text-cyan-300 dark:hover:bg-cyan-500 dark:hover:text-slate-950 text-[10px] sm:text-xs font-semibold transition-all duration-200 border border-blue-500/20 dark:border-cyan-500/25 truncate"
                      aria-label={`Visit Facebook Page of ${client.name}`}
                    >
                      <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      <span className="truncate">Facebook</span>
                    </a>

                    {client.websiteUrl && (
                      <a
                        href={client.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-secondary/80 hover:bg-secondary text-foreground text-[10px] sm:text-xs font-semibold transition-colors border border-border/60"
                        aria-label={`Visit Official Website of ${client.name}`}
                      >
                        <Globe className="h-3 w-3 text-cyan-500 shrink-0" />
                        <span className="hidden xs:inline">Web</span>
                      </a>
                    )}
                    {/* Quick View Details Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleOpenClient(client)
                      }}
                      className="ml-auto p-1.5 text-xs text-muted-foreground hover:text-cyan-500 rounded-lg hover:bg-secondary transition-colors"
                      title={isEnglish ? "View details" : "বিস্তারিত দেখুন"}
                      aria-label={`View details of ${client.name}`}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredClients.length === 0 && (
            <div className="text-center py-16 bg-secondary/30 rounded-3xl border border-border/60">
              <Building2 className="h-12 w-12 text-muted-foreground mx-auto mb-3 opacity-60" />
              <p className="text-base font-semibold text-foreground">
                {isEnglish ? "No client pages match your search." : "আপনার অনুসন্ধানের সাথে কোনো পেজ মেলেনি।"}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("")
                  setActiveCategory("All")
                }}
                className="mt-3 text-xs font-semibold text-cyan-500 hover:underline"
              >
                {isEnglish ? "Clear filters and view all 49 clients" : "ফিল্টার পরিষ্কার করে সব ৪৯টি পেজ দেখুন"}
              </button>
            </div>
          )}

          {/* Load More Interaction (Keeps page fast while allowing complete discovery) */}
          {visibleCount < filteredClients.length && (
            <div className="mt-12 text-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setVisibleCount((prev) => Math.min(prev + 18, filteredClients.length))}
                className="rounded-2xl px-8 border-border hover:border-cyan-500/50 hover:bg-secondary text-sm font-semibold group shadow-sm cursor-pointer"
              >
                <span>
                  {isEnglish
                    ? `Load More Clients (${displayedClients.length} of ${filteredClients.length})`
                    : `আরও পেজ লোড করুন (${displayedClients.length} / ${filteredClients.length})`}
                </span>
                <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </Button>
            </div>
          )}

          {/* SECTION 8 DISCLOSURES — TRANSPARENT & COMPLIANT */}
          <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-secondary/40 border border-border/70 space-y-4">
            <div className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-foreground">
                  {isEnglish
                    ? "Selected Business Pages & Portfolio Examples"
                    : "নির্বাচিত বিজনেস পেজ ও পোর্টফোলিও উদাহরণ"}
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {isEnglish
                    ? "This section highlights selected business pages and websites across different industries. The examples shown are not a complete directory of all businesses or projects, and inclusion does not imply that every listed business used every service offered by Boosting Agency BD."
                    : "এই সেকশনে বিভিন্ন খাতের নির্বাচিত বিজনেস পেজ ও ওয়েবসাইটগুলো তুলে ধরা হয়েছে। এখানে প্রদর্শিত তালিকাটি সব ব্যবসা বা প্রজেক্টের পূর্ণাঙ্গ ডিরেক্টরি নয় এবং তালিকায় অন্তর্ভুক্তি নির্দেশ করে না যে প্রতিটি ব্যবসা প্রতিষ্ঠান বুস্টিং এজেন্সি বিডি-র প্রতিটি সেবা গ্রহণ করেছে।"}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-border/40 text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-11">
              <span className="font-semibold text-foreground dark:text-white">
                {isEnglish ? "Pricing Disclosure: " : "মূল্য সংক্রান্ত তথ্য: "}
              </span>
              {isEnglish
                ? "Service prices shown on our website are starting prices and may vary depending on project scope, campaign objectives, advertising budget, technical requirements, and the services selected."
                : "আমাদের ওয়েবসাইটে প্রদর্শিত সেবামূল্য প্রাথমিক বা প্রারম্ভিক মূল্য এবং প্রজেক্টের পরিধি, ক্যাম্পেইনের লক্ষ্য, বিজ্ঞাপনের বাজেট, প্রযুক্তিগত প্রয়োজনীয়তা ও নির্বাচিত সেবার ওপর ভিত্তি করে পরিবর্তিত হতে পারে।"}
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT DETAIL MODAL with History Back & Backspace Protection */}
      <Dialog
        open={!!selectedClient}
        onOpenChange={(open) => {
          if (!open) handleCloseClient()
        }}
      >
        <DialogContent
          showCloseButton={false}
          className="max-w-2xl max-h-[90vh] overflow-y-auto p-0 rounded-3xl border-border bg-card shadow-2xl z-[100]"
        >
          {selectedClient && (
            <div className="relative">
              {/* Header Banner */}
              <div className="relative p-6 sm:p-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-t-3xl overflow-hidden border-b border-border/40">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

                {/* Close Button */}
                <button
                  type="button"
                  onClick={handleCloseClient}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-20"
                  aria-label="Close client modal"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                  <div className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-3xl gradient-primary text-white text-3xl font-black shadow-xl shadow-cyan-500/30 flex-shrink-0">
                    {getInitials(selectedClient.name)}
                  </div>

                  <div className="flex-1 pr-6 sm:pr-0">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold mb-2">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      <span>{selectedClient.category}</span>
                      {selectedClient.isGroupA && <span>· Featured</span>}
                    </div>

                    <DialogHeader>
                      <DialogTitle className="text-2xl sm:text-3xl font-bold text-white">
                        {isEnglish ? selectedClient.name : (selectedClient.nameBn || selectedClient.name)}
                      </DialogTitle>
                      <DialogDescription className="text-xs sm:text-sm text-cyan-300 mt-1 font-medium">
                        {isEnglish ? "Verified Client Page Record" : "যাচাইকৃত ক্লায়েন্ট পেজ রেকর্ড"}
                      </DialogDescription>
                    </DialogHeader>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                    {isEnglish ? "Business Overview" : "ব্যবসার সংক্ষিপ্ত বিবরণ"}
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {isEnglish ? selectedClient.description : (selectedClient.descriptionBn || selectedClient.description)}
                  </p>
                </div>

                {/* Verified Follower Count (if available) */}
                {selectedClient.followerCount && (
                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300">
                        {selectedClient.followerCount} Verified Facebook Followers
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        Public follower metric recorded during profile verification.
                      </p>
                    </div>
                  </div>
                )}

                {/* Links */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">
                    {isEnglish ? "Official Verified Links" : "অফিশিয়াল ভেরিফাইড লিংকসমূহ"}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={selectedClient.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-md shadow-blue-500/20 transition-all hover:scale-105"
                    >
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      <span>{isEnglish ? "Open Facebook Page" : "ফেসবুক পেজ দেখুন"}</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>

                    {selectedClient.websiteUrl && (
                      <a
                        href={selectedClient.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 text-white text-xs font-semibold shadow-md shadow-cyan-500/20 transition-all hover:scale-105"
                      >
                        <Globe className="h-4 w-4" />
                        <span>{isEnglish ? "Visit Official Website" : "অফিশিয়াল ওয়েবসাইট"}</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* WhatsApp Consultation Action */}
                <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-muted-foreground text-center sm:text-left">
                    {isEnglish
                      ? "Looking to scale your brand like this client? Connect directly with Boosting Agency BD."
                      : "আপনার ব্র্যান্ডকেও এভাবে এগিয়ে নিতে চান? বুস্টিং এজেন্সি বিডি-র সাথে যোগাযোগ করুন।"}
                  </p>
                  <a
                    href={`https://wa.me/8801518961899?text=${encodeURIComponent(
                      `Hello Boosting Agency BD, I saw your client project "${selectedClient.name}" and would like to discuss digital marketing services.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs px-5 py-3 shadow-md shadow-emerald-500/20 transition-all hover:scale-105 shrink-0"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>{isEnglish ? "WhatsApp Discussion" : "হোয়াটসঅ্যাপে যোগাযোগ"}</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

