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
  Filter,
  MoreVertical,
  Star,
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
    <div className="space-y-8 max-w-7xl pb-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[#D4A373] font-bold text-[10px] uppercase tracking-[0.2em]">
            <Package className="w-3.5 h-3.5" />
            Inventory Manager
          </div>
          <h1 className="text-4xl font-extrabold text-zinc-900 tracking-tight">
            Produk
          </h1>
          <p className="text-zinc-500 text-sm font-medium">
            Kelola katalog produk digital Anda dengan presisi.
          </p>
        </div>
        <Link
          href="/admin/products/new"
          className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-bold px-8 py-4 rounded-2xl transition-all text-sm shadow-xl shadow-zinc-900/10 active:scale-95"
        >
          <Plus className="w-4.5 h-4.5 text-[#D4A373]" />
          Tambah Produk
        </Link>
      </div>

      {/* Control Bar */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-zinc-400 group-focus-within:text-[#D4A373] transition-colors" />
          <input
            type="text"
            placeholder="Search catalog by name..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-12 pr-4 py-4 bg-white border border-zinc-200 rounded-2xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-4 focus:ring-[#D4A373]/5 transition-all text-sm font-medium"
          />
        </div>
        <button className="px-6 py-4 bg-white border border-zinc-200 rounded-2xl text-zinc-600 font-bold text-sm flex items-center justify-center gap-2 hover:bg-zinc-50 transition-all">
          <Filter className="w-4 h-4" />
          Filters
        </button>
      </div>

      {/* Table Container */}
      <div className="bg-white border border-zinc-200 rounded-[2rem] overflow-hidden shadow-sm shadow-zinc-200/50">
        {isLoading ? (
          <div className="p-24 text-center">
            <div className="w-10 h-10 border-2 border-zinc-100 border-t-[#D4A373] rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-zinc-400 font-bold text-sm tracking-tight">Syncing Data...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="p-24 text-center space-y-4">
            <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center mx-auto">
              <Package className="w-10 h-10 text-zinc-200" />
            </div>
            <div>
              <p className="text-zinc-900 font-bold text-lg tracking-tight">
                {search ? "Empty Result" : "No Content Yet"}
              </p>
              <p className="text-zinc-500 text-sm font-medium mt-1">
                {search
                  ? "We couldn't find any products matching your search."
                  : "Start populating your catalog by adding your first product."}
              </p>
            </div>
            {!search && (
              <Link
                href="/admin/products/new"
                className="inline-block text-[#D4A373] font-bold text-sm hover:underline underline-offset-4"
              >
                Add Product Manually
              </Link>
            )}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-100 bg-zinc-50/50">
                  <th className="px-8 py-5 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Visual</th>
                  <th className="px-8 py-5 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">ID & Name</th>
                  <th className="px-8 py-5 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Category</th>
                  <th className="px-8 py-5 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Spec</th>
                  <th className="px-8 py-5 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Status</th>
                  <th className="px-8 py-5 text-[10px] font-bold text-zinc-400 uppercase tracking-widest text-right">Settings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-50">
                {products.map((product) => (
                  <tr
                    key={product.id}
                    className="group hover:bg-zinc-50/80 transition-all duration-200"
                  >
                    {/* Visual */}
                    <td className="px-8 py-6">
                      <div className="w-16 h-16 rounded-2xl bg-zinc-50 border border-zinc-100 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        {product.image_url ? (
                          <img
                            src={product.image_url}
                            alt={product.name}
                            className="w-full h-full object-contain p-2"
                          />
                        ) : (
                          <Package className="w-6 h-6 text-zinc-200" />
                        )}
                      </div>
                    </td>

                    {/* ID & Name */}
                    <td className="px-8 py-6">
                      <div>
                        <p className="text-zinc-900 font-extrabold text-base tracking-tight mb-1">
                          {product.name}
                        </p>
                        <p className="text-zinc-400 text-xs font-mono font-medium">
                          REF-{product.slug.toUpperCase()}
                        </p>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="px-8 py-6">
                      <span className="inline-flex items-center px-3 py-1 bg-zinc-100/80 text-zinc-600 text-[10px] font-bold uppercase tracking-widest rounded-full">
                        {product.category}
                      </span>
                    </td>

                    {/* Spec */}
                    <td className="px-8 py-6">
                      <div className="space-y-1">
                        <p className="text-zinc-500 text-xs font-bold leading-none">
                          {product.material}
                        </p>
                        <p className="text-zinc-400 text-[10px] font-medium uppercase tracking-tighter">
                          {product.length_outer > 0
                            ? `${product.length_outer}×${product.width_outer}×${product.height_outer}cm`
                            : "Size Unspecified"}
                        </p>
                      </div>
                    </td>

                    {/* Status Tags (is_featured example) */}
                    <td className="px-8 py-6">
                      {product.is_featured ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#D4A373]/10 text-[#B8860B] text-[10px] font-black uppercase tracking-[0.1em] rounded-lg border border-[#D4A373]/20">
                          <Star className="w-3 h-3 fill-current" />
                          Featured
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-3 py-1.5 bg-zinc-50 text-zinc-400 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-zinc-100">
                          Active
                        </span>
                      )}
                    </td>

                    {/* Actions */}
                    <td className="px-8 py-6 text-right">
                      <div className="flex items-center justify-end gap-3 translate-x-2 group-hover:translate-x-0 transition-transform">
                        <Link
                          href={`/admin/products/${product.id}/edit`}
                          className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:border-zinc-900 hover:shadow-lg hover:shadow-zinc-950/10 transition-all"
                          title="Edit"
                        >
                          <Pencil className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => setDeleteId(product.id)}
                          className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-red-500 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/10 transition-all"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between pt-6 px-4">
          <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">
            Showing <span className="text-zinc-900">{products.length}</span> of <span className="text-zinc-900">{totalCount}</span> units
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-12 h-12 rounded-2xl border border-zinc-200 bg-white flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:border-zinc-900 disabled:opacity-30 transition-all shadow-sm active:scale-90"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() =>
                setCurrentPage((p) => Math.min(totalPages, p + 1))
              }
              disabled={currentPage === totalPages}
              className="w-12 h-12 rounded-2xl border border-zinc-200 bg-white flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:border-zinc-900 disabled:opacity-30 transition-all shadow-sm active:scale-90"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 bg-zinc-950/20 backdrop-blur-xl z-[100] flex items-center justify-center p-6">
          <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-12 max-w-md w-full shadow-2xl space-y-8 animate-in fade-in zoom-in duration-300">
            <div className="w-20 h-20 bg-red-50 rounded-3xl flex items-center justify-center mx-auto">
              <Trash2 className="w-10 h-10 text-red-500" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-black text-zinc-900 tracking-tight">
                Hapus Unit?
              </h3>
              <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                Unit yang dipilih akan dihapus secara permanen dari sistem. Tindakan ini tidak dapat dibatalkan.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleDelete(deleteId)}
                className="w-full py-4 bg-red-600 text-white rounded-2xl hover:bg-red-700 transition-all text-sm font-bold shadow-xl shadow-red-600/20"
              >
                Hapus Permanen
              </button>
              <button
                onClick={() => setDeleteId(null)}
                className="w-full py-4 bg-zinc-100 text-zinc-600 rounded-2xl hover:bg-zinc-200 transition-all text-sm font-bold"
              >
                Batalkan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
