"use client";

import { useState, useEffect, useRef, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Save,
  Send,
  X,
  Image as ImageIcon,
} from "lucide-react";
import { supabase, uploadImage, type Article } from "@/lib/supabase";

const ARTICLE_CATEGORIES = [
  "Tips Operasional",
  "Industri B2B",
  "Studi Kasus",
  "Berita Perusahaan",
  "Umum",
];

export default function EditArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    category: "Umum",
    author: "Tim Paletindo",
    status: "draft" as "draft" | "published",
    thumbnail_url: null as string | null,
  });

  useEffect(() => {
    async function fetchArticle() {
      const { data, error: fetchError } = await supabase
        .from("articles")
        .select("*")
        .eq("id", id)
        .single();

      if (fetchError || !data) {
        router.push("/admin/articles");
        return;
      }

      const article = data as Article;
      setForm({
        title: article.title,
        slug: article.slug,
        content: article.content || "",
        excerpt: article.excerpt || "",
        category: article.category,
        author: article.author,
        status: article.status,
        thumbnail_url: article.thumbnail_url,
      });

      if (article.thumbnail_url) {
        setImagePreview(article.thumbnail_url);
      }
      setIsLoading(false);
    }

    fetchArticle();
  }, [id, router]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (status: "draft" | "published") => {
    setError("");
    setIsSubmitting(true);

    try {
      let thumbnailUrl = form.thumbnail_url;

      if (imageFile) {
        const ext = imageFile.name.split(".").pop();
        const path = `${form.slug}-${Date.now()}.${ext}`;
        thumbnailUrl = await uploadImage("article-images", imageFile, path);
      }

      const { error: updateError } = await supabase
        .from("articles")
        .update({
          title: form.title,
          slug: form.slug,
          content: form.content,
          excerpt: form.excerpt,
          category: form.category,
          author: form.author,
          thumbnail_url: thumbnailUrl,
          status,
          published_at:
            status === "published"
              ? form.status === "published"
                ? undefined
                : new Date().toISOString()
              : null,
        })
        .eq("id", id);

      if (updateError) throw updateError;
      router.push("/admin/articles");
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Gagal memperbarui artikel";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-2 border-zinc-700 border-t-emerald-400 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link
          href="/admin/articles"
          className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800/50 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Edit Artikel
          </h1>
          <p className="text-zinc-500 text-sm mt-0.5 truncate max-w-md">
            {form.title}
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="space-y-6">
        {/* Thumbnail */}
        <div className="bg-zinc-900 border border-zinc-800/50 rounded-2xl p-6">
          <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">
            Gambar Thumbnail
          </label>
          <div
            onClick={() => fileInputRef.current?.click()}
            className="relative border-2 border-dashed border-zinc-700 rounded-xl p-8 text-center cursor-pointer hover:border-emerald-500/50 transition-colors group"
          >
            {imagePreview ? (
              <div className="relative">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="max-h-48 mx-auto object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setImagePreview(null);
                    setImageFile(null);
                    setForm((prev) => ({ ...prev, thumbnail_url: null }));
                  }}
                  className="absolute top-2 right-2 w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 hover:text-red-400"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center">
                  <ImageIcon className="w-6 h-6 text-zinc-500" />
                </div>
                <p className="text-zinc-300 font-medium text-sm">
                  Klik untuk upload thumbnail baru
                </p>
              </div>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
        </div>

        {/* Article Info */}
        <div className="bg-zinc-900 border border-zinc-800/50 rounded-2xl p-6 space-y-5">
          <div>
            <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
              Judul Artikel *
            </label>
            <input
              type="text"
              value={form.title}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, title: e.target.value }))
              }
              required
              className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
              Slug (URL)
            </label>
            <input
              type="text"
              value={form.slug}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, slug: e.target.value }))
              }
              className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-sm font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
              Ringkasan (Excerpt)
            </label>
            <textarea
              value={form.excerpt}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, excerpt: e.target.value }))
              }
              rows={2}
              className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-sm resize-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                Kategori
              </label>
              <select
                value={form.category}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, category: e.target.value }))
                }
                className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-sm appearance-none"
              >
                {ARTICLE_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                Penulis
              </label>
              <input
                type="text"
                value={form.author}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, author: e.target.value }))
                }
                className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-zinc-900 border border-zinc-800/50 rounded-2xl p-6">
          <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">
            Konten Artikel *
          </label>
          <textarea
            value={form.content}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, content: e.target.value }))
            }
            rows={16}
            className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-sm resize-y font-mono leading-relaxed"
          />
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm px-4 py-3 rounded-xl">
            {error}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-3 pt-4">
          <button
            onClick={() => handleSubmit("published")}
            disabled={isSubmitting || !form.title}
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-3.5 rounded-xl transition-all disabled:opacity-50 text-sm shadow-lg shadow-emerald-500/20"
          >
            {isSubmitting ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <Send className="w-4 h-4" />
            )}
            {form.status === "published" ? "Perbarui & Publish" : "Publish"}
          </button>
          <button
            onClick={() => handleSubmit("draft")}
            disabled={isSubmitting || !form.title}
            className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold px-6 py-3.5 rounded-xl transition-all disabled:opacity-50 text-sm border border-zinc-700/50"
          >
            <Save className="w-4 h-4" />
            Simpan Draft
          </button>
          <Link
            href="/admin/articles"
            className="px-6 py-3.5 text-zinc-400 hover:text-white transition-colors text-sm font-medium"
          >
            Batal
          </Link>
        </div>
      </div>
    </div>
  );
}
