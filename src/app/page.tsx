import Link from "next/link";
import { ArrowRight, Package, Truck, ShieldCheck, PhoneCall } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <section className="relative w-full overflow-hidden bg-zinc-900 pt-16 md:pt-24 pb-32">
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] bg-center opacity-[0.03]"></div>
        <div className="absolute top-0 right-0 -mr-32 -mt-32 h-[600px] w-[600px] rounded-full bg-zinc-800/50 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 h-[400px] w-[400px] rounded-full bg-[#D4A373]/10 blur-[120px] pointer-events-none"></div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            <div className="w-full lg:w-1/2 flex flex-col items-start text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700/50 bg-zinc-800/50 px-3 py-1 text-sm text-zinc-300 font-medium mb-6 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-[#D4A373]"></span>
                Vendor Logistik B2B Terpercaya
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-[1.05]">
                Solusi Palet Plastik & Container <span className="text-[#D4A373] font-light italic">Premium.</span>
              </h1>
              <p className="text-lg text-zinc-400 mb-8 max-w-2xl leading-relaxed font-light">
                Menyediakan palet plastik dan box (container) plastik untuk menunjang kebutuhan dunia industri dan pelaku usaha secara masif.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4A373] px-8 py-3.5 text-base font-medium text-zinc-900 shadow-lg shadow-[#D4A373]/10 hover:bg-[#C19263] hover:-translate-y-0.5 transition-all w-full sm:w-auto"
                >
                  Lihat Katalog
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/rfq"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/30 px-8 py-3.5 text-base font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white transition-all w-full sm:w-auto backdrop-blur-sm"
                >
                  Tanya Penawaran
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative">
               {/* Hero image placeholder with glassmorphism frame */}
               <div className="relative rounded-3xl border border-zinc-800/50 bg-zinc-800/20 p-4 shadow-2xl backdrop-blur-md">
                 <div className="aspect-[4/3] rounded-2xl bg-zinc-900 w-full overflow-hidden relative flex items-center justify-center border border-zinc-800/50">
                    <Package className="h-32 w-32 text-zinc-800 stroke-[1]" />
                    <div className="absolute inset-0 bg-[#D4A373]/5 mix-blend-overlay"></div>
                 </div>
                 
                 {/* Floating Badges */}
                 <div className="absolute -left-6 top-1/4 rounded-2xl border border-zinc-800/50 bg-zinc-900/80 py-3 px-4 shadow-xl backdrop-blur-md flex items-center gap-3">
                   <div className="rounded-full bg-zinc-800 p-2">
                     <ShieldCheck className="h-5 w-5 text-[#D4A373]" />
                   </div>
                   <div>
                     <p className="text-sm font-medium text-zinc-200">Food Grade</p>
                     <p className="text-xs text-zinc-500 font-light">100% Aman</p>
                   </div>
                 </div>
                 
                 <div className="absolute -right-6 bottom-1/4 rounded-2xl border border-zinc-800/50 bg-zinc-900/80 py-3 px-4 shadow-xl backdrop-blur-md flex items-center gap-3">
                   <div className="rounded-full bg-zinc-800 p-2">
                     <Truck className="h-5 w-5 text-[#D4A373]" />
                   </div>
                   <div>
                     <p className="text-sm font-medium text-zinc-200">Siap Kirim</p>
                     <p className="text-xs text-zinc-500 font-light">Stock Ready</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 tracking-tight">Eksplorasi Kategori</h2>
            <p className="text-zinc-500 text-lg font-light">Pilihan lini produk spesifik untuk menunjang efektivitas logistik Anda.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Palet Plastik", desc: "Dari Light Duty hingga Heavy Duty Racking.", icon: Package, href: "/products?category=palet" },
              { title: "Box & Container", desc: "Berbagai ukuran box plastik untuk kebutuhan industri dan fungsi penyimpanan.", icon: ShieldCheck, href: "/products?category=container" },
              { title: "Keranjang Industri", desc: "Keranjang fungsional untuk pelaku usaha.", icon: Truck, href: "/products?category=container" }
            ].map((cat, i) => (
              <Link key={i} href={cat.href} className="group flex flex-col p-10 rounded-3xl border border-zinc-200/60 bg-white hover:border-[#D4A373]/30 hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-300">
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-50 text-zinc-400 group-hover:bg-[#D4A373]/10 group-hover:text-[#D4A373] transition-colors">
                  <cat.icon className="h-8 w-8 stroke-[1.5]" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-3">{cat.title}</h3>
                <p className="text-zinc-500 mb-8 flex-grow font-light leading-relaxed">{cat.desc}</p>
                <div className="flex items-center text-sm font-medium text-zinc-400 group-hover:text-[#D4A373] mt-auto transition-colors">
                  Jelajahi <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Value Proposition CTA */}
      <section className="py-24 bg-white border-t border-zinc-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[3rem] bg-zinc-900 p-10 md:p-16 relative overflow-hidden shadow-2xl">
            {/* Background elements */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-[0.03] pointer-events-none">
              <svg width="404" height="384" fill="none" viewBox="0 0 404 384"><defs><pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" fill="currentColor"></rect></pattern></defs><rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"></rect></svg>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
              <div className="w-full lg:w-2/3">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Katalog Super Lengkap</h2>
                <p className="text-zinc-400 text-lg mb-10 max-w-xl font-light leading-relaxed">
                  Kami memiliki ratusan jenis produk palet dan box plastik. Jika produk yang Anda butuhkan tidak ada di katalog (*website*), tim kami siap membantu Anda mencarikannya langsung via WhatsApp.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/products" className="rounded-full bg-[#D4A373] px-8 py-4 text-sm font-medium text-zinc-900 shadow-lg hover:bg-[#C19263] transition-colors inline-flex items-center justify-center">
                    Eksplorasi Katalog
                  </Link>
                  <a href="https://wa.me/6287877662097" target="_blank" rel="noopener noreferrer" className="rounded-full bg-zinc-800/50 border border-zinc-700/50 px-8 py-4 text-sm font-medium text-zinc-300 hover:bg-zinc-800 transition-colors inline-flex items-center justify-center gap-2 backdrop-blur-sm">
                    <PhoneCall className="h-4 w-4" />
                    Bicara dengan Ahli
                  </a>
                </div>
              </div>
              <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
                  <div className="h-48 w-48 md:h-64 md:w-64 bg-zinc-800/30 rounded-full border border-zinc-700/30 flex items-center justify-center relative">
                     <div className="absolute inset-0 border border-[#D4A373]/20 rounded-full scale-110"></div>
                     <Package className="h-24 w-24 text-[#D4A373] p-4 stroke-[0.5]" />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
