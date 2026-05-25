"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Search,
  Filter,
  Package,
  Box,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  Grid,
  Utensils,
  ShoppingBag,
  Inbox,
  GlassWater,
  Disc,
  CircleDot,
  Truck,
  Snowflake
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { type Product } from "@/lib/supabase";

const CATEGORY_MAP: Record<string, { name: string; icon: any }> = {
  all: { name: "Semua Produk", icon: Box },
  "Container Solid": { name: "Container Solid", icon: Box },
  "Container Berlubang": { name: "Container Berlubang", icon: Grid },
  "Lunch Box": { name: "Lunch Box", icon: Utensils },
  "Palet plastik": { name: "Palet Plastik", icon: Package },
  "Keranjang Buah": { name: "Keranjang Buah", icon: ShoppingBag },
  "Container Bakery": { name: "Container Bakery", icon: Box },
  "Part Case - Jolly Boy": { name: "Part Case - Jolly Boy", icon: Inbox },
  "Krat Botol": { name: "Krat Botol", icon: GlassWater },
  "Krat piring": { name: "Krat Piring", icon: Disc },
  "Krat Telur": { name: "Krat Telur", icon: CircleDot },
  "Krat Gelas": { name: "Krat Gelas", icon: GlassWater },
  "Container Logistik": { name: "Container Logistik", icon: Truck },
  "Palet untuk Truck Box Pendingin": { name: "Palet Truck Pendingin", icon: Snowflake },
};

const ITEMS_PER_PAGE = 12;

interface ProductsClientProps {
  initialProducts: Product[];
}

