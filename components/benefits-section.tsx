"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Zap, Palette, Rocket } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const benefits = [
  {
    icon: Zap,
    title: "Development Cepat",
    description: "Membangun website dengan cepat dan menerapkan fleksibel komponen",
  },
  {
    icon: Palette,
    title: "Desain Responsif",
    description: "Membangun website yang menerapkan desain yang modern serta responsif",
  },
  {
    icon: Rocket,
    title: "Performa Tinggi",
    description: "Membangun website dengan performa yang tinggi serta aksesibilitas yang luas",
  },
]

const BenefitsSection = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const cards = cardsRef.current.filter((card): card is HTMLDivElement => card !== null)

    gsap.set(cards, { opacity: 0, y: 30 })

    gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    })
  }, [])

  return (
    <section ref={sectionRef} id="benefit" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Keunggulan <span className="text-blue-600">Pembuatan Website</span>
        </h2>
        <p className="text-lg text-gray-600 mb-16">
          Kami fokus memberikan hasil terbaik untuk setiap proyek website yang kami bangun
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el
                }}
                className="bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-3xl p-8 shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white/20 p-4 rounded-full mb-6">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-white/90 leading-relaxed max-w-xs">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
