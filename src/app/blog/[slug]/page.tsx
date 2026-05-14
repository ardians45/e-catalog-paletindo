import { Metadata } from "next";
import { notFound } from "next/navigation";
import { supabase, type Article, isSupabaseConfigured } from "@/lib/supabase";
import BlogDetailClient from "./BlogDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  if (!isSupabaseConfigured()) {
    return [];
  }

  try {
    const { data: articles } = await supabase
      .from("articles")
      .select("slug")
      .eq("status", "published");

    return (articles || []).map((article) => ({
      slug: article.slug,
    }));
  } catch (err) {
    console.error("Error generating static params for articles:", err);
    return [];
  }
}


async function getArticleData(slug: string) {
  if (!isSupabaseConfigured()) return null;

  try {
    // Fetch current article
    const { data: article, error: artError } = await supabase
      .from("articles")
      .select("*")
      .eq("slug", slug)
      .single();

    if (artError || !article) return null;

    // Fetch recent posts
    const { data: recentPosts } = await supabase
      .from("articles")
      .select("title, slug, category, published_at, thumbnail_url")
      .eq("status", "published")
      .neq("slug", slug)
      .order("published_at", { ascending: false })
      .limit(5);

    // Fetch categories
    const { data: catData } = await supabase
      .from("articles")
      .select("category")
      .eq("status", "published");

    const categories = catData ? Array.from(new Set(catData.map(c => c.category))) : [];

    return {
      article: article as Article,
      recentPosts: (recentPosts || []) as Article[],
      categories
    };
  } catch (err) {
    console.error("Error fetching article data:", err);
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = await getArticleData(slug);

  if (!data) {
    return {
      title: "Artikel Tidak Ditemukan - PT Paletindo",
    };
  }

  const { article } = data;
  const description = article.content?.substring(0, 160).replace(/<[^>]+>/g, '') || "";

  return {
    title: `${article.title} - PT Paletindo Prakarsa Unggul`,
    description,
    openGraph: {
      title: article.title,
      description,
      images: article.thumbnail_url ? [article.thumbnail_url] : [],
      type: "article",
    },
    alternates: {
      canonical: `https://www.paletindo.id/blog/${slug}`,
    }
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const data = await getArticleData(slug);

  if (!data) {
    notFound();
  }

  return (
    <BlogDetailClient 
      article={data.article} 
      recentPosts={data.recentPosts} 
      categories={data.categories} 
    />
  );
}
