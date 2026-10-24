import type { Metadata, Viewport } from 'next'
import React from 'react'
import { Inter } from 'next/font/google'
import Script from 'next/script'
const Analytics = () => null
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { FloatingBubbles } from '@/components/layout/floating-bubbles'
import { ChatWidget } from '@/components/chat/chat-widget'
import { LanguageProvider } from '@/lib/language-context'
import { ThemeProvider } from '@/components/theme-provider'
import { SecurityShield } from '@/components/security/security-shield'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

// ============================================================
// ANALYTICS & TRACKING CONFIGURATION
// ============================================================
// Replace the placeholder IDs below with your actual tracking IDs

// <!-- INSERT_GTM_ID: Replace GTM-XXXXXXX with your Google Tag Manager ID -->
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX'

// <!-- INSERT_GA4_ID: Replace G-XXXXXXXXXX with your Google Analytics 4 Measurement ID -->
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || 'G-XXXXXXXXXX'

// <!-- INSERT_META_PIXEL_ID: Replace XXXXXXXXXXXXXXXX with your Meta (Facebook) Pixel ID -->
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || 'XXXXXXXXXXXXXXXX'

// ============================================================

export const viewport: Viewport = {
  themeColor: '#020617',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://boostingagencyofficial.site'),
  title: {
    default: 'Boosting Agency BD | Best Digital Marketing & Facebook Boosting Agency in Bangladesh',
    template: '%s | Boosting Agency BD — Top Digital Marketing Agency in Bangladesh',
  },
  description: 'Boosting Agency BD is Bangladesh’s premier digital marketing agency. We specialize in high-ROAS Facebook Boosting, Instagram Ads, Google Ads, SEO, Web Design, and AI Automation backed by 49+ verified client pages and 44 real Meta Ads campaign screenshots.',
  keywords: [
    'Boosting Agency BD',
    'boosting agency',
    'boosting agency bd',
    'বুস্টিং এজেন্সি বিডি',
    'ফেসবুক বুস্টিং',
    'ডিজিটাল মার্কেটিং',
    'best digital marketing agency in bangladesh',
    'top digital marketing agency dhaka',
    'facebook boosting agency bangladesh',
    'facebook ads expert bangladesh',
    'google ads agency bangladesh',
    'best marketing agency in dhaka',
    'meta advertising bangladesh',
    'seo agency bangladesh',
    'web design agency bangladesh',
    'siddiqur rahman turjoy',
    'turjoy boosting agency',
    'meta conversion api setup bangladesh',
    'ecommerce marketing bangladesh',
    'ai automation agency bangladesh',
    'facebook boost service bd',
    'boosting agency official site'
  ],
  authors: [
    { name: 'Boosting Agency BD', url: 'https://boostingagencyofficial.site' },
    { name: 'Siddiqur Rahman (Turjoy)', url: 'https://turjoy.boostingagencyofficial.site' },
  ],
  creator: 'Siddiqur Rahman (Turjoy)',
  publisher: 'Boosting Agency BD',
  category: 'Digital Marketing & Advertising',
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['bn_BD'],
    url: 'https://boostingagencyofficial.site',
    siteName: 'Boosting Agency BD',
    title: 'Boosting Agency BD | Best Digital Marketing & Facebook Boosting Agency in Bangladesh',
    description: 'Boosting Agency BD is Bangladesh’s premier digital marketing agency specializing in high-ROAS Facebook Boosting, Instagram Ads, Google Ads, SEO, Web Design, and AI Automation.',
    images: [
      {
        url: 'https://boostingagencyofficial.site/logo.webp',
        width: 512,
        height: 512,
        alt: 'Boosting Agency BD Logo',
        type: 'image/webp',
      },
      {
        url: 'https://boostingagencyofficial.site/hero/hero-slide-1.webp',
        width: 1080,
        height: 1080,
        alt: 'Boosting Agency BD — Performance Marketing & Growth',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boosting Agency BD | Best Digital Marketing & Facebook Boosting Agency in Bangladesh',
    description: 'Boosting Agency BD is Bangladesh’s premier digital marketing agency. High-ROAS Facebook Ads, Google Ads, SEO, Web Design & AI Automation.',
    images: ['https://boostingagencyofficial.site/hero/hero-slide-1.webp'],
    creator: '@boostingagencybd',
    site: '@boostingagencybd',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://boostingagencyofficial.site',
    languages: {
      'en-US': 'https://boostingagencyofficial.site',
      'bn-BD': 'https://boostingagencyofficial.site',
      'x-default': 'https://boostingagencyofficial.site',
    },
  },
}

// Comprehensive JSON-LD Structured Data for Google Search & AI Crawlers
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://boostingagencyofficial.site/#website",
      "url": "https://boostingagencyofficial.site/",
      "name": "Boosting Agency BD",
      "alternateName": [
        "Boosting Agency",
        "Boosting Agency Bangladesh",
        "বুস্টিং এজেন্সি বিডি",
        "BoostingAgencyBD"
      ],
      "description": "Digital Marketing Agency in Bangladesh specializing in Meta Ads, Google Ads, SEO, Web Design, and AI Automation.",
      "publisher": {
        "@id": "https://boostingagencyofficial.site/#organization"
      },
      "image": "https://boostingagencyofficial.site/logo.webp",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://boostingagencyofficial.site/blog?search={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      "inLanguage": ["en-US", "bn-BD"]
    },
    {
      "@type": "Organization",
      "@id": "https://boostingagencyofficial.site/#organization",
      "name": "Boosting Agency BD",
      "alternateName": [
        "Boosting Agency",
        "Boosting Agency Bangladesh",
        "বুস্টিং এজেন্সি বিডি",
        "BoostingAgencyBD"
      ],
      "url": "https://boostingagencyofficial.site",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://boostingagencyofficial.site/#logo",
        "url": "https://boostingagencyofficial.site/logo.webp",
        "contentUrl": "https://boostingagencyofficial.site/logo.webp",
        "caption": "Boosting Agency BD Official Logo",
        "inLanguage": "en-US",
        "width": 512,
        "height": 512,
        "encodingFormat": "image/webp"
      },
      "image": [
        "https://boostingagencyofficial.site/logo.webp",
        "https://boostingagencyofficial.site/logo.png"
      ],
      "description": "Boosting Agency BD is a digital marketing agency in Dhaka, Bangladesh providing Facebook & Instagram Ads, Google Ads, SEO, Web Design, Branding, and AI Automation services.",
      "termsOfService": "https://boostingagencyofficial.site/terms",
      "foundingDate": "2020",
      "founder": {
        "@id": "https://turjoy.boostingagencyofficial.site/#person"
      },
      "employee": [
        {
          "@id": "https://turjoy.boostingagencyofficial.site/#person"
        },
        {
          "@id": "https://boostingagencyofficial.site/team/joynal-abedin-joy#person"
        },
        {
          "@id": "https://boostingagencyofficial.site/team/mohidul-islam-sojib#person"
        },
        {
          "@id": "https://boostingagencyofficial.site/team/abir-islam-joy#person"
        },
        {
          "@id": "https://boostingagencyofficial.site/team/azom#person"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Mirpur, Dhaka-1216, Bangladesh",
        "addressLocality": "Dhaka",
        "addressRegion": "Dhaka Division",
        "postalCode": "1216",
        "addressCountry": "BD"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+8801518961899",
          "contactType": "customer service",
          "availableLanguage": ["English", "Bengali"],
          "areaServed": ["BD", "Worldwide"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+8801518961899",
          "contactType": "sales",
          "availableLanguage": ["English", "Bengali"]
        }
      ],
      "sameAs": [
        "https://www.facebook.com/boostingagencyofficial",
        "https://www.linkedin.com/company/boostingagencybd",
        "https://www.instagram.com/boostingagencybd",
        "https://twitter.com/boostingagencybd"
      ],
      "areaServed": [
        {
          "@type": "Country",
          "name": "Bangladesh"
        },
        {
          "@type": "Place",
          "name": "Worldwide"
        }
      ],
      "knowsAbout": [
        "Digital Marketing",
        "Facebook Advertising",
        "Instagram Marketing",
        "Google Ads",
        "Search Engine Optimization",
        "Web Design",
        "Web Development",
        "Brand Identity Design",
        "Social Media Marketing",
        "Content Marketing",
        "AI Automation",
        "E-commerce Marketing",
        "Lead Generation",
        "PPC Advertising"
      ]
    },
    {
      "@type": ["LocalBusiness", "ProfessionalService", "MarketingAgency"],
      "@id": "https://boostingagencyofficial.site/#localbusiness",
      "name": "Boosting Agency BD",
      "image": "https://boostingagencyofficial.site/logo.webp",
      "logo": "https://boostingagencyofficial.site/logo.webp",
      "description": "Digital marketing agency in Dhaka, Bangladesh offering Facebook Ads, Google Ads, SEO, Web Design, Branding, and AI Automation services.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Mirpur, Dhaka-1216, Bangladesh",
        "addressLocality": "Dhaka",
        "addressRegion": "Dhaka Division",
        "postalCode": "1216",
        "addressCountry": "BD"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 23.8103,
        "longitude": 90.4125
      },
      "url": "https://boostingagencyofficial.site",
      "telephone": "+8801518961899",
      "priceRange": "$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Marketing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Facebook & Instagram Ads Management",
              "description": "Precision-targeted social media advertising campaigns on Facebook and Instagram"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Google Ads Management",
              "description": "Expert Google Ads campaigns across Search, Display, and YouTube"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Services",
              "description": "Comprehensive search engine optimization for higher rankings"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Design & Development",
              "description": "Custom website design and development services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Branding & Design",
              "description": "Complete brand identity and visual design services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Automation",
              "description": "Business automation using artificial intelligence"
            }
          }
        ]
      }
    },
    {
      "@type": "Person",
      "@id": "https://turjoy.boostingagencyofficial.site/#person",
      "name": "Siddiqur Rahman",
      "givenName": "Siddiqur",
      "familyName": "Rahman",
      "additionalName": "Turjoy",
      "alternateName": [
        "Turjoy",
        "Siddiqur Rahman Turjoy",
        "Turjoy Siddiqur Rahman",
        "সিদ্দিকুর রহমান (তুর্য)",
        "Turjoy — Founder & CEO of Boosting Agency BD"
      ],
      "url": "https://boostingagencyofficial.site/team/siddiqur-rahman-turjoy",
      "jobTitle": "Founder & CEO",
      "worksFor": {
        "@id": "https://boostingagencyofficial.site/#organization"
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Bangladesh University of Business and Technology (BUBT)",
        "url": "https://www.bubt.edu.bd"
      },
      "image": {
        "@type": "ImageObject",
        "@id": "https://boostingagencyofficial.site/images/team/siddiqur-rahman-turjoy.webp#primaryimage",
        "url": "https://boostingagencyofficial.site/images/team/siddiqur-rahman-turjoy.webp",
        "contentUrl": "https://boostingagencyofficial.site/images/team/siddiqur-rahman-turjoy.webp",
        "name": "Siddiqur Rahman Turjoy — Founder & CEO of Boosting Agency BD",
        "caption": "Siddiqur Rahman Turjoy, Founder and CEO of Boosting Agency BD",
        "width": 800,
        "height": 1000,
        "encodingFormat": "image/webp"
      },
      "sameAs": [
        "https://turjoy.boostingagencyofficial.site/",
        "https://boostingagencyofficial.site/team/siddiqur-rahman-turjoy",
        "https://boostingagencyofficial.site/about"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://boostingagencyofficial.site/team/joynal-abedin-joy#person",
      "name": "Joynal Abedin (Joy)",
      "givenName": "Joynal",
      "familyName": "Abedin",
      "additionalName": "Joy",
      "alternateName": [
        "Joynal Abedin",
        "Joynal Abedin Joy",
        "জয়নাল আবেদীন (জয়)"
      ],
      "url": "https://boostingagencyofficial.site/team/joynal-abedin-joy",
      "jobTitle": "Marketing Technology & Creative Lead",
      "worksFor": {
        "@id": "https://boostingagencyofficial.site/#organization"
      },
      "image": {
        "@type": "ImageObject",
        "@id": "https://boostingagencyofficial.site/images/team/joynal-abedin-joy.webp#primaryimage",
        "url": "https://boostingagencyofficial.site/images/team/joynal-abedin-joy.webp",
        "contentUrl": "https://boostingagencyofficial.site/images/team/joynal-abedin-joy.webp",
        "name": "Joynal Abedin (Joy) — Marketing Technology & Creative Lead at Boosting Agency BD",
        "caption": "Joynal Abedin (Joy), Marketing Technology & Creative Lead at Boosting Agency BD",
        "width": 800,
        "height": 1000,
        "encodingFormat": "image/webp"
      },
      "sameAs": [
        "https://boostingagencyofficial.site/team/joynal-abedin-joy"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://boostingagencyofficial.site/team/mohidul-islam-sojib#person",
      "name": "Mohidul Islam Sojib",
      "givenName": "Mohidul",
      "familyName": "Islam",
      "additionalName": "Sojib",
      "alternateName": [
        "Mohidul Islam (Sojib)",
        "Mohidul Islam",
        "মহিদুল ইসলাম সজীব"
      ],
      "url": "https://boostingagencyofficial.site/team/mohidul-islam-sojib",
      "jobTitle": "Head of Performance Marketing & Strategy",
      "worksFor": {
        "@id": "https://boostingagencyofficial.site/#organization"
      },
      "image": {
        "@type": "ImageObject",
        "@id": "https://boostingagencyofficial.site/images/team/mohidul-islam-sojib.webp#primaryimage",
        "url": "https://boostingagencyofficial.site/images/team/mohidul-islam-sojib.webp",
        "contentUrl": "https://boostingagencyofficial.site/images/team/mohidul-islam-sojib.webp",
        "name": "Mohidul Islam Sojib — Head of Performance Marketing & Strategy at Boosting Agency BD",
        "caption": "Mohidul Islam Sojib, Head of Performance Marketing & Strategy at Boosting Agency BD",
        "width": 800,
        "height": 1000,
        "encodingFormat": "image/webp"
      },
      "sameAs": [
        "https://boostingagencyofficial.site/team/mohidul-islam-sojib"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://boostingagencyofficial.site/team/abir-islam-joy#person",
      "name": "Abir Islam Joy",
      "givenName": "Abir",
      "familyName": "Islam",
      "additionalName": "Joy",
      "alternateName": [
        "Abir Islam (Joy)",
        "Abir Islam",
        "আবির ইসলাম জয়"
      ],
      "url": "https://boostingagencyofficial.site/team/abir-islam-joy",
      "jobTitle": "Creative Media Buyer & Growth Strategist",
      "worksFor": {
        "@id": "https://boostingagencyofficial.site/#organization"
      },
      "image": {
        "@type": "ImageObject",
        "@id": "https://boostingagencyofficial.site/images/team/abir-islam-joy.webp#primaryimage",
        "url": "https://boostingagencyofficial.site/images/team/abir-islam-joy.webp",
        "contentUrl": "https://boostingagencyofficial.site/images/team/abir-islam-joy.webp",
        "name": "Abir Islam Joy — Creative Media Buyer & Growth Strategist at Boosting Agency BD",
        "caption": "Abir Islam Joy, Creative Media Buyer & Growth Strategist at Boosting Agency BD",
        "width": 800,
        "height": 1000,
        "encodingFormat": "image/webp"
      },
      "sameAs": [
        "https://boostingagencyofficial.site/team/abir-islam-joy"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://boostingagencyofficial.site/team/azom#person",
      "name": "Azom",
      "givenName": "Azom",
      "alternateName": [
        "Md. Azom",
        "আজম",
        "Azom — Boosting Agency BD"
      ],
      "url": "https://boostingagencyofficial.site/team/azom",
      "jobTitle": "Performance Marketing & eCommerce Specialist",
      "worksFor": {
        "@id": "https://boostingagencyofficial.site/#organization"
      },
      "image": {
        "@type": "ImageObject",
        "@id": "https://boostingagencyofficial.site/images/team/azom.webp#primaryimage",
        "url": "https://boostingagencyofficial.site/images/team/azom.webp",
        "contentUrl": "https://boostingagencyofficial.site/images/team/azom.webp",
        "name": "Azom — Performance Marketing & eCommerce Specialist at Boosting Agency BD",
        "caption": "Azom, Performance Marketing & eCommerce Specialist at Boosting Agency BD",
        "width": 800,
        "height": 1000,
        "encodingFormat": "image/webp"
      },
      "sameAs": [
        "https://boostingagencyofficial.site/team/azom"
      ]
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const isProduction = process.env.NODE_ENV === 'production'
  const enableTracking = isProduction && GTM_ID !== 'GTM-XXXXXXX'

  return (
    <html lang="en" className={`${inter.variable} dark`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {/* Mobile Speed & Resource Hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload High-Impact WebP Assets for Rapid Mobile LCP */}
        <link rel="preload" as="image" href="/icon.webp" type="image/webp" fetchPriority="high" />
        <link rel="preload" as="image" href="/hero/hero-slide-1.webp" type="image/webp" fetchPriority="high" />
      </head>
      <body className="font-sans antialiased">
        {/* Bangladesh Standard Time (Asia/Dhaka, UTC+6) Auto Theme: 5:00 PM - 7:00 AM Dark, 7:00 AM - 5:00 PM Light */}
        <script
          key="theme-initializer-script"
          id="theme-initializer"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var storageKey = 'boosting-agency-theme';
                  var manualPeriodKey = 'boosting-agency-theme-manual-period';
                  var nowUtcMs = Date.now();
                  var bdNow = new Date(nowUtcMs + 6 * 3600 * 1000);
                  var bdHour = bdNow.getUTCHours();
                  var isNight = (bdHour >= 17 || bdHour < 7);
                  var scheduledTheme = isNight ? 'dark' : 'light';
                  var anchorDate = bdHour < 7 ? new Date(nowUtcMs - 3600 * 1000) : bdNow;
                  var y = anchorDate.getUTCFullYear();
                  var m = String(anchorDate.getUTCMonth() + 1).padStart(2, '0');
                  var d = String(anchorDate.getUTCDate()).padStart(2, '0');
                  var periodKey = y + '-' + m + '-' + d + '-' + (isNight ? 'night' : 'day');
                  var savedManualPeriod = localStorage.getItem(manualPeriodKey);
                  var savedTheme = localStorage.getItem(storageKey);
                  var activeTheme = scheduledTheme;
                  if (savedManualPeriod === periodKey && (savedTheme === 'light' || savedTheme === 'dark')) {
                    activeTheme = savedTheme;
                  } else {
                    localStorage.setItem(storageKey, scheduledTheme);
                  }
                  var root = document.documentElement;
                  if (activeTheme === 'light') {
                    root.classList.remove('dark');
                    root.classList.add('light');
                    root.style.colorScheme = 'light';
                  } else {
                    root.classList.add('dark');
                    root.classList.remove('light');
                    root.style.colorScheme = 'dark';
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        {/* JSON-LD Structured Data for SEO */}
        <script
          key="root-jsonld-script"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* GOOGLE TAG MANAGER (GTM) - Head Script */}
        {enableTracking && GTM_ID !== 'GTM-XXXXXXX' && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `,
            }}
          />
        )}

        {/* GOOGLE ANALYTICS 4 (GA4) - Direct Integration */}
        {enableTracking && GA4_ID !== 'G-XXXXXXXXXX' && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga4-script"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA4_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                  });
                `,
              }}
            />
          </>
        )}

        {/* META (FACEBOOK) PIXEL */}
        {enableTracking && META_PIXEL_ID !== 'XXXXXXXXXXXXXXXX' && (
          <Script
            id="meta-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${META_PIXEL_ID}');
                fbq('track', 'PageView');
                window.fbEventId = 'event_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
              `,
            }}
          />
        )}

        {/* GOOGLE TAG MANAGER (GTM) - NoScript Fallback */}
        {enableTracking && GTM_ID !== 'GTM-XXXXXXX' && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          disableTransitionOnChange={false}
          storageKey="boosting-agency-theme"
        >
          <LanguageProvider>
            <SecurityShield />
            <FloatingBubbles />
            <Header />
            <main className="min-h-screen pt-[73px]">
              {children}
            </main>
            <Footer />
            <ChatWidget />
          </LanguageProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
