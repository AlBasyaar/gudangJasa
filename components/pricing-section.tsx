"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Check } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const plans = [
  {
    name: "Basic",
    price: "Rp 0",
    description: "Untuk pengguna baru",
    features: [
      "Akses ke semua kategori jasa",
      "Pencarian dan filter dasar",
      "Rating dan ulasan pelanggan",
      "Chat dengan penyedia jasa",
    ],
    cta: "Mulai Gratis",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "Rp 99.000",
    period: "/bulan",
    description: "Untuk pengguna aktif",
    features: [
      "Semua fitur Basic",
      "Prioritas pemesanan",
      "Diskon hingga 20%",
      "Dukungan pelanggan 24/7",
      "Riwayat pemesanan unlimited",
      "Akses ke penawaran eksklusif",
    ],
    cta: "Upgrade ke Pro",
    highlighted: true,
  },
  {
    name: "Premium",
    price: "Rp 299.000",
    period: "/bulan",
    description: "Untuk pengguna premium",
    features: [
      "Semua fitur Pro",
      "Asuransi jaminan kualitas",
      "Diskon hingga 40%",
      "Account manager personal",
      "Akses early bird untuk promo",
      "Bonus point setiap transaksi",
    ],
    cta: "Upgrade ke Premium",
    highlighted: false,
  },
]

const PricingSection = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const cards = cardsRef.current.filter((card): card is HTMLDivElement => card !== null)

    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
        },
        opacity: 0,
        scale: 0.8,
        y: 40,
        duration: 0.6,
        delay: index * 0.2,
        ease: "power3.out",
      })
    })
  }, [])

  return (
    <section ref={sectionRef} id="harga" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Paket <span className="text-blue-600">Harga</span>
          </h2>
          <p className="text-xl text-gray-600">Pilih paket yang sesuai dengan kebutuhan Anda</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              className={`relative p-8 rounded-2xl transition-all duration-300 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl md:scale-105"
                  : "bg-white border-2 border-gray-100 hover:border-blue-200"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                  Paling Populer
                </div>
              )}

              <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                {plan.name}
              </h3>
              <p className={`mb-6 ${plan.highlighted ? "text-blue-100" : "text-gray-600"}`}>{plan.description}</p>

              <div className="mb-8">
                <span className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                  {plan.price}
                </span>
                {plan.period && (
                  <span className={`${plan.highlighted ? "text-blue-100" : "text-gray-600"}`}>{plan.period}</span>
                )}
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {plan.cta}
              </button>

              <div className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <Check size={20} className={plan.highlighted ? "text-blue-100" : "text-blue-600"} />
                    <span className={plan.highlighted ? "text-blue-50" : "text-gray-700"}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection
