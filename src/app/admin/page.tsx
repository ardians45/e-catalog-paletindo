"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { 
  Package, 
  FileText, 
  TrendingUp, 
  Plus, 
  ArrowUpRight, 
  ArrowRight,
  Zap,
  LayoutGrid
} from "lucide-react";
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
      title: "Katalog Produk",
      value: stats.totalProducts,
      description: "Total SKU Terdaftar",
      icon: Package,
      color: "bg-blue-50 text-blue-600",
      href: "/admin/products",
    },
    {
      title: "Konten Artikel",
      value: stats.totalArticles,
      description: "Berita & Tips",
      icon: FileText,
      color: "bg-emerald-50 text-emerald-600",
      href: "/admin/articles",
    },
    {
      title: "Live Articles",
      value: stats.publishedArticles,
      description: "Sudah Terpublikasi",
      icon: TrendingUp,
      color: "bg-[#D4A373]/10 text-[#B8860B]",
      href: "/admin/articles",
    },
    {
      title: "Draft Mode",
      value: stats.draftArticles,
      description: "Dalam Antrean",
      icon: Zap,
      color: "bg-zinc-100 text-zinc-600",
      href: "/admin/articles",
    },
  ];

  return (
    <div className="space-y-12 max-w-7xl">
      {/* Welcome Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-[#D4A373] font-bold text-[10px] uppercase tracking-[0.2em]">
          <LayoutGrid className="w-3.5 h-3.5" />
          Dashboard Overview
        </div>
        <h1 className="text-4xl font-extrabold text-zinc-900 tracking-tight">
          Selamat Datang, Admin.
        </h1>
        <p className="text-zinc-500 text-base max-w-2xl font-medium">
          Pantau status produk dan kelola konten artikel Anda dalam satu tampilan minimalis yang efisien.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {statCards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group relative bg-white border border-zinc-200 rounded-[2rem] p-8 hover:border-[#D4A373]/50 hover:shadow-2xl hover:shadow-[#D4A373]/5 transition-all duration-300 overflow-hidden"
          >
            <div className={`w-14 h-14 rounded-2xl ${card.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
              <card.icon className="w-6 h-6" />
            </div>
            
            <div className="space-y-1">
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                {card.title}
              </p>
              {isLoading ? (
                <div className="h-10 w-20 bg-zinc-100 rounded-lg animate-pulse"></div>
              ) : (
                <h3 className="text-4xl font-black text-zinc-900 tracking-tight">
                  {card.value}
                </h3>
              )}
              <p className="text-sm text-zinc-500 font-medium">
                {card.description}
              </p>
            </div>

            <div className="absolute top-8 right-8 w-10 h-10 rounded-full border border-zinc-100 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-zinc-950 group-hover:text-white transition-all duration-300">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Actions & Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
              Aksi Cepat
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/admin/products/new"
              className="group flex flex-col justify-between bg-white border border-zinc-200 rounded-[2.5rem] p-8 hover:border-[#D4A373]/30 transition-all duration-300 h-64 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-[#D4A373]/10 border border-[#D4A373]/20 flex items-center justify-center mb-4 group-hover:bg-[#D4A373]/20 transition-colors">
                <Plus className="w-6 h-6 text-[#D4A373]" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-zinc-900 tracking-tight mb-2">Tambah Produk</h4>
                <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                  Perluas katalog digital Anda dengan unit atau spesifikasi terbaru.
                </p>
              </div>
              <div className="flex items-center gap-2 text-[#D4A373] font-bold text-xs uppercase tracking-widest mt-4">
                Luncurkan Produk <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            <Link
              href="/admin/articles/new"
              className="group flex flex-col justify-between bg-white border border-zinc-200 rounded-[2rem] p-8 hover:border-emerald-500/30 transition-all duration-300 h-64"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                <Plus className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-zinc-900 tracking-tight mb-2">Tulis Artikel</h4>
                <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                  Bagikan informasi terbaru atau edukasi industri kepada pelanggan.
                </p>
              </div>
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-widest mt-4">
                Buat Konten <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold text-zinc-900 tracking-tight px-2">Status Sistem</h3>
          <div className="bg-white border border-zinc-200 rounded-[2rem] p-8 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-sm font-bold text-zinc-900">Database Connected</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="text-sm font-bold text-zinc-900">Storage Online</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#D4A373]"></div>
                <span className="text-sm font-bold text-zinc-900">Vercel Edge Ready</span>
              </div>
            </div>
            
            <div className="pt-6 border-t border-zinc-100">
              <p className="text-sm text-zinc-500 font-medium leading-relaxed">
                Platform administrasi ini dioptimalkan untuk kecepatan dan kemudahan pengelolaan data katalog PT Paletindo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
