import Link from "next/link";
import { Metadata } from "next";
import { 
  ArrowRight, 
  Award,
  ShieldCheck,
  Truck,
  BarChart3,
  MapPin,
  CheckCircle2
} from "lucide-react";
import { supabase, type Product, isSupabaseConfigured } from "@/lib/supabase";
import HeroBackground from "@/components/home/HeroBackground";
import LatestProductShowcase from "@/components/home/LatestProductShowcase";
import CategoryShowcase from "@/components/home/CategoryShowcase";
import HomeCTA from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: 'Palet Plastik Tangerang Selatan | PT Paletindo Prakarsa Unggul',
  description: 'Jual palet plastik Tangerang Selatan berkualitas tinggi. Supplier palet industri, container plastik & solusi B2B. Lokasi di Serpong Utara.',
  keywords: ['palet plastik tangerang selatan', 'pallet plastik serpong utara', 'jual palet plastik', 'supplier palet industri', 'container plastik industrial'],
  authors: [{ name: 'PT Paletindo Prakarsa Unggul' }],
  publisher: 'PT Paletindo Prakarsa Unggul',
  alternates: {
    canonical: 'https://paletindo.id',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://paletindo.id',
    siteName: 'PT Paletindo Prakarsa Unggul',
    title: 'Palet Plastik Tangerang Selatan | PT Paletindo Prakarsa Unggul',
    description: 'Supplier palet plastik terpercaya di Tangerang Selatan.',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Palet Plastik Paletindo Tangerang Selatan' }],
  },
  robots: { index: true, follow: true },
};


