import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
<<<<<<< HEAD
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
=======
  const baseUrl = 'https://nicovega.dev/rutificador'
  const lastModified = new Date()

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/validar`,
      lastModified,
      changeFrequency: 'weekly',
>>>>>>> f373c334956a6b096f7d95a73a0852b169d2a35b
      priority: 0.9,
    },
    {
      url: `${baseUrl}/rut-al-azar`,
<<<<<<< HEAD
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
=======
      lastModified,
      changeFrequency: 'weekly',
>>>>>>> f373c334956a6b096f7d95a73a0852b169d2a35b
      priority: 0.8,
    },
    {
      url: `${baseUrl}/creador-rut`,
<<<<<<< HEAD
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Agregar futuras páginas dinámicamente
  // Por ejemplo, si tienes un blog:
  // const posts = await getPosts()
  // const blogRoutes = posts.map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: post.updatedAt,
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.6,
  // }))

  return [...routes]
=======
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
>>>>>>> f373c334956a6b096f7d95a73a0852b169d2a35b
}