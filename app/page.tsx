import { HeroSection } from "@/components/home/hero-section"
import { ServicesOverview } from "@/components/home/services-overview"
import { IndustriesWeServe } from "@/components/home/industries-we-serve"
import { RealCampaignResultsSection } from "@/components/portfolio/portfolio-content"
import { CaseStudiesPreview } from "@/components/home/case-studies-preview"
import { OurProcess } from "@/components/home/our-process"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { Testimonials } from "@/components/home/testimonials"
import { TeamPreview } from "@/components/home/team-preview"
import { HomeFaq } from "@/components/home/faq-section"
import { BlogPreview } from "@/components/home/blog-preview"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <IndustriesWeServe />
      <RealCampaignResultsSection />
      <CaseStudiesPreview />
      <OurProcess />
      <WhyChooseUs />
      <Testimonials />
      <TeamPreview />
      <HomeFaq />
      <BlogPreview />
      <CTASection />
    </>
  )
}
