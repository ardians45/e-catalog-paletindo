"use client";

import { useState, useEffect, useRef, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Save,
  X,
  Image as ImageIcon,
  ChevronRight,
  Info,
  Package,
  Sparkles,
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

      if (form.is_featured) {
        await supabase
          .from("products")
          .update({ is_featured: false })
          .neq("id", id)
          .eq("is_featured", true);
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
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <div className="w-10 h-10 border-2 border-zinc-200 border-t-[#D4A373] rounded-full animate-spin"></div>
      </div>
    );
  }

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
              Editor & Revision
            </div>
            <h1 className="text-3xl font-black text-zinc-900 tracking-tight">
              Edit Produk
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/products"
            className="px-6 py-3 text-zinc-500 hover:text-zinc-900 font-bold text-sm transition-colors"
          >
            Batal
          </Link>
          <button
            onClick={(e) => handleSubmit(e as any)}
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-bold px-8 py-4 rounded-2xl transition-all text-sm shadow-xl shadow-zinc-950/10 active:scale-95"
          >
            {isSubmitting ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <Save className="w-4 h-4 text-[#D4A373]" />
            )}
            Simpan Perubahan
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
                  onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                  required
                  className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl text-zinc-900 focus:outline-none focus:border-[#D4A373]/30 transition-all text-sm font-semibold"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">
                  URL Slug
                </label>
                <input
                  type="text"
                  value={form.slug}
                  onChange={(e) => setForm((prev) => ({ ...prev, slug: e.target.value }))}
                  className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl text-zinc-400 focus:outline-none transition-all text-sm font-mono"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">
                  Deskripsi
                </label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))}
                  rows={6}
                  className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl text-zinc-900 focus:outline-none focus:border-[#D4A373]/30 transition-all text-sm font-medium resize-none leading-relaxed"
                />
              </div>
            </div>
          </section>

          {/* Specs */}
          <section className="bg-white border border-zinc-200 rounded-[2.5rem] p-10 space-y-8 shadow-sm">
            <div className="flex items-center gap-3 border-b border-zinc-50 pb-6">
              <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center">
                <Package className="w-5 h-5 text-zinc-400" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 tracking-tight">Teknis & Dimensi</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">Kategori</label>
                <select
                  value={form.category}
                  onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value }))}
                  className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl text-zinc-900 text-sm font-semibold focus:outline-none focus:border-[#D4A373]/30 appearance-none transition-all"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">Material</label>
                <input
                  type="text"
                  value={form.material}
                  onChange={(e) => setForm((prev) => ({ ...prev, material: e.target.value }))}
                  className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl text-zinc-900 text-sm font-semibold focus:outline-none focus:border-[#D4A373]/30 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">Warna</label>
                <input
                  type="text"
                  value={form.color}
                  onChange={(e) => setForm((prev) => ({ ...prev, color: e.target.value }))}
                  className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl text-zinc-900 text-sm font-semibold focus:outline-none focus:border-[#D4A373]/30 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">Berat (g)</label>
                <input
                  type="number"
                  value={form.weight}
                  onChange={(e) => setForm((prev) => ({ ...prev, weight: parseFloat(e.target.value) || 0 }))}
                  className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl text-zinc-900 text-sm font-semibold focus:outline-none focus:border-[#D4A373]/30 transition-all"
                />
              </div>
            </div>

            <div className="pt-4 space-y-4">
              <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">Dimensi Luar (cm)</label>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-zinc-50 border border-zinc-100 rounded-2xl p-4 text-center">
                  <span className="text-[9px] font-bold text-zinc-400 uppercase block mb-1">P</span>
                  <input
                    type="number"
                    step="0.1"
                    value={form.length_outer}
                    onChange={(e) => setForm((prev) => ({ ...prev, length_outer: parseFloat(e.target.value) || 0 }))}
                    className="w-full bg-transparent text-center text-zinc-900 font-bold focus:outline-none"
                  />
                </div>
                <div className="bg-zinc-50 border border-zinc-100 rounded-2xl p-4 text-center">
                  <span className="text-[9px] font-bold text-zinc-400 uppercase block mb-1">L</span>
                  <input
                    type="number"
                    step="0.1"
                    value={form.width_outer}
                    onChange={(e) => setForm((prev) => ({ ...prev, width_outer: parseFloat(e.target.value) || 0 }))}
                    className="w-full bg-transparent text-center text-zinc-900 font-bold focus:outline-none"
                  />
                </div>
                <div className="bg-zinc-50 border border-zinc-100 rounded-2xl p-4 text-center">
                  <span className="text-[9px] font-bold text-zinc-400 uppercase block mb-1">T</span>
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

        {/* Sidebar */}
        <div className="space-y-8">
          <section className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-zinc-900 tracking-tight">Main Visual</h3>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="relative aspect-square border-2 border-dashed border-zinc-100 rounded-[2rem] flex flex-col items-center justify-center cursor-pointer hover:bg-zinc-50 transition-all group overflow-hidden"
            >
              {imagePreview ? (
                <>
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setImagePreview(null);
                        setImageFile(null);
                        setForm((prev) => ({ ...prev, image_url: null }));
                      }}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-red-500 shadow-xl"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center gap-4 text-center p-8">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-50 flex items-center justify-center group-hover:bg-white group-hover:shadow-lg transition-all">
                    <ImageIcon className="w-8 h-8 text-zinc-300 group-hover:text-[#D4A373]" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-zinc-900 font-bold text-sm">Change Image</p>
                    <p className="text-zinc-400 text-xs font-medium">Click to pick new file</p>
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

          <section className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-zinc-900 tracking-tight">Publikasi</h3>
            
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
                  Featured Item
                  <Sparkles className={`w-3.5 h-3.5 ${form.is_featured ? "text-[#D4A373] fill-current" : "text-zinc-300"}`} />
                </p>
                <p className="text-zinc-500 text-[11px] font-medium leading-relaxed mt-1">
                  Tampilkan di billboard beranda website.
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