export default function ProductsClient({ initialProducts }: ProductsClientProps) {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsGridRef = useRef<HTMLDivElement>(null);

  // Update category if URL changes
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      setActiveCategory(cat);
      setCurrentPage(1);
    }
  }, [searchParams]);

  // Reset page when search or category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  // Desired order for the 13 new categories
  const PREDEFINED_ORDER = [
    "Container Solid",
    "Container Berlubang",
    "Lunch Box",
    "Palet plastik",
    "Keranjang Buah",
    "Container Bakery",
    "Part Case - Jolly Boy",
    "Krat Botol",
    "Krat piring",
    "Krat Telur",
    "Krat Gelas",
    "Container Logistik",
    "Palet untuk Truck Box Pendingin"
  ];

  // Get unique categories from products
  const dbCategories = Array.from(new Set(initialProducts.map(p => p.category)));

  // Sort according to PREDEFINED_ORDER, putting any custom added categories at the end
  const categories = [
    "all",
    ...PREDEFINED_ORDER.filter(cat => dbCategories.includes(cat)),
    ...dbCategories.filter(cat => !PREDEFINED_ORDER.includes(cat))
  ];

  const PRODUCT_CATEGORIES = categories.map(id => ({
    id,
    name: CATEGORY_MAP[id]?.name || id,
    icon: CATEGORY_MAP[id]?.icon || Box,
    count: id === "all" ? initialProducts.length : initialProducts.filter(p => p.category === id).length,
  }));

  const filteredProducts = initialProducts.filter((p) => {
    const matchesCategory = activeCategory === "all" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (productsGridRef.current) {
      const offset = productsGridRef.current.offsetTop - 100;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen">
      {/* Dynamic Header */}
      <div className="bg-zinc-900 pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-[0.03] mix-blend-overlay"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-zinc-800/40 to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-[#D4A373] font-medium tracking-widest uppercase text-sm mb-4">
                <span className="w-8 h-[2px] bg-[#D4A373]"></span>
                Katalog Digital
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                Jual <span className="text-[#D4A373]">Palet Plastik</span> <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-[#D4A373]">
                  Tangerang Selatan.
                </span>
              </h1>
            </div>
            
            <div className="w-full md:w-96">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-zinc-500 group-focus-within:text-[#D4A373] transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder="Cari nama produk, dimensi, atau tipe..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-11 pr-4 py-4 border border-zinc-700/50 rounded-2xl leading-5 bg-zinc-800/50 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#D4A373] focus:border-[#D4A373] transition-all font-medium backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-72 shrink-0">
            <div className="sticky top-24 bg-white rounded-3xl p-6 border border-zinc-200/50 shadow-xl shadow-zinc-200/40">
              <div className="flex items-center gap-3 mb-8">
                <Filter className="w-5 h-5 text-zinc-900" />
                <h2 className="text-lg font-bold text-zinc-900">Kategori Produk</h2>
              </div>
              
              <div className="space-y-2">
                {PRODUCT_CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`w-full flex items-start sm:items-center justify-between px-4 py-3 rounded-xl transition-all font-medium ${
                        isActive 
                          ? "bg-zinc-900 text-white shadow-md shadow-zinc-900/10" 
                          : "bg-transparent text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900"
                      }`}
                    >
                      <div className="flex items-center gap-3 flex-1 min-w-0 pr-3">
                        <cat.icon className={`w-5 h-5 shrink-0 ${isActive ? "text-[#D4A373]" : "text-zinc-400"}`} />
                        <span className="text-left text-sm leading-snug">{cat.name}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full shrink-0 ${isActive ? "bg-white/10" : "bg-zinc-200"}`}>
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-12 p-6 bg-zinc-900 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4A373]/10 blur-xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <h3 className="text-white font-bold mb-2 relative z-10">Butuh Konsultasi?</h3>
                <p className="text-zinc-400 text-sm mb-4 relative z-10">Tim sales kami siap membantu Anda memilih palet yang tepat untuk gudang Anda.</p>
                <Link href="/contact" className="inline-flex w-full items-center justify-center gap-2 py-2.5 rounded-xl bg-[#D4A373] text-zinc-900 font-medium hover:bg-[#C19263] transition-colors relative z-10">
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-zinc-500 font-light">
                Menampilkan <span className="font-bold text-zinc-900">{filteredProducts.length}</span> produk
              </p>
            </div>

            <div className="flex-1" ref={productsGridRef}>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-zinc-900">
                  {activeCategory === "all" ? "Semua Produk" : (CATEGORY_MAP[activeCategory]?.name || activeCategory)}
                  <span className="ml-3 text-zinc-400 font-light text-sm italic">Menampilkan {paginatedProducts.length} dari {filteredProducts.length} hasil</span>
                </h2>
              </div>

              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentPage + activeCategory + searchQuery}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                >
                  {paginatedProducts.map((product) => (
                    <Link 
                      key={product.id} 
                      href={`/products/${product.slug}`}
                      className="group flex flex-col bg-white rounded-3xl border border-zinc-200/60 overflow-hidden hover:border-[#D4A373]/30 hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      {/* Image Container */}
                      <div className="aspect-[4/3] bg-zinc-50 relative overflow-hidden flex flex-col items-center justify-center border-b border-zinc-100 p-0">
                        {product.image_url ? (
                          <Image 
                            src={product.image_url} 
                            alt={`${product.name} - Paletindo Tangerang Selatan`}
                            fill
                            className="object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out p-4"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        ) : (
                          <div className="w-3/4 h-3/4 bg-white rounded-2xl shadow-sm border border-zinc-200/50 flex items-center justify-center relative z-0">
                             <Package className="w-16 h-16 text-zinc-200 stroke-[1]" />
                          </div>
                        )}
                        
                        <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                           <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold text-zinc-900 rounded-full shadow-sm border border-zinc-200/50 uppercase tracking-wider">
                             {product.material}
                           </span>
                        </div>
                      </div>
                      
                      {/* Details Container */}
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-lg font-bold text-zinc-900 mb-4 group-hover:text-[#D4A373] transition-colors line-clamp-2 leading-tight">
                          {product.name}
                        </h3>
                        
                        <div className="space-y-2 mb-6 flex-1">
                          <div className="flex justify-between items-center text-xs border-b border-zinc-100 pb-2">
                            <span className="text-zinc-500 font-light">Dimensi</span>
                            <span className="font-medium text-zinc-800">
                              {product.length_outer > 0 
                                ? `${product.length_outer} x ${product.width_outer} x ${product.height_outer} cm` 
                                : "Hubungi Sales"}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-zinc-900 font-medium text-[10px] uppercase tracking-widest group/btn relative">
                          Selengkapnya 
                          <span className="ml-2 w-7 h-7 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 transition-all group-hover:bg-zinc-900 group-hover:text-white group-hover:translate-x-1">
                            <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Empty State */}
              {filteredProducts.length === 0 && (
                <div className="bg-white rounded-[3rem] border border-dashed border-zinc-300 p-20 text-center">
                  <Package className="w-16 h-16 text-zinc-200 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">Produk tidak ditemukan</h3>
                  <p className="text-zinc-500 font-light max-w-xs mx-auto text-sm">Coba gunakan kata kunci lain atau pilih kategori yang berbeda.</p>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-20 flex items-center justify-center gap-2 sm:gap-4">
                  <button 
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:border-zinc-900 hover:text-zinc-900 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {getPageNumbers().map((page, i) => (
                      page === '...' ? (
                        <span key={`dots-${i}`} className="w-8 h-8 flex items-center justify-center text-zinc-400 text-sm">...</span>
                      ) : (
                        <button
                          key={`page-${page}`}
                          onClick={() => handlePageChange(page as number)}
                          className={`w-12 h-12 rounded-full border transition-all text-sm font-medium flex items-center justify-center
                            ${currentPage === page 
                              ? "bg-zinc-900 border-zinc-900 text-white shadow-xl shadow-zinc-900/20" 
                              : "bg-white border-zinc-100 text-zinc-600 hover:border-zinc-300 hover:text-zinc-900"}`}
                        >
                          {page}
                        </button>
                      )
                    ))}
                  </div>

                  <button 
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:border-zinc-900 hover:text-zinc-900 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
