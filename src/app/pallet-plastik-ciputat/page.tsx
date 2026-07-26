import { Metadata } from "next";
import Link from "next/link";
import { MapPin, ShieldCheck, Truck, MessageCircle, Box, Star, ChevronRight, Package, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pallet Plastik & Container Box Ciputat — Supplier Terdekat | PT Paletindo",
  description: "Supplier pallet plastik & container box industri terpercaya di Ciputat & Ciputat Timur. Ready stock industri, pengiriman hari ini & respon WA cepat.",
  alternates: { canonical: "https://paletindo.id/pallet-plastik-ciputat" }
};

export default function CiputatAreaPage() {
  return (
    <div className="w-full bg-[#fcfcfd] min-h-screen pt-28 pb-32 font-sans selection:bg-[#D4A373] selection:text-white">
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
                "name": "Berapa harga container box & pallet plastik di Ciputat?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Harga sangat bersaing dengan penawaran grosir direct pabrik. Hubungi sales kami untuk mendapatkan katalog tipe Heavy Duty, Medium, dan Container Solid Crat."
                }
              },
              {
                "@type": "Question",
                "name": "Apakah melayani pengiriman ke Ciputat Timur & Cirendeu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ya, pengiriman mencakup seluruh Ciputat, Ciputat Timur, Cirendeu, Pisangan, dan sekitarnya dari gudang utama kami."
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
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://paletindo.id" },
              { "@type": "ListItem", "position": 2, "name": "Palet Plastik Tangerang Selatan", "item": "https://paletindo.id/palet-plastik-tangerang-selatan" },
              { "@type": "ListItem", "position": 3, "name": "Ciputat", "item": "https://paletindo.id/pallet-plastik-ciputat" }
            ]
          })
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <nav className="flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 gap-3 mb-12">
          <Link href="/" className="hover:text-zinc-900 transition-colors">Home</Link>
          <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
          <Link href="/palet-plastik-tangerang-selatan" className="hover:text-zinc-900 transition-colors">Tangerang Selatan</Link>
          <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
          <span className="text-[#D4A373]">Ciputat</span>
        </nav>

        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-[1px] w-12 bg-[#D4A373]"></span>
            <span className="text-[12px] font-bold text-[#D4A373] uppercase tracking-[0.3em]">Supplier Terdekat Ciputat</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-zinc-900 leading-tight mb-8 tracking-tighter">
            Pallet Plastik & Container Box <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-600 to-zinc-900">
              Ciputat & Ciputat Timur.
            </span>
          </h1>
          <p className="text-lg text-zinc-500 font-light leading-relaxed">
            Distributor resmi <strong>Pallet Plastik Heavy Duty</strong> dan <strong>Container Box Industri</strong> melayani sektor industri, ekspedisi logistik, dan pergudangan di kawasan Ciputat dan sekitarnya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm">
            <Truck className="w-10 h-10 text-[#D4A373] mb-6" />
            <h3 className="text-xl font-bold mb-3">Pengiriman Instan</h3>
            <p className="text-sm text-zinc-500 leading-relaxed font-light">Armada pengiriman siap melayani pengantaran hari ini ke wilayah Ciputat & sekitarnya.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm">
            <Package className="w-10 h-10 text-[#D4A373] mb-6" />
            <h3 className="text-xl font-bold mb-3">Container Box Rapat & Berlubang</h3>
            <p className="text-sm text-zinc-500 leading-relaxed font-light">Lengkap varian container solid, berlubang, dan keranjang industri tahan tekanan.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm">
            <ShieldCheck className="w-10 h-10 text-[#D4A373] mb-6" />
            <h3 className="text-xl font-bold mb-3">Material Premium HDPE/PP</h3>
            <p className="text-sm text-zinc-500 leading-relaxed font-light">Dibuat dari polimer berkualitas tinggi yang awet, higienis, dan ramah lingkungan.</p>
          </div>
        </div>

        {/* Section khusus Container Box Industri */}
        <section className="mb-24 bg-white p-10 md:p-16 rounded-[3rem] border border-zinc-100 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-black text-zinc-900 mb-6 tracking-tight">
            Jual Container Box Industri & Keranjang Plastik Ciputat
          </h2>
          <p className="text-zinc-500 font-light text-base leading-relaxed mb-10 max-w-3xl">
            Solusi penataan barang pergudangan modern di Ciputat dengan <strong>Container Box Industri</strong> dari PT Paletindo. Tersedia berbagai ukuran standar industri untuk memudahkan penumpukan (*stacking*) dan pengangkutan logistik.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
              <h3 className="font-bold text-zinc-900 text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#D4A373]" /> Container Box Solid Crat
              </h3>
              <p className="text-sm text-zinc-500 font-light leading-relaxed">
                Wadah tertutup yang kuat menahan beban tumpukan tinggi, mencegah kontaminasi debu dan air.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
              <h3 className="font-bold text-zinc-900 text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#D4A373]" /> Keranjang Berlubang Industri
              </h3>
              <p className="text-sm text-zinc-500 font-light leading-relaxed">
                Memaksimalkan sirkulasi udara barang baku, buah, dan komoditas pergudangan secara efisien.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/products" className="px-6 py-3 bg-[#D4A373] text-zinc-900 rounded-xl font-bold text-sm hover:bg-[#C19263] transition-all inline-flex items-center gap-2">
              Katalog Produk <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://wa.me/6287877662097" className="px-6 py-3 bg-zinc-900 text-white rounded-xl font-bold text-sm hover:bg-zinc-800 transition-all inline-flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-[#D4A373]" /> Chat Sales Ciputat
            </a>
          </div>
        </section>

        <div className="bg-zinc-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#D4A373]/10 blur-3xl rounded-full translate-x-1/2"></div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Hubungi Sales Ciputat</h2>
          <p className="text-zinc-400 mb-10 max-w-xl mx-auto font-light">Dapatkan harga grosir direct pabrik untuk kebutuhan pallet & container box industri Anda.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/6287877662097" className="px-10 py-5 bg-[#D4A373] text-zinc-900 rounded-2xl font-bold hover:bg-[#C19263] transition-all flex items-center justify-center gap-3">
              <MessageCircle className="w-5 h-5" /> WhatsApp Sales Direct
            </a>
            <Link href="/rfq" className="px-10 py-5 bg-white/10 text-white border border-white/20 rounded-2xl font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-3">
              <Box className="w-5 h-5" /> Minta Penawaran Resmi
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
