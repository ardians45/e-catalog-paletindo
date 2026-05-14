import { supabase, isSupabaseConfigured } from "@/lib/supabase";

export async function generateStaticParams() {
  if (!isSupabaseConfigured()) return [];
  try {
    const { data } = await supabase.from("articles").select("id");
    return (data || []).map((a) => ({ id: a.id }));
  } catch (err) {
    console.error(err);
    return [];
  }
}

export default function EditArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
