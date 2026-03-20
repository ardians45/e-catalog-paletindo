"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Plus,
  Search,
  Trash2,
  Pencil,
  FileText,
  ChevronLeft,
  ChevronRight,
  Eye,
  Calendar,
  User,
  Zap,
} from "lucide-react";
import { supabase, type Article } from "@/lib/supabase";

const ITEMS_PER_PAGE = 15;

export default function AdminArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
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
  }, [currentPage, search]);

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
    <div className="space-y-6 md:space-y-8 max-w-7xl pb-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-emerald-600 font-bold text-[10px] uppercase tracking-[0.2em]">
            <FileText className="w-3.5 h-3.5" />
            Content Management
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Artikel
          </h1>
          <p className="text-zinc-500 text-sm font-medium">
            Kelola publikasi blog dan berita terbaru perusahaan.
          </p>
        </div>
        <Link
          href="/admin/articles/new"
          className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-bold px-8 py-4 rounded-2xl transition-all text-sm shadow-xl shadow-zinc-950/10 active:scale-95 w-full sm:w-auto"
        >
          <Plus className="w-4.5 h-4.5 text-emerald-400" />
          Tulis Artikel
        </Link>
      </div>

      {/* Control Bar */}
      <div className="relative group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-zinc-400 group-focus-within:text-emerald-500 transition-colors" />
        <input
          type="text"
          placeholder="Cari judul artikel..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full pl-12 pr-4 py-4 bg-white border border-zinc-200 rounded-2xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/5 transition-all text-sm font-medium"
        />
      </div>

      {/* Content Area */}
      {isLoading ? (
        <div className="bg-white border border-zinc-200 rounded-[2rem] p-24 text-center">
          <div className="w-10 h-10 border-2 border-zinc-100 border-t-emerald-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-zinc-400 font-bold text-sm tracking-tight">Fetching Publications...</p>
        </div>
      ) : articles.length === 0 ? (
        <div className="bg-white border border-zinc-200 rounded-[2rem] p-24 text-center space-y-4">
          <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center mx-auto">
            <FileText className="w-10 h-10 text-zinc-200" />
          </div>
          <div>
            <p className="text-zinc-900 font-bold text-lg tracking-tight">Quiet in the Newsroom</p>
            <p className="text-zinc-500 text-sm font-medium mt-1">
              {search
                ? "We couldn't find any articles matching your search."
                : "Every story starts with a single word. Time to write yours."}
            </p>
          </div>
        </div>
      ) : (
        <>
          {/* Desktop Table View */}
          <div className="hidden md:block bg-white border border-zinc-200 rounded-[2rem] overflow-hidden shadow-sm shadow-zinc-200/50">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-zinc-100 bg-zinc-50/50">
                    <th className="px-8 py-5 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Preview</th>
                    <th className="px-8 py-5 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Article Title</th>
                    <th className="px-8 py-5 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Metadata</th>
                    <th className="px-8 py-5 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Status</th>
                    <th className="px-8 py-5 text-[10px] font-bold text-zinc-400 uppercase tracking-widest text-right">Settings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-50">
                  {articles.map((article) => (
                    <tr key={article.id} className="group hover:bg-zinc-50/80 transition-all duration-200">
                      <td className="px-8 py-6">
                        <div className="w-20 h-14 rounded-xl bg-zinc-50 border border-zinc-100 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                          {article.thumbnail_url ? (
                            <img src={article.thumbnail_url} alt={article.title} className="w-full h-full object-cover" />
                          ) : (
                            <FileText className="w-5 h-5 text-zinc-200" />
                          )}
                        </div>
                      </td>
                      <td className="px-8 py-6 min-w-[300px]">
                        <div>
                          <p className="text-zinc-900 font-extrabold text-base tracking-tight mb-1 line-clamp-1 group-hover:text-emerald-600 transition-colors">
                            {article.title}
                          </p>
                          <p className="text-zinc-400 text-xs font-medium truncate max-w-xs">{article.slug}</p>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="space-y-1.5 font-medium tracking-tight">
                          <div className="flex items-center gap-2 text-zinc-500 text-xs truncate max-w-[150px]">
                            <User className="w-3 h-3 text-zinc-300" /> {article.author}
                          </div>
                          <div className="flex items-center gap-2 text-zinc-400 text-[10px] font-bold uppercase tracking-wider">
                            <Calendar className="w-3 h-3 text-zinc-200" />
                            {new Date(article.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        {article.status === "published" ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-[0.1em] rounded-lg border border-emerald-100">
                            <Zap className="w-3 h-3 fill-current" /> Published
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-3 py-1.5 bg-zinc-50 text-zinc-400 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-zinc-100">Draft</span>
                        )}
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex items-center justify-end gap-3 translate-x-2 group-hover:translate-x-0 transition-transform">
                          <Link href={`/blog/${article.slug}`} target="_blank" className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:border-zinc-900 transition-all shadow-sm">
                            <Eye className="w-4 h-4" />
                          </Link>
                          <Link href={`/admin/articles/${article.id}/edit`} className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-emerald-600 hover:border-emerald-600 transition-all shadow-sm">
                            <Pencil className="w-4 h-4" />
                          </Link>
                          <button onClick={() => setDeleteId(article.id)} className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-red-500 hover:border-red-500 transition-all shadow-sm">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="md:hidden space-y-4">
            {articles.map((article) => (
              <div key={article.id} className="bg-white border border-zinc-200 rounded-3xl p-4 sm:p-5 space-y-4 shadow-sm active:scale-[0.98] transition-all">
                <div className="flex gap-3 sm:gap-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-zinc-50 border border-zinc-100 overflow-hidden flex items-center justify-center shrink-0">
                    {article.thumbnail_url ? (
                      <img src={article.thumbnail_url} alt={article.title} className="w-full h-full object-cover" />
                    ) : (
                      <FileText className="w-6 h-6 text-zinc-200" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0 py-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      {article.status === "published" ? (
                        <span className="inline-flex px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[9px] font-bold uppercase tracking-widest rounded-md border border-emerald-100">
                          Live
                        </span>
                      ) : (
                        <span className="inline-flex px-2 py-0.5 bg-zinc-100 text-zinc-500 text-[9px] font-bold uppercase tracking-widest rounded-md">
                          Draft
                        </span>
                      )}
                      <span className="text-zinc-400 text-[9px] font-bold uppercase">{article.category}</span>
                    </div>
                    <h4 className="text-zinc-900 font-extrabold text-base tracking-tight truncate leading-tight">
                      {article.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1 px-0.5">
                       <User className="w-3 h-3 text-zinc-300" />
                       <span className="text-zinc-500 text-[10px] font-medium truncate">{article.author}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <Link
                    href={`/blog/${article.slug}`}
                    target="_blank"
                    className="flex-1 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center gap-2 text-zinc-600 font-bold text-xs"
                  >
                    <Eye className="w-4 h-4" /> View
                  </Link>
                  <Link
                    href={`/admin/articles/${article.id}/edit`}
                    className="flex-1 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center gap-2 text-zinc-600 font-bold text-xs"
                  >
                    <Pencil className="w-3.5 h-3.5" /> Edit
                  </Link>
                  <button
                    onClick={() => setDeleteId(article.id)}
                    className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-500"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between pt-6 px-4">
           <p className="hidden sm:block text-zinc-400 text-xs font-bold uppercase tracking-widest">
            Showing <span className="text-zinc-900">{articles.length}</span> / <span className="text-zinc-900">{totalCount}</span>
          </p>
          <p className="sm:hidden text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
            <span className="text-zinc-900">{currentPage}</span> of <span className="text-zinc-900">{totalPages}</span> Pages
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
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
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
          <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 md:p-12 max-w-md w-full shadow-2xl space-y-8 animate-in fade-in zoom-in duration-300">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-red-50 rounded-3xl flex items-center justify-center mx-auto">
              <Trash2 className="w-8 h-8 md:w-10 md:h-10 text-red-500" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-xl md:text-2xl font-black text-zinc-900 tracking-tight">Hapus Artikel?</h3>
              <p className="text-zinc-500 text-xs md:text-sm font-medium leading-relaxed">
                Tulisan Anda akan dihapus secara permanen dari basis data dan tidak dapat dipulihkan kembali.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleDelete(deleteId)}
                className="w-full py-4 bg-red-600 text-white rounded-2xl hover:bg-red-700 transition-all text-sm font-bold shadow-xl shadow-red-600/20"
              >
                Hapus Selamanya
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
