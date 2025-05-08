"use client";
import Link from "next/link";

export default function CompanyProfile() {
  const companyName = "PT Tunas Link Indonesia Lampung";
  const tagline = "Mitra Digital dan Teknologi Terpercaya di Lampung";
  const heroImage = "/hero.jpg";
  const companyLogo = "/logo 1.jpg";

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Navbar */}
      <nav className="bg-red-500 shadow-md py-4">
        <div className="container mx-auto flex items-center justify-between px-6">
          <Link href="/" className="flex items-center text-xl font-bold text-black">
            {companyLogo && <img src={companyLogo} alt={companyName} className="h-8 mr-2" />}
            {companyName}
          </Link>
          <div className="space-x-4">
            <Link href="/tentang-kami" className="hover:text-indigo-600">Tentang Kami</Link>
            <Link href="/layanan" className="hover:text-indigo-600">Layanan</Link>
            <Link href="/produk" className="hover:text-indigo-600">Produk</Link>
            <Link href="/kontak" className="hover:text-indigo-600">Kontak</Link>
          </div>
        </div>
      </nav>

      {/* Header/Hero Section */}
      <header className="bg-white py-20" style={{ backgroundImage: `url('${heroImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-black mb-4">{companyName}</h1>
          <p className="text-lg text-black opacity-80 mb-8">{tagline}</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-6">
        {/* Tentang Kami */}
        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Tentang Kami</h2>
            <p className="text-gray-700">
              PT Tunas Link Indonesia Lampung adalah perusahaan yang bergerak di bidang teknologi informasi dan komunikasi, dengan fokus pada penyediaan solusi jaringan internet, IT support, dan layanan digital lainnya di wilayah Lampung dan sekitarnya. Didirikan dengan semangat untuk menghubungkan dan memajukan daerah melalui teknologi, kami berkomitmen menjadi mitra terpercaya dalam transformasi digital.
            </p>
          </div>
          <div className="rounded-md overflow-hidden shadow-md">
            <img src="about.jpg" alt="Tentang Kami" className="w-full h-auto object-cover" />
          </div>
        </section>

        {/* Layanan Kami */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Layanan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-md shadow-md p-6">
              <img src="service.jpg" alt="Layanan 1" className="w-full h-32 object-cover mb-4 rounded-md" />
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Layanan Internet & Jaringan</h3>
              <p className="text-gray-700">Instalasi jaringan kabel dan nirkabel serta penyediaan layanan internet untuk rumah, kantor, dan institusi.</p>
            </div>
            <div className="bg-white rounded-md shadow-md p-6">
              <img src=" Maintenance.jpg" alt="Layanan 2" className="w-full h-32 object-cover mb-4 rounded-md" />
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">IT Support & Maintenance</h3>
              <p className="text-gray-700">Perawatan perangkat keras, dukungan teknis onsite dan remote, serta konsultasi IT profesional.</p>
            </div>
            <div className="bg-white rounded-md shadow-md p-6">
              <img src="pengembangan.jpg" alt="Layanan 3" className="w-full h-32 object-cover mb-4 rounded-md" />
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Pengembangan Website & Aplikasi</h3>
              <p className="text-gray-700">Pembuatan website company profile, e-commerce, dan aplikasi mobile Android/iOS.</p>
            </div>
          </div>
          <Link href="/layanan" className="text-indigo-600 hover:underline mt-4 inline-block">Lihat Semua Layanan</Link>
        </section>

        {/* Kontak */}
        <section className="bg-indigo-50 py-10 rounded-md grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Tertarik Bekerja Sama?</h2>
            <p className="text-gray-700 mb-6">
              Hubungi kami untuk mengetahui lebih lanjut tentang bagaimana kami dapat membantu Anda.
            </p>
            <Link href="/kontak" className="bg-indigo-600 text-white py-3 px-6 rounded-full hover:bg-indigo-700">Hubungi Kami Sekarang</Link>
          </div>
          <div className="rounded-md overflow-hidden shadow-md">
            <img src="contac.jpg" alt="Hubungi Kami" className="w-full h-auto object-cover" />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 py-6 text-center text-gray-600 mt-12">
        <p>&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
      </footer>
    </div>
  );
}
