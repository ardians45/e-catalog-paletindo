"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  X,
  Save,
  Image as ImageIcon,
  ChevronRight,
  Info,
  Sparkles,
  Package,
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

      if (imageFile) {
        const ext = imageFile.name.split(".").pop();
        const path = `${form.slug}-${Date.now()}.${ext}`;
        imageUrl = await uploadImage("product-images", imageFile, path);
      }

      if (form.is_featured) {
        await supabase
          .from("products")
          .update({ is_featured: false })
          .eq("is_featured", true);
      }

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
    <div className="max-w-5xl mx-auto space-y-10 pb-32">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <Link
            href="/admin/products"
            className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:border-zinc-900 transition-all shadow-sm active:scale-90"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <div className="flex items-center gap-2 text-[#D4A373] font-bold text-[10px] uppercase tracking-[0.2em] mb-1">
              Create New Entry
            </div>
            <h1 className="text-3xl font-black text-zinc-900 tracking-tight">
              Tambah Produk
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/products"
            className="px-6 py-3 text-zinc-500 hover:text-zinc-900 font-bold text-sm transition-colors"
          >
            Batalkan
          </Link>
          <button
            onClick={(e) => handleSubmit(e as any)}
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-bold px-8 py-4 rounded-2xl transition-all text-sm shadow-xl shadow-zinc-950/10 disabled:opacity-50 active:scale-95"
          >
            {isSubmitting ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <Save className="w-4 h-4 text-[#D4A373]" />
            )}
            Simpan Produk
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Basic Info */}
          <section className="bg-white border border-zinc-200 rounded-[2.5rem] p-10 space-y-8 shadow-sm">
            <div className="flex items-center gap-3 border-b border-zinc-50 pb-6">
              <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center">
                <Info className="w-5 h-5 text-zinc-400" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 tracking-tight">Informasi Dasar</h3>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">
                  Nama Produk <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  required
                  placeholder="e.g. Container Plastik Solid Premium"
                  className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-4 focus:ring-[#D4A373]/5 focus:bg-white focus:border-[#D4A373]/30 transition-all text-sm font-semibold"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">
                  URL Slug
                </label>
                <div className="relative">
                  <span className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400 text-sm font-medium">/products/</span>
                  <input
                    type="text"
                    value={form.slug}
                    onChange={(e) => setForm((prev) => ({ ...prev, slug: e.target.value }))}
                    className="w-full pl-24 pr-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl text-zinc-500 focus:outline-none transition-all text-sm font-mono"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">
                  Deskripsi Produk
                </label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))}
                  rows={6}
                  placeholder="Ceritakan detail keunggulan produk ini..."
                  className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-4 focus:ring-[#D4A373]/5 focus:bg-white focus:border-[#D4A373]/30 transition-all text-sm font-medium resize-none leading-relaxed"
                />
              </div>
            </div>
          </section>

          {/* Technical Specs */}
          <section className="bg-white border border-zinc-200 rounded-[2.5rem] p-10 space-y-8 shadow-sm">
            <div className="flex items-center gap-3 border-b border-zinc-50 pb-6">
              <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center">
                <Package className="w-5 h-5 text-zinc-400" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 tracking-tight">Spesifikasi Teknis</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">
                  Material Konstruksi
                </label>
                <input
                  type="text"
                  value={form.material}
                  onChange={(e) => setForm((prev) => ({ ...prev, material: e.target.value }))}
                  className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl text-zinc-900 text-sm font-semibold focus:outline-none focus:border-[#D4A373]/30 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">
                  Warna Standar
                </label>
                <input
                  type="text"
                  value={form.color}
                  onChange={(e) => setForm((prev) => ({ ...prev, color: e.target.value }))}
                  className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl text-zinc-900 text-sm font-semibold focus:outline-none focus:border-[#D4A373]/30 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">
                  Berat (gram)
                </label>
                <input
                  type="number"
                  value={form.weight}
                  onChange={(e) => setForm((prev) => ({ ...prev, weight: parseFloat(e.target.value) || 0 }))}
                  className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl text-zinc-900 text-sm font-semibold focus:outline-none focus:border-[#D4A373]/30 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">
                  Kategori Produk
                </label>
                <select
                  value={form.category}
                  onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value }))}
                  className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl text-zinc-900 text-sm font-semibold focus:outline-none focus:border-[#D4A373]/30 transition-all appearance-none"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="pt-4 space-y-4">
              <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">
                Dimensi Luar (cm)
              </label>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-zinc-50 border border-zinc-100 rounded-2xl p-4 flex flex-col items-center">
                  <span className="text-[9px] font-bold text-zinc-400 uppercase mb-1">Panjang</span>
                  <input
                    type="number"
                    step="0.1"
                    value={form.length_outer}
                    onChange={(e) => setForm((prev) => ({ ...prev, length_outer: parseFloat(e.target.value) || 0 }))}
                    className="w-full bg-transparent text-center text-zinc-900 font-bold focus:outline-none"
                  />
                </div>
                <div className="bg-zinc-50 border border-zinc-100 rounded-2xl p-4 flex flex-col items-center">
                  <span className="text-[9px] font-bold text-zinc-400 uppercase mb-1">Lebar</span>
                  <input
                    type="number"
                    step="0.1"
                    value={form.width_outer}
                    onChange={(e) => setForm((prev) => ({ ...prev, width_outer: parseFloat(e.target.value) || 0 }))}
                    className="w-full bg-transparent text-center text-zinc-900 font-bold focus:outline-none"
                  />
                </div>
                <div className="bg-zinc-50 border border-zinc-100 rounded-2xl p-4 flex flex-col items-center">
                  <span className="text-[9px] font-bold text-zinc-400 uppercase mb-1">Tinggi</span>
                  <input
                    type="number"
                    step="0.1"
                    value={form.height_outer}
                    onChange={(e) => setForm((prev) => ({ ...prev, height_outer: parseFloat(e.target.value) || 0 }))}
                    className="w-full bg-transparent text-center text-zinc-900 font-bold focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar Controls */}
        <div className="space-y-8">
          {/* Image Manager */}
          <section className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-zinc-900 tracking-tight">Media & Visual</h3>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="relative aspect-square border-2 border-dashed border-zinc-100 rounded-[2rem] flex flex-col items-center justify-center cursor-pointer hover:bg-zinc-50 transition-all group overflow-hidden"
            >
              {imagePreview ? (
                <>
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setImagePreview(null);
                        setImageFile(null);
                      }}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-red-500 shadow-xl"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center gap-4 p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-50 flex items-center justify-center group-hover:bg-white group-hover:shadow-lg transition-all">
                    <ImageIcon className="w-8 h-8 text-zinc-300 group-hover:text-[#D4A373]" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-zinc-900 font-bold text-sm">Upload Image</p>
                    <p className="text-zinc-400 text-xs font-medium">PNG, JPG, WebP <br/> (max. 5MB)</p>
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
          </section>

          {/* Visibility & Logic */}
          <section className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-zinc-900 tracking-tight">Pengaturan Publikasi</h3>
            
            <label className="flex items-start gap-4 p-4 rounded-3xl hover:bg-zinc-50 transition-colors cursor-pointer group">
              <div
                className={`w-12 h-7 rounded-full transition-all relative shrink-0 mt-1 ${
                  form.is_featured ? "bg-[#D4A373]" : "bg-zinc-200"
                }`}
                onClick={() => setForm((prev) => ({ ...prev, is_featured: !prev.is_featured }))}
              >
                <div
                  className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-lg transition-all ${
                    form.is_featured ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </div>
              <div>
                <p className="text-zinc-900 font-bold text-sm flex items-center gap-2">
                  Produk Unggulan
                  <Sparkles className={`w-3.5 h-3.5 ${form.is_featured ? "text-[#D4A373] fill-current" : "text-zinc-300"}`} />
                </p>
                <p className="text-zinc-500 text-[11px] font-medium leading-relaxed mt-1">
                  Tampilkan di billboard halaman utama website.
                </p>
              </div>
            </label>

            {error && (
              <div className="bg-red-50 border border-red-100 text-red-600 text-[11px] font-bold px-4 py-3 rounded-2xl flex items-start gap-2">
                <X className="w-3.5 h-3.5 shrink-0" />
                {error}
              </div>
            )}
          </section>
        </div>
      </form>
    </div>
  );
}
