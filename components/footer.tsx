const Footer = () => {
  const currentYear = new Date().getFullYear()

  const handleSmoothScroll = (e, id) => {
    e.preventDefault()
    const target = document.querySelector(id)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gray-900 text-white py-12 px-6 sm:px-10 lg:px-16 scroll-smooth">
      <div className="max-w-7xl mx-auto">
        {/* Bagian Atas */}
        <div className="grid md:grid-cols-4 gap-10 mb-10 text-left">
          {/* Logo & Deskripsi */}
          <div className="flex flex-col items-start">
            <div className="w-20 h-20 rounded-lg overflow-hidden flex items-center justify-center mb-2">
              <img
                src="https://res.cloudinary.com/dr5pehdsw/image/upload/v1762140493/Logo_Gudang_Jasa_-_Lakal_Basyar-01_okmuvs.png"
                alt="GudangJasa Logo"
                className="object-contain w-full h-full"
              />
            </div>
            <span className="font-semibold text-xl text-gray-300">
              GudangJasa
            </span>
            <p className="text-gray-400 text-sm leading-relaxed mt-2 max-w-xs">
              Solusi jasa pembuatan website dengan desain modern dan kreatif
            </p>
          </div>

          {/* Navigasi */}
          <div className="md:col-span-2">
            <h4 className="font-semibold mb-4 text-lg text-white">
              Navigasi
            </h4>
            <div className="grid grid-cols-2 gap-y-3 text-gray-400 text-sm justify-items-start">
              {[
                { name: "Home", id: "#home" },
                { name: "Pricing", id: "#harga" },
                { name: "About", id: "#tentang" },
                { name: "Benefits", id: "#benefit" },
                { name: "Services", id: "#layanan" },
                { name: "FAQ", id: "#faq" },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.id}
                  onClick={(e) => handleSmoothScroll(e, link.id)}
                  className="hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Kontak Kami */}
          <div className="flex flex-col items-start">
            <h4 className="font-semibold mb-4 text-lg text-white">
              Kontak Kami
            </h4>
            <div className="flex space-x-5">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.981 6.98 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c4.358-.2 6.781-2.618 6.981-6.98.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.981-6.98C15.667.014 15.259 0 12 0zm0 5.838A6.162 6.162 0 1 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A4 4 0 1 1 16 12a4.004 4.004 0 0 1-4 4zm6.406-10.845a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Rakha999888/gudangJasa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-blue-400 transition-transform transform hover:scale-110 duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Garis bawah */}
        <div className="border-t border-gray-800 pt-6">
          <p className="text-gray-400 text-sm tracking-wide">
            © {currentYear} GudangJasa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
