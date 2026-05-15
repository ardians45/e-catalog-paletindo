import { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  MessageCircle, 
  FileText, 
  Truck, 
  Clock, 
  ArrowRight, 
  Box, 
  Award,
  HelpCircle,
  Package,
  Zap,
  ChevronRight,
  Star,
  Building2,
  Phone,
  BarChart3,
  Quote
} from "lucide-react";

export const metadata: Metadata = {
  title: "Palet Plastik Tangerang Selatan - Supplier Terlengkap | Paletindo",
  description: "Cari palet plastik Tangerang Selatan? PT Paletindo Prakarsa Unggul sedia palet baru & bekas berkualitas tinggi. Harga murah, stok ready, kirim instan ke seluruh Tangsel.",
  alternates: {
    canonical: "https://paletindo.id/palet-plastik-tangerang-selatan",
  }
};

export default function TangerangSelatanPage() {
  return (
    <div className="w-full bg-[#fcfcfd] min-h-screen pt-28 pb-32 selection:bg-[#D4A373] selection:text-white font-sans">
      
      {/* Schema JSON-LD LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "PT Paletindo Prakarsa Unggul - Palet Plastik Tangerang Selatan",
            "description": "Distributor dan supplier palet plastik terpercaya di Tangerang Selatan. Menyediakan palet industrial, food grade, dan custom packaging.",
            "url": "https://paletindo.id/palet-plastik-tangerang-selatan",
            "telephone": "+62-21-5374295",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jelupang",
              "addressLocality": "Serpong Utara",
              "addressRegion": "Tangerang Selatan",
              "postalCode": "15323",
              "addressCountry": "ID"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -6.2465,
              "longitude": 106.6630
            }
          })
        }}
      />

      {/* Schema JSON-LD Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://paletindo.id"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Palet Plastik Tangerang Selatan",
                "item": "https://paletindo.id/palet-plastik-tangerang-selatan"
              }
            ]
          })
        }}
      />

      {/* Schema JSON-LD FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Di mana lokasi jual palet plastik Tangerang Selatan yang terpercaya?",
                "acceptedAnswer": { "@type": "Answer", "text": "PT Paletindo Prakarsa Unggul berlokasi di Jelupang, Serpong Utara, adalah supplier palet plastik Tangerang Selatan paling terpercaya dengan stok ready dan harga kompetitif." }
              },
              {
                "@type": "Question",
                "name": "Berapa harga pallet plastik Tangerang Selatan per unit?",
                "acceptedAnswer": { "@type": "Answer", "text": "Harga pallet plastik Tangerang Selatan sangat bervariasi mulai dari harga ekonomis untuk ekspor hingga tipe heavy duty premium. Hubungi kami untuk price list terbaru." }
              },
              {
                "@type": "Question",
                "name": "Apakah Paletindo melayani pengiriman ke seluruh kecamatan di Tangsel?",
                "acceptedAnswer": { "@type": "Answer", "text": "Ya, kami melayani pengiriman ke Serpong, Serpong Utara, Ciputat, Pamulang, Pondok Aren, Setu, dan Ciputat Timur." }
              },
              {
                "@type": "Question",
                "name": "Apakah tersedia pallet plastik bekas berkualitas di Tangerang Selatan?",
                "acceptedAnswer": { "@type": "Answer", "text": "Kami menyediakan stok pallet plastik baru sebagai produk utama, namun kami juga memiliki pilihan pallet plastik bekas berkualitas dengan kondisi 80-90% layak pakai." }
              },
              {
                "@type": "Question",
                "name": "Bagaimana cara melakukan pemesanan palet plastik di Paletindo?",
                "acceptedAnswer": { "@type": "Answer", "text": "Pemesanan sangat mudah, Anda bisa langsung menghubungi marketing kami via WhatsApp atau datang langsung ke gudang kami di Jelupang untuk survey barang." }
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden mb-24 border-b border-zinc-100 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <nav className="flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 gap-3 mb-12">
            <Link href="/" className="hover:text-zinc-900 transition-colors">Home</Link>
            <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
            <span className="text-[#D4A373]">Tangerang Selatan</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-8">
              <Building2 className="w-5 h-5 text-[#D4A373]" />
              <span className="text-[12px] font-bold text-[#D4A373] uppercase tracking-[0.3em]">
                Pusat Distribusi B2B & Industri
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-zinc-900 leading-[1] mb-10 tracking-tighter">
              Palet Plastik <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-900">
                Tangerang Selatan.
              </span>
            </h1>
            <p className="text-xl text-zinc-500 font-light leading-relaxed max-w-2xl mb-12">
              Solusi logistik premium untuk kebutuhan gudang Anda. PT Paletindo Prakarsa Unggul menyediakan <strong>palet plastik Tangerang Selatan</strong> dengan kualitas standar internasional untuk industri farmasi, manufaktur, dan logistik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/6287877662097" className="px-10 py-5 bg-zinc-900 text-white rounded-2xl font-bold text-lg hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-900/10 flex items-center justify-center gap-3">
                <MessageCircle className="w-5 h-5 text-[#D4A373]" /> Hubungi WhatsApp
              </a>
              <Link href="/products" className="px-10 py-5 bg-white text-zinc-900 border border-zinc-200 rounded-2xl font-bold text-lg hover:border-zinc-900 transition-all flex items-center justify-center gap-3">
                <Box className="w-5 h-5 text-zinc-400" /> Lihat Katalog
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-zinc-50/50 -z-10 translate-x-1/4"></div>
      </section>

      {/* Intro Section - Long Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-12 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-8">
            <div className="prose prose-lg prose-zinc max-w-none text-zinc-600 font-light leading-relaxed">
              <p className="text-2xl text-zinc-900 font-bold mb-8 leading-snug">
                Pencarian Anda untuk <strong>palet plastik Tangerang Selatan</strong> berakhir di sini. Kami memahami bahwa infrastruktur logistik yang kokoh dimulai dari pemilihan pallet yang tepat.
              </p>
              <p>
                Sebagai salah satu kota penyangga Jakarta dengan pertumbuhan industri tercepat, Tangerang Selatan menjadi pusat pergudangan bagi ribuan bisnis. Kebutuhan akan <strong>pallet plastik Tangerang Selatan</strong> terus meningkat seiring dengan standarisasi higienitas dan efisiensi ruang gudang. PT Paletindo Prakarsa Unggul hadir di jantung kota ini, tepatnya di Jelupang, untuk memberikan solusi instan bagi Anda yang membutuhkan suplier pallet terdekat dengan kredibilitas tinggi.
              </p>
              <p>
                Mengapa banyak perusahaan manufaktur besar di kawasan BSD, Alam Sutera, hingga Pamulang mempercayakan kebutuhan mereka kepada kami? Jawabannya sederhana: Kami tidak hanya menjual barang, kami memberikan kepastian. Kepastian akan kualitas material HDPE virgin yang tahan lama, kepastian harga yang kompetitif karena kami adalah distributor tangan pertama, dan kepastian pengiriman yang tepat waktu guna menjaga alur produksi Anda tetap berjalan tanpa hambatan.
              </p>
              
              <h2 className="text-3xl font-black text-zinc-900 tracking-tight mt-16 mb-8">Keunggulan Memilih Paletindo di Tangerang Selatan</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 not-prose">
                <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                  <Award className="w-10 h-10 text-[#D4A373] mb-6" />
                  <h4 className="text-xl font-bold text-zinc-900 mb-3">Kualitas Standar Ekspor</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">Semua produk kami telah melewati uji beban statis dan dinamis yang ketat, menjadikannya standar ideal untuk pengiriman ekspor ke mancanegara.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                  <Truck className="w-10 h-10 text-[#D4A373] mb-6" />
                  <h4 className="text-xl font-bold text-zinc-900 mb-3">Logistik Terintegrasi</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">Memiliki armada pengiriman sendiri yang siaga di area Tangerang Selatan, memastikan pallet Anda tiba di lokasi dalam waktu maksimal 2 jam setelah pemesanan.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                  <BarChart3 className="w-10 h-10 text-[#D4A373] mb-6" />
                  <h4 className="text-xl font-bold text-zinc-900 mb-3">Harga Distributor Langsung</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">Tanpa melalui rantai broker yang panjang, kami memberikan penawaran harga <strong>palet plastik Tangerang Selatan</strong> terbaik dengan transparansi biaya.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                  <ShieldCheck className="w-10 h-10 text-[#D4A373] mb-6" />
                  <h4 className="text-xl font-bold text-zinc-900 mb-3">Material Tersertifikasi</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">Menyediakan opsi material HDPE Full Virgin (Food Grade) dan PP Block Copolymer yang tahan terhadap benturan serta suhu ekstrem di cold storage.</p>
                </div>
              </div>

              <p className="mt-12">
                Tidak hanya melayani pembelian baru, kami juga dikenal sebagai pusat <strong>pallet plastik Tangerang Selatan</strong> yang menyediakan opsi pallet rekondisi pilihan bagi Anda yang memiliki budget logistik terbatas. Setiap unit pallet bekas yang kami jual telah melalui proses inspeksi teknis yang mendalam untuk memastikan strukturnya masih 100% aman digunakan untuk beban yang ditentukan. Ini adalah bagian dari komitmen kami untuk mendukung keberlanjutan bisnis di wilayah Tangerang Selatan.
              </p>
            </div>
          </div>

          {/* Sidebar CTA */}
          <aside className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">
            <div className="bg-zinc-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4A373]/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
              <h3 className="text-2xl font-bold mb-6 tracking-tight relative z-10">Dapatkan Penawaran Instan</h3>
              <p className="text-zinc-400 text-sm font-light mb-8 leading-relaxed relative z-10">Tim sales kami siap memberikan simulasi biaya dan konsultasi spesifikasi pallet dalam waktu kurang dari 10 menit.</p>
              <div className="space-y-4 relative z-10">
                <a href="https://wa.me/6287877662097" className="w-full py-4 bg-[#D4A373] text-zinc-900 font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-[#C19263] transition-colors shadow-lg shadow-[#D4A373]/10">
                  <Phone className="w-4 h-4" /> 0878-7766-2097
                </a>
                <Link href="/rfq" className="w-full py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-white/10 transition-colors">
                  <FileText className="w-4 h-4 text-[#D4A373]" /> Minta RFQ Resmi
                </Link>
              </div>
            </div>

            <div className="bg-white border border-zinc-100 rounded-[2.5rem] p-8 shadow-sm">
               <h4 className="text-lg font-bold text-zinc-900 mb-6 flex items-center gap-2">
                 <MapPin className="w-5 h-5 text-[#D4A373]" /> Area Tangerang Selatan
               </h4>
                <div className="flex flex-col gap-2">
                  {[
                    { name: "Serpong Utara", slug: "serpong-utara" },
                    { name: "Serpong", slug: "serpong" },
                    { name: "BSD City", slug: "bsd" },
                    { name: "Ciputat", slug: "ciputat" },
                    { name: "Pondok Aren", slug: "pondok-aren" },
                    { name: "Pamulang", slug: "pamulang" },
                  ].map((area) => (
                    <Link key={area.slug} href={`/pallet-plastik-${area.slug}`} className="flex items-center justify-between p-4 rounded-2xl hover:bg-zinc-50 border border-transparent hover:border-zinc-100 transition-all group">
                      <span className="text-sm font-medium text-zinc-500 group-hover:text-zinc-900">{area.name}</span>
                      <ChevronRight className="w-4 h-4 text-zinc-300 group-hover:text-[#D4A373]" />
                    </Link>
                  ))}
                </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Product Tables Section */}
      <section className="bg-zinc-900 py-32 mb-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-[0.03]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-white">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">Katalog Produk & <br/><span className="text-[#D4A373]">Perbandingan Teknis.</span></h2>
            <p className="text-zinc-400 text-lg font-light">Bandingkan dan pilih tipe <strong>palet plastik Tangerang Selatan</strong> yang paling sesuai dengan kapasitas racking gudang Anda.</p>
          </div>

          {/* Table 1: Produk Terpopuler */}
          <div className="overflow-x-auto rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm mb-16">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="p-8 text-[11px] font-bold uppercase tracking-widest text-[#D4A373]">Tipe Produk</th>
                  <th className="p-8 text-[11px] font-bold uppercase tracking-widest text-[#D4A373]">Dimensi (P x L x T)</th>
                  <th className="p-8 text-[11px] font-bold uppercase tracking-widest text-[#D4A373]">Beban Statis</th>
                  <th className="p-8 text-[11px] font-bold uppercase tracking-widest text-[#D4A373]">Beban Dinamis</th>
                  <th className="p-8 text-[11px] font-bold uppercase tracking-widest text-[#D4A373]">Best For</th>
                </tr>
              </thead>
              <tbody className="text-sm text-zinc-300">
                <tr className="border-b border-white/5">
                  <td className="p-8 font-bold text-white">Heavy Duty Series</td>
                  <td className="p-8">1200 x 1000 x 150 mm</td>
                  <td className="p-8">6.000 KG</td>
                  <td className="p-8">2.000 KG</td>
                  <td className="p-8">Selective Racking</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-8 font-bold text-white">Medium Series</td>
                  <td className="p-8">1100 x 1100 x 140 mm</td>
                  <td className="p-8">4.000 KG</td>
                  <td className="p-8">1.500 KG</td>
                  <td className="p-8">Gudang Flat & Logistik</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-8 font-bold text-white">Nestable Series</td>
                  <td className="p-8">1200 x 1000 x 140 mm</td>
                  <td className="p-8">3.000 KG</td>
                  <td className="p-8">1.000 KG</td>
                  <td className="p-8">Ekspor (One-way)</td>
                </tr>
                <tr>
                  <td className="p-8 font-bold text-white">Custom Series</td>
                  <td className="p-8">Varies</td>
                  <td className="p-8">By Request</td>
                  <td className="p-8">By Request</td>
                  <td className="p-8">Industrial Needs</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Table 2: Perbandingan Material */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">Mengapa Palet Plastik Lebih Baik dari Kayu?</h3>
            <div className="overflow-x-auto rounded-3xl border border-white/10 bg-zinc-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-zinc-700">
                    <th className="p-6 text-left font-bold text-[#D4A373]">Fitur Perbandingan</th>
                    <th className="p-6 text-center font-bold text-white">Palet Plastik HDPE</th>
                    <th className="p-6 text-center font-bold text-white">Palet Kayu Standar</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-400">
                  <tr className="border-b border-white/5">
                    <td className="p-6 font-medium">Ketahanan Terhadap Jamur</td>
                    <td className="p-6 text-center text-emerald-400 font-bold">100% Bebas Jamur</td>
                    <td className="p-6 text-center">Rentan & Perlu ISPM-15</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-6 font-medium">Daya Tahan (Life Span)</td>
                    <td className="p-6 text-center text-emerald-400 font-bold">10+ Tahun</td>
                    <td className="p-6 text-center">1 - 2 Tahun</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-6 font-medium">Kebersihan / Higienitas</td>
                    <td className="p-6 text-center text-emerald-400 font-bold">Mudah Dicuci</td>
                    <td className="p-6 text-center">Menyerap Cairan/Bau</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium">Keamanan Operasional</td>
                    <td className="p-6 text-center text-emerald-400 font-bold">Halus, Tanpa Paku</td>
                    <td className="p-6 text-center">Ada Paku & Serpihan Kayu</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Area Layanan Detailed Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-12 mb-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-black text-zinc-900 tracking-tight mb-6">Area Distribusi Tangerang Selatan</h2>
          <p className="text-zinc-500 font-light text-lg">Layanan pengiriman ekspres <strong>pallet plastik Tangerang Selatan</strong> menjangkau seluruh kecamatan dan kelurahan di wilayah ini.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Serpong Utara", desc: "Jelupang, Paku Jaya, Alam Sutera" },
            { name: "Serpong", desc: "BSD City, Cilenggang, Serpong" },
            { name: "Ciputat", desc: "Cipayung, Serua, Jombang" },
            { name: "Pondok Aren", desc: "Bintaro, Jurang Mangu, Pondok Jaya" },
            { name: "Pamulang", desc: "Benda Baru, Pondok Cabe, Pamulang" },
            { name: "Setu", desc: "Babakan, Kademangan, Muncul" },
            { name: "Ciputat Timur", desc: "Cireundeu, Pisangan, Pondok Ranji" },
            { name: "Kawasan Industri", desc: "Taman Tekno & Sekitarnya" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-sm hover:border-[#D4A373]/30 transition-all text-center">
              <MapPin className="w-8 h-8 text-[#D4A373] mx-auto mb-4" />
              <h4 className="font-bold text-zinc-900 mb-2">{item.name}</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-zinc-50 py-32 mb-32 border-y border-zinc-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-4xl font-black text-zinc-900 tracking-tight">Ulasan Pelanggan <br/><span className="text-[#D4A373]">Logistik & Manufaktur.</span></h2>
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full border border-zinc-200 shadow-sm">
               <div className="flex text-amber-400">
                 <Star className="w-5 h-5 fill-current" />
                 <Star className="w-5 h-5 fill-current" />
                 <Star className="w-5 h-5 fill-current" />
                 <Star className="w-5 h-5 fill-current" />
                 <Star className="w-5 h-5 fill-current" />
               </div>
               <span className="font-bold text-zinc-900">4.9/5</span>
               <span className="text-zinc-400 text-xs">dari 500+ Klien</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                text: "Pelayanan sangat cepat. Saya pesan 100 unit palet plastik Tangerang Selatan untuk gudang di BSD, barang sampai kurang dari 2 jam. Kualitas barang virgin HDPE sesuai deskripsi.",
                author: "Andi Wijaya", role: "Manager Logistik Manufaktur"
              },
              { 
                text: "Sudah berlangganan pallet plastik Tangerang Selatan di Paletindo selama 3 tahun. Untuk urusan ketepatan spesifikasi dan harga B2B, mereka masih yang terbaik di area Tangsel.",
                author: "Siska Putri", role: "Procurement Lead Farmasi"
              },
              { 
                text: "Recommended supplier! Gudang mereka di Jelupang sangat luas dan stoknya selalu ready. Memudahkan kami yang sering ada kebutuhan pallet mendesak untuk pengiriman ekspor.",
                author: "Budi Santoso", role: "Owner Ekspedisi Cargo"
              }
            ].map((testi, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-zinc-100 shadow-sm relative group">
                <Quote className="absolute top-8 right-8 w-12 h-12 text-zinc-50 group-hover:text-[#D4A373]/10 transition-colors" />
                <p className="text-zinc-500 font-light leading-relaxed mb-8 relative z-10 italic">"{testi.text}"</p>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-white font-bold text-lg">{testi.author.charAt(0)}</div>
                  <div>
                    <h5 className="font-bold text-zinc-900">{testi.author}</h5>
                    <p className="text-xs text-zinc-400 uppercase tracking-widest">{testi.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & FAQ Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-12 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-black text-zinc-900 tracking-tight mb-10 flex items-center gap-4">
               <HelpCircle className="w-8 h-8 text-[#D4A373]" /> FAQ — Palet Plastik Tangerang Selatan
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Berapa harga pallet plastik Tangerang Selatan di Paletindo?",
                  a: "Harga palet plastik Tangerang Selatan bervariasi mulai dari harga ekonomis untuk kebutuhan satu kali jalan hingga tipe heavy duty untuk racking. Kami menjamin harga distributor langsung tanpa perantara."
                },
                {
                  q: "Apakah melayani pembelian pallet plastik bekas di Tangsel?",
                  a: "Fokus utama kami adalah pallet baru, namun kami juga menyediakan stok pallet bekas berkualitas yang telah melalui inspeksi ketat untuk memastikan ketahanan bebannya."
                },
                {
                  q: "Berapa lama waktu pengiriman ke wilayah Serpong atau BSD?",
                  a: "Hanya sekitar 30 - 60 menit. Karena lokasi gudang kami strategis di Jelupang, kami dapat melakukan pengiriman instan ke seluruh penjuru Tangerang Selatan."
                },
                {
                  q: "Apakah pallet plastik Paletindo aman untuk industri farmasi?",
                  a: "Sangat aman. Kami menyediakan varian palet Food Grade dengan material Full Virgin HDPE yang tersertifikasi, bebas bakteri, dan tahan terhadap suhu cold storage."
                },
                {
                  q: "Bagaimana sistem pembayaran untuk pembelian korporat?",
                  a: "Kami melayani sistem pembayaran Cash Before Delivery (CBD) atau sistem kontrak termin bagi mitra korporat yang telah melewati proses verifikasi kredit."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-3xl border border-zinc-100 p-8 hover:border-[#D4A373]/30 transition-colors shadow-sm">
                  <h4 className="font-bold text-zinc-900 mb-4">{item.q}</h4>
                  <p className="text-zinc-500 font-light leading-relaxed text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Maps Embed */}
          <div className="lg:sticky lg:top-32">
             <div className="bg-zinc-900 rounded-[3rem] p-4 shadow-2xl overflow-hidden h-[500px] relative">
                <iframe 
                  src="https://maps.google.com/maps?q=Jelupang,%20Serpong%20Utara,%20South%20Tangerang%20City,%20Banten%2015323&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700 rounded-[2.5rem]"
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-white shadow-xl">
                   <h4 className="font-bold text-zinc-900 mb-2">Visit Our Warehouse</h4>
                   <p className="text-xs text-zinc-500 leading-relaxed">Jelupang, Serpong Utara, Kota Tangerang Selatan, Banten 15323</p>
                   <a href="https://maps.app.goo.gl/U49BaoBxpcoPw7hV8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#D4A373] text-xs font-bold mt-4 hover:gap-3 transition-all uppercase tracking-widest">
                     Buka di Google Maps <ArrowRight className="w-3 h-3" />
                   </a>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* Final Bottom CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-[#D4A373] rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-[#D4A373]/20">
          <div className="absolute top-0 left-0 w-full h-full bg-zinc-900/5 -z-10 skew-y-6 translate-y-1/2"></div>
          <h2 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tight leading-tight mb-8">
            Siap Optimalkan <br/>Logistik Anda Hari Ini?
          </h2>
          <p className="text-zinc-900/60 text-lg font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
            Hubungi PT Paletindo Prakarsa Unggul untuk konsultasi teknis gratis dan penawaran harga <strong>palet plastik Tangerang Selatan</strong> terbaik sekarang juga.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://wa.me/6287877662097" className="px-12 py-6 bg-zinc-900 text-white rounded-2xl font-bold text-xl hover:bg-zinc-800 transition-all shadow-2xl flex items-center justify-center gap-4">
              <MessageCircle className="w-6 h-6 text-[#D4A373]" /> Chat Sales WhatsApp
            </a>
            <Link href="/contact" className="px-12 py-6 bg-white/20 backdrop-blur-md border border-zinc-900/10 text-zinc-900 rounded-2xl font-bold text-xl hover:bg-white/30 transition-all flex items-center justify-center gap-4">
              <Phone className="w-6 h-6" /> Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
