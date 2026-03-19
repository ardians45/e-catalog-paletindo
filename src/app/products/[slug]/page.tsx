"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight, ArrowLeft, Download, ShoppingCart, MessageCircle, FileText, CheckCircle2, ShieldCheck, Box, Zap, Award, Info, Package } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRFQ } from "@/components/providers/RFQProvider";
import { supabase, type Product, isSupabaseConfigured } from "@/lib/supabase";

// Fallback import
import productsDataFallback from "../../../../dummy_data.json";

const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { addItem } = useRFQ();
  const { slug } = use(params);
  const [product, setProduct] = useState<{
    id: string;
    name: string;
    slug: string;
    category: string;
    description: string;
    images: string[];
    specs: {
      dimension: string;
      material: string;
      color: string;
      applications: string;
    };
    features: string[];
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      // Try Supabase first
      if (isSupabaseConfigured()) {
        try {
          const { data, error } = await supabase
            .from("products")
            .select("*")
            .eq("slug", slug)
            .single();

          if (!error && data) {
            const p = data as Product;
            setProduct({
              id: p.id,
              name: p.name,
              slug: p.slug,
              category: p.category,
              description: (p.description || "Produk industri berkualitas tinggi dari PT Paletindo.").replace(/<[^>]+>/g, ' ').trim(),
              images: [p.image_url || "/images/products/placeholder.png"],
              specs: {
                dimension: p.length_outer > 0 ? `${p.length_outer} x ${p.width_outer} x ${p.height_outer} cm` : "Hubungi Sales",
                material: p.material || "Plastik PP/HDPE",
                color: p.color || "Sesuai Gambar",
                applications: p.applications?.join(", ") || "Industri, Pergudangan",
              },
              features: [
                "Material berkualitas tinggi",
                "Standar industri nasional",
                "Tahan banting dan awet",
                "Mudah dibersihkan",
                "Cocok untuk logistik & gudang"
              ],
            });
            setIsLoading(false);
            return;
          }
        } catch (err) {
          console.error("Supabase fetch error:", err);
        }
      }

      // Fallback: try matching from dummy data by index (old slug format: name-INDEX)
      const productIndex = parseInt(slug.split('-').pop() || "-1");
      const rawProduct = productsDataFallback[productIndex];

      if (rawProduct) {
        setProduct({
          id: slug,
          name: rawProduct.name,
          slug: slug,
          category: rawProduct.categories?.[0] || "Produk Industri",
          description: (rawProduct.description || "").replace(/<[^>]+>/g, ' ').trim(),
          images: [rawProduct.image || "/images/products/placeholder.png"],
          specs: {
            dimension: `${rawProduct.dimensions?.length_outer || 0} x ${rawProduct.dimensions?.width_outer || 0} x ${rawProduct.dimensions?.height_outer || 0} mm`,
            material: rawProduct.material || "Plastik PP/HDPE",
            color: rawProduct.color || "Sesuai Gambar",
            applications: rawProduct.applications?.join(", ") || "Industri",
          },
          features: [
            "Material berkualitas tinggi",
            "Standar industri nasional",
            "Tahan banting dan awet",
            "Mudah dibersihkan",
            "Cocok untuk logistik & gudang"
          ],
        });
      }
      setIsLoading(false);
    }

    fetchProduct();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fcfcfd]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-zinc-300 border-t-[#D4A373] rounded-full animate-spin"></div>
          <p className="text-zinc-400 text-sm">Memuat produk...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Package className="w-16 h-16 text-zinc-200 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-4">Produk tidak ditemukan</h1>
          <Link href="/products" className="text-[#D4A373] hover:underline">Kembali ke Katalog</Link>
        </div>
      </div>
    );
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="w-full bg-[#fcfcfd] min-h-screen pt-28 pb-32 selection:bg-[#D4A373] selection:text-white">
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#D4A373]/3 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[30%] h-[30%] bg-zinc-900/[0.02] blur-[100px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <motion.nav 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400 gap-3 mb-12"
        >
          <Link href="/" className="hover:text-zinc-900 transition-colors">Home</Link>
          <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
          <Link href="/products" className="hover:text-zinc-900 transition-colors">Catalog</Link>
          <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
          <span className="text-[#D4A373]">{product.category}</span>
        </motion.nav>

        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 mb-32 items-start">
          {/* Left: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[55%] relative"
          >
            <div className="aspect-[4/5] md:aspect-square bg-white rounded-[3rem] border border-zinc-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] flex items-center justify-center relative overflow-hidden group p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-50/50 to-white pointer-events-none"></div>
              
              <motion.img 
                src={product.images[0]} 
                alt={product.name}
                layoutId={`product-image-${product.id}`}
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
              />
              
              <div className="absolute top-10 left-10 z-20">
                <div className="bg-zinc-900 text-white px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 shadow-2xl">
                  <Award className="w-3 h-3 text-[#D4A373]" />
                  Premium Quality
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8 px-2">
              {product.images.map((img, i) => (
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  key={i} 
                  className={`w-28 h-28 rounded-3xl bg-white border overflow-hidden transition-all duration-500 ${i === 0 ? 'border-[#D4A373] ring-4 ring-[#D4A373]/5' : 'border-zinc-100 hover:border-zinc-300'}`}
                >
                  <img src={img} alt={`Thumb ${i}`} className="w-full h-full object-contain p-4" />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right: Info */}
          <div className="w-full lg:w-[45%] lg:sticky lg:top-32">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="flex flex-col"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <span className="h-[1px] w-8 bg-[#D4A373]"></span>
                <span className="text-[12px] font-bold text-[#D4A373] uppercase tracking-[0.3em]">
                  Industrial Series
                </span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 leading-[1.1] mb-8 tracking-tighter">
                {product.name}
              </motion.h1>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 mb-10">
                {product.category.split(',').map((cat, i) => (
                  <span key={i} className="px-4 py-1.5 rounded-full bg-zinc-100 text-zinc-600 text-[10px] font-bold uppercase tracking-widest border border-zinc-200/50">
                    {cat.trim()}
                  </span>
                ))}
              </motion.div>

              <motion.p variants={fadeInUp} className="text-lg text-zinc-500 font-light leading-relaxed mb-12 max-w-xl">
                {product.description}
              </motion.p>

              {/* Highlights Grid */}
              <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4 mb-12">
                <div className="bg-white border border-zinc-100 p-6 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Zap className="w-3 h-3 text-[#D4A373]" /> Dimension
                  </div>
                  <div className="text-zinc-900 font-bold text-lg">{product.specs.dimension}</div>
                </div>
                <div className="bg-white border border-zinc-100 p-6 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Box className="w-3 h-3 text-[#D4A373]" /> Material
                  </div>
                  <div className="text-zinc-900 font-bold text-lg">{product.specs.material}</div>
                </div>
              </motion.div>

              {/* Actions */}
              <motion.div variants={fadeInUp} className="flex flex-col gap-4">
                <button 
                  onClick={() => {
                    addItem({
                      id: product.id,
                      name: product.name,
                      material: product.specs.material,
                      qty: 1,
                      image: product.images[0],
                      category: product.category
                    });
                  }}
                  className="group relative flex items-center justify-center gap-4 bg-zinc-900 text-white py-6 rounded-3xl font-bold text-lg overflow-hidden transition-all hover:bg-zinc-800"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <ShoppingCart className="w-5 h-5 text-[#D4A373]" />
                  Request Quotation (RFQ)
                </button>
                
                <div className="grid grid-cols-2 gap-3">
                  <a href={`https://wa.me/6287877662097?text=Halo PT Paletindo, saya tertarik dengan produk ${product.name}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-white text-zinc-900 border border-zinc-200 py-4 rounded-2xl font-bold hover:bg-zinc-50 transition-all text-sm">
                    <MessageCircle className="w-5 h-5 text-emerald-500" />
                    WhatsApp
                  </a>
                  <button className="flex items-center justify-center gap-3 bg-zinc-50 text-zinc-900 border border-zinc-200 py-4 rounded-2xl font-bold hover:bg-zinc-100 transition-all text-sm">
                    <Download className="w-5 h-5 text-[#D4A373]" />
                    Spec Tab
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Detailed Specs */}
        <div className="pt-24 border-t border-zinc-100">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="w-full lg:w-1/3">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="sticky top-40"
              >
                <div className="w-16 h-16 bg-[#D4A373]/10 text-[#D4A373] rounded-3xl flex items-center justify-center mb-8">
                  <Info className="w-8 h-8" />
                </div>
                <h2 className="text-4xl font-black text-zinc-900 tracking-tight leading-tight mb-6">
                  Spesifikasi Spesifik & <br /> Data Teknis.
                </h2>
                <p className="text-zinc-500 font-light text-lg">
                  Kualitas material standar industri premium untuk durabilitas maksimal di lingkungan operasional berat.
                </p>
              </motion.div>
            </div>

            <div className="w-full lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(product.specs).map(([key, val], idx) => (
                  <motion.div 
                    key={key}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group bg-white p-8 rounded-[2.5rem] border border-zinc-100/80 shadow-sm hover:shadow-xl hover:border-[#D4A373]/20 transition-all duration-500 translate-y-0"
                  >
                    <div className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest mb-3 group-hover:text-[#D4A373] transition-colors">
                      {key.replace(/([A-Z])/g, ' $1')}
                    </div>
                    <div className="text-xl font-bold text-zinc-900">{val}</div>
                  </motion.div>
                ))}
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="md:col-span-2 bg-zinc-900 rounded-[3rem] p-10 md:p-14 relative overflow-hidden mt-8"
                >
                  <div className="absolute top-0 right-0 w-1/2 h-full bg-[#D4A373]/5 blur-[100px] rounded-full translate-x-1/2"></div>
                  
                  <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-6">
                        <ShieldCheck className="w-10 h-10 text-[#D4A373]" />
                        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Keunggulan Utama Material</h3>
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex gap-4 items-start">
                            <CheckCircle2 className="w-5 h-5 text-[#D4A373] shrink-0 mt-1" />
                            <span className="text-zinc-400 font-light leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Action */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-40 mb-20 bg-[#D4A373]/5 border border-[#D4A373]/10 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-[-50%] left-[-20%] w-[60%] h-[150%] bg-[#D4A373]/2 rotate-[35deg] blur-[100px]"></div>
          
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight leading-tight mb-8">
            Siap untuk Mengoptimalkan <br /> Gudang Anda?
          </h2>
          <p className="text-lg text-zinc-500 font-light mb-12 max-w-2xl mx-auto">
            Dapatkan penawaran harga terbaik untuk pembelian partai besar. Tim kami siap memberikan konsultasi teknis gratis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-10 py-5 bg-zinc-900 text-white rounded-2xl font-bold text-lg hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-900/10">
              Hubungi Sekarang
            </Link>
            <Link href="/products" className="px-10 py-5 bg-white text-zinc-900 border border-zinc-200 rounded-2xl font-bold text-lg hover:border-zinc-900 transition-all">
              Lihat Katalog Lain
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
