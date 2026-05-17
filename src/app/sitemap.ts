import { MetadataRoute } from 'next'
import { getProducts, getArticles } from '@/lib/supabase'

export const dynamic = 'force-static'


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const baseUrl = 'https://paletindo.id'

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/products',
    '/blog',
    '/contact',
    '/rfq',
    '/palet-plastik-tangerang-selatan',
    '/pallet-plastik-serpong-utara',
    '/pallet-plastik-serpong',
    '/pallet-plastik-bsd',
    '/pallet-plastik-ciputat',
    '/pallet-plastik-pondok-aren',
    '/pallet-plastik-pamulang',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // Dynamic products
  let productRoutes: MetadataRoute.Sitemap = []
  try {
    const products = await getProducts()
    if (products && products.length > 0) {
      productRoutes = products.map((product) => ({
        url: `${baseUrl}/products/${product.slug}`,
        lastModified: product.updated_at ? new Date(product.updated_at).toISOString() : new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }))
    }
  } catch (error) {
    console.error('Error fetching products for sitemap:', error)
  }

  // Dynamic articles
  let articleRoutes: MetadataRoute.Sitemap = []
  try {
    const articles = await getArticles('published')
    articleRoutes = (articles || []).map((article) => ({
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified: article.updated_at ? new Date(article.updated_at).toISOString() : new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    }))
  } catch (error) {
    console.error('Error fetching articles for sitemap:', error)
  }

  return [...staticRoutes, ...productRoutes, ...articleRoutes]
}
