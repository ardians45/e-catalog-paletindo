"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Plus,
  Search,
  Trash2,
  Pencil,
  FileText,
  Eye,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { supabase, type Article } from "@/lib/supabase";

const ITEMS_PER_PAGE = 15;

export default function AdminArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const fetchArticles = async () => {
    setIsLoading(true);
    try {
      let query = supabase
        .from("articles")
        .select("*", { count: "exact" })
        .order("created_at", { ascending: false })
        .range(
          (currentPage - 1) * ITEMS_PER_PAGE,
          currentPage * ITEMS_PER_PAGE - 1
        );

      if (search) {
        query = query.ilike("title", `%${search}%`);
      }

      if (statusFilter !== "all") {
        query = query.eq("status", statusFilter);
      }

      const { data, error, count } = await query;
      if (error) throw error;
      setArticles((data as Article[]) || []);
      setTotalCount(count || 0);
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, [currentPage, search, statusFilter]);

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase.from("articles").delete().eq("id", id);
      if (error) throw error;
      setDeleteId(null);
      fetchArticles();
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Artikel & Berita
          </h1>
          <p className="text-zinc-500 text-sm mt-1">
            Kelola konten blog dan berita perusahaan.
          </p>
        </div>
        <Link
          href="/admin/articles/new"
          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-5 py-3 rounded-xl transition-all text-sm shadow-lg shadow-emerald-500/20"
        >
          <Plus className="w-4 h-4" />
          Tulis Artikel
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Cari artikel..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-11 pr-4 py-3 bg-zinc-900 border border-zinc-800/50 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-sm"
          />
        </div>
        <div className="flex gap-2">
          {["all", "published", "draft"].map((status) => (
            <button
              key={status}
              onClick={() => {
                setStatusFilter(status);
                setCurrentPage(1);
              }}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                statusFilter === status
                  ? "bg-zinc-800 text-white border border-zinc-700"
                  : "bg-zinc-900 text-zinc-500 border border-zinc-800/50 hover:text-zinc-300"
              }`}
            >
              {status === "all"
                ? "Semua"
                : status === "published"
                ? "Published"
                : "Draft"}
            </button>
          ))}
        </div>
      </div>

      {/* Articles List */}
      <div className="bg-zinc-900 border border-zinc-800/50 rounded-2xl overflow-hidden">
        {isLoading ? (
          <div className="p-12 text-center">
            <div className="w-8 h-8 border-2 border-zinc-700 border-t-emerald-400 rounded-full animate-spin mx-auto mb-3"></div>
            <p className="text-zinc-500 text-sm">Memuat artikel...</p>
          </div>
        ) : articles.length === 0 ? (
          <div className="p-12 text-center">
            <FileText className="w-12 h-12 text-zinc-700 mx-auto mb-3" />
            <p className="text-zinc-400 font-medium">
              {search
                ? "Tidak ada artikel yang cocok"
                : "Belum ada artikel"}
            </p>
            <p className="text-zinc-600 text-sm mt-1">
              {search
                ? "Coba kata kunci lain"
                : 'Klik tombol "Tulis Artikel" untuk memulai.'}
            </p>
          </div>
        ) : (
          <>
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 text-[10px] font-bold text-zinc-500 uppercase tracking-widest border-b border-zinc-800/50">
              <div className="col-span-5">Judul</div>
              <div className="col-span-2">Kategori</div>
              <div className="col-span-1">Status</div>
              <div className="col-span-2">Tanggal</div>
              <div className="col-span-2 text-right">Aksi</div>
            </div>

            {/* Rows */}
            {articles.map((article) => (
              <div
                key={article.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-4 border-b border-zinc-800/30 last:border-b-0 hover:bg-zinc-800/20 transition-colors items-center"
              >
                {/* Title */}
                <div className="col-span-5">
                  <p className="text-white font-medium text-sm line-clamp-1">
                    {article.title}
                  </p>
                  <p className="text-zinc-600 text-xs mt-0.5">
                    oleh {article.author}
                  </p>
                </div>

                {/* Category */}
                <div className="col-span-2">
                  <span className="px-2.5 py-1 bg-zinc-800 text-zinc-300 text-[10px] font-bold uppercase tracking-wider rounded-full">
                    {article.category}
                  </span>
                </div>

                {/* Status */}
                <div className="col-span-1">
                  <span
                    className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full ${
                      article.status === "published"
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        : "bg-zinc-800 text-zinc-400 border border-zinc-700/50"
                    }`}
                  >
                    {article.status === "published" ? "Live" : "Draft"}
                  </span>
                </div>

                {/* Date */}
                <div className="col-span-2 text-zinc-500 text-xs">
                  {new Date(article.created_at).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </div>

                {/* Actions */}
                <div className="col-span-2 flex items-center justify-end gap-2">
                  {article.status === "published" && (
                    <Link
                      href={`/blog/${article.slug}`}
                      target="_blank"
                      className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </Link>
                  )}
                  <Link
                    href={`/admin/articles/${article.id}/edit`}
                    className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-[#D4A373] hover:border-[#D4A373]/30 transition-all"
                  >
                    <Pencil className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={() => setDeleteId(article.id)}
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
            Halaman {currentPage} dari {totalPages} ({totalCount} artikel)
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-9 h-9 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() =>
                setCurrentPage((p) => Math.min(totalPages, p + 1))
              }
              disabled={currentPage === totalPages}
              className="w-9 h-9 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 max-w-sm w-full shadow-2xl">
            <h3 className="text-white font-bold text-lg mb-2">
              Hapus Artikel?
            </h3>
            <p className="text-zinc-400 text-sm mb-6">
              Artikel yang dihapus tidak bisa dikembalikan.
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
