"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { BookOpen, ImageIcon, LayoutGrid, Wrench } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: BookOpen,
    title: "Company Profile",
    description: "Tampilkan identitas dan keunggulan bisnis dengan profil perusahaan yang profesional.",
  },
  {
    icon: ImageIcon,
    title: "Portofolio",
    description: "Pamerkan proyek-proyek terbaik kamu dalam portofolio yang keren dan menarik.",
  },
  {
    icon: LayoutGrid,
    title: "Katalog",
    description: "Perkenalkan produk atau layanan kamu dengan katalog online yang atraktif dan informatif.",
  },
  {
    icon: Wrench,
    title: "Custom",
    description: "Dapatkan solusi website yang dirancang khusus untuk kebutuhan bisnis kamu.",
  },
]

const ServicesSection = () => {
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
        y: 50,
        duration: 0.6,
        delay: index * 0.1,
        ease: "power3.out",
      })
    })
  }, [])

  return (
    <section ref={sectionRef} id="layanan" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Layanan <span className="text-blue-600">GudangJasa</span>
          </h2>
          <p className="text-xl text-gray-600">Solusi lengkap untuk kebutuhan bisnis profesional Anda</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el
                }}
                className="p-8 bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer group"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg group-hover:bg-blue-600 transition-colors duration-300 mb-4">
                  <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full">
                  {service.category}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