export default async function Home() {
  let latestProduct: Product | null = null;

  if (isSupabaseConfigured()) {
    try {
      // First, try to get the featured product
      const { data: featured } = await supabase
        .from("products")
        .select("*")
        .eq("is_featured", true)
        .limit(1)
        .maybeSingle();

      if (featured) {
        latestProduct = featured as Product;
      } else {
        // Fallback: Get the latest product
        const { data: latest } = await supabase
          .from("products")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(1)
          .maybeSingle();

        if (latest) {
          latestProduct = latest as Product;
        }
      }
    } catch (err) {
      console.error("Error fetching latest product:", err);
    }
  }

  return (
    <div className="flex flex-col w-full bg-white overflow-hidden selection:bg-[#D4A373] selection:text-white">
      
      {/* 1. Avant-Garde Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-zinc-950">
        
        {/* Background Image with Parallax (Client Component) */}
        <HeroBackground />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-12 z-10 pt-32 lg:pt-40">
          <div className="flex flex-col items-center lg:items-start max-w-7xl">
            
            {/* Ultra-Large Typography - Renders instantly on Server */}
            <div className="relative mb-2 text-center lg:text-left">
              <div className="absolute -top-16 lg:-top-24 left-0 text-[10vw] font-black text-white/[0.03] whitespace-nowrap pointer-events-none select-none tracking-tighter z-0">
                PALET PLASTIK TANGERANG SELATAN
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black text-white leading-[1] tracking-tighter mb-4">
                Palet Plastik <br />
                <span className="text-[#D4A373]">Tangerang Selatan.</span>
              </h1>
              <p className="text-zinc-400 text-lg font-bold mb-8 uppercase tracking-[0.3em]">PT Paletindo Prakarsa Unggul</p>
              <span className="sr-only">Palet Plastik Tangerang Selatan — PT Paletindo Prakarsa Unggul</span>
              
              <div className="lg:absolute lg:top-0 lg:right-[-100%] mt-12 lg:mt-0 max-w-xs z-30">
                <div className="bg-zinc-900/40 backdrop-blur-2xl border border-white/10 p-6 rounded-3xl shadow-2xl">
                  <p className="text-zinc-200 text-sm font-light leading-relaxed mb-4 italic">
                    "Standar industri bagi mereka yang menghargai nilai kualitas sejati. Melayani manufaktur kelas atas sejak 2012."
                  </p>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#D4A373]" />
                    <span className="text-[10px] uppercase font-bold text-white tracking-widest leading-none">
                      Penyedia Terverifikasi
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtext and Action */}
            <div className="mt-4 md:mt-6 lg:mt-8">
              <div className="text-center lg:text-left max-w-sm">
                <p className="text-zinc-400 text-lg font-light leading-tight">
                  Pusat <Link href="/palet-plastik-tangerang-selatan" className="text-[#D4A373] font-medium hover:underline">Palet Plastik Tangerang Selatan</Link>. Peralatan Logistik Kelas Atas. Diuji oleh raksasa industri. Dikirim langsung ke lokasi Anda.
                </p>
                <div className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start">
                  <Link href="/products?category=Palet%20Plastik" className="group inline-flex items-center gap-2 text-[#D4A373] font-bold text-sm tracking-widest uppercase transition-all hover:gap-4">
                    Katalog Palet <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/contact" className="group inline-flex items-center gap-2 text-zinc-500 font-bold text-sm tracking-widest uppercase transition-all hover:text-white">
                    Hubungi Kami <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Floating Detail Overlays */}
        <div className="absolute bottom-12 right-12 hidden lg:flex flex-col items-end gap-6 z-20">
          <div className="flex -space-x-4">
            {[
              { text: "T", color: "from-blue-600 to-indigo-700" },
              { text: "A", color: "from-amber-500 to-orange-600" },
              { text: "1K+", color: "bg-zinc-800" }
            ].map((item, i) => (
              <div 
                key={i} 
                className={`w-12 h-12 rounded-full border-2 border-zinc-900 ${item.color.includes('from-') ? 'bg-gradient-to-br ' : ''}${item.color} overflow-hidden flex items-center justify-center text-[10px] text-white font-bold uppercase shadow-xl`}
              >
                {item.text}
              </div>
            ))}
          </div>
          <div className="text-right">
            <p className="text-white font-black text-xs tracking-widest uppercase">Pelanggan Terpercaya</p>
            <p className="text-zinc-500 text-[10px] tracking-widest uppercase mt-1">Kepuasan Industri</p>
          </div>
        </div>
      </section>      {/* 2. Section About & Advantages */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <div>
              <h2 className="text-[10px] font-black text-[#D4A373] uppercase tracking-[0.4em] mb-6">Tentang Paletindo</h2>
              <h3 className="text-4xl md:text-5xl font-black text-zinc-900 leading-[1.1] tracking-tighter mb-8">
                Supplier Palet Plastik Terpercaya untuk Industri Anda
              </h3>
              <p className="text-zinc-500 text-lg leading-relaxed font-light mb-6">
                PT Paletindo Prakarsa Unggul adalah supplier dan distributor palet plastik di Tangerang Selatan yang telah melayani industri manufaktur, logistik, dan ekspor selama lebih dari satu dekade. Berlokasi di Jelupang, Kecamatan Serpong Utara, kami menjadi mitra strategis bagi banyak perusahaan di kawasan industri BSD, Alam Sutera, dan sekitarnya.
              </p>
              <p className="text-zinc-500 text-lg leading-relaxed font-light">
                Kami memahami bahwa efisiensi gudang dimulai dari pemilihan palet yang tepat. Oleh karena itu, kami menyediakan berbagai jenis palet mulai dari tipe Heavy Duty untuk racking, Medium Duty untuk lantai, hingga Nestable untuk kebutuhan ekspor satu kali jalan. Setiap produk kami telah melalui uji standarisasi untuk menjamin durabilitas maksimal di lingkungan operasional yang berat. Dengan dukungan armada logistik internal, kami memastikan setiap pesanan Anda tiba tepat waktu guna menjaga kelancaran alur produksi bisnis Anda.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { 
                  icon: <MapPin className="w-6 h-6 text-[#D4A373]" />, 
                  title: "Lokasi Strategis", 
                  desc: "Berlokasi di Serpong Utara, memudahkan survey langsung dan pengiriman cepat ke area Tangsel." 
                },
                { 
                  icon: <BarChart3 className="w-6 h-6 text-[#D4A373]" />, 
                  title: "Ready Stock", 
                  desc: "Tersedia berbagai ukuran palet heavy duty hingga nestable yang siap dikirim hari ini." 
                },
                { 
                  icon: <ShieldCheck className="w-6 h-6 text-[#D4A373]" />, 
                  title: "Layanan B2B", 
                  desc: "Menerima custom order untuk kebutuhan industri spesifik dengan sistem kontrak kerja sama." 
                },
                { 
                  icon: <Truck className="w-6 h-6 text-[#D4A373]" />, 
                  title: "Pengiriman Cepat", 
                  desc: "Armada logistik internal kami menjamin pallet tiba di lokasi Anda tepat waktu tanpa hambatan." 
                },
              ].map((item, i) => (
                <div key={i} className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 hover:border-[#D4A373]/30 transition-all">
                  <div className="mb-6">{item.icon}</div>
                  <h4 className="text-lg font-bold text-zinc-900 mb-3">{item.title}</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Categories under About H2 */}
          <CategoryShowcase />
          
          {/* Service Area Section */}
          <div className="border-t border-zinc-100 pt-32 mt-32">
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 leading-[1.1] tracking-tighter mb-12 text-center">
              Area Layanan Palet Plastik di Tangerang Selatan
            </h2>
            <p className="text-zinc-500 text-lg text-center max-w-3xl mx-auto mb-16 leading-relaxed font-light">
              Kami menjangkau seluruh kecamatan di Tangerang Selatan untuk pengiriman cepat dan layanan purna jual yang andal. Tim kami siap mengirimkan kebutuhan palet plastik Anda langsung ke gudang di berbagai titik strategis.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-zinc-900 border-l-4 border-[#D4A373] pl-4">Serpong Utara & Jelupang</h3>
                <p className="text-zinc-500 text-sm font-light">Layanan terdekat dari gudang kami di Jelupang, menjangkau seluruh area Serpong Utara dengan pengiriman instan.</p>
                <Link href="/pallet-plastik-serpong-utara" className="text-[10px] font-black uppercase text-[#D4A373] hover:underline">Cek Detail Area</Link>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-zinc-900 border-l-4 border-[#D4A373] pl-4">BSD City & Serpong</h3>
                <p className="text-zinc-500 text-sm font-light">Melayani kawasan industri dan pergudangan di BSD City, Alam Sutera, dan wilayah Serpong sekitarnya.</p>
                <div className="flex gap-4">
                  <Link href="/pallet-plastik-bsd" className="text-[10px] font-black uppercase text-[#D4A373] hover:underline">BSD</Link>
                  <Link href="/pallet-plastik-serpong" className="text-[10px] font-black uppercase text-[#D4A373] hover:underline">Serpong</Link>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-zinc-900 border-l-4 border-[#D4A373] pl-4">Ciputat, Pondok Aren & Pamulang</h3>
                <p className="text-zinc-500 text-sm font-light">Distribusi luas mencakup wilayah selatan Tangerang Selatan untuk kebutuhan logistik retail dan manufaktur.</p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/pallet-plastik-ciputat" className="text-[10px] font-black uppercase text-[#D4A373] hover:underline">Ciputat</Link>
                  <Link href="/pallet-plastik-pondok-aren" className="text-[10px] font-black uppercase text-[#D4A373] hover:underline">Pondok Aren</Link>
                  <Link href="/pallet-plastik-pamulang" className="text-[10px] font-black uppercase text-[#D4A373] hover:underline">Pamulang</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dynamic High-Impact Product Billboard */}
      {latestProduct && <LatestProductShowcase latestProduct={latestProduct} />}

      {/* 4. Final Premium CTA */}
      <HomeCTA />

    </div>
  );
}
