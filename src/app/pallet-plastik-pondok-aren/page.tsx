import { Metadata } from "next";
import Link from "next/link";
import { MapPin, ShieldCheck, Truck, MessageCircle, Box, Star, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Palet Plastik Pondok Aren - Supplier Bintaro & Sekitarnya | Paletindo",
  description: "Cari palet plastik Pondok Aren? PT Paletindo Prakarsa Unggul sedia pallet industrial untuk area Bintaro, Pondok Aren, Jurangmangu. Stok ready, kirim instan.",
  alternates: { canonical: "https://paletindo.id/pallet-plastik-pondok-aren" }
};

export default function PondokArenAreaPage() {
  return (
    <div className="w-full bg-[#fcfcfd] min-h-screen pt-28 pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <nav className="flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 gap-3 mb-12">
          <Link href="/" className="hover:text-zinc-900 transition-colors">Home</Link>
          <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
          <Link href="/palet-plastik-tangerang-selatan" className="hover:text-zinc-900 transition-colors">Tangerang Selatan</Link>
          <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
          <span className="text-[#D4A373]">Pondok Aren</span>
        </nav>

        <h1 className="text-4xl md:text-6xl font-black text-zinc-900 leading-tight mb-8 tracking-tighter">
          Palet Plastik <span className="text-[#D4A373]">Pondok Aren.</span>
        </h1>
        
        <div className="prose prose-lg prose-zinc max-w-4xl mb-20 text-zinc-600 font-light">
          <p>
            Wilayah Pondok Aren dan Bintaro merupakan pusat ekonomi yang dinamis. PT Paletindo Prakarsa Unggul hadir untuk menyediakan <strong>palet plastik Pondok Aren</strong> yang berkualitas untuk mendukung distribusi barang di wilayah ini.
          </p>
          <p>
            Kami melayani pengiriman ke seluruh kelurahan di Pondok Aren, termasuk Jurangmangu, Pondok Ranji, hingga Bintaro Jaya. Dengan stok yang selalu tersedia, kami menjamin kelancaran supply chain bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="bg-white p-10 rounded-[2.5rem] border border-zinc-100 shadow-sm">
            <Truck className="w-10 h-10 text-[#D4A373] mb-6" />
            <h3 className="text-xl font-bold mb-4">Pengiriman Bintaro</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">Layanan pengiriman cepat ke Pondok Aren, Bintaro, dan Jurangmangu.</p>
          </div>
          <div className="bg-white p-10 rounded-[2.5rem] border border-zinc-100 shadow-sm">
            <ShieldCheck className="w-10 h-10 text-[#D4A373] mb-6" />
            <h3 className="text-xl font-bold mb-4">Durabilitas Tinggi</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">Material HDPE murni yang tahan terhadap benturan dan beban berat.</p>
          </div>
          <div className="bg-white p-10 rounded-[2.5rem] border border-zinc-100 shadow-sm">
            <Star className="w-10 h-10 text-[#D4A373] mb-6" />
            <h3 className="text-xl font-bold mb-4">Layanan B2B</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">Fokus pada penyediaan solusi pallet untuk korporasi dan pabrik manufaktur.</p>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-[4rem] p-12 md:p-24 text-center text-white overflow-hidden relative">
           <div className="absolute top-0 right-0 w-1/3 h-full bg-[#D4A373]/10 blur-3xl rounded-full translate-x-1/2"></div>
           <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight">Cari Palet di Pondok Aren?</h2>
           <p className="text-zinc-400 mb-12 max-w-xl mx-auto">Dapatkan penawaran harga terbaik untuk pallet plastik di wilayah Pondok Aren sekarang.</p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a href="https://wa.me/6287877662097" className="px-10 py-5 bg-[#D4A373] text-zinc-900 rounded-2xl font-bold hover:bg-[#C19263] transition-all flex items-center justify-center gap-3">
               <MessageCircle className="w-5 h-5" /> Chat WhatsApp
             </a>
             <Link href="/rfq" className="px-10 py-5 bg-white/10 text-white border border-white/20 rounded-2xl font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-3">
               <Box className="w-5 h-5" /> Minta Penawaran
             </Link>
           </div>
        </div>
      </div>
    </div>
  );
}
