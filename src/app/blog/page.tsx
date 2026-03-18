import Link from "next/link";
import { ArrowRight, Calendar, User, Search } from "lucide-react";

export const metadata = {
  title: "Artikel & Update Logistik - PT Paletindo",
  description: "Insight industri, tips rantai pasok (supply chain), dan panduan memilih palet plastik terbaik.",
};

const MOCK_POSTS = [
  {
    category: "Tips Operasional",
    title: "Memilih Palet Food Grade yang Tepat untuk Suhu Ekstrem Cold Storage",
    date: "12 Okt 2023",
    author: "Tim Engineer Paletindo",
    img: "https://images.unsplash.com/photo-1542289658-002d295f707f?q=80&w=800&auto=format&fit=crop",
    slug: "memilih-palet-food-grade-cold-storage"
  },
  {
    category: "Industri B2B",
    title: "Plastik vs Kayu: Analisis Total Cost of Ownership (TCO) dalam Jangka Panjang",
    date: "05 Nov 2023",
    author: "Dimas A.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    slug: "plastik-vs-kayu-analisis-tco-palet"
  },
  {
    category: "Studi Kasus",
    title: "Bagaimana Pabrik Manufaktur Otomotif X Menekan Damage Rate hingga 80%",
    date: "20 Jan 2024",
    author: "Tim Riset",
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop",
    slug: "studi-kasus-pabrik-otomotif-damage-rate"
  }
];

export default function BlogPage() {
  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen">
      
      {/* Blog Hero UI */}
      <section className="bg-zinc-900 py-24 md:py-32 rounded-b-[3rem] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D4A373]/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A373] to-[#C19263]">Industry Updates</span>
          </h1>
          <p className="text-lg text-zinc-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Dapatkan berita terbaru seputar inovasi pergudangan, tips efisiensi rantai pasok logistik, dan wawasan teknis seputar produk plastik industri.
          </p>
          
          <div className="max-w-xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-zinc-500 group-focus-within:text-[#D4A373] transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Cari topik (ex: food grade, forklift, heavy duty)..."
              className="block w-full pl-12 pr-4 py-4 border border-zinc-700/50 rounded-2xl leading-5 bg-zinc-800/50 backdrop-blur-md text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-0 focus:border-[#D4A373] transition-all font-medium"
            />
          </div>
        </div>
      </section>

      {/* Grid Layout */}
      <section className="py-24">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
               <h2 className="text-2xl font-bold text-zinc-900">Artikel Terbaru</h2>
               <div className="flex gap-2">
                 {['Semua', 'Industri B2B', 'Tips Operasional', 'Studi Kasus'].map((cat, i) => (
                   <button key={i} className={`hidden md:block px-4 py-2 rounded-full text-sm font-medium transition-all ${i === 0 ? 'bg-zinc-900 text-white shadow-md' : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900'}`}>
                     {cat}
                   </button>
                 ))}
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {MOCK_POSTS.map((post, idx) => (
                <Link href={`/blog/${post.slug}`} key={idx} className="group bg-white rounded-3xl border border-zinc-200/60 overflow-hidden shadow-xl shadow-zinc-200/30 hover:-translate-y-2 hover:border-[#D4A373]/30 hover:shadow-2xl hover:shadow-zinc-300/50 transition-all duration-500 flex flex-col">
                  {/* Image wrapper */}
                  <div className="aspect-[16/10] relative overflow-hidden bg-zinc-50">
                    <div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-zinc-900 font-medium text-xs uppercase tracking-wider rounded-full shadow-sm border border-zinc-200/50">
                        {post.category}
                      </span>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 flex flex-col flex-1 bg-white">
                    <div className="flex gap-4 items-center text-[11px] font-bold text-zinc-400 mb-4 tracking-widest uppercase">
                      <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</div>
                      <div className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {post.author}</div>
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-4 group-hover:text-[#D4A373] transition-colors line-clamp-3 leading-snug">
                      {post.title}
                    </h3>
                    <div className="mt-auto pt-6 border-t border-zinc-100 flex items-center text-zinc-900 font-medium uppercase text-sm group-hover:text-[#D4A373] transition-colors tracking-wide">
                      Baca Selengkapnya
                      <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

         </div>
      </section>
    </div>
  );
}
