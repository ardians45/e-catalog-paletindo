import Link from "next/link";
import { 
  ArrowRight, 
  Award, 
} from "lucide-react";
import { supabase, type Product, isSupabaseConfigured } from "@/lib/supabase";
import HeroBackground from "@/components/home/HeroBackground";
import LatestProductShowcase from "@/components/home/LatestProductShowcase";
import CategoryShowcase from "@/components/home/CategoryShowcase";
import HomeCTA from "@/components/home/HomeCTA";

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
              
              <h1 className="text-6xl md:text-7xl lg:text-[9rem] font-black text-white leading-[0.9] tracking-tighter">
                PALET<br />
                <span className="text-white border-[#D4A373] border-b-2 lg:border-b-4 lg:pb-2">UNGGUL.</span>
              </h1>
              
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
                  Pusat <span className="text-[#D4A373] font-medium">Palet Plastik Tangerang Selatan</span>. Peralatan Logistik Kelas Atas. Diuji oleh raksasa industri. Dikirim langsung ke lokasi Anda.
                </p>
                <Link href="/products" className="group mt-4 inline-flex items-center gap-2 text-[#D4A373] font-bold text-sm tracking-widest uppercase transition-all hover:gap-4">
                  Jelajahi Katalog <ArrowRight className="w-4 h-4" />
                </Link>
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
      </section>

      {/* 2. Dynamic High-Impact Product Billboard (Client Component with Server Data) */}
      {latestProduct && <LatestProductShowcase latestProduct={latestProduct} />}

      {/* 3. Premium Category Showcase */}
      <CategoryShowcase />

      {/* 4. Final Premium CTA */}
      <HomeCTA />

    </div>
  );
}
