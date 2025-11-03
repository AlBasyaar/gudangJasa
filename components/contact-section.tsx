"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Mail, MapPin, Phone } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const ContactSection = () => {
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const infoRef = useRef(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
      },
    })

    tl.from(formRef.current, {
      opacity: 0,
      x: -50,
      duration: 0.6,
      ease: "power3.out",
    }).from(
      infoRef.current,
      {
        opacity: 0,
        x: 50,
        duration: 0.6,
      },
      "-=0.6",
    )
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    alert("Terima kasih! Pesan Anda telah dikirim.")
  }

  return (
    <section ref={sectionRef} id="kontak" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hubungi <span className="text-blue-600">Kami</span>
          </h2>
          <p className="text-xl text-gray-600">Kami siap membantu Anda kapan saja</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Nama Lengkap</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-100 rounded-lg focus:border-blue-600 focus:outline-none transition-colors duration-300"
                placeholder="Masukkan nama Anda"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-100 rounded-lg focus:border-blue-600 focus:outline-none transition-colors duration-300"
                placeholder="Masukkan email Anda"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Pesan</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border-2 border-gray-100 rounded-lg focus:border-blue-600 focus:outline-none transition-colors duration-300 resize-none"
                placeholder="Tulis pesan Anda di sini"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Kirim Pesan
            </button>
          </form>

          {/* Contact Info */}
          <div ref={infoRef} className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <Mail className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">support@gudangjasa.com</p>
                  <p className="text-gray-600">business@gudangjasa.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <Phone className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Telepon</h3>
                  <p className="text-gray-600">+62 812 3456 7890</p>
                  <p className="text-gray-600">+62 21 5555 6666</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <MapPin className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Alamat</h3>
                  <p className="text-gray-600">
                    Jl. Merdeka No. 123, Menteng
                    <br />
                    Jakarta Pusat, 12190
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
