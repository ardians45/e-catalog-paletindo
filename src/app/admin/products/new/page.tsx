"use client";

import { useState, useRef, useEffect } from "react";
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
  Plus,
  Trash2,
  Star,
  Upload,
} from "lucide-react";
import { supabase, uploadImage } from "@/lib/supabase";

const DEFAULT_CATEGORIES = [
  "Container Solid",
  "Container Berlubang",
  "Lunch Box",
  "Palet plastik",
  "Keranjang Buah",
  "Container Bakery",
  "Part Case - Jolly Boy",
  "Krat Botol",
  "Krat piring",
  "Krat Telur",
  "Krat Gelas",
  "Container Logistik",
  "Palet untuk Truck Box Pendingin"
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
  const [error, setError] = useState("");

  interface ProductImage {
    id: string; // temp ID for new images
    file: File;
    preview: string;
  }

  const [images, setImages] = useState<ProductImage[]>([]);
  const [mainImageId, setMainImageId] = useState<string | null>(null);

  const [categoriesList, setCategoriesList] = useState<string[]>([]);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [showAddNewCategory, setShowAddNewCategory] = useState(false);

  useEffect(() => {
    async function loadCategories() {
      try {
        const { data, error } = await supabase
          .from("products")
          .select("category");
        
        if (!error && data) {
          const dbCategories = Array.from(new Set(data.map(p => p.category))).filter(Boolean);
          const merged = Array.from(new Set([...DEFAULT_CATEGORIES, ...dbCategories]));
          setCategoriesList(merged);
        } else {
          setCategoriesList(DEFAULT_CATEGORIES);
        }
      } catch (err) {
        console.error("Failed to load categories:", err);
        setCategoriesList(DEFAULT_CATEGORIES);
      }
    }
    loadCategories();
  }, []);

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
    category: "Container Solid",
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
    const files = e.target.files;
    if (files && files.length > 0) {
      const newImgs: ProductImage[] = [];
      Array.from(files).forEach((file) => {
        const tempId = `new-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
        const previewUrl = URL.createObjectURL(file);
        newImgs.push({
          id: tempId,
          file,
          preview: previewUrl,
        });
      });

      setImages((prev) => {
        const updated = [...prev, ...newImgs];
        if (!mainImageId && updated.length > 0) {
          setMainImageId(updated[0].id);
        }
        return updated;
      });
    }
  };

  const handleDeleteImage = (idToDelete: string) => {
    setImages((prev) => {
      const filtered = prev.filter((img) => img.id !== idToDelete);
      if (mainImageId === idToDelete) {
        if (filtered.length > 0) {
          setMainImageId(filtered[0].id);
        } else {
          setMainImageId(null);
        }
      }
      return filtered;
    });
  };

  const handleSetMain = (id: string) => {
    setMainImageId(id);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const uploadedUrls: string[] = [];
      let finalMainImageUrl: string | null = null;

      for (const img of images) {
        const ext = img.file.name.split(".").pop();
        const path = `${form.slug}-${Date.now()}-${Math.random().toString(36).substring(2, 7)}.${ext}`;
        const uploadedUrl = await uploadImage("product-images", img.file, path);
        
        uploadedUrls.push(uploadedUrl);
        if (img.id === mainImageId) {
          finalMainImageUrl = uploadedUrl;
        }
      }

      if (!finalMainImageUrl && uploadedUrls.length > 0) {
        finalMainImageUrl = uploadedUrls[0];
      }

      if (form.is_featured) {
        await supabase
          .from("products")
          .update({ is_featured: false })
          .eq("is_featured", true);
      }

      const { error: insertError } = await supabase.from("products").insert({
        ...form,
        image_url: finalMainImageUrl,
        image_urls: uploadedUrls,
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
              <div className="space-y-2 relative">
                <div className="flex justify-between items-center px-1">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                    Kategori Produk
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowAddNewCategory(!showAddNewCategory)}
                    className="text-[10px] font-bold text-[#D4A373] hover:text-[#b08254] transition-colors flex items-center gap-1 focus:outline-none"
                  >
                    <Plus className="w-3 h-3" />
                    {showAddNewCategory ? "Pilih dari List" : "Tambah Kategori Baru"}
                  </button>
                </div>
                
                {!showAddNewCategory ? (
                  <select
                    value={form.category}
                    onChange={(e) => {
                      if (e.target.value === "ADD_NEW_TRIGGER") {
                        setShowAddNewCategory(true);
                      } else {
                        setForm((prev) => ({ ...prev, category: e.target.value }));
                      }
                    }}
                    className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl text-zinc-900 text-sm font-semibold focus:outline-none focus:border-[#D4A373]/30 transition-all appearance-none"
                  >
                    {categoriesList.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                    <option value="ADD_NEW_TRIGGER" className="text-[#D4A373] font-bold">+ Tambah Kategori Baru...</option>
                  </select>
                ) : (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Ketik kategori baru..."
                      value={newCategoryName}
                      onChange={(e) => setNewCategoryName(e.target.value)}
                      className="flex-1 px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl text-zinc-900 text-sm font-semibold focus:outline-none focus:border-[#D4A373]/30 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const trimmed = newCategoryName.trim();
                        if (trimmed) {
                          if (!categoriesList.includes(trimmed)) {
                            setCategoriesList(prev => [...prev, trimmed]);
                          }
                          setForm((prev) => ({ ...prev, category: trimmed }));
                          setNewCategoryName("");
                          setShowAddNewCategory(false);
                        }
                      }}
                      className="px-6 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold rounded-2xl transition-all text-xs active:scale-95 whitespace-nowrap"
                    >
                      Tambah
                    </button>
                  </div>
                )}
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
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-zinc-900 tracking-tight">Galeri & Media</h3>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#D4A373] hover:text-[#b08254] transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                Tambah Gambar
              </button>
            </div>

            {/* Active Main Visual Preview Box */}
            <div className="relative aspect-square border border-zinc-100 rounded-[2rem] flex flex-col items-center justify-center bg-zinc-50/50 overflow-hidden group">
              {images.find((img) => img.id === mainImageId) ? (
                <>
                  <img
                    src={images.find((img) => img.id === mainImageId)?.preview}
                    alt="Main Visual"
                    className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-102"
                  />
                  <div className="absolute top-4 left-4 bg-zinc-900/90 text-white px-3 py-1.5 rounded-full text-[9px] font-bold tracking-widest uppercase flex items-center gap-1.5 shadow-md">
                    <Star className="w-3 h-3 text-[#D4A373] fill-current" />
                    Main Visual
                  </div>
                </>
              ) : (
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="flex flex-col items-center gap-4 text-center p-8 cursor-pointer w-full h-full justify-center group-hover:bg-zinc-50 transition-colors"
                >
                  <div className="w-16 h-16 rounded-2xl bg-zinc-50 flex items-center justify-center group-hover:bg-white group-hover:shadow-md transition-all">
                    <ImageIcon className="w-8 h-8 text-zinc-300 group-hover:text-[#D4A373]" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-zinc-900 font-bold text-sm">Upload Gambar</p>
                    <p className="text-zinc-400 text-xs font-medium">Click to select files</p>
                  </div>
                </div>
              )}
            </div>

            {/* Thumbnails Grid */}
            {images.length > 0 && (
              <div className="space-y-3">
                <label className="text-[9px] font-black text-zinc-400 uppercase tracking-widest px-1 block">
                  Semua Gambar ({images.length})
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {images.map((img) => {
                    const isMain = img.id === mainImageId;
                    return (
                      <div
                        key={img.id}
                        className={`relative aspect-square rounded-2xl border bg-white overflow-hidden group/thumb transition-all duration-300 ${
                          isMain ? "border-[#D4A373] ring-2 ring-[#D4A373]/10" : "border-zinc-100 hover:border-zinc-300"
                        }`}
                      >
                        <img
                          src={img.preview}
                          alt="Thumbnail"
                          className="w-full h-full object-contain p-2"
                        />
                        
                        {/* Overlay Controls */}
                        <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center gap-1.5 p-1">
                          {!isMain && (
                            <button
                              type="button"
                              onClick={() => handleSetMain(img.id)}
                              title="Jadikan Gambar Utama"
                              className="w-8 h-8 rounded-xl bg-white hover:bg-zinc-100 flex items-center justify-center text-zinc-600 hover:text-[#D4A373] shadow-lg active:scale-90 transition-all"
                            >
                              <Star className="w-4 h-4" />
                            </button>
                          )}
                          <button
                            type="button"
                            onClick={() => handleDeleteImage(img.id)}
                            title="Hapus Gambar"
                            className="w-8 h-8 rounded-xl bg-white hover:bg-red-50 flex items-center justify-center text-red-500 hover:text-red-600 shadow-lg active:scale-90 transition-all"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Star Indicator if Main Visual */}
                        {isMain && (
                          <div className="absolute top-1 right-1 bg-[#D4A373] text-white p-1 rounded-lg shadow-sm">
                            <Star className="w-2.5 h-2.5 fill-current" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="hidden"
            />
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
