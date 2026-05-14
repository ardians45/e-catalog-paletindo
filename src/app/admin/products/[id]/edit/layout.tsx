import { supabase, isSupabaseConfigured } from "@/lib/supabase";

export async function generateStaticParams() {
  if (!isSupabaseConfigured()) return [];
  try {
    const { data } = await supabase.from("products").select("id");
    return (data || []).map((p) => ({ id: p.id }));
  } catch (err) {
    console.error(err);
    return [];
  }
}

export default function EditProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
