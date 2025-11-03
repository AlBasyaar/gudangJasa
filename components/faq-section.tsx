"use client"

import { useState, useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronDown } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const faqs = [
  {
    question: "Bagaimana cara mendaftar di GudangJasa?",
    answer:
      "Anda dapat mendaftar melalui aplikasi mobile atau website kami dengan menggunakan email atau nomor telepon. Proses pendaftaran hanya membutuhkan waktu kurang dari 2 menit.",
  },
  {
    question: "Apakah penyedia jasa di GudangJasa sudah terverifikasi?",
    answer:
      "Ya, semua penyedia jasa di GudangJasa telah melalui proses verifikasi ketat yang mencakup pengecekan identitas, riwayat pekerjaan, dan ulasan pelanggan.",
  },
  {
    question: "Berapa lama waktu respons penyedia jasa?",
    answer:
      "Rata-rata waktu respons penyedia jasa adalah 5-15 menit setelah Anda membuat order. Untuk jasa tertentu yang urgent, kami juga menyediakan layanan express dengan respons maksimal 30 menit.",
  },
  {
    question: "Apakah ada jaminan uang kembali?",
    answer:
      "Iya, jika Anda tidak puas dengan layanan yang diberikan, kami menawarkan garansi uang kembali 100% dalam 24 jam setelah transaksi selesai.",
  },
  {
    question: "Bagaimana cara membayar untuk jasa yang saya pesan?",
    answer:
      "Kami menerima berbagai metode pembayaran termasuk transfer bank, e-wallet (GoPay, OVO, DANA), dan cicilan tanpa bunga melalui kartu kredit.",
  },
]

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const sectionRef = useRef(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const items = itemsRef.current.filter((item): item is HTMLDivElement => item !== null)

    items.forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
        },
        opacity: 0,
        y: 20,
        duration: 0.5,
        delay: index * 0.1,
        ease: "power3.out",
      })
    })
  }, [])

  return (
    <section ref={sectionRef} id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">FAQ</span> - Pertanyaan Umum
          </h2>
          <p className="text-xl text-gray-600">Temukan jawaban untuk pertanyaan yang sering ditanyakan</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              ref={(el) => {
                itemsRef.current[index] = el
              }}
              className="border-2 border-gray-100 rounded-lg overflow-hidden hover:border-blue-200 transition-colors duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-blue-50 transition-colors duration-300"
              >
                <h3 className="text-left font-semibold text-gray-900">{faq.question}</h3>
                <ChevronDown
                  size={24}
                  className={`text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-white border-t-2 border-gray-100">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
