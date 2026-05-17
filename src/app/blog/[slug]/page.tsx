import { Metadata } from "next";
import { notFound } from "next/navigation";
import { supabase, type Article, isSupabaseConfigured } from "@/lib/supabase";
import BlogDetailClient from "./BlogDetailClient";
import JsonLd from "@/components/seo/JsonLd";

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
  let article: Article | null = null;
  let recentPosts: Article[] = [];
  let categories: string[] = [];

  if (isSupabaseConfigured()) {
    try {
      const { data: art, error: artError } = await supabase
        .from("articles")
        .select("*")
        .eq("slug", slug)
        .single();
      if (!artError && art) article = art as Article;

      const { data: recent } = await supabase
        .from("articles")
        .select("title, slug, category, published_at, thumbnail_url")
        .eq("status", "published")
        .neq("slug", slug)
        .order("published_at", { ascending: false })
        .limit(5);
      if (recent) recentPosts = recent as Article[];

      const { data: catData } = await supabase
        .from("articles")
        .select("category")
        .eq("status", "published");
      if (catData) categories = Array.from(new Set(catData.map(c => c.category)));
    } catch (err) {
      console.error("Error fetching supplemental data:", err);
    }
  }

  if (!article) return null;

  return {
    article,
    recentPosts,
    categories
  };
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
      canonical: `https://paletindo.id/blog/${slug}`,
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
    <>
      <JsonLd 
        data={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: data.article.title,
          description: data.article.content?.substring(0, 160).replace(/<[^>]+>/g, '') || "",
          image: data.article.thumbnail_url,
          author: {
            '@type': 'Organization',
            name: 'PT Paletindo Prakarsa Unggul'
          },
          publisher: {
            '@type': 'Organization',
            name: 'PT Paletindo Prakarsa Unggul',
            logo: {
              '@type': 'ImageObject',
              url: 'https://paletindo.id/logo.png'
            }
          },
          datePublished: data.article.published_at || data.article.created_at,
          dateModified: data.article.updated_at || data.article.published_at || data.article.created_at
        }}
      />
      <BlogDetailClient 
        article={data.article} 
        recentPosts={data.recentPosts} 
        categories={data.categories} 
      />
    </>
  );
}
