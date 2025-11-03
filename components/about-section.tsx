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
              GudangJasa adalah platform revolusioner yang menghubungkan jutaan pelanggan dengan ribuan penyedia jasa
              profesional terpercaya. Kami berkomitmen untuk memberikan pengalaman terbaik dengan keamanan, kecepatan,
              dan transparansi.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Dengan teknologi terdepan dan sistem verifikasi ketat, kami memastikan setiap transaksi aman dan
              memuaskan. Visi kami adalah menjadi ekosistem jasa digital terbesar dan paling terpercaya di Asia
              Tenggara.
            </p>
            <div className="pt-4 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full" />
                <p className="text-gray-700">Lebih dari 50,000 penyedia jasa terverifikasi</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full" />
                <p className="text-gray-700">1 juta pelanggan puas setiap bulannya</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full" />
                <p className="text-gray-700">Tersedia di 15 kota besar Indonesia</p>
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
