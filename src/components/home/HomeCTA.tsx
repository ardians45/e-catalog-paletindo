"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="py-40 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4A373]/5 rounded-full blur-[120px]"></div>
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
          Rasakan kualitas yang <i className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A373] to-amber-200">tak tertandingi  </i> atau dapatkan konsultasi industri lengkap.
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
  );
}
