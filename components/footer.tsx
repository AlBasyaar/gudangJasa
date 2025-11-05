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
    <footer className="bg-gray-900 text-white py-14 px-6 sm:px-10 lg:px-16 scroll-smooth">
      <div className="max-w-7xl mx-auto">
        {/* Grid utama */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-10">
          {/* Kolom 1 - Logo & Deskripsi */}
          <div className="flex flex-col sm:items-start">
            {/* Logo dan Nama sejajar */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dr5pehdsw/image/upload/v1762140493/Logo_Gudang_Jasa_-_Lakal_Basyar-01_okmuvs.png"
                  alt="GudangJasa Logo"
                  className="object-contain w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white">GudangJasa</h3>
            </div>

            {/* Deskripsi */}
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Solusi jasa pembuatan website dengan desain modern dan kreatif
            </p>
          </div>

          {/* Kolom 2 - Navigasi Cepat */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Navigasi Cepat</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {[
                { name: "Beranda", id: "#home" },
                { name: "Tentang", id: "#tentang" },
                { name: "Layanan", id: "#layanan" },
                { name: "Benefit", id: "#benefit" },
                { name: "Harga", id: "#harga" },
                { name: "FAQ", id: "#faq" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.id}
                    onClick={(e) => handleSmoothScroll(e, link.id)}
                    className="hover:text-blue-400 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3 - Tentang Proyek */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Tentang Proyek</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-sm">
              Website ini dikembangkan sebagai platform penyedia jasa digital
              modern untuk membantu individu dan bisnis dalam membangun citra
              online profesional. Seluruh layanan kami berfokus pada desain,
              performa, dan keamanan.
            </p>
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, "#home")}
              className="inline-block text-blue-400 font-medium hover:text-blue-500 transition-all duration-300"
            >
              Kembali ke atas ↑
            </a>
          </div>
        </div>

        {/* Garis bawah */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-sm tracking-wide">
            © {currentYear} GudangJasa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
