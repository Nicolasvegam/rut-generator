import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { blogPosts, authors } from "@/lib/blog-data";

interface AuthorPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return authors.map((author) => ({
    id: author.id,
  }));
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const author = authors.find((a) => a.id === params.id);
  
  if (!author) {
    return {
      title: "Autor no encontrado",
    };
  }

  return {
    title: `${author.name} - ${author.profession} | RUT Chile Blog`,
    description: author.bio,
    openGraph: {
      title: `${author.name} - ${author.profession}`,
      description: author.bio,
      type: "profile",
      url: `https://www.rutschile.com/blog/autor/${author.id}`,
    },
    alternates: {
      canonical: `https://www.rutschile.com/blog/autor/${author.id}`,
    },
  };
}

export default function AuthorPage({ params }: AuthorPageProps) {
  const author = authors.find((a) => a.id === params.id);
  
  if (!author) {
    notFound();
  }

  const authorPosts = blogPosts.filter((post) => post.authorId === author.id);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    jobTitle: author.profession,
    description: author.bio,
    url: `https://www.rutschile.com/blog/autor/${author.id}`,
    sameAs: [
      `https://www.rutschile.com/blog/autor/${author.id}`,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="min-h-screen bg-gradient-to-b from-[#F8F8F8] to-white">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#0033A0] hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al blog
          </Link>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-24 h-24 bg-[#0033A0] rounded-full flex items-center justify-center text-white text-2xl font-semibold">
                {author.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {author.name}
                </h1>
                <p className="text-lg text-gray-600 mb-4">{author.profession}</p>
                <p className="text-gray-700 leading-relaxed">{author.bio}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Artículos de {author.name.split(' ')[0]}
            </h2>
            
            {authorPosts.length === 0 ? (
              <p className="text-gray-600">Este autor aún no ha publicado artículos.</p>
            ) : (
              <div className="space-y-6">
                {authorPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                    <Link href={`/blog/${post.slug}`}>
                      <div className="flex gap-2 mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        {post.featured && (
                          <Badge className="bg-[#0033A0] text-white">Destacado</Badge>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-[#0033A0] transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString("es-CL", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </time>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}