"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Share2, 
  FileText, 
  Clock, 
  Tag, 
  ChevronRight,
  Newspaper,
  LayoutGrid
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase, type Article, isSupabaseConfigured } from "@/lib/supabase";

// Convert plain text to HTML paragraphs if no HTML tags detected
function formatContent(content: string): string {
  if (!content) return "<p>Konten belum tersedia.</p>";
  
  if (/<[a-z][\s\S]*>/i.test(content)) {
    return content;
  }

  const lines = content.split(/\n/);
  let html = "";
  let inList = false;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      continue;
    }

    const isBullet =
      trimmed.startsWith("- ") ||
      trimmed.startsWith("• ") ||
      trimmed.startsWith("* ") ||
      /^\d+[\.\)]\s/.test(trimmed);

    const isHeading =
      !isBullet &&
      trimmed.length < 80 &&
      trimmed.split(" ").length <= 8 &&
      !trimmed.endsWith(".") &&
      !trimmed.endsWith(",") &&
      /^[A-Z]/.test(trimmed);

    if (isBullet) {
      if (!inList) {
        html += '<ul class="list-disc pl-6 space-y-2 my-4">';
        inList = true;
      }
      const bulletText = trimmed.replace(/^[-•*]\s+/, "").replace(/^\d+[\.\)]\s+/, "");
      html += `<li>${bulletText}</li>`;
    } else if (isHeading) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      html += `<h2 class="text-2xl font-bold mt-10 mb-4 text-zinc-900 border-b border-zinc-100 pb-2">${trimmed}</h2>`;
    } else {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      html += `<p class="mb-6 text-zinc-600 leading-relaxed">${trimmed}</p>`;
    }
  }

  if (inList) html += "</ul>";
  return html;
}

