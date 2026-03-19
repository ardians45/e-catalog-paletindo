"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Upload,
  X,
  Save,
  Image as ImageIcon,
} from "lucide-react";
import { supabase, uploadImage } from "@/lib/supabase";

const CATEGORIES = [
  "Container Industri",
  "Palet Plastik",
  "Box Food Grade",
  "Safety Equipment",
  "Lainnya",
];

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function NewProductPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    slug: "",
    description: "",
    material: "Plastik PP/HDPE",
    color: "Sesuai Gambar",
    weight: 0,
    is_featured: false,
    length_outer: 0,
    width_outer: 0,
    height_outer: 0,
    category: "Container Industri",
    applications: ["Industri", "Pergudangan", "Distribusi"],
  });

  const handleNameChange = (name: string) => {
    setForm((prev) => ({
      ...prev,
      name,
      slug: slugify(name),
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      let imageUrl = null;

      // Upload image first if exists
      if (imageFile) {
        const ext = imageFile.name.split(".").pop();
        const path = `${form.slug}-${Date.now()}.${ext}`;
        imageUrl = await uploadImage("product-images", imageFile, path);
      }

      // Insert product
      const { error: insertError } = await supabase.from("products").insert({
        ...form,
        image_url: imageUrl,
      });

      if (insertError) throw insertError;
      router.push("/admin/products");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Gagal menyimpan produk";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link
          href="/admin/products"
          className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800/50 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Tambah Produk Baru
          </h1>
          <p className="text-zinc-500 text-sm mt-0.5">
            Isi detail produk di bawah ini.
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Image Upload */}
        <div className="bg-zinc-900 border border-zinc-800/50 rounded-2xl p-6">
          <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">
            Gambar Produk
          </label>
          <div
            onClick={() => fileInputRef.current?.click()}
            className="relative border-2 border-dashed border-zinc-700 rounded-xl p-8 text-center cursor-pointer hover:border-[#D4A373]/50 transition-colors group"
          >
            {imagePreview ? (
              <div className="relative">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="max-h-64 mx-auto object-contain rounded-lg"
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setImagePreview(null);
                    setImageFile(null);
                  }}
                  className="absolute top-2 right-2 w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 hover:text-red-400 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center group-hover:bg-[#D4A373]/10 transition-colors">
                  <ImageIcon className="w-6 h-6 text-zinc-500 group-hover:text-[#D4A373] transition-colors" />
                </div>
                <div>
                  <p className="text-zinc-300 font-medium text-sm">
                    Klik untuk upload gambar
                  </p>
                  <p className="text-zinc-600 text-xs mt-1">
                    PNG, JPG, WebP (maks. 5MB)
                  </p>
                </div>
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

        {/* Basic Info */}
        <div className="bg-zinc-900 border border-zinc-800/50 rounded-2xl p-6 space-y-5">
          <h3 className="text-white font-bold text-sm mb-4">
            Informasi Dasar
          </h3>

          <div>
            <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
              Nama Produk *
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => handleNameChange(e.target.value)}
              required
              placeholder="Contoh: Container Plastik Solid 62 x 43 x 25 CM"
              className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50 text-sm"
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
              placeholder="container-plastik-solid-62x43x25"
              className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-zinc-400 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50 text-sm font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
              Deskripsi
            </label>
            <textarea
              value={form.description}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, description: e.target.value }))
              }
              rows={4}
              placeholder="Deskripsi lengkap produk..."
              className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50 text-sm resize-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                Kategori *
              </label>
              <select
                value={form.category}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, category: e.target.value }))
                }
                className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50 text-sm appearance-none"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                Material
              </label>
              <input
                type="text"
                value={form.material}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, material: e.target.value }))
                }
                className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50 text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                Warna
              </label>
              <input
                type="text"
                value={form.color}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, color: e.target.value }))
                }
                className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                Berat (gram)
              </label>
              <input
                type="number"
                value={form.weight}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    weight: parseFloat(e.target.value) || 0,
                  }))
                }
                className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Dimensions */}
        <div className="bg-zinc-900 border border-zinc-800/50 rounded-2xl p-6 space-y-5">
          <h3 className="text-white font-bold text-sm mb-4">
            Dimensi (cm)
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                Panjang
              </label>
              <input
                type="number"
                step="0.1"
                value={form.length_outer}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    length_outer: parseFloat(e.target.value) || 0,
                  }))
                }
                className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                Lebar
              </label>
              <input
                type="number"
                step="0.1"
                value={form.width_outer}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    width_outer: parseFloat(e.target.value) || 0,
                  }))
                }
                className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                Tinggi
              </label>
              <input
                type="number"
                step="0.1"
                value={form.height_outer}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    height_outer: parseFloat(e.target.value) || 0,
                  }))
                }
                className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Featured Toggle */}
        <div className="bg-zinc-900 border border-zinc-800/50 rounded-2xl p-6">
          <label className="flex items-center gap-3 cursor-pointer">
            <div
              className={`w-11 h-6 rounded-full transition-colors relative ${
                form.is_featured ? "bg-[#D4A373]" : "bg-zinc-700"
              }`}
              onClick={() =>
                setForm((prev) => ({
                  ...prev,
                  is_featured: !prev.is_featured,
                }))
              }
            >
              <div
                className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform ${
                  form.is_featured ? "translate-x-[22px]" : "translate-x-0.5"
                }`}
              />
            </div>
            <div>
              <p className="text-white font-medium text-sm">Produk Unggulan</p>
              <p className="text-zinc-500 text-xs">
                Tampilkan produk ini di halaman utama
              </p>
            </div>
          </label>
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
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 bg-[#D4A373] hover:bg-[#C19263] text-zinc-900 font-bold px-8 py-3.5 rounded-xl transition-all disabled:opacity-50 text-sm shadow-lg shadow-[#D4A373]/20"
          >
            {isSubmitting ? (
              <div className="w-4 h-4 border-2 border-zinc-900/30 border-t-zinc-900 rounded-full animate-spin"></div>
            ) : (
              <Save className="w-4 h-4" />
            )}
            Simpan Produk
          </button>
          <Link
            href="/admin/products"
            className="px-6 py-3.5 text-zinc-400 hover:text-white transition-colors text-sm font-medium"
          >
            Batal
          </Link>
        </div>
      </form>
    </div>
  );
}
