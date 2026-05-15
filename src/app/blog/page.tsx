import { Metadata } from "next";
import { supabase, type Article, isSupabaseConfigured } from "@/lib/supabase";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Insights & Berita Industri Palet Plastik - PT Paletindo Prakarsa Unggul",
  description: "Dapatkan berita terbaru seputar inovasi pergudangan, tips efisiensi rantai pasok logistik, dan wawasan teknis seputar produk plastik industri.",
  alternates: {
    canonical: "https://www.paletindo.id/blog",
  }
};

const MOCK_POSTS = [
  {
    category: "Tips Operasional",
    title: "Memilih Palet Food Grade yang Tepat untuk Suhu Ekstrem Cold Storage",
    date: "12 Okt 2023",
    author: "Tim Engineer Paletindo",
    img: "https://images.unsplash.com/photo-1542289658-002d295f707f?q=80&w=800&auto=format&fit=crop",
    slug: "memilih-palet-food-grade-cold-storage"
  },
  {
    category: "Industri B2B",
    title: "Plastik vs Kayu: Analisis Total Cost of Ownership (TCO) dalam Jangka Panjang",
    date: "05 Nov 2023",
    author: "Dimas A.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    slug: "plastik-vs-kayu-analisis-tco-palet"
  },
  {
    category: "Studi Kasus",
    title: "Bagaimana Pabrik Manufaktur Otomotif X Menekan Damage Rate hingga 80%",
    date: "20 Jan 2024",
    author: "Tim Riset",
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop",
    slug: "studi-kasus-pabrik-otomotif-damage-rate"
  }
];

import { LOCAL_ARTICLES } from "@/lib/blog-data";

async function getArticles() {
  let posts = [];
  
  // Start with local articles
  const localPosts = LOCAL_ARTICLES.map((a) => ({
    title: a.title,
    slug: a.slug,
    category: a.category,
    date: new Date(a.published_at).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
    author: a.author,
    img: a.thumbnail_url,
    excerpt: a.excerpt,
  }));

  if (isSupabaseConfigured()) {
    try {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("status", "published")
        .order("published_at", { ascending: false });

      if (!error && data && data.length > 0) {
        const supabasePosts = (data as Article[]).map((a) => ({
          title: a.title,
          slug: a.slug,
          category: a.category,
          date: a.published_at
            ? new Date(a.published_at).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })
            : new Date(a.created_at).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "short",
                year: "numeric",
              }),
          author: a.author,
          img: a.thumbnail_url || "https://images.unsplash.com/photo-1542289658-002d295f707f?q=80&w=800&auto=format&fit=crop",
          excerpt: a.excerpt || undefined,
        }));
        
        // Filter out duplicates if any
        const supabaseSlugs = new Set(supabasePosts.map(p => p.slug));
        const filteredLocal = localPosts.filter(p => !supabaseSlugs.has(p.slug));
        
        return [...filteredLocal, ...supabasePosts];
      }
    } catch (err) {
      console.error("Supabase fetch error:", err);
    }
  }

  // Fallback to local + mock
  const mockSlugs = new Set(MOCK_POSTS.map(p => p.slug));
  const filteredLocalFallback = localPosts.filter(p => !mockSlugs.has(p.slug));
  return [...filteredLocalFallback, ...MOCK_POSTS];
}

export default async function BlogPage() {
  const posts = await getArticles();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.paletindo.id"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Journal",
                "item": "https://www.paletindo.id/blog"
              }
            ]
          })
        }}
      />
      <BlogClient initialPosts={posts} />
    </>
  );
}
