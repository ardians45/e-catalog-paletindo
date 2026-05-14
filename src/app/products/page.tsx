import { Metadata } from "next";
import { Suspense } from "react";
import { supabase, type Product, isSupabaseConfigured } from "@/lib/supabase";
import ProductsClient from "./ProductsClient";
import productsDataFallback from "../../../dummy_data.json";

export const metadata: Metadata = {
  title: "Katalog Palet Plastik Tangerang Selatan - PT Paletindo Prakarsa Unggul",
  description: "Jelajahi katalog lengkap palet plastik, container industri, dan safety equipment. Produk berkualitas tinggi untuk kebutuhan logistik dan pergudangan di Tangerang Selatan.",
  alternates: {
    canonical: "https://www.paletindo.id/products",
  }
};

const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

async function getProducts() {
  if (isSupabaseConfigured()) {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data && data.length > 0) {
        return data as Product[];
      }
    } catch (err) {
      console.error("Supabase fetch error:", err);
    }
  }

  // Fallback to dummy data
  return productsDataFallback.map((p, i) => ({
    id: `fallback-${i}`,
    name: p.name,
    slug: slugify(p.name) + '-' + i,
    description: p.description || null,
    material: p.material || "Plastik PP/HDPE",
    color: p.color || "Sesuai Gambar",
    weight: 0,
    is_featured: false,
    length_outer: p.dimensions?.length_outer || 0,
    width_outer: p.dimensions?.width_outer || 0,
    height_outer: p.dimensions?.height_outer || 0,
    category: p.categories?.[0] || "Container Industri",
    applications: p.applications || [],
    image_url: p.image || null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  })) as Product[];
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <Suspense fallback={
      <div className="w-full bg-[#f8f9fa] min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-zinc-300 border-t-[#D4A373] rounded-full animate-spin"></div>
          <p className="text-zinc-400 text-sm">Memuat katalog...</p>
        </div>
      </div>
    }>
      <ProductsClient initialProducts={products} />
    </Suspense>
  );
}
