"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, X, Plus, ArrowRight, Package, ChevronRight, GitCompareArrows, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import productsData from "../../../dummy_data.json";

const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

interface Product {
  id: string;
  name: string;
  category: string;
  material: string;
  dimension: string;
  color: string;
  applications: string;
  image: string;
  description: string;
}

const ALL_PRODUCTS: Product[] = productsData.map((p, i) => ({
  id: slugify(p.name) + '-' + i,
  name: p.name,
  category: p.categories[0] || "Lainnya",
  material: p.material || "Plastik PP/HDPE",
  dimension: p.dimensions.length_outer > 0
    ? `${p.dimensions.length_outer} x ${p.dimensions.width_outer} x ${p.dimensions.height_outer} cm`
    : "Hubungi Sales",
  color: p.color || "Standar",
  applications: p.applications?.join(", ") || "-",
  image: p.image || "/images/products/placeholder.png",
  description: p.description?.replace(/<[^>]+>/g, ' ').trim().slice(0, 120) || "-",
}));

const MAX_COMPARE = 3;

export default function ComparePage() {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return ALL_PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !selectedProducts.find(sp => sp.id === p.id)
    ).slice(0, 8);
  }, [searchQuery, selectedProducts]);

  const addProduct = (product: Product) => {
    if (selectedProducts.length < MAX_COMPARE) {
      setSelectedProducts(prev => [...prev, product]);
      setSearchQuery("");
      setShowPicker(false);
    }
  };

  const removeProduct = (id: string) => {
    setSelectedProducts(prev => prev.filter(p => p.id !== id));
  };

  const clearAll = () => {
    setSelectedProducts([]);
  };

  const specRows = [
    { label: "Kategori", key: "category" },
    { label: "Dimensi", key: "dimension" },
    { label: "Material", key: "material" },
    { label: "Warna", key: "color" },
    { label: "Aplikasi", key: "applications" },
    { label: "Deskripsi", key: "description" },
  ];

  return (
    <div className="w-full bg-[#fcfcfd] min-h-screen selection:bg-[#D4A373] selection:text-white">

      {/* Hero Header */}
      <div className="bg-zinc-900 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-[0.03]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-zinc-800/30 to-transparent"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-3 text-[#D4A373] font-bold tracking-[0.2em] uppercase text-[11px] mb-6">
            <span className="w-8 h-[1px] bg-[#D4A373]"></span>
            Alat Perbandingan
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[1.05] mb-6">
            Bandingkan <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-[#D4A373]">
              Produk Industri.
            </span>
          </h1>
          <p className="text-lg text-zinc-400 font-light max-w-xl">
            Pilih hingga {MAX_COMPARE} produk untuk dibandingkan spesifikasinya secara langsung. Temukan solusi terbaik untuk kebutuhan Anda.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 -mt-10 relative z-20">
        
        {/* Product Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {Array.from({ length: MAX_COMPARE }).map((_, idx) => {
            const product = selectedProducts[idx];
            return (
              <AnimatePresence key={idx} mode="wait">
                {product ? (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="relative bg-white rounded-[2.5rem] border border-zinc-100 shadow-xl shadow-zinc-200/40 overflow-hidden group"
                  >
                    {/* Remove Button */}
                    <button
                      onClick={() => removeProduct(product.id)}
                      className="absolute top-5 right-5 z-30 w-10 h-10 bg-zinc-900/80 backdrop-blur-sm text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500"
                    >
                      <X className="w-4 h-4" />
                    </button>

                    {/* Image */}
                    <div className="aspect-square bg-zinc-50 flex items-center justify-center p-8 border-b border-zinc-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Info */}
                    <div className="p-6">
                      <span className="text-[10px] font-bold text-[#D4A373] uppercase tracking-widest">{product.category}</span>
                      <h3 className="text-lg font-bold text-zinc-900 mt-2 line-clamp-2 leading-tight">{product.name}</h3>
                      <p className="text-xs text-zinc-400 mt-2">{product.dimension}</p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.button
                    key={`empty-${idx}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setShowPicker(true)}
                    className="bg-white/50 rounded-[2.5rem] border-2 border-dashed border-zinc-200 hover:border-[#D4A373]/40 hover:bg-[#D4A373]/[0.02] transition-all min-h-[360px] flex flex-col items-center justify-center gap-4 group cursor-pointer"
                  >
                    <div className="w-20 h-20 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center group-hover:bg-[#D4A373]/10 group-hover:border-[#D4A373]/30 transition-colors">
                      <Plus className="w-8 h-8 text-zinc-300 group-hover:text-[#D4A373] transition-colors" />
                    </div>
                    <div>
                      <p className="text-zinc-400 font-bold text-sm">Tambah Produk</p>
                      <p className="text-zinc-300 text-xs mt-1">Klik untuk memilih</p>
                    </div>
                  </motion.button>
                )}
              </AnimatePresence>
            );
          })}
        </div>

        {/* Comparison Table */}
        {selectedProducts.length >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-24"
          >
            <div className="flex items-center justify-between mb-10">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <GitCompareArrows className="w-6 h-6 text-[#D4A373]" />
                  <h2 className="text-3xl font-black text-zinc-900 tracking-tight">Hasil Perbandingan</h2>
                </div>
                <p className="text-zinc-400 font-light">Perbandingan detail spesifikasi teknis dari {selectedProducts.length} produk yang dipilih.</p>
              </div>
              <button
                onClick={clearAll}
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-red-500 transition-colors font-medium px-4 py-2 rounded-xl border border-zinc-200 hover:border-red-200"
              >
                <Trash2 className="w-4 h-4" /> Mulai Ulang
              </button>
            </div>

            <div className="bg-white rounded-[3rem] border border-zinc-100 shadow-xl shadow-zinc-200/30 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="bg-zinc-900">
                      <th className="text-left px-8 py-6 text-[10px] font-bold uppercase tracking-widest text-zinc-400 w-1/4">
                        Spesifikasi
                      </th>
                      {selectedProducts.map(p => (
                        <th key={p.id} className="text-left px-6 py-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 overflow-hidden shrink-0">
                              <img src={p.image} alt={p.name} className="w-full h-full object-contain p-1" />
                            </div>
                            <span className="text-white font-bold text-sm line-clamp-2">{p.name}</span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {specRows.map((row, idx) => (
                      <tr key={row.key} className={`${idx % 2 === 0 ? "bg-zinc-50/50" : "bg-white"} border-b border-zinc-100/50 hover:bg-[#D4A373]/[0.02] transition-colors`}>
                        <td className="px-8 py-6 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                          {row.label}
                        </td>
                        {selectedProducts.map(p => (
                          <td key={p.id} className="px-6 py-6 text-sm font-medium text-zinc-800">
                            {p[row.key as keyof Product]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* Empty State */}
        {selectedProducts.length < 2 && (
          <div className="text-center py-20 mb-24">
            <div className="w-24 h-24 rounded-full bg-zinc-100 border border-zinc-200 mx-auto mb-8 flex items-center justify-center">
              <GitCompareArrows className="w-10 h-10 text-zinc-300" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-3">
              {selectedProducts.length === 0 ? "Pilih Produk untuk Dibandingkan" : "Tambahkan 1 Produk Lagi"}
            </h3>
            <p className="text-zinc-400 font-light max-w-md mx-auto mb-8">
              {selectedProducts.length === 0
                ? "Klik tombol \"+\" di atas untuk memilih produk dari katalog kami. Anda bisa membandingkan hingga 3 produk sekaligus."
                : "Tambahkan minimal 1 produk lagi agar tabel perbandingan muncul."}
            </p>
            <Link href="/products" className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 text-white rounded-2xl font-bold hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/10">
              Lihat Katalog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>

      {/* Product Picker Modal */}
      <AnimatePresence>
        {showPicker && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-zinc-900/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
            onClick={() => setShowPicker(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-[2.5rem] w-full max-w-2xl max-h-[80vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search Header */}
              <div className="p-8 border-b border-zinc-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-black text-zinc-900 tracking-tight">Pilih Produk</h3>
                  <button
                    onClick={() => setShowPicker(false)}
                    className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center hover:bg-zinc-200 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Ketik nama produk... (misal: palet, container, box)"
                    className="w-full pl-12 pr-4 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#D4A373] focus:border-[#D4A373] transition-all font-medium text-zinc-900 placeholder:text-zinc-400"
                    autoFocus
                  />
                </div>
              </div>

              {/* Results */}
              <div className="overflow-y-auto max-h-[50vh] p-4">
                {searchQuery.trim() === "" ? (
                  <div className="p-12 text-center">
                    <Search className="w-10 h-10 text-zinc-200 mx-auto mb-4" />
                    <p className="text-zinc-400 font-light">Ketik nama produk untuk mulai mencari...</p>
                  </div>
                ) : searchResults.length === 0 ? (
                  <div className="p-12 text-center">
                    <Package className="w-10 h-10 text-zinc-200 mx-auto mb-4" />
                    <p className="text-zinc-400 font-light">Tidak ada produk yang cocok dengan &quot;{searchQuery}&quot;</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {searchResults.map((product) => (
                      <button
                        key={product.id}
                        onClick={() => addProduct(product)}
                        className="w-full flex items-center gap-5 p-4 rounded-2xl hover:bg-zinc-50 transition-colors text-left group"
                      >
                        <div className="w-16 h-16 bg-zinc-50 rounded-2xl border border-zinc-100 overflow-hidden shrink-0">
                          <img src={product.image} alt={product.name} className="w-full h-full object-contain p-2" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-zinc-900 text-sm line-clamp-1 group-hover:text-[#D4A373] transition-colors">{product.name}</h4>
                          <p className="text-xs text-zinc-400 mt-1">{product.category} · {product.dimension}</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-[#D4A373] group-hover:text-white transition-colors">
                          <Plus className="w-4 h-4" />
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
