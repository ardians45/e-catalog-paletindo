"use client";

import Link from "next/link";
import { ArrowRight, Package, Truck, ShieldCheck, PhoneCall, ChevronRight, Zap, Award, Box } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <div className="flex flex-col w-full bg-white overflow-hidden selection:bg-[#D4A373] selection:text-white">
      
      {/* 1. Avant-Garde Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-zinc-950">
        
        {/* Background Image with Parallax & Contrast Mask */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-x-0 -top-[60px] bottom-0 h-[calc(100%+60px)] z-0 overflow-hidden"
        >
          <Image
            src="/images/homepage/hero-model.png"
            alt="PT Paletindo Premium Logistics"
            fill
            priority
            className="object-cover object-center opacity-70 grayscale-[0.3] brightness-[0.6]"
          />
          {/* Gradients to match the Vantage inspiration */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-transparent to-zinc-950/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/60 via-transparent to-transparent"></div>
        </motion.div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-12 z-10 pt-32 lg:pt-40">
          <div className="flex flex-col items-center lg:items-start max-w-7xl">
            
            {/* Ultra-Large Interactive Typography */}
            <div className="relative mb-2 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute -top-16 lg:-top-24 left-0 text-[10vw] font-black text-white/[0.03] whitespace-nowrap pointer-events-none select-none tracking-tighter z-0"
              >
                PT PALETINDO
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl md:text-7xl lg:text-[9rem] font-black text-white leading-[0.9] tracking-tighter"
              >
                PONDASI<br />
                <span className="text-white border-[#D4A373] border-b-2 lg:border-b-4 lg:pb-2">KUAT.</span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="lg:absolute lg:top-0 lg:right-[-100%] mt-12 lg:mt-0 max-w-xs z-30"
              >
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
              </motion.div>
            </div>

            {/* Subtext and Action */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-4 md:mt-6 lg:mt-8"
            >
              <div className="text-center lg:text-left max-w-sm">
                <p className="text-zinc-400 text-lg font-light leading-tight">
                  Peralatan Logistik Kelas Atas. Diuji oleh raksasa industri. Dikirim langsung ke lokasi Anda.
                </p>
                <Link href="/products" className="group mt-4 inline-flex items-center gap-2 text-[#D4A373] font-bold text-sm tracking-widest uppercase transition-all hover:gap-4">
                  Jelajahi Katalog <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Floating Detail Overlays (Inspiration from Vantage) */}
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

        {/* Centered Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30"
        >
          <Link 
            href="/rfq"
            className="relative overflow-hidden group w-72 h-20 bg-white rounded-full flex items-center justify-center font-bold text-zinc-950 text-base transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-white/20 border border-white/10"
          >
            <span className="relative z-10">Minta Penawaran</span>
            <div className="absolute inset-0 bg-[#D4A373] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </Link>
        </motion.div>
      </section>

      {/* 2. Premium Category Showcase */}
      <section className="py-32 relative bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-20">
            <div className="max-w-2xl">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[#D4A373] text-[10px] font-black tracking-[0.4em] uppercase block mb-6"
              >
                Koleksi Peralatan
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-black text-zinc-900 leading-[1.05] tracking-tighter"
              >
                Solusi untuk setiap kebutuhan industri Anda.
              </motion.h2>
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-zinc-400 text-base lg:max-w-xs leading-relaxed lg:text-right"
            >
              Kami tidak hanya menjual box — kami merancang infrastruktur lini produksi Anda.
            </motion.p>
          </div>

          {/* Category Cards — Typography Driven */}
          <div className="space-y-0">
            {[
              { 
                num: "01", 
                title: "Palet Industri", 
                desc: "Palet plastik high-density untuk beban berat. Anti korosi, tahan cuci, siap ekspor.", 
                stat: "120+", 
                statLabel: "Varian Tersedia",
                href: "/products?category=palet"
              },
              { 
                num: "02", 
                title: "Kontainer & Box", 
                desc: "Food grade hingga heavy-duty. Tersedia solid, berlubang, dan lipat untuk efisiensi ruang.", 
                stat: "200+", 
                statLabel: "Model Produk",
                href: "/products?category=container"
              },
              { 
                num: "03", 
                title: "Solusi Kustom B2B", 
                desc: "Konsultasi kebutuhan spesifik. Custom branding, warna, dan dimensi sesuai operasional Anda.", 
                stat: "50+", 
                statLabel: "Klien Korporat",
                href: "/contact"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link 
                  href={item.href}
                  className="group flex flex-col md:flex-row items-start md:items-center justify-between py-10 md:py-14 border-t border-zinc-200 hover:border-zinc-400 transition-all duration-500 gap-6"
                >
                  {/* Left: Number + Title */}
                  <div className="flex items-start md:items-center gap-6 md:gap-10">
                    <span className="text-[10px] font-black tracking-widest text-zinc-300 mt-2 md:mt-0">{item.num}</span>
                    <h3 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tighter group-hover:text-[#D4A373] transition-colors duration-500 leading-none">
                      {item.title}
                    </h3>
                  </div>

                  {/* Center: Description */}
                  <p className="text-zinc-400 text-sm md:text-base max-w-xs leading-relaxed md:pl-20 lg:pl-0">
                    {item.desc}
                  </p>

                  {/* Right: Stat + Arrow */}
                  <div className="flex items-center gap-8 md:gap-12">
                    <div className="text-right hidden lg:block">
                      <p className="text-2xl font-black text-zinc-900 tracking-tight leading-none">{item.stat}</p>
                      <p className="text-[10px] text-zinc-400 font-bold tracking-widest uppercase mt-1">{item.statLabel}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-900 group-hover:border-zinc-900 transition-all duration-500">
                      <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-500 group-hover:translate-x-1 transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
            {/* Bottom border */}
            <div className="border-t border-zinc-200"></div>
          </div>

        </div>
      </section>


      {/* 4. Final Premium CTA */}
      <section className="py-40 bg-zinc-950 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4A373]/5 rounded-full blur-[120px]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-12 text-center flex flex-col items-center z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="h-[1px] w-12 bg-[#D4A373]/30"></div>
            <span className="text-[#D4A373] text-[10px] font-black tracking-[0.4em] uppercase">Eksklusivitas Layanan</span>
            <div className="h-[1px] w-12 bg-[#D4A373]/30"></div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-16 max-w-5xl leading-[0.95]"
          >
            Rasakan kualitas yang <i className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A373] to-amber-200">tak tertandingi</i> atau dapatkan konsultasi industri lengkap.
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-8"
          >
            <Link 
              href="/contact" 
              className="group relative px-14 py-6 bg-white text-zinc-950 rounded-full font-bold text-base transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">Hubungi Kami</span>
              <div className="absolute inset-0 bg-[#D4A373] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </Link>
            
            <Link 
              href="/about" 
              className="group relative px-14 py-6 border border-white/10 text-white rounded-full font-bold text-base transition-all hover:bg-white hover:text-zinc-950 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">Cerita Kami</span>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
