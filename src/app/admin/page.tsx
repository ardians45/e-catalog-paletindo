"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Package, FileText, TrendingUp, Plus, ArrowUpRight } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalArticles: 0,
    publishedArticles: 0,
    draftArticles: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [productsRes, articlesRes, publishedRes, draftsRes] =
          await Promise.all([
            supabase
              .from("products")
              .select("*", { count: "exact", head: true }),
            supabase
              .from("articles")
              .select("*", { count: "exact", head: true }),
            supabase
              .from("articles")
              .select("*", { count: "exact", head: true })
              .eq("status", "published"),
            supabase
              .from("articles")
              .select("*", { count: "exact", head: true })
              .eq("status", "draft"),
          ]);

        setStats({
          totalProducts: productsRes.count || 0,
          totalArticles: articlesRes.count || 0,
          publishedArticles: publishedRes.count || 0,
          draftArticles: draftsRes.count || 0,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchStats();
  }, []);

  const statCards = [
    {
      title: "Total Produk",
      value: stats.totalProducts,
      icon: Package,
      color: "from-blue-500/20 to-blue-600/10",
      iconColor: "text-blue-400",
      href: "/admin/products",
    },
    {
      title: "Total Artikel",
      value: stats.totalArticles,
      icon: FileText,
      color: "from-emerald-500/20 to-emerald-600/10",
      iconColor: "text-emerald-400",
      href: "/admin/articles",
    },
    {
      title: "Artikel Published",
      value: stats.publishedArticles,
      icon: TrendingUp,
      color: "from-[#D4A373]/20 to-[#D4A373]/10",
      iconColor: "text-[#D4A373]",
      href: "/admin/articles",
    },
    {
      title: "Artikel Draft",
      value: stats.draftArticles,
      icon: FileText,
      color: "from-zinc-500/20 to-zinc-600/10",
      iconColor: "text-zinc-400",
      href: "/admin/articles",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Dashboard
          </h1>
          <p className="text-zinc-500 text-sm mt-1">
            Kelola produk dan konten website PT Paletindo.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {statCards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group bg-zinc-900 border border-zinc-800/50 rounded-2xl p-6 hover:border-zinc-700 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center`}
              >
                <card.icon className={`w-5 h-5 ${card.iconColor}`} />
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-700 group-hover:text-zinc-400 transition-colors" />
            </div>
            <div>
              {isLoading ? (
                <div className="h-8 w-16 bg-zinc-800 rounded animate-pulse mb-1"></div>
              ) : (
                <p className="text-3xl font-bold text-white mb-1">
                  {card.value}
                </p>
              )}
              <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium">
                {card.title}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          href="/admin/products/new"
          className="group flex items-center gap-4 bg-zinc-900 border border-zinc-800/50 rounded-2xl p-6 hover:border-[#D4A373]/30 hover:bg-zinc-900/80 transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-[#D4A373]/10 border border-[#D4A373]/20 flex items-center justify-center group-hover:bg-[#D4A373]/20 transition-colors">
            <Plus className="w-5 h-5 text-[#D4A373]" />
          </div>
          <div>
            <h3 className="text-white font-bold text-sm">Tambah Produk Baru</h3>
            <p className="text-zinc-500 text-xs mt-0.5">
              Tambahkan produk ke katalog digital
            </p>
          </div>
          <ArrowUpRight className="w-4 h-4 text-zinc-700 ml-auto group-hover:text-[#D4A373] transition-colors" />
        </Link>

        <Link
          href="/admin/articles/new"
          className="group flex items-center gap-4 bg-zinc-900 border border-zinc-800/50 rounded-2xl p-6 hover:border-emerald-500/30 hover:bg-zinc-900/80 transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
            <Plus className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-white font-bold text-sm">Tulis Artikel Baru</h3>
            <p className="text-zinc-500 text-xs mt-0.5">
              Publikasikan berita atau tips industri
            </p>
          </div>
          <ArrowUpRight className="w-4 h-4 text-zinc-700 ml-auto group-hover:text-emerald-400 transition-colors" />
        </Link>
      </div>

      {/* Info Banner */}
      <div className="bg-zinc-900 border border-zinc-800/50 rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
            <TrendingUp className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h3 className="text-white font-bold text-sm mb-1">
              Selamat datang di Admin CMS
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Dari sini Anda bisa mengelola seluruh konten website PT Paletindo.
              Gunakan sidebar untuk navigasi ke halaman Produk dan Artikel.
              Semua perubahan akan langsung terlihat di website publik.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
