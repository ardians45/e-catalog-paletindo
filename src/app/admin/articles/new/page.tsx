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
  Type,
  Layout,
  Sparkles,
  Info,
  Calendar,
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
    <div className="max-w-[1600px] mx-auto pb-32">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 mb-12">
        <div className="flex items-center gap-6">
          <Link
            href="/admin/articles"
            className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:border-zinc-900 transition-all shadow-sm active:scale-90"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <div className="flex items-center gap-2 text-emerald-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-1">
              Article Composer
            </div>
            <h1 className="text-3xl font-black text-zinc-900 tracking-tight">
              Tulis Artikel Baru
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => handleSubmit("draft")}
            disabled={isSubmitting || !form.title}
            className="px-8 py-4 bg-white border border-zinc-200 text-zinc-600 font-bold rounded-2xl hover:bg-zinc-50 transition-all text-sm disabled:opacity-50"
          >
            Save Draft
          </button>
          <button
            onClick={() => handleSubmit("published")}
            disabled={isSubmitting || !form.title}
            className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-bold px-10 py-4 rounded-2xl transition-all text-sm shadow-xl shadow-zinc-950/20 disabled:opacity-50 active:scale-95"
          >
            {isSubmitting ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <Send className="w-4 h-4 text-emerald-400" />
            )}
            Publish Article
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Editor */}
        <div className="lg:col-span-8 space-y-10">
          {/* Metadata Section */}
          <section className="bg-white border border-zinc-200 rounded-[2.5rem] p-10 space-y-10 shadow-sm">
            <div className="flex items-center gap-3 border-b border-zinc-50 pb-6">
              <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center">
                <Layout className="w-5 h-5 text-zinc-400" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 tracking-tight">Main Visual & Identity</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">
                  Thumbnail Utama
                </label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="relative aspect-video border-2 border-dashed border-zinc-100 rounded-[2rem] flex flex-col items-center justify-center cursor-pointer hover:bg-zinc-50 transition-all group overflow-hidden bg-zinc-50/30"
                >
                  {imagePreview ? (
                    <>
                      <img src={imagePreview} alt="Preview" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); setImagePreview(null); setImageFile(null); }}
                          className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-red-500 shadow-xl"
                        >
                          <X className="w-6 h-6" />
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center gap-4 text-center p-8">
                      <div className="w-16 h-16 rounded-2xl bg-zinc-50 flex items-center justify-center border border-zinc-100 group-hover:bg-white group-hover:shadow-lg transition-all">
                        <ImageIcon className="w-8 h-8 text-zinc-300 group-hover:text-emerald-500" />
                      </div>
                      <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Recommended 16:9</p>
                    </div>
                  )}
                  <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">Judul Artikel</label>
                  <input
                    type="text"
                    value={form.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    required
                    placeholder="Capture attention..."
                    className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/5 focus:bg-white focus:border-emerald-500/30 transition-all text-sm font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">URL Slug</label>
                  <input
                    type="text"
                    value={form.slug}
                    onChange={(e) => setForm(prev => ({ ...prev, slug: e.target.value }))}
                    className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl text-zinc-400 focus:outline-none text-xs font-mono"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">Kategori</label>
                    <select
                      value={form.category}
                      onChange={(e) => setForm(prev => ({ ...prev, category: e.target.value }))}
                      className="w-full px-5 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl text-zinc-900 text-sm font-semibold appearance-none focus:outline-none focus:border-emerald-500/30 transition-all"
                    >
                      {ARTICLE_CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">Penulis</label>
                    <input
                      type="text"
                      value={form.author}
                      onChange={(e) => setForm(prev => ({ ...prev, author: e.target.value }))}
                      className="w-full px-5 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl text-zinc-900 text-sm font-semibold focus:outline-none focus:border-emerald-500/30 transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">Excerpt / Summary</label>
              <textarea
                value={form.excerpt}
                onChange={(e) => setForm(prev => ({ ...prev, excerpt: e.target.value }))}
                rows={3}
                placeholder="Brief summary for indexing and cards..."
                className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl text-zinc-900 focus:outline-none focus:ring-4 focus:ring-emerald-500/5 focus:bg-white focus:border-emerald-500/30 transition-all text-sm font-medium resize-none leading-relaxed"
              />
            </div>
          </section>

          {/* Content Editor */}
          <section className="bg-white border border-zinc-200 rounded-[2.5rem] p-10 space-y-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-zinc-50 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center">
                  <Type className="w-5 h-5 text-zinc-400" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 tracking-tight">Konten Narasi</h3>
              </div>
              <span className="text-[10px] font-bold text-zinc-400 bg-zinc-50 px-3 py-1.5 rounded-lg border border-zinc-100 uppercase tracking-widest">
                {form.content.length} characters
              </span>
            </div>

            <textarea
              ref={textareaRef}
              value={form.content}
              onChange={(e) => setForm(prev => ({ ...prev, content: e.target.value }))}
              rows={25}
              placeholder="Start writing your story... HTML and custom tags supported."
              className="w-full px-8 py-8 bg-zinc-50 border border-zinc-100 rounded-[2rem] text-zinc-800 placeholder-zinc-300 focus:outline-none focus:ring-4 focus:ring-emerald-500/5 focus:bg-white focus:border-emerald-500/30 transition-all text-lg font-medium leading-[1.8] resize-y min-h-[600px] selection:bg-emerald-100"
            />
          </section>
        </div>

        {/* Sidebar Assets */}
        <div className="lg:col-span-4 space-y-8">
          <section className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 space-y-8 shadow-sm sticky top-28">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-zinc-900 tracking-tight">Article Assets</h3>
                <p className="text-zinc-400 text-[10px] uppercase font-bold tracking-widest mt-1">Insert Media mid-content</p>
              </div>
              <button 
                onClick={() => contentImagesInputRef.current?.click()}
                disabled={isUploadingContentImg}
                className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-all shadow-sm active:scale-90"
              >
                <Plus className={`w-6 h-6 ${isUploadingContentImg ? 'animate-spin' : ''}`} />
              </button>
              <input ref={contentImagesInputRef} type="file" multiple accept="image/*" onChange={handleContentImageUpload} className="hidden" />
            </div>

            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {contentImages.length === 0 && (
                <div className="py-20 text-center rounded-[2rem] bg-zinc-50 border border-zinc-100 border-dashed">
                  <ImageIcon className="w-10 h-10 text-zinc-200 mx-auto mb-4" />
                  <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Gallery Empty</p>
                </div>
              )}

              <div className="grid grid-cols-1 gap-4">
                {contentImages.map((url, idx) => (
                  <div key={idx} className="bg-zinc-50 border border-zinc-100 rounded-3xl p-4 group relative">
                    <div className="relative aspect-video rounded-2xl bg-white overflow-hidden mb-4 border border-zinc-100">
                      <img src={url} alt={`Content ${idx}`} className="w-full h-full object-cover" />
                      <button 
                        onClick={() => setContentImages(prev => prev.filter((_, i) => i !== idx))}
                        className="absolute top-2 right-2 w-8 h-8 bg-red-600 text-white rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="flex gap-2">
                      <button 
                        onClick={() => insertImageToContent(url)}
                        className="flex-1 h-11 bg-zinc-900 hover:bg-zinc-800 text-white text-[11px] font-bold uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-zinc-900/10"
                      >
                        <Type className="w-4 h-4 text-emerald-400" /> Insert to Edior
                      </button>
                      <button 
                        onClick={() => copyToClipboard(url, idx)}
                        className="w-11 h-11 bg-white border border-zinc-200 text-zinc-400 hover:text-zinc-900 rounded-xl flex items-center justify-center transition-all"
                      >
                        {copiedIndex === idx ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-zinc-50 rounded-[2rem] border border-zinc-100 space-y-4">
              <div className="flex items-center gap-2 text-zinc-900 font-bold text-xs">
                <Info className="w-4 h-4 text-[#D4A373]" /> Workflow Tips
              </div>
              <ul className="space-y-3 text-[11px] text-zinc-500 font-medium leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-[#D4A373] font-bold">01</span>
                  Upload photos for your article body via the [+] button.
                </li>
                <li className="flex gap-2">
                  <span className="text-[#D4A373] font-bold">02</span>
                  Place cursor anywhere in the editor.
                </li>
                <li className="flex gap-2">
                  <span className="text-[#D4A373] font-bold">03</span>
                  Click "Insert" and the image will snap to your layout.
                </li>
              </ul>
            </div>
          </section>

          {error && (
            <div className="bg-red-50 border border-red-100 text-red-600 text-xs font-bold px-6 py-4 rounded-[2rem] flex items-start gap-3">
              <X className="w-4 h-4 shrink-0" />
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
