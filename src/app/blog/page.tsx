import { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/lib/blog-data";
import { FileText, TrendingUp, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog sobre RUT Chile | Guías, Tutoriales y Actualidad",
  description: "Artículos, guías y tutoriales sobre el RUT chileno. Aprende sobre validación, obtención de RUT para extranjeros, diferencias con RUN y más.",
  openGraph: {
    title: "Blog sobre RUT Chile | Guías y Tutoriales",
    description: "Todo lo que necesitas saber sobre el RUT chileno en nuestro blog especializado.",
    type: "website",
    url: "https://www.rutschile.com/blog",
  },
  alternates: {
    canonical: "https://www.rutschile.com/blog",
  },
};

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F8F8F8] to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Blog RUT Chile
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guías completas, tutoriales y las últimas actualizaciones sobre el RUT chileno. 
            Todo lo que necesitas saber en un solo lugar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="inline-flex p-3 bg-blue-100 rounded-full mb-4">
              <FileText className="w-6 h-6 text-[#0033A0]" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Guías Detalladas</h3>
            <p className="text-gray-600 text-sm">
              Tutoriales paso a paso para todos tus trámites relacionados con el RUT
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex p-3 bg-blue-100 rounded-full mb-4">
              <TrendingUp className="w-6 h-6 text-[#0033A0]" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Información Actualizada</h3>
            <p className="text-gray-600 text-sm">
              Las últimas novedades y cambios en la normativa del RUT chileno
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex p-3 bg-blue-100 rounded-full mb-4">
              <BookOpen className="w-6 h-6 text-[#0033A0]" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Contenido Educativo</h3>
            <p className="text-gray-600 text-sm">
              Aprende todo sobre el sistema de identificación tributaria de Chile
            </p>
          </div>
        </div>

        {featuredPosts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Artículos Destacados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        )}

        {regularPosts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Más Artículos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        )}

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            ¿Tienes alguna pregunta sobre el RUT? Explora nuestros artículos o{" "}
            <a href="/" className="text-[#0033A0] hover:underline">
              genera tu RUT ahora
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}