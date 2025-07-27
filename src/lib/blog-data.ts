export interface Author {
  id: string;
  name: string;
  bio: string;
  profession: string;
  avatar?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  authorId: string;
  featured?: boolean;
}

export const authors: Author[] = [
  {
    id: "1",
    name: "Valentina Cifuentes",
    bio: "Desarrolladora full-stack apasionada por simplificar procesos complejos. Le encanta el café cortado y los algoritmos elegantes.",
    profession: "Ingeniera en Software"
  },
  {
    id: "2",
    name: "Matías Esperanza",
    bio: "Abogado especializado en derecho migratorio con más de 10 años ayudando a extranjeros a establecerse en Chile. Fan del trekking en Torres del Paine.",
    profession: "Abogado Migratorio"
  },
  {
    id: "3",
    name: "Isidora Valenzuela",
    bio: "Contadora y consultora tributaria que ama explicar temas complejos de forma simple. Coleccionista de plantas suculentas.",
    profession: "Contadora Auditora"
  },
  {
    id: "4",
    name: "Benjamín Maturana",
    bio: "Experto en Excel y automatización de procesos. Cree firmemente que todo problema tiene una solución en una hoja de cálculo.",
    profession: "Analista de Datos"
  },
  {
    id: "5",
    name: "Catalina Fuentes",
    bio: "Programadora backend con amor por Python y el código limpio. Practica yoga y es mentora en comunidades tech.",
    profession: "Desarrolladora Backend"
  },
  {
    id: "6",
    name: "Diego Contreras",
    bio: "Desarrollador frontend que vive entre JavaScript y TypeScript. Músico amateur y fanático de los asados domingueros.",
    profession: "Desarrollador Frontend"
  }
];

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
    authorId: "1",
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
    authorId: "2",
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
    tags: ["RUT", "RUN", "identidad", "Chile"],
    authorId: "3"
  },
  {
    id: "4",
    title: "Cómo Calcular el Dígito Verificador del RUT en Excel: Guía Paso a Paso",
    slug: "calcular-digito-verificador-rut-excel",
    excerpt: "Aprende a crear una fórmula en Excel para calcular automáticamente el dígito verificador del RUT chileno. Incluye ejemplos prácticos y plantilla descargable.",
    date: "2025-01-27",
    readTime: "10 min",
    category: "Tutorial",
    tags: ["Excel", "RUT", "fórmulas", "tutorial", "dígito verificador"],
    authorId: "4",
    featured: true
  },
  {
    id: "5",
    title: "Calcular Dígito Verificador del RUT en Google Sheets: Tutorial Completo",
    slug: "calcular-digito-verificador-rut-google-sheets",
    excerpt: "Guía detallada para implementar el algoritmo módulo 11 en Google Sheets. Crea tu propio validador de RUT en la nube con fórmulas paso a paso.",
    date: "2025-01-27",
    readTime: "8 min",
    category: "Tutorial",
    tags: ["Google Sheets", "RUT", "fórmulas", "tutorial", "dígito verificador"],
    authorId: "4"
  },
  {
    id: "6",
    title: "Validar RUT en JavaScript: Código Completo y Explicado",
    slug: "calcular-digito-verificador-rut-javascript",
    excerpt: "Implementa el algoritmo de validación de RUT chileno en JavaScript. Código moderno, optimizado y listo para usar en tu proyecto web.",
    date: "2025-01-27",
    readTime: "12 min",
    category: "Desarrollo",
    tags: ["JavaScript", "RUT", "programación", "validación", "módulo 11"],
    authorId: "6"
  },
  {
    id: "7",
    title: "Calcular Dígito Verificador del RUT en Python: Guía para Desarrolladores",
    slug: "calcular-digito-verificador-rut-python",
    excerpt: "Tutorial completo para implementar la validación de RUT chileno en Python. Incluye código optimizado, manejo de errores y casos de uso prácticos.",
    date: "2025-01-27",
    readTime: "10 min",
    category: "Desarrollo",
    tags: ["Python", "RUT", "programación", "validación", "tutorial"],
    authorId: "5"
  },
  {
    id: "8",
    title: "Validar RUT en PHP: Implementación del Algoritmo Módulo 11",
    slug: "calcular-digito-verificador-rut-php",
    excerpt: "Aprende a validar RUT chilenos en PHP con código profesional. Incluye función completa, ejemplos de uso y mejores prácticas de seguridad.",
    date: "2025-01-27",
    readTime: "9 min",
    category: "Desarrollo",
    tags: ["PHP", "RUT", "programación", "validación", "backend"],
    authorId: "5"
  }
];