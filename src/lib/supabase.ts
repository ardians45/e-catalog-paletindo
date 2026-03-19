import { createClient } from '@supabase/supabase-js'

// These will be loaded from .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return (
    process.env.NEXT_PUBLIC_SUPABASE_URL !== undefined &&
    process.env.NEXT_PUBLIC_SUPABASE_URL !== '' &&
    process.env.NEXT_PUBLIC_SUPABASE_URL !== 'your_supabase_url_here' &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY !== undefined &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY !== '' &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY !== 'your_supabase_anon_key_here'
  )
}


// ==========================================
// TypeScript Types for Database
// ==========================================

export interface Product {
  id: string
  name: string
  slug: string
  description: string | null
  material: string
  color: string
  weight: number
  is_featured: boolean
  length_outer: number
  width_outer: number
  height_outer: number
  category: string
  applications: string[]
  image_url: string | null
  created_at: string
  updated_at: string
}

export interface Article {
  id: string
  title: string
  slug: string
  content: string | null
  excerpt: string | null
  category: string
  thumbnail_url: string | null
  author: string
  status: 'draft' | 'published'
  published_at: string | null
  created_at: string
  updated_at: string
}

export interface Profile {
  id: string
  full_name: string | null
  role: 'admin' | 'user'
  avatar_url: string | null
  created_at: string
  updated_at: string
}

// ==========================================
// Helper Functions
// ==========================================

// Products
export async function getProducts(category?: string) {
  let query = supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false })

  if (category && category !== 'all') {
    query = query.eq('category', category)
  }

  const { data, error } = await query
  if (error) throw error
  return data as Product[]
}

export async function getProductBySlug(slug: string) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) throw error
  return data as Product
}

export async function createProduct(product: Omit<Product, 'id' | 'created_at' | 'updated_at'>) {
  const { data, error } = await supabase
    .from('products')
    .insert(product)
    .select()
    .single()

  if (error) throw error
  return data as Product
}

export async function updateProduct(id: string, updates: Partial<Product>) {
  const { data, error } = await supabase
    .from('products')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data as Product
}

export async function deleteProduct(id: string) {
  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', id)

  if (error) throw error
}

// Articles
export async function getArticles(status?: string) {
  let query = supabase
    .from('articles')
    .select('*')
    .order('created_at', { ascending: false })

  if (status) {
    query = query.eq('status', status)
  }

  const { data, error } = await query
  if (error) throw error
  return data as Article[]
}

export async function getArticleBySlug(slug: string) {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) throw error
  return data as Article
}

export async function createArticle(article: Omit<Article, 'id' | 'created_at' | 'updated_at'>) {
  const { data, error } = await supabase
    .from('articles')
    .insert(article)
    .select()
    .single()

  if (error) throw error
  return data as Article
}

export async function updateArticle(id: string, updates: Partial<Article>) {
  const { data, error } = await supabase
    .from('articles')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data as Article
}

export async function deleteArticle(id: string) {
  const { error } = await supabase
    .from('articles')
    .delete()
    .eq('id', id)

  if (error) throw error
}

// Storage Helpers
export async function uploadImage(
  bucket: 'product-images' | 'article-images',
  file: File,
  path: string
) {
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(path, file, {
      cacheControl: '3600',
      upsert: true,
    })

  if (error) throw error

  const { data: urlData } = supabase.storage
    .from(bucket)
    .getPublicUrl(data.path)

  return urlData.publicUrl
}

export async function deleteImage(bucket: 'product-images' | 'article-images', path: string) {
  const { error } = await supabase.storage
    .from(bucket)
    .remove([path])

  if (error) throw error
}

// Profile / Auth
export async function getCurrentProfile() {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  if (error) return null
  return data as Profile
}

export async function isAdmin() {
  const profile = await getCurrentProfile()
  return profile?.role === 'admin'
}
