"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function HeroBackground() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <motion.div 
      style={{ y: y1 }}
      className="absolute inset-x-0 -top-[60px] bottom-0 h-[calc(100%+60px)] z-0 overflow-hidden"
    >
      <Image
        src="/images/homepage/hero-model.png"
        alt="PT Paletindo Premium Logistics"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-center opacity-70 grayscale-[0.3] brightness-[0.6]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-transparent to-zinc-950/80"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/60 via-transparent to-transparent"></div>
    </motion.div>
  );
}