export default function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [article, setArticle] = useState<Article | null>(null);
  const [recentPosts, setRecentPosts] = useState<Article[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (isSupabaseConfigured()) {
        try {
          // Fetch current article
          const { data: artData, error: artError } = await supabase
            .from("articles")
            .select("*")
            .eq("slug", slug)
            .single();

          if (!artError && artData) {
            setArticle(artData as Article);
          }

          // Fetch recent posts
          const { data: recentData } = await supabase
            .from("articles")
            .select("title, slug, category, published_at, thumbnail_url")
            .eq("status", "published")
            .neq("slug", slug)
            .order("published_at", { ascending: false })
            .limit(5);

          if (recentData) {
            setRecentPosts(recentData as Article[]);
          }

          // Fetch categories
          const { data: catData } = await supabase
            .from("articles")
            .select("category")
            .eq("status", "published");

          if (catData) {
            const uniqueCats = Array.from(new Set(catData.map(c => c.category)));
            setCategories(uniqueCats);
          }
        } catch (err) {
          console.error("Error fetching data:", err);
        }
      }
      setIsLoading(false);
    }
    fetchData();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#fcfcfd] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-zinc-100 border-t-[#D4A373] rounded-full animate-spin"></div>
          <p className="text-zinc-400 font-medium tracking-widest text-[10px] uppercase">Processing Insight...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-[#fcfcfd] flex items-center justify-center">
        <div className="text-center px-6">
          <FileText className="w-20 h-20 text-zinc-100 mx-auto mb-6" />
          <h1 className="text-3xl font-black mb-4 text-zinc-900 tracking-tighter">Content Missing</h1>
          <p className="text-zinc-500 mb-8 font-light">The article you looking for might have been moved or archived.</p>
          <Link href="/blog" className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 text-white rounded-2xl font-bold text-sm hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-900/10">
            <ArrowLeft className="w-4 h-4" /> Return to Journal
          </Link>
        </div>
      </div>
    );
  }

  const publishedDate = article.published_at
    ? new Date(article.published_at).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })
    : new Date(article.created_at).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });

  const wordCount = (article.content || "").split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));
  const formattedContent = formatContent(article.content || "");

  return (
    <div className="w-full bg-[#fcfcfd] min-h-screen pt-28 pb-32">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-[#D4A373]/3 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] bg-zinc-900/[0.02] blur-[100px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Breadcrumb / Category */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16"
        >
          <div className="flex items-center gap-3">
            <Link href="/blog" className="w-12 h-12 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:border-zinc-300 transition-all group">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
              <Link href="/" className="hover:text-zinc-950">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/blog" className="hover:text-zinc-950">Journal</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[#D4A373]">{article.category}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="h-[1px] w-12 bg-zinc-200 hidden sm:block"></div>
             <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
               <Clock className="w-3.5 h-3.5" />
               Est. {readingTime} Min Read
             </div>
          </div>
        </motion.div>

        {/* Main Header */}
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-zinc-100 text-[#D4A373] text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-zinc-200/50">
              {article.category}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-zinc-900 leading-[1] mb-10 tracking-tighter">
              {article.title}
            </h1>
            
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-zinc-900 flex items-center justify-center text-white ring-8 ring-zinc-50">
                  <User className="w-6 h-6 text-[#D4A373]" />
                </div>
                <div>
                  <p className="text-sm font-black text-zinc-900">{article.author}</p>
                  <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">{publishedDate}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hero Image Container - Aspect Ratio logic for NO CROPPING */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full mb-24"
        >
          <div className="relative rounded-[3rem] overflow-hidden bg-zinc-100 border border-zinc-200/50 group shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)]">
            {/* Outer blur background */}
            <div className="absolute inset-0 blur-3xl opacity-20 scale-110 pointer-events-none">
              <img src={article.thumbnail_url || ""} alt="" className="w-full h-full object-cover" />
            </div>
            
            {/* Main Image - CONTAINed to keep full image visible */}
            <div className="relative z-10 w-full flex items-center justify-center p-4 md:p-8 bg-white/40 backdrop-blur-sm min-h-[400px] md:min-h-[600px]">
              {article.thumbnail_url ? (
                <img 
                  src={article.thumbnail_url} 
                  alt={article.title} 
                  className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
                />
              ) : (
                <div className="w-full h-[600px] bg-zinc-100 flex items-center justify-center">
                  <FileText className="w-20 h-20 text-zinc-200" />
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Layout Grid: Content + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 xl:gap-32 items-start">
          
          {/* Main Article Content (8 cols) */}
          <div className="lg:col-span-8">
            <article className="prose prose-lg prose-zinc max-w-none 
              prose-p:text-lg prose-p:text-zinc-600 prose-p:leading-relaxed prose-p:font-light
              prose-headings:text-zinc-900 prose-headings:font-black prose-headings:tracking-tight
              prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:border-b prose-h2:border-zinc-100 prose-h2:pb-4
              prose-blockquote:border-l-4 prose-blockquote:border-[#D4A373] prose-blockquote:bg-zinc-50 prose-blockquote:py-8 prose-blockquote:px-10 prose-blockquote:rounded-r-3xl prose-blockquote:italic prose-blockquote:text-2xl prose-blockquote:text-zinc-700
              prose-li:text-zinc-600 prose-li:font-light
              prose-img:rounded-[2rem] prose-img:shadow-2xl
            ">
              <div 
                className="content-body"
                dangerouslySetInnerHTML={{ __html: formattedContent }}
              />
            </article>

            {/* Tags / Share Footer */}
            <div className="mt-24 pt-12 border-t border-zinc-100 flex flex-col md:flex-row md:items-center justify-between gap-8">
               <div className="flex items-center gap-4">
                 <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">Share Insight:</span>
                 <div className="flex gap-2">
                   {[1, 2, 3].map((_, i) => (
                     <button key={i} className="w-10 h-10 rounded-xl bg-white border border-zinc-100 flex items-center justify-center text-zinc-400 hover:text-[#D4A373] hover:border-[#D4A373]/20 hover:bg-[#D4A373]/5 transition-all">
                       <Share2 className="w-4 h-4" />
                     </button>
                   ))}
                 </div>
               </div>
               
               <button 
                 onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                 className="text-[11px] font-bold text-[#D4A373] uppercase tracking-[0.2em] flex items-center gap-2 hover:translate-y-[-2px] transition-transform"
               >
                 Scroll to Top <ArrowLeft className="w-3.5 h-3.5 rotate-90" />
               </button>
            </div>
          </div>

          {/* Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-16 sticky top-32">
            
            {/* Sidebar Section: Recent Posts */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-xl bg-zinc-900 flex items-center justify-center">
                  <Newspaper className="w-4 h-4 text-[#D4A373]" />
                </div>
                <h3 className="text-xl font-black text-zinc-900 tracking-tight">Recent Journal</h3>
              </div>
              
              <div className="space-y-6">
                {recentPosts.map((post, i) => (
                  <Link 
                    key={i} 
                    href={`/blog/${post.slug}`} 
                    className="group flex gap-5 items-center p-3 -m-3 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all border border-transparent hover:border-zinc-100"
                  >
                    <div className="w-20 h-20 rounded-xl bg-zinc-100 shrink-0 overflow-hidden border border-zinc-100">
                      <img src={post.thumbnail_url || ""} alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <div className="flex flex-col gap-1.5 overflow-hidden">
                      <span className="text-[9px] font-bold text-[#D4A373] uppercase tracking-widest">{post.category}</span>
                      <h4 className="text-sm font-bold text-zinc-900 line-clamp-2 leading-snug group-hover:text-[#D4A373] transition-colors">{post.title}</h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar Section: Categories */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-xl bg-[#D4A373]/10 flex items-center justify-center">
                  <LayoutGrid className="w-4 h-4 text-[#D4A373]" />
                </div>
                <h3 className="text-xl font-black text-zinc-900 tracking-tight">Categories</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((cat, i) => (
                  <Link 
                    key={i} 
                    href={`/blog?category=${cat}`}
                    className="px-5 py-2.5 rounded-xl bg-white border border-zinc-100 text-xs font-bold text-zinc-500 hover:text-[#D4A373] hover:border-[#D4A373]/30 hover:shadow-lg hover:shadow-[#D4A373]/5 transition-all"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar Section: Newsletter / CTA */}
            <div className="bg-zinc-900 rounded-3xl p-8 relative overflow-hidden group shadow-2xl shadow-zinc-900/20">
               <div className="absolute top-0 right-0 w-1/2 h-full bg-[#D4A373]/10 blur-[60px] translate-x-1/2 rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
               <div className="relative z-10">
                 <h4 className="text-white font-bold text-lg mb-4">Stay Industrial Updated</h4>
                 <p className="text-zinc-500 text-sm font-light mb-8 leading-relaxed">Subscribe to receive exclusive insights and latest technical specifications directly to your inbox.</p>
                 <div className="flex flex-col gap-3">
                   <input 
                     type="email" 
                     placeholder="Enter your email" 
                     className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#D4A373]/50 transition-colors"
                   />
                   <button className="w-full bg-[#D4A373] text-zinc-900 font-black text-xs uppercase tracking-widest py-4 rounded-xl hover:bg-[#C19263] transition-colors">
                     Subscribe
                   </button>
                 </div>
               </div>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}
