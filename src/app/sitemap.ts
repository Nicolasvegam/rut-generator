import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.rutschile.com'
  const currentDate = new Date()

  // Páginas principales con sus prioridades y frecuencias de actualización
  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/validar`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/rut-al-azar`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/creador-rut`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
  ]

  // Posts del blog estáticos
  const blogRoutes = [
    {
      url: `${baseUrl}/blog/algoritmo-modulo-11-validar-rut`,
      lastModified: new Date('2025-01-12'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/como-obtener-rut-extranjero-chile-2024`,
      lastModified: new Date('2025-01-12'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/diferencias-rut-run-chile`,
      lastModified: new Date('2025-01-12'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  return [...routes, ...blogRoutes]
}