"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Plus,
  Search,
  Trash2,
  Pencil,
  Package,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { supabase, type Product } from "@/lib/supabase";

const ITEMS_PER_PAGE = 15;

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      let query = supabase
        .from("products")
        .select("*", { count: "exact" })
        .order("created_at", { ascending: false })
        .range(
          (currentPage - 1) * ITEMS_PER_PAGE,
          currentPage * ITEMS_PER_PAGE - 1
        );

      if (search) {
        query = query.ilike("name", `%${search}%`);
      }

      const { data, error, count } = await query;
      if (error) throw error;
      setProducts((data as Product[]) || []);
      setTotalCount(count || 0);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage, search]);

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase.from("products").delete().eq("id", id);
      if (error) throw error;
      setDeleteId(null);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Produk
          </h1>
          <p className="text-zinc-500 text-sm mt-1">
            Kelola semua produk di katalog digital.
          </p>
        </div>
        <Link
          href="/admin/products/new"
          className="inline-flex items-center gap-2 bg-[#D4A373] hover:bg-[#C19263] text-zinc-900 font-bold px-5 py-3 rounded-xl transition-all text-sm shadow-lg shadow-[#D4A373]/20"
        >
          <Plus className="w-4 h-4" />
          Tambah Produk
        </Link>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
        <input
          type="text"
          placeholder="Cari produk..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full pl-11 pr-4 py-3 bg-zinc-900 border border-zinc-800/50 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50 text-sm"
        />
      </div>

      {/* Products Table */}
      <div className="bg-zinc-900 border border-zinc-800/50 rounded-2xl overflow-hidden">
        {isLoading ? (
          <div className="p-12 text-center">
            <div className="w-8 h-8 border-2 border-zinc-700 border-t-[#D4A373] rounded-full animate-spin mx-auto mb-3"></div>
            <p className="text-zinc-500 text-sm">Memuat produk...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="p-12 text-center">
            <Package className="w-12 h-12 text-zinc-700 mx-auto mb-3" />
            <p className="text-zinc-400 font-medium">
              {search ? "Tidak ada produk yang cocok" : "Belum ada produk"}
            </p>
            <p className="text-zinc-600 text-sm mt-1">
              {search
                ? "Coba kata kunci lain"
                : "Klik tombol \"Tambah Produk\" untuk menambahkan."}
            </p>
          </div>
        ) : (
          <>
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 text-[10px] font-bold text-zinc-500 uppercase tracking-widest border-b border-zinc-800/50">
              <div className="col-span-1">Gambar</div>
              <div className="col-span-4">Nama Produk</div>
              <div className="col-span-2">Kategori</div>
              <div className="col-span-2">Dimensi</div>
              <div className="col-span-1">Material</div>
              <div className="col-span-2 text-right">Aksi</div>
            </div>

            {/* Table Rows */}
            {products.map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-4 border-b border-zinc-800/30 last:border-b-0 hover:bg-zinc-800/20 transition-colors items-center"
              >
                {/* Image */}
                <div className="col-span-1">
                  <div className="w-12 h-12 rounded-lg bg-zinc-800 border border-zinc-700/50 overflow-hidden flex items-center justify-center">
                    {product.image_url ? (
                      <img
                        src={product.image_url}
                        alt={product.name}
                        className="w-full h-full object-contain p-1"
                      />
                    ) : (
                      <Package className="w-5 h-5 text-zinc-600" />
                    )}
                  </div>
                </div>

                {/* Name */}
                <div className="col-span-4">
                  <p className="text-white font-medium text-sm line-clamp-1">
                    {product.name}
                  </p>
                  <p className="text-zinc-600 text-xs mt-0.5 truncate">
                    {product.slug}
                  </p>
                </div>

                {/* Category */}
                <div className="col-span-2">
                  <span className="px-2.5 py-1 bg-zinc-800 text-zinc-300 text-[10px] font-bold uppercase tracking-wider rounded-full">
                    {product.category}
                  </span>
                </div>

                {/* Dimension */}
                <div className="col-span-2 text-zinc-400 text-xs">
                  {product.length_outer > 0
                    ? `${product.length_outer} × ${product.width_outer} × ${product.height_outer}`
                    : "—"}
                </div>

                {/* Material */}
                <div className="col-span-1 text-zinc-400 text-xs truncate">
                  {product.material}
                </div>

                {/* Actions */}
                <div className="col-span-2 flex items-center justify-end gap-2">
                  <Link
                    href={`/admin/products/${product.id}/edit`}
                    className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-[#D4A373] hover:border-[#D4A373]/30 transition-all"
                  >
                    <Pencil className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={() => setDeleteId(product.id)}
                    className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-red-400 hover:border-red-500/30 transition-all"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <p className="text-zinc-500 text-xs">
            Halaman {currentPage} dari {totalPages} ({totalCount} produk)
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-9 h-9 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() =>
                setCurrentPage((p) => Math.min(totalPages, p + 1))
              }
              disabled={currentPage === totalPages}
              className="w-9 h-9 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 max-w-sm w-full shadow-2xl">
            <h3 className="text-white font-bold text-lg mb-2">
              Hapus Produk?
            </h3>
            <p className="text-zinc-400 text-sm mb-6">
              Tindakan ini tidak bisa dibatalkan. Produk akan dihapus permanen
              dari katalog.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteId(null)}
                className="flex-1 py-2.5 bg-zinc-800 text-zinc-300 rounded-xl hover:bg-zinc-700 transition-colors text-sm font-medium"
              >
                Batal
              </button>
              <button
                onClick={() => handleDelete(deleteId)}
                className="flex-1 py-2.5 bg-red-500/10 text-red-400 border border-red-500/20 rounded-xl hover:bg-red-500/20 transition-colors text-sm font-medium"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
