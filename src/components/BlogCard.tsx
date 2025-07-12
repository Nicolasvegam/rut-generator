import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Tag } from "lucide-react";
import type { BlogPost } from "@/lib/blog-data";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="h-full hover:shadow-lg transition-shadow duration-300 hover:border-[#0033A0] cursor-pointer">
        <CardHeader>
          <div className="flex justify-between items-start mb-2">
            <Badge variant="secondary" className="text-xs">
              {post.category}
            </Badge>
            {post.featured && (
              <Badge className="bg-[#0033A0] text-white text-xs">
                Destacado
              </Badge>
            )}
          </div>
          <h3 className="text-xl font-bold text-gray-900 hover:text-[#0033A0] transition-colors line-clamp-2">
            {post.title}
          </h3>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <div key={tag} className="flex items-center">
                <Tag className="w-3 h-3 text-gray-400 mr-1" />
                <span className="text-xs text-gray-500">{tag}</span>
              </div>
            ))}
          </div>
          
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
        </CardContent>
      </Card>
    </Link>
  );
}