"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const AboutSection = () => {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "center center",
        scrub: 1,
      },
    })

    tl.from(textRef.current, {
      opacity: 0,
      x: -50,
      duration: 0.8,
    }).from(
      imageRef.current,
      {
        opacity: 0,
        x: 50,
        duration: 0.8,
      },
      "-=0.8",
    )
  }, [])

  return (
    <section ref={sectionRef} id="tentang" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={textRef} className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Tentang <span className="text-blue-600">GudangJasa</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              GudangJasa adalah penyedia jasa pembuatan website profesional yang berfokus pada desain modern, performa optimal, dan keamanan tinggi.
              Kami membantu bisnis, UMKM, dan personal brand membangun kehadiran digital yang menarik dan terpercaya.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Dengan tim berpengalaman dan dukungan teknologi terbaru, kami siap menciptakan website yang cepat, responsif, dan mudah dikelola.
            </p>
            <div className="pt-4 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full" />
                <p className="text-gray-700">50+ proyek website berhasil diselesaikan</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full" />
                <p className="text-gray-700">100% kepuasan klien</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full" />
                <p className="text-gray-700">Layanan aktif di seluruh Indonesia</p>
              </div>
            </div>
          </div>

          <div
            ref={imageRef}
            className="w-full h-96 bg-gradient-to-b from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center"
          >
            <div className="text-center text-gray-400">
              <p className="text-lg">Illustration - About Us</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
