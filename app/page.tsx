"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import BenefitsSection from "@/components/benefits-section"
import PricingSection from "@/components/pricing-section"
import FAQSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import { initGSAP } from "@/lib/gsap-config"

export default function Home() {
  useEffect(() => {
    initGSAP()
  }, [])

  return (
    <main className="w-full overflow-x-hidden bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BenefitsSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
