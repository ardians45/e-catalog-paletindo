"use client";

import { useState, useEffect, useRef, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Save,
  X,
  Image as ImageIcon,
} from "lucide-react";
import { supabase, uploadImage, type Product } from "@/lib/supabase";

const CATEGORIES = [
  "Container Industri",
  "Palet Plastik",
  "Box Food Grade",
  "Safety Equipment",
  "Lainnya",
];

export default function EditProductPage({
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
    image_url: null as string | null,
  });

  useEffect(() => {
    async function fetchProduct() {
      const { data, error: fetchError } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

      if (fetchError || !data) {
        router.push("/admin/products");
        return;
      }

      const product = data as Product;
      setForm({
        name: product.name,
        slug: product.slug,
        description: product.description || "",
        material: product.material,
        color: product.color,
        weight: product.weight,
        is_featured: product.is_featured,
        length_outer: product.length_outer,
        width_outer: product.width_outer,
        height_outer: product.height_outer,
        category: product.category,
        applications: product.applications,
        image_url: product.image_url,
      });

      if (product.image_url) {
        setImagePreview(product.image_url);
      }
      setIsLoading(false);
    }

    fetchProduct();
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      let imageUrl = form.image_url;

      if (imageFile) {
        const ext = imageFile.name.split(".").pop();
        const path = `${form.slug}-${Date.now()}.${ext}`;
        imageUrl = await uploadImage("product-images", imageFile, path);
      }

      const { error: updateError } = await supabase
        .from("products")
        .update({
          name: form.name,
          slug: form.slug,
          description: form.description,
          material: form.material,
          color: form.color,
          weight: form.weight,
          is_featured: form.is_featured,
          length_outer: form.length_outer,
          width_outer: form.width_outer,
          height_outer: form.height_outer,
          category: form.category,
          applications: form.applications,
          image_url: imageUrl,
        })
        .eq("id", id);

      if (updateError) throw updateError;
      router.push("/admin/products");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Gagal memperbarui produk";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-2 border-zinc-700 border-t-[#D4A373] rounded-full animate-spin"></div>
      </div>
    );
  }

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
            Edit Produk
          </h1>
          <p className="text-zinc-500 text-sm mt-0.5 truncate max-w-md">
            {form.name}
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
                    setForm((prev) => ({ ...prev, image_url: null }));
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
                  Klik untuk upload gambar baru
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

        {/* Basic Info */}
        <div className="bg-zinc-900 border border-zinc-800/50 rounded-2xl p-6 space-y-5">
          <h3 className="text-white font-bold text-sm mb-4">Informasi Dasar</h3>

          <div>
            <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
              Nama Produk *
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, name: e.target.value }))
              }
              required
              className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50 text-sm"
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
              className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50 text-sm font-mono"
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
              className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50 text-sm resize-none"
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
                  <option key={cat} value={cat}>{cat}</option>
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
                className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50 text-sm"
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
                className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50 text-sm"
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
                className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Dimensions */}
        <div className="bg-zinc-900 border border-zinc-800/50 rounded-2xl p-6 space-y-5">
          <h3 className="text-white font-bold text-sm mb-4">Dimensi (cm)</h3>
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
            Simpan Perubahan
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
