"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CATEGORIES = [
  { 
    num: "01", 
    title: "Palet Industri", 
    desc: "Palet plastik high-density for heavy duty load. Anti corrosion, wash resistant, export ready.", 
    stat: "15+", 
    statLabel: "Varian Tersedia",
    href: "/products?category=palet"
  },
  { 
    num: "02", 
    title: "Kontainer & Box", 
    desc: "Food grade to heavy-duty. Available solid, perforated, and foldable for space efficiency.", 
    stat: "150+", 
    statLabel: "Model Produk",
    href: "/products?category=container"
  },
  { 
    num: "03", 
    title: "Solusi Kustom B2B", 
    desc: "Specific need consultation. Custom branding, color, and dimensions according to your operations.", 
    stat: "50+", 
    statLabel: "Klien Korporat",
    href: "/contact"
  }
];

export default function CategoryShowcase() {
  return (
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

        {/* Category Cards */}
        <div className="space-y-0">
          {CATEGORIES.map((item, i) => (
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
                <div className="flex items-start md:items-center gap-6 md:gap-10">
                  <span className="text-[10px] font-black tracking-widest text-zinc-300 mt-2 md:mt-0">{item.num}</span>
                  <h3 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tighter group-hover:text-[#D4A373] transition-colors duration-500 leading-none">
                    {item.title}
                  </h3>
                </div>

                <p className="text-zinc-400 text-sm md:text-base max-w-xs leading-relaxed md:pl-20 lg:pl-0">
                  {item.desc}
                </p>

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
          <div className="border-t border-zinc-200"></div>
        </div>
      </div>
    </section>
  );
}
