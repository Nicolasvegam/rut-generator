import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { blogPosts, authors } from "@/lib/blog-data";
import { blogContent } from "@/lib/blog-content";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

function getPostContent(slug: string) {
  return blogContent[slug] || null;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  
  if (!post) {
    return {
      title: "Artículo no encontrado",
    };
  }

  return {
    title: `${post.title} | RUT Chile Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `https://www.rutschile.com/blog/${post.slug}`,
      tags: post.tags,
    },
    alternates: {
      canonical: `https://www.rutschile.com/blog/${post.slug}`,
    },
  };
}


export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  const content = getPostContent(params.slug);
  
  if (!content) {
    notFound();
  }

  const author = authors.find((a) => a.id === post.authorId);

  // Remove htmlContent line as we'll use MarkdownRenderer

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: author ? {
      "@type": "Person",
      name: author.name,
      jobTitle: author.profession,
      description: author.bio,
    } : {
      "@type": "Organization",
      name: "RUT Chile",
      url: "https://www.rutschile.com",
    },
    publisher: {
      "@type": "Organization",
      name: "RUT Chile",
      url: "https://www.rutschile.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.rutschile.com/icon.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.rutschile.com/blog/${post.slug}`,
    },
    articleBody: content,
    keywords: post.tags.join(", "),
    articleSection: post.category,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="min-h-screen bg-gradient-to-b from-[#F8F8F8] to-white">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#0033A0] hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al blog
          </Link>

          <header className="mb-8">
            <div className="flex gap-2 mb-4">
              <Badge variant="secondary">{post.category}</Badge>
              {post.featured && (
                <Badge className="bg-[#0033A0] text-white">Destacado</Badge>
              )}
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
              {author && (
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <Link 
                    href={`/blog/autor/${author.id}`}
                    className="hover:text-[#0033A0] hover:underline transition-colors"
                  >
                    Por {author.name}
                  </Link>
                </div>
              )}
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("es-CL", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} de lectura</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <div key={tag} className="flex items-center">
                  <Tag className="w-3 h-3 text-gray-400 mr-1" />
                  <span className="text-sm text-gray-500">{tag}</span>
                </div>
              ))}
            </div>
          </header>

          <MarkdownRenderer content={content} />

          {author && (
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Sobre el autor
              </h3>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0033A0] rounded-full flex items-center justify-center text-white font-semibold">
                  {author.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <Link 
                    href={`/blog/autor/${author.id}`}
                    className="hover:underline"
                  >
                    <h4 className="font-semibold text-gray-900 hover:text-[#0033A0] transition-colors">
                      {author.name}
                    </h4>
                  </Link>
                  <p className="text-sm text-gray-600 mb-1">{author.profession}</p>
                  <p className="text-gray-700">{author.bio}</p>
                </div>
              </div>
            </div>
          )}

          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                ¿Necesitas generar o validar un RUT?
              </h3>
              <p className="text-gray-600 mb-4">
                Usa nuestras herramientas gratuitas para generar y validar RUT chilenos al instante.
              </p>
              <div className="flex gap-4 justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center px-4 py-2 bg-[#0033A0] text-white rounded-md hover:bg-[#1a47b8] transition-colors"
                >
                  Generar RUT
                </Link>
                <Link
                  href="/validar"
                  className="inline-flex items-center px-4 py-2 border border-[#0033A0] text-[#0033A0] rounded-md hover:bg-blue-50 transition-colors"
                >
                  Validar RUT
                </Link>
              </div>
            </div>
          </footer>
        </article>
      </main>
    </>
  );
}