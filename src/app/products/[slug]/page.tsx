import { Metadata } from "next";
import { notFound } from "next/navigation";
import { supabase, type Product, isSupabaseConfigured } from "@/lib/supabase";
import ProductDetailClient from "./ProductDetailClient";
import productsDataFallback from "../../../../dummy_data.json";

interface Props {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string) {
  // Try Supabase first
  if (isSupabaseConfigured()) {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("slug", slug)
        .single();

      if (!error && data) {
        const p = data as Product;
        return {
          id: p.id,
          name: p.name,
          slug: p.slug,
          category: p.category,
          description: (p.description || "Produk industri berkualitas tinggi dari PT Paletindo.").replace(/<[^>]+>/g, ' ').trim(),
          images: [p.image_url || "/images/products/placeholder.png"],
          specs: {
            dimension: p.length_outer > 0 ? `${p.length_outer} x ${p.width_outer} x ${p.height_outer} cm` : "Hubungi Sales",
            material: p.material || "Plastik PP/HDPE",
            color: p.color || "Sesuai Gambar",
            applications: p.applications?.join(", ") || "Industri, Pergudangan",
          },
          features: [
            "Material berkualitas tinggi",
            "Standar industri nasional",
            "Tahan banting dan awet",
            "Mudah dibersihkan",
            "Cocok untuk logistik & gudang"
          ],
        };
      }
    } catch (err) {
      console.error("Supabase fetch error:", err);
    }
  }

  // Fallback: try matching from dummy data
  const productIndex = parseInt(slug.split('-').pop() || "-1");
  const rawProduct = (productsDataFallback as any)[productIndex];

  if (rawProduct) {
    return {
      id: slug,
      name: rawProduct.name,
      slug: slug,
      category: rawProduct.categories?.[0] || "Produk Industri",
      description: (rawProduct.description || "").replace(/<[^>]+>/g, ' ').trim(),
      images: [rawProduct.image || "/images/products/placeholder.png"],
      specs: {
        dimension: `${rawProduct.dimensions?.length_outer || 0} x ${rawProduct.dimensions?.width_outer || 0} x ${rawProduct.dimensions?.height_outer || 0} mm`,
        material: rawProduct.material || "Plastik PP/HDPE",
        color: rawProduct.color || "Sesuai Gambar",
        applications: rawProduct.applications?.join(", ") || "Industri",
      },
      features: [
        "Material berkualitas tinggi",
        "Standar industri nasional",
        "Tahan banting dan awet",
        "Mudah dibersihkan",
        "Cocok untuk logistik & gudang"
      ],
    };
  }

  return null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    return {
      title: "Produk Tidak Ditemukan - PT Paletindo",
    };
  }

  return {
    title: `${product.name} - Jual Palet Plastik Tangerang Selatan`,
    description: product.description.substring(0, 160),
    openGraph: {
      title: product.name,
      description: product.description.substring(0, 160),
      images: product.images,
    },
    alternates: {
      canonical: `https://www.paletindo.id/products/${slug}`,
    }
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
