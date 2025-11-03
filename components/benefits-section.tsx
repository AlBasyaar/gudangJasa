"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CheckCircle2, Zap, DollarSign, Star } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const benefits = [
  {
    icon: CheckCircle2,
    title: "Banyak Pilihan Penyedia",
    description: "Pilih dari ribuan penyedia jasa terverifikasi sesuai kebutuhan Anda",
  },
  {
    icon: Zap,
    title: "Order Aman & Cepat",
    description: "Proses pemesanan mudah dengan sistem keamanan berlapis",
  },
  {
    icon: DollarSign,
    title: "Harga Transparan",
    description: "Tidak ada biaya tersembunyi, semua harga jelas sejak awal",
  },
  {
    icon: Star,
    title: "Rating & Testimoni Asli",
    description: "Baca ulasan jujur dari pelanggan yang sudah menggunakan jasa",
  },
]

const BenefitsSection = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const cards = cardsRef.current.filter((card): card is HTMLDivElement => card !== null)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
      },
    })

    cards.forEach((card, index) => {
      tl.from(
        card,
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.5,
          ease: "back.out",
        },
        index * 0.15,
      )
    })
  }, [])

  return (
    <section ref={sectionRef} id="benefit" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Keunggulan <span className="text-blue-600">GudangJasa</span>
          </h2>
          <p className="text-xl text-gray-600">Mengapa memilih kami untuk kebutuhan jasa profesional Anda</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el
                }}
                className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-xl border-2 border-blue-100 hover:border-blue-600 transition-colors duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Icon className="w-12 h-12 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
