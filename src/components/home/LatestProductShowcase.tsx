"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Star, ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/supabase";

export default function LatestProductShowcase({ latestProduct }: { latestProduct: Product }) {
  return (
    <section className="relative w-full bg-[#f8f8f8] py-24 sm:py-32 overflow-hidden">
      {/* Background Texture/Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Persuasive Copy & CTA */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-950 text-white rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-[#D4A373]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                {latestProduct.is_featured ? "Produk Unggulan" : "Produk Terbaru"}
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-zinc-900 leading-[0.95] tracking-tighter mb-10">
              DI ATAS <br />
              <span className="italic text-[#D4A373]">EKSPEKTASI.</span>
            </h2>

            <p className="text-zinc-500 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-xl">
              Kekuatan industri bertemu dengan desain futuristik. {latestProduct.name} bukan sekadar peralatan — ini adalah investasi untuk efisiensi operasional tanpa batas.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link 
                href={`/products/${latestProduct.slug}`}
                className="group relative inline-flex items-center gap-3 px-10 py-5 bg-zinc-900 text-white rounded-2xl font-bold text-sm overflow-hidden transition-all hover:scale-[1.02] active:scale-95 shadow-2xl shadow-zinc-900/20"
              >
                <span className="relative z-10">Amankan Sekarang</span>
                <ArrowUpRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4A373] to-[#C19263] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </Link>

              <div className="flex items-center gap-3">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4A373] text-[#D4A373]" />
                  ))}
                </div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Pilihan Utama Industri</span>
              </div>
            </div>
          </motion.div>

          {/* Right: The Showcased Product */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative group cursor-pointer"
          >
            {/* Glowing background behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-[#D4A373]/10 blur-[80px] rounded-full group-hover:bg-[#D4A373]/20 transition-all duration-1000"></div>
            
            <Link href={`/products/${latestProduct.slug}`} className="block relative z-10">
              <div className="aspect-square relative flex items-center justify-center p-8 md:p-12">
                <Image
                  src={latestProduct.image_url || "/images/placeholder-product.png"}
                  alt={latestProduct.name}
                  width={600}
                  height={600}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.15)] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              
              {/* Floating Product Label */}
              <div className="absolute bottom-0 right-0 md:-right-8 bg-white border border-zinc-100 p-6 rounded-3xl shadow-2xl backdrop-blur-xl transition-all duration-500 group-hover:translate-y-[-10px]">
                <p className="text-[10px] font-bold text-[#D4A373] uppercase tracking-[0.2em] mb-1">{latestProduct.category}</p>
                <h3 className="text-xl font-black text-zinc-900 tracking-tighter">{latestProduct.name}</h3>
              </div>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
