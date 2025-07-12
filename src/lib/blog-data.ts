export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Guía Completa del Algoritmo Módulo 11 para Validar RUT Chileno",
    slug: "algoritmo-modulo-11-validar-rut",
    excerpt: "Aprende cómo funciona el algoritmo matemático oficial usado en Chile para calcular y validar el dígito verificador del RUT. Incluye ejemplos prácticos paso a paso.",
    date: "2025-01-12",
    readTime: "8 min",
    category: "Técnico",
    tags: ["algoritmo", "módulo 11", "validación", "desarrollo"],
    featured: true
  },
  {
    id: "2",
    title: "Cómo Obtener RUT siendo Extranjero en Chile 2024",
    slug: "como-obtener-rut-extranjero-chile-2024",
    excerpt: "Guía actualizada con los últimos cambios legales para obtener tu RUT como extranjero. Incluye requisitos, costos, plazos y la nueva modalidad de RUT antes de llegar a Chile.",
    date: "2025-01-12",
    readTime: "10 min",
    category: "Guías",
    tags: ["extranjeros", "migración", "trámites", "2024"],
    featured: true
  },
  {
    id: "3",
    title: "Diferencias entre RUT y RUN: Lo que todo chileno debe saber",
    slug: "diferencias-rut-run-chile",
    excerpt: "Aclara la confusión más común en Chile. Descubre cuándo usar RUT o RUN, sus diferencias legales y por qué el número es el mismo pero el contexto cambia todo.",
    date: "2025-01-12",
    readTime: "6 min",
    category: "Información",
    tags: ["RUT", "RUN", "identidad", "Chile"]
  }
];