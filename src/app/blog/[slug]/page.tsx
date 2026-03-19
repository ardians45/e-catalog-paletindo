"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Share2, FileText } from "lucide-react";
import { supabase, type Article, isSupabaseConfigured } from "@/lib/supabase";

export default function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchArticle() {
      if (isSupabaseConfigured()) {
        try {
          const { data, error } = await supabase
            .from("articles")
            .select("*")
            .eq("slug", slug)
            .single();

          if (!error && data) {
            setArticle(data as Article);
          }
        } catch (err) {
          console.error("Error fetching article:", err);
        }
      }
      setIsLoading(false);
    }

    fetchArticle();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-zinc-300 border-t-[#D4A373] rounded-full animate-spin"></div>
          <p className="text-zinc-400 text-sm">Memuat artikel...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center">
        <div className="text-center">
          <FileText className="w-16 h-16 text-zinc-200 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-4 text-zinc-900">
            Artikel tidak ditemukan
          </h1>
          <Link
            href="/blog"
            className="text-[#D4A373] hover:underline font-medium"
          >
            Kembali ke Blog
          </Link>
        </div>
      </div>
    );
  }

  const publishedDate = article.published_at
    ? new Date(article.published_at).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : new Date(article.created_at).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen">
      {/* Header */}
      <div className="bg-zinc-900 pt-28 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4A373]/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Blog
          </Link>

          <div className="max-w-3xl">
            <span className="px-3 py-1 bg-[#D4A373]/20 text-[#D4A373] text-xs font-bold uppercase tracking-widest rounded-full mb-6 inline-block">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap gap-6 items-center text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {publishedDate}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {article.author}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnail */}
      {article.thumbnail_url && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-[16/8] rounded-3xl overflow-hidden shadow-2xl shadow-zinc-300/50 border border-zinc-200/50">
              <img
                src={article.thumbnail_url}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Article Content */}
          <article
            className="prose prose-lg prose-zinc max-w-none 
              prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-zinc-600 prose-p:leading-relaxed prose-p:font-light
              prose-a:text-[#D4A373] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-zinc-900
              prose-ul:text-zinc-600 prose-ol:text-zinc-600
              prose-li:font-light
              prose-img:rounded-2xl prose-img:shadow-lg
            "
            dangerouslySetInnerHTML={{
              __html: article.content || "<p>Konten belum tersedia.</p>",
            }}
          />

          {/* Share & Navigation */}
          <div className="mt-16 pt-8 border-t border-zinc-200">
            <div className="flex items-center justify-between">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors font-medium text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Kembali ke Blog
              </Link>

              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: article.title,
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                  }
                }}
                className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors font-medium text-sm"
              >
                <Share2 className="w-4 h-4" />
                Bagikan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
