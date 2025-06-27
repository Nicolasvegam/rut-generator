import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://nicovega.dev/rutificador'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/validar',
          '/rut-al-azar', 
          '/creador-rut',
          '/sitemap.xml'
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/favicon.ico'
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 1,
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl
  }
}