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
  ChevronRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pallet Plastik Serpong Utara - Supplier Terdekat | PT Paletindo Prakarsa Unggul",
  description: "Jual pallet plastik Serpong Utara berkualitas tinggi. PT Paletindo berlokasi di Jelupang, Serpong Utara. Tersedia heavy duty, food grade, all size. Hubungi kami!",
  alternates: {
    canonical: "https://paletindo.id/pallet-plastik-serpong-utara",
  }
};

export default function SerpongUtaraPage() {
  return (
    <div className="w-full bg-[#fcfcfd] min-h-screen pt-28 pb-32 selection:bg-[#D4A373] selection:text-white font-sans">
      
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
                "name": "Berapa harga pallet plastik di Serpong Utara?",
                "acceptedAnswer": { 
                  "@type": "Answer", 
                  "text": "Harga pallet plastik di Serpong Utara sangat bervariasi tergantung pada tipe (Heavy Duty, Medium, atau Light), ukuran, dan material yang digunakan. PT Paletindo Prakarsa Unggul menawarkan harga kompetitif mulai dari ratusan ribu rupiah. Hubungi marketing kami untuk penawaran harga korporat terbaik." 
                }
              },
              {
                "@type": "Question",
                "name": "Apakah ada minimal order?",
                "acceptedAnswer": { 
                  "@type": "Answer", 
                  "text": "Kami melayani pembelian satuan (ritel) maupun dalam partai besar (grosir) untuk kebutuhan industri. Tidak ada minimal order yang memberatkan, namun pembelian dalam jumlah besar akan mendapatkan potongan harga khusus." 
                }
              },
              {
                "@type": "Question",
                "name": "Berapa lama waktu pengiriman ke Serpong Utara?",
                "acceptedAnswer": { 
                  "@type": "Answer", 
                  "text": "Karena gudang utama kami berlokasi di Jelupang, Serpong Utara, estimasi waktu pengiriman sangat cepat, berkisar antara 15 hingga 30 menit setelah invoice dikonfirmasi. Kami menjamin kecepatan logistik untuk mendukung kelancaran operasional gudang Anda." 
                }
              },
              {
                "@type": "Question",
                "name": "Apakah tersedia pallet bekas/rekondisi?",
                "acceptedAnswer": { 
                  "@type": "Answer", 
                  "text": "Fokus utama kami adalah menyediakan pallet plastik baru berkualitas tinggi (virgin material atau campuran standar industri) untuk menjamin kekuatan maksimal. Namun, silakan hubungi kami untuk ketersediaan stok grade B atau pallet rekondisi yang masih layak pakai." 
                }
              },
              {
                "@type": "Question",
                "name": "Apakah bisa custom ukuran pallet?",
                "acceptedAnswer": { 
                  "@type": "Answer", 
                  "text": "Kami menyediakan berbagai ukuran standar internasional (seperti 1200x1000mm, 1100x1100mm, dll). Untuk kebutuhan ukuran khusus, kami dapat memberikan konsultasi mengenai ketersediaan moulding atau solusi alternatif packaging industri lainnya." 
                }
              }
            ]
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
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Serpong Utara",
                "item": "https://paletindo.id/pallet-plastik-serpong-utara"
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden mb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <nav className="flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 gap-3 mb-12">
            <Link href="/" className="hover:text-zinc-900 transition-colors">Home</Link>
            <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
            <Link href="/products" className="hover:text-zinc-900 transition-colors">Palet Plastik</Link>
            <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
            <span className="text-[#D4A373]">Serpong Utara</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="h-[1px] w-12 bg-[#D4A373]"></span>
              <span className="text-[12px] font-bold text-[#D4A373] uppercase tracking-[0.3em]">
                Verified Local Supplier
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-zinc-900 leading-[1] mb-10 tracking-tighter">
              Pallet Plastik <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-800">
                Serpong Utara.
              </span>
            </h1>
            <p className="text-xl text-zinc-500 font-light leading-relaxed max-w-2xl mb-12">
              Pusat distribusi dan suplier pallet plastik terdekat di Serpong Utara. Melayani pengiriman instan dari gudang kami di Jelupang untuk kebutuhan industri B2B, pergudangan, dan logistik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/6287877662097" className="px-10 py-5 bg-zinc-900 text-white rounded-2xl font-bold text-lg hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-900/10 flex items-center justify-center gap-3">
                <MessageCircle className="w-5 h-5 text-[#D4A373]" /> Hubungi via WhatsApp
              </a>
              <Link href="/rfq" className="px-10 py-5 bg-white text-zinc-900 border border-zinc-200 rounded-2xl font-bold text-lg hover:border-zinc-900 transition-all flex items-center justify-center gap-3">
                <FileText className="w-5 h-5 text-zinc-400" /> Minta Penawaran
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-zinc-50 to-transparent -z-10"></div>
        <div className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] bg-[#D4A373]/5 blur-[120px] rounded-full -z-10"></div>
      </section>

      {/* Main Content Sections */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          <div className="lg:col-span-8 space-y-24">
            
            {/* Why Local Supplier Section */}
            <section id="mengapa-local">
              <h2 className="text-4xl font-black text-zinc-900 tracking-tight mb-8">Mengapa Memilih Supplier Pallet Plastik di Serpong Utara?</h2>
              <div className="prose prose-lg prose-zinc max-w-none text-zinc-600 font-light leading-relaxed">
                <p>
                  Memilih supplier pallet plastik lokal di wilayah Serpong Utara memberikan keuntungan strategis yang signifikan bagi efisiensi operasional bisnis Anda. Sebagai pusat ekonomi yang berkembang pesat di Tangerang Selatan, Serpong Utara menuntut mobilitas logistik yang tinggi dan responsif. Dengan bermitra bersama PT Paletindo Prakarsa Unggul yang berlokasi tepat di <strong>Jelupang, Kecamatan Serpong Utara</strong>, Anda dapat menekan biaya logistik secara drastis karena jarak pengiriman yang sangat dekat.
                </p>
                <p>
                  Efisiensi bukan hanya soal biaya, tetapi juga waktu. Pengiriman cepat adalah kunci utama dalam manajemen gudang modern. Kami memastikan bahwa setiap pesanan pallet plastik untuk area Serpong Utara dan sekitarnya dapat dikirimkan dalam hitungan menit, bukan hari. Selain itu, kedekatan lokasi memungkinkan tim operasional Anda untuk melakukan <strong>survey langsung</strong> ke gudang kami guna memastikan kualitas material sebelum melakukan pembelian dalam jumlah besar. Kepercayaan dan kemudahan akses inilah yang menjadikan kami pilihan utama bagi banyak pabrik dan pergudangan di kawasan ini.
                </p>
              </div>
            </section>

            {/* Produk Section */}
            <section id="produk-tersedia">
              <h2 className="text-4xl font-black text-zinc-900 tracking-tight mb-8">Produk Pallet Plastik yang Tersedia di Serpong Utara</h2>
              
              {/* Product Table */}
              <div className="overflow-x-auto mb-12 bg-white rounded-3xl border border-zinc-100 shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-zinc-900 text-white">
                      <th className="p-6 text-[11px] font-bold uppercase tracking-widest">Tipe</th>
                      <th className="p-6 text-[11px] font-bold uppercase tracking-widest">Ukuran (mm)</th>
                      <th className="p-6 text-[11px] font-bold uppercase tracking-widest">Material</th>
                      <th className="p-6 text-[11px] font-bold uppercase tracking-widest">Beban Maks</th>
                      <th className="p-6 text-[11px] font-bold uppercase tracking-widest">Kegunaan</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-zinc-600">
                    <tr className="border-b border-zinc-50">
                      <td className="p-6 font-bold text-zinc-900">Heavy Duty</td>
                      <td className="p-6">1200 x 1000 x 150</td>
                      <td className="p-6">HDPE Virgin</td>
                      <td className="p-6">6 Ton (Static)</td>
                      <td className="p-6">Racking & Stack</td>
                    </tr>
                    <tr className="border-b border-zinc-50 bg-zinc-50/50">
                      <td className="p-6 font-bold text-zinc-900">Medium Duty</td>
                      <td className="p-6">1100 x 1100 x 140</td>
                      <td className="p-6">PP Block</td>
                      <td className="p-6">4 Ton (Static)</td>
                      <td className="p-6">Gudang & Flat</td>
                    </tr>
                    <tr className="border-b border-zinc-50">
                      <td className="p-6 font-bold text-zinc-900">Food Grade</td>
                      <td className="p-6">1200 x 1000 x 160</td>
                      <td className="p-6">HDPE Full Virgin</td>
                      <td className="p-6">5 Ton (Static)</td>
                      <td className="p-6">Farmasi & Food</td>
                    </tr>
                    <tr className="border-b border-zinc-50 bg-zinc-50/50">
                      <td className="p-6 font-bold text-zinc-900">Nestable</td>
                      <td className="p-6">1200 x 1000 x 140</td>
                      <td className="p-6">Recycled PP</td>
                      <td className="p-6">3 Ton (Static)</td>
                      <td className="p-6">Ekspor & Hemat Ruang</td>
                    </tr>
                    <tr>
                      <td className="p-6 font-bold text-zinc-900">Cargo</td>
                      <td className="p-6">1100 x 1100 x 120</td>
                      <td className="p-6">Mixed Material</td>
                      <td className="p-6">2 Ton (Static)</td>
                      <td className="p-6">Pengiriman One-way</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Product Descriptions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-3xl border border-zinc-100">
                  <h4 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#D4A373]" /> Heavy Duty Pallet
                  </h4>
                  <p className="text-zinc-500 font-light text-sm leading-relaxed">
                    Dirancang untuk beban ekstrim, pallet Heavy Duty kami mampu menahan beban statis hingga 6 ton. Menggunakan material HDPE Virgin pilihan, produk ini sangat ideal untuk penggunaan pada sistem racking di gudang industri besar yang membutuhkan durabilitas jangka panjang.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-zinc-100">
                  <h4 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-3">
                    <Award className="w-5 h-5 text-[#D4A373]" /> Food Grade Pallet
                  </h4>
                  <p className="text-zinc-500 font-light text-sm leading-relaxed">
                    Khusus untuk industri makanan, minuman, dan farmasi. Pallet ini diproduksi dengan standar higienis tinggi, mudah dibersihkan, dan tahan terhadap bakteri. Material full virgin menjamin tidak adanya kontaminasi zat berbahaya pada produk sensitif Anda.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-zinc-100">
                  <h4 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-3">
                    <Package className="w-5 h-5 text-[#D4A373]" /> Nestable Pallet
                  </h4>
                  <p className="text-zinc-500 font-light text-sm leading-relaxed">
                    Solusi cerdas untuk efisiensi ruang gudang kosong. Desain kaki yang dapat ditumpuk (nestable) memungkinkan pallet menghemat ruang hingga 75% saat tidak digunakan. Sangat direkomendasikan untuk logistik pengiriman satu arah atau ekspor barang.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-zinc-100">
                  <h4 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-3">
                    <Zap className="w-5 h-5 text-[#D4A373]" /> Medium Duty Pallet
                  </h4>
                  <p className="text-zinc-500 font-light text-sm leading-relaxed">
                    Varian yang paling banyak digunakan untuk operasional gudang standar. Menyeimbangkan antara kekuatan dan fleksibilitas harga. Pallet Medium Duty sangat handal untuk penggunaan hand-pallet maupun forklift di area produksi dengan intensitas tinggi.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-zinc-100 md:col-span-2">
                  <h4 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-3">
                    <Truck className="w-5 h-5 text-[#D4A373]" /> Cargo One-Way Pallet
                  </h4>
                  <p className="text-zinc-500 font-light text-sm leading-relaxed">
                    Dibuat khusus untuk pengiriman kargo dimana pallet tidak diharapkan untuk kembali. Meskipun memiliki harga yang paling ekonomis, pallet Cargo kami tetap mempertahankan integritas struktural yang baik untuk melindungi barang kiriman Anda selama perjalanan jauh.
                  </p>
                </div>
              </div>
            </section>

            {/* Area Section */}
            <section id="area-layanan">
              <h2 className="text-4xl font-black text-zinc-900 tracking-tight mb-8">Area Layanan di Serpong Utara</h2>
              <div className="bg-zinc-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A373]/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h4 className="text-2xl font-bold mb-6">Kelurahan & Kawasan Coverage:</h4>
                    <ul className="grid grid-cols-2 gap-4 text-zinc-400 text-sm">
                      <li className="flex items-center gap-2 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A373]" /> Jelupang
                      </li>
                      <li className="flex items-center gap-2 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A373]" /> Pakualam
                      </li>
                      <li className="flex items-center gap-2 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A373]" /> Paku Jaya
                      </li>
                      <li className="flex items-center gap-2 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A373]" /> Pakulonan
                      </li>
                      <li className="flex items-center gap-2 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A373]" /> Lengkong Karya
                      </li>
                      <li className="flex items-center gap-2 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A373]" /> Pondok Jagung
                      </li>
                    </ul>
                    <p className="mt-8 text-zinc-500 text-xs italic">
                      Mencakup seluruh kawasan industri dan pergudangan di sekitar BSD City, Alam Sutera, dan wilayah perbatasan Tangerang Kota.
                    </p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 border border-white/10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-[#D4A373] rounded-2xl flex items-center justify-center">
                        <Truck className="w-6 h-6 text-zinc-900" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Estimasi Pengiriman</h4>
                        <p className="text-zinc-500 text-sm">Real-time Logistics</p>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-zinc-400">Jarak dari Gudang Jelupang</span>
                          <span className="text-[#D4A373] font-bold">1 - 5 KM</span>
                        </div>
                        <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                          <div className="w-[85%] h-full bg-[#D4A373]"></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-2xl font-bold">
                        <Clock className="w-6 h-6 text-[#D4A373]" /> 15 - 30 Menit
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Spesifikasi Section */}
            <section id="spesifikasi-teknis">
              <h2 className="text-4xl font-black text-zinc-900 tracking-tight mb-8">Spesifikasi Teknis Pallet Plastik</h2>
              <div className="bg-white rounded-3xl border border-zinc-100 overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    <tr className="border-b border-zinc-50">
                      <td className="p-6 bg-zinc-50 w-1/3 text-[11px] font-bold uppercase tracking-widest text-zinc-400">Material Utama</td>
                      <td className="p-6 text-zinc-900 font-medium">HDPE (High-Density Polyethylene), PP Block Copolymer</td>
                    </tr>
                    <tr className="border-b border-zinc-50">
                      <td className="p-6 bg-zinc-50 text-[11px] font-bold uppercase tracking-widest text-zinc-400">Standar Warna</td>
                      <td className="p-6 text-zinc-900 font-medium">Biru (Utama), Abu-abu, Hitam (Ekspor), Kuning (Safety)</td>
                    </tr>
                    <tr className="border-b border-zinc-50">
                      <td className="p-6 bg-zinc-50 text-[11px] font-bold uppercase tracking-widest text-zinc-400">Tipe Entri</td>
                      <td className="p-6 text-zinc-900 font-medium">4-Way Entry (Dapat diakses dari 4 sisi oleh Forklift/Hand-pallet)</td>
                    </tr>
                    <tr className="border-b border-zinc-50">
                      <td className="p-6 bg-zinc-50 text-[11px] font-bold uppercase tracking-widest text-zinc-400">Kapasitas Beban</td>
                      <td className="p-6 text-zinc-900 font-medium">Statis: 1.000 kg - 6.000 kg | Dinamis: 500 kg - 2.000 kg</td>
                    </tr>
                    <tr>
                      <td className="p-6 bg-zinc-50 text-[11px] font-bold uppercase tracking-widest text-zinc-400">Suhu Operasional</td>
                      <td className="p-6 text-zinc-900 font-medium">-30°C hingga +60°C (Cocok untuk Cold Storage)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Cara Pesan Section */}
            <section id="cara-pesan">
              <h2 className="text-4xl font-black text-zinc-900 tracking-tight mb-8">Cara Pesan Pallet Plastik di Serpong Utara</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
                {[
                  { step: "01", label: "Hubungi WA", desc: "Konsultasi via chat" },
                  { step: "02", label: "Pilih Spek", desc: "Sesuaikan beban" },
                  { step: "03", label: "Cek Stok", desc: "Konfirmasi gudang" },
                  { step: "04", label: "Invoice", desc: "Pembayaran resmi" },
                  { step: "05", label: "Kirim", desc: "Instan 30 menit" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-zinc-100 text-center relative group hover:border-[#D4A373] transition-colors">
                    <div className="text-[10px] font-bold text-[#D4A373] mb-2 uppercase tracking-widest">{item.step}</div>
                    <div className="font-bold text-zinc-900 text-sm mb-1">{item.label}</div>
                    <div className="text-[10px] text-zinc-400 leading-tight">{item.desc}</div>
                    {idx < 4 && <ChevronRight className="absolute -right-3 top-1/2 -translate-y-1/2 text-zinc-200 hidden md:block" />}
                  </div>
                ))}
              </div>
              <div className="bg-[#D4A373]/5 border border-[#D4A373]/10 rounded-[3rem] p-10 text-center">
                 <h3 className="text-2xl font-bold text-zinc-900 mb-6 tracking-tight">Butuh Penawaran Cepat?</h3>
                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="https://wa.me/6287877662097" className="px-8 py-4 bg-zinc-900 text-white rounded-xl font-bold hover:bg-zinc-800 transition-all flex items-center justify-center gap-3">
                      <MessageCircle className="w-5 h-5 text-[#D4A373]" /> Chat Sales Sekarang
                    </a>
                    <Link href="/rfq" className="px-8 py-4 bg-white text-zinc-900 border border-zinc-200 rounded-xl font-bold hover:border-zinc-900 transition-all">
                      Minta Penawaran Resmi
                    </Link>
                 </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq">
              <h2 className="text-4xl font-black text-zinc-900 tracking-tight mb-8 flex items-center gap-4">
                <HelpCircle className="w-8 h-8 text-[#D4A373]" /> FAQ — Pallet Plastik Serpong Utara
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "Berapa harga pallet plastik di Serpong Utara?",
                    a: "Harga bervariasi mulai dari ratusan ribu hingga jutaan rupiah tergantung spesifikasi beban. Silakan hubungi kami untuk katalog harga terbaru."
                  },
                  {
                    q: "Apakah ada minimal order?",
                    a: "Tidak ada minimal order yang memberatkan. Kami melayani mulai dari 1 unit hingga ribuan unit untuk kebutuhan pabrik."
                  },
                  {
                    q: "Berapa lama waktu pengiriman ke Serpong Utara?",
                    a: "Hanya 15-30 menit! Kami berlokasi di Jelupang, Serpong Utara, sehingga pengiriman dapat dilakukan secara instan."
                  },
                  {
                    q: "Apakah tersedia pallet bekas/rekondisi?",
                    a: "Kami menyediakan pallet plastik baru (virgin/mixed) sebagai produk utama. Untuk stok pallet bekas, silakan konfirmasi ketersediaannya ke marketing kami."
                  },
                  {
                    q: "Apakah bisa custom ukuran pallet?",
                    a: "Kami menyediakan berbagai ukuran standar industri internasional. Untuk ukuran spesifik lainnya, kami dapat mencarikan alternatif solusi packaging yang sesuai."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-2xl border border-zinc-100 p-8">
                    <h4 className="font-bold text-zinc-900 mb-4 text-lg">{item.q}</h4>
                    <p className="text-zinc-500 font-light leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar / Internal Links */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              
              {/* Internal Links Card */}
              <div className="bg-zinc-50 border border-zinc-100 rounded-3xl p-8">
                <h3 className="text-xl font-black text-zinc-900 mb-6 tracking-tight">Navigasi Area & Produk</h3>
                <div className="flex flex-col gap-3">
                  <Link href="/palet-plastik-tangerang-selatan" className="group flex items-center justify-between p-4 bg-white rounded-2xl border border-zinc-100 hover:border-[#D4A373] transition-all">
                    <span className="font-bold text-sm text-zinc-600 group-hover:text-zinc-900">Induk Tangerang Selatan</span>
                    <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:text-[#D4A373] group-hover:translate-x-1 transition-all" />
                  </Link>
                  <Link href="/products" className="group flex items-center justify-between p-4 bg-white rounded-2xl border border-zinc-100 hover:border-[#D4A373] transition-all">
                    <span className="font-bold text-sm text-zinc-600 group-hover:text-zinc-900">Katalog Produk Utama</span>
                    <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:text-[#D4A373] group-hover:translate-x-1 transition-all" />
                  </Link>
                  <Link href="/contact" className="group flex items-center justify-between p-4 bg-white rounded-2xl border border-zinc-100 hover:border-[#D4A373] transition-all">
                    <span className="font-bold text-sm text-zinc-600 group-hover:text-zinc-900">Hubungi Kontak Resmi</span>
                    <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:text-[#D4A373] group-hover:translate-x-1 transition-all" />
                  </Link>
                  <Link href="/pallet-plastik-bsd" className="group flex items-center justify-between p-4 bg-white rounded-2xl border border-zinc-100 hover:border-[#D4A373] transition-all">
                    <span className="font-bold text-sm text-zinc-600 group-hover:text-zinc-900">Area Terdekat (BSD)</span>
                    <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:text-[#D4A373] group-hover:translate-x-1 transition-all" />
                  </Link>
                </div>
              </div>

              {/* Direct Call Card */}
              <div className="bg-zinc-900 rounded-3xl p-8 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4A373]/20 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <h4 className="font-bold text-xl mb-4">Butuh bantuan teknis?</h4>
                  <p className="text-zinc-400 text-sm font-light mb-8 leading-relaxed">Konsultasikan kebutuhan pallet Anda langsung dengan engineer kami.</p>
                  <a href="tel:087877662097" className="w-full py-4 bg-[#D4A373] text-zinc-900 font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-[#C19263] transition-colors">
                    0878-7766-2097
                  </a>
                </div>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
