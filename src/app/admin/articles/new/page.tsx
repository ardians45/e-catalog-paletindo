"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Save,
  Send,
  X,
  Image as ImageIcon,
  Plus,
  Copy,
  Check,
  Type
} from "lucide-react";
import { supabase, uploadImage } from "@/lib/supabase";

const ARTICLE_CATEGORIES = [
  "Tips Operasional",
  "Industri B2B",
  "Studi Kasus",
  "Berita Perusahaan",
  "Umum",
];

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function NewArticlePage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const contentImagesInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploadingContentImg, setIsUploadingContentImg] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [contentImages, setContentImages] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    category: "Umum",
    author: "Tim Paletindo",
  });

  const handleTitleChange = (title: string) => {
    setForm((prev) => ({
      ...prev,
      title,
      slug: slugify(title),
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

  const handleContentImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploadingContentImg(true);
    setError("");

    try {
      const newImages: string[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const ext = file.name.split(".").pop();
        const fileName = `content-${form.slug || "article"}-${Date.now()}-${i}.${ext}`;
        const url = await uploadImage("article-images", file, fileName);
        if (url) newImages.push(url);
      }
      setContentImages(prev => [...prev, ...newImages]);
    } catch (err) {
      setError("Gagal upload gambar konten");
      console.error(err);
    } finally {
      setIsUploadingContentImg(false);
      if (contentImagesInputRef.current) contentImagesInputRef.current.value = "";
    }
  };

  const insertImageToContent = (url: string) => {
    const imgTag = `\n<img src="${url}" alt="${form.title}" class="rounded-2xl shadow-lg my-10 mx-auto block max-w-full" />\n`;
    
    if (textareaRef.current) {
      const start = textareaRef.current.selectionStart;
      const end = textareaRef.current.selectionEnd;
      const text = form.content;
      const before = text.substring(0, start);
      const after = text.substring(end);
      
      const newContent = before + imgTag + after;
      setForm(prev => ({ ...prev, content: newContent }));
      
      // Reset focus and cursor
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.focus();
          const newCursorPos = start + imgTag.length;
          textareaRef.current.setSelectionRange(newCursorPos, newCursorPos);
        }
      }, 0);
    } else {
      setForm(prev => ({ ...prev, content: prev.content + imgTag }));
    }
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleSubmit = async (status: "draft" | "published") => {
    setError("");
    setIsSubmitting(true);

    try {
      let thumbnailUrl = null;

      if (imageFile) {
        const ext = imageFile.name.split(".").pop();
        const path = `${form.slug}-${Date.now()}.${ext}`;
        thumbnailUrl = await uploadImage("article-images", imageFile, path);
      }

      const { error: insertError } = await supabase.from("articles").insert({
        ...form,
        thumbnail_url: thumbnailUrl,
        status,
        published_at: status === "published" ? new Date().toISOString() : null,
      });

      if (insertError) throw insertError;
      router.push("/admin/articles");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Gagal menyimpan artikel";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 pb-20">
      {/* Left Column: Form */}
      <div className="lg:col-span-8 space-y-6">
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
              Tulis Artikel Baru
            </h1>
            <p className="text-zinc-500 text-sm mt-0.5">
              Buat konten premium untuk audiens Anda.
            </p>
          </div>
        </div>

        {/* Thumbnail & Info */}
        <div className="bg-zinc-900 border border-zinc-800/50 rounded-2xl p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">
                Thumbnail Utama
              </label>
              <div
                onClick={() => fileInputRef.current?.click()}
                className="relative border-2 border-dashed border-zinc-800 rounded-xl p-4 text-center cursor-pointer hover:border-[#D4A373]/30 transition-colors group aspect-video flex flex-col items-center justify-center overflow-hidden bg-zinc-950"
              >
                {imagePreview ? (
                  <>
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-50 blur-sm"
                    />
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="relative z-10 max-h-full object-contain rounded-lg shadow-2xl"
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setImagePreview(null);
                        setImageFile(null);
                      }}
                      className="absolute top-2 right-2 z-20 w-8 h-8 bg-zinc-900/80 backdrop-blur-md rounded-full flex items-center justify-center text-zinc-400 hover:text-red-400 border border-white/5"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </>
                ) : (
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center group-hover:bg-[#D4A373]/10 transition-colors border border-zinc-800">
                      <ImageIcon className="w-5 h-5 text-zinc-500 group-hover:text-[#D4A373] transition-colors" />
                    </div>
                    <p className="text-zinc-500 font-medium text-xs">
                      Ratio 16:9 direkomendasikan
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

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                  Judul Artikel *
                </label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  required
                  placeholder="Judul yang memikat..."
                  className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-white placeholder-zinc-700 focus:outline-none focus:border-[#D4A373]/50 transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                  Slug URL
                </label>
                <input
                  type="text"
                  value={form.slug}
                  onChange={(e) => setForm(prev => ({ ...prev, slug: e.target.value }))}
                  className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-zinc-500 focus:outline-none text-xs font-mono"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                Kategori
              </label>
              <select
                value={form.category}
                onChange={(e) => setForm(prev => ({ ...prev, category: e.target.value }))}
                className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-[#D4A373]/50 transition-all text-sm appearance-none"
              >
                {ARTICLE_CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                Penulis
              </label>
              <input
                type="text"
                value={form.author}
                onChange={(e) => setForm(prev => ({ ...prev, author: e.target.value }))}
                className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-[#D4A373]/50 transition-all text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
              Ringkasan Pendek (Excerpt)
            </label>
            <textarea
              value={form.excerpt}
              onChange={(e) => setForm(prev => ({ ...prev, excerpt: e.target.value }))}
              rows={2}
              placeholder="Gunakan untuk meta description dan preview kartu blog..."
              className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-white placeholder-zinc-700 focus:outline-none focus:border-[#D4A373]/50 transition-all text-sm resize-none font-light leading-relaxed"
            />
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-zinc-900 border border-zinc-800/50 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest">
              Konten Utama (HTML Supported)
            </label>
            <div className="flex items-center gap-2">
               <span className="text-[10px] text-zinc-500 bg-zinc-950 px-2 py-1 rounded border border-zinc-800">
                 {form.content.length} characters
               </span>
            </div>
          </div>
          <textarea
            ref={textareaRef}
            value={form.content}
            onChange={(e) => setForm(prev => ({ ...prev, content: e.target.value }))}
            rows={20}
            placeholder="Tulis artikel Anda di sini. Gunakan tombol 'Insert' di samping untuk menambahkan foto di tengah artikel..."
            className="w-full px-6 py-5 bg-zinc-950 border border-zinc-800 rounded-2xl text-zinc-300 placeholder-zinc-800 focus:outline-none focus:border-[#D4A373]/30 transition-all text-base font-light leading-relaxed resize-y min-h-[500px]"
          />
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-xs px-6 py-4 rounded-xl font-bold flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
            {error}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleSubmit("published")}
            disabled={isSubmitting || !form.title}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#D4A373] hover:bg-[#C19263] text-zinc-900 font-black px-10 py-4 rounded-2xl transition-all disabled:opacity-50 text-xs uppercase tracking-widest shadow-xl shadow-[#D4A373]/10"
          >
            {isSubmitting ? (
              <div className="w-4 h-4 border-2 border-zinc-900/30 border-t-zinc-900 rounded-full animate-spin"></div>
            ) : (
              <Send className="w-4 h-4" />
            )}
            Publish Now
          </button>
          <button
            onClick={() => handleSubmit("draft")}
            disabled={isSubmitting || !form.title}
            className="sm:flex-none inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-bold px-8 py-4 rounded-2xl transition-all disabled:opacity-50 text-xs uppercase tracking-widest border border-zinc-700"
          >
             Save as Draft
          </button>
        </div>
      </div>

      {/* Right Column: Multi-Image Manager */}
      <div className="lg:col-span-4 space-y-6">
        <div className="bg-zinc-900 border border-zinc-800/50 rounded-2xl p-6 sticky top-24">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-white font-bold text-sm">Article Photos</h3>
              <p className="text-zinc-500 text-[10px] uppercase tracking-widest mt-1">Insert photos mid-content</p>
            </div>
            <button 
              onClick={() => contentImagesInputRef.current?.click()}
              disabled={isUploadingContentImg}
              className="w-10 h-10 rounded-xl bg-[#D4A373]/10 text-[#D4A373] hover:bg-[#D4A373]/20 flex items-center justify-center transition-all border border-[#D4A373]/20"
            >
              <Plus className={`w-5 h-5 ${isUploadingContentImg ? 'animate-spin' : ''}`} />
            </button>
            <input 
              ref={contentImagesInputRef}
              type="file" 
              multiple 
              accept="image/*" 
              onChange={handleContentImageUpload} 
              className="hidden" 
            />
          </div>

          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            {contentImages.length === 0 && (
              <div className="py-12 text-center rounded-2xl bg-zinc-950 border border-zinc-800 border-dashed">
                <ImageIcon className="w-8 h-8 text-zinc-800 mx-auto mb-3" />
                <p className="text-zinc-600 text-[11px] px-4 font-medium uppercase tracking-widest">No photos uploaded yet</p>
              </div>
            )}

            {contentImages.map((url, idx) => (
              <div key={idx} className="bg-zinc-950 border border-zinc-800 rounded-2xl p-3 group">
                <div className="relative aspect-video rounded-xl bg-zinc-900 overflow-hidden mb-3">
                  <img src={url} alt={`Content ${idx}`} className="w-full h-full object-cover" />
                  <button 
                    onClick={() => setContentImages(prev => prev.filter((_, i) => i !== idx))}
                    className="absolute top-2 right-2 w-7 h-7 bg-red-500 text-white rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                
                <div className="flex gap-2">
                  <button 
                    onClick={() => insertImageToContent(url)}
                    className="flex-1 h-9 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all flex items-center justify-center gap-2 border border-zinc-800"
                  >
                    <Type className="w-3.5 h-3.5 text-[#D4A373]" /> Insert
                  </button>
                  <button 
                    onClick={() => copyToClipboard(url, idx)}
                    className="w-9 h-9 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 rounded-lg flex items-center justify-center transition-all border border-zinc-800"
                  >
                    {copiedIndex === idx ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-[#D4A373]/5 border border-[#D4A373]/10 rounded-2xl">
            <h4 className="text-[#D4A373] text-[10px] font-black uppercase tracking-[0.2em] mb-2">Instructions</h4>
            <p className="text-zinc-500 text-[10px] leading-relaxed">
              1. Upload photos using the [+] button.<br />
              2. Place cursor in content textarea.<br />
              3. Click [Insert] to place photo at cursor position.<br />
              4. Photos will auto-resize and center in article.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
