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
  Plus,
  Copy,
  Check,
  Type,
  Layout,
  Info,
  Sparkles,
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
  const contentImagesInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [isLoading, setIsLoading] = useState(true);
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
    thumbnail_url: null as string | null,
    status: "draft" as "draft" | "published",
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
        content: article.content,
        excerpt: article.excerpt || "",
        category: article.category,
        author: article.author,
        thumbnail_url: article.thumbnail_url,
        status: article.status,
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
          published_at: status === "published" && !form.thumbnail_url ? new Date().toISOString() : null,
        })
        .eq("id", id);

      if (updateError) throw updateError;
      router.push("/admin/articles");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Gagal memperbarui artikel");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <div className="w-10 h-10 border-2 border-zinc-200 border-t-emerald-500 rounded-full animate-spin"></div>
      </div>
    );
  }

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
              Revision Mode
            </div>
            <h1 className="text-3xl font-black text-zinc-900 tracking-tight">
              Edit Artikel
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => handleSubmit(form.status)}
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-bold px-10 py-4 rounded-2xl transition-all text-sm shadow-xl shadow-zinc-950/20 disabled:opacity-50 active:scale-95"
          >
            {isSubmitting ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <Save className="w-4 h-4 text-emerald-400" />
            )}
            Simpan Perubahan
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section className="bg-white border border-zinc-200 rounded-[2.5rem] p-10 space-y-10 shadow-sm">
             <div className="flex items-center gap-3 border-b border-zinc-50 pb-6">
               <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center">
                 <Layout className="w-5 h-5 text-zinc-400" />
               </div>
               <h3 className="text-xl font-bold text-zinc-900 tracking-tight">Core Details</h3>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <div className="space-y-4">
                 <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">Thumbnail</label>
                 <div
                   onClick={() => fileInputRef.current?.click()}
                   className="relative aspect-video border-2 border-dashed border-zinc-100 rounded-[2rem] flex flex-col items-center justify-center cursor-pointer hover:bg-zinc-50 transition-all group overflow-hidden bg-zinc-50/30"
                 >
                   {imagePreview ? (
                     <>
                       <img src={imagePreview} alt="Preview" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                       <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                         <X className="w-8 h-8 text-white" />
                       </div>
                     </>
                   ) : (
                     <ImageIcon className="w-10 h-10 text-zinc-200" />
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
                     onChange={(e) => setForm(prev => ({ ...prev, title: e.target.value }))}
                     className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl text-zinc-900 text-sm font-bold focus:outline-none focus:border-emerald-500/30 transition-all font-bold"
                   />
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-2">
                     <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">Penulis</label>
                     <input
                       type="text"
                       value={form.author}
                       onChange={(e) => setForm(prev => ({ ...prev, author: e.target.value }))}
                       className="w-full px-5 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl text-zinc-900 text-sm font-semibold focus:outline-none focus:border-emerald-500/30 transition-all"
                     />
                   </div>
                   <div className="space-y-2">
                     <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">Status</label>
                     <select
                       value={form.status}
                       onChange={(e) => setForm(prev => ({ ...prev, status: e.target.value as any }))}
                       className="w-full px-5 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl text-zinc-900 text-sm font-semibold appearance-none focus:outline-none"
                     >
                       <option value="draft">Draft</option>
                       <option value="published">Published</option>
                     </select>
                   </div>
                 </div>
               </div>
             </div>
          </section>

          <section className="bg-white border border-zinc-200 rounded-[2.5rem] p-10 space-y-6 shadow-sm">
            <h3 className="text-xl font-bold text-zinc-900 tracking-tight px-2">Konten</h3>
            <textarea
              ref={textareaRef}
              value={form.content}
              onChange={(e) => setForm(prev => ({ ...prev, content: e.target.value }))}
              rows={25}
              className="w-full px-8 py-8 bg-zinc-50 border border-zinc-100 rounded-[2rem] text-zinc-800 focus:outline-none focus:ring-4 focus:ring-emerald-500/5 focus:bg-white focus:border-emerald-500/30 transition-all text-lg font-medium leading-[1.8] min-h-[600px]"
            />
          </section>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <section className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 space-y-8 shadow-sm sticky top-28">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-zinc-900 tracking-tight">Asset Vault</h3>
              <button 
                onClick={() => contentImagesInputRef.current?.click()}
                className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-all shadow-sm active:scale-90"
              >
                <Plus className="w-6 h-6" />
              </button>
              <input ref={contentImagesInputRef} type="file" multiple accept="image/*" onChange={handleContentImageUpload} className="hidden" />
            </div>

            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {contentImages.length === 0 && (
                <div className="py-20 text-center rounded-[2rem] bg-zinc-50 border border-zinc-100 border-dashed">
                  <ImageIcon className="w-10 h-10 text-zinc-100 mx-auto mb-4" />
                  <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">No local session images</p>
                </div>
              )}
              {contentImages.map((url, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 rounded-3xl p-4 group">
                   <div className="relative aspect-video rounded-2xl bg-white overflow-hidden mb-4 border border-zinc-100">
                      <img src={url} alt={`Content ${idx}`} className="w-full h-full object-cover" />
                    </div>
                   <button 
                     onClick={() => insertImageToContent(url)}
                     className="w-full h-11 bg-zinc-900 group-hover:bg-emerald-600 text-white text-[11px] font-bold uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2"
                   >
                     <Type className="w-4 h-4" /> Insert Image
                   </button>
                </div>
              ))}
            </div>

            <div className="p-6 bg-zinc-50 rounded-[2rem] border border-zinc-100">
               <div className="flex items-center gap-2 text-zinc-900 font-bold text-xs mb-3">
                 <Info className="w-4 h-4 text-emerald-600" /> Editor Tip
               </div>
               <p className="text-zinc-500 text-[11px] font-medium leading-relaxed">
                 You are editing a live article. Any changes saved will be immediately reflected on the public catalog. 
               </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
