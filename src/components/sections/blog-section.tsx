
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Newspaper, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: "1",
    title: "Understanding Server Components in Next.js",
    slug: "understanding-server-components",
    excerpt: "A deep dive into how Next.js Server Components work, their benefits, and practical use cases for modern web development.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "server code",
    date: "October 26, 2023",
  },
  {
    id: "2",
    title: "Advanced TypeScript Patterns for React Developers",
    slug: "advanced-typescript-react",
    excerpt: "Boost your React projects with advanced TypeScript patterns, including generics, conditional types, and utility types.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "typescript logo",
    date: "November 15, 2023",
  },
  {
    id: "3",
    title: "Optimizing Web Performance: A Checklist",
    slug: "optimizing-web-performance",
    excerpt: "A comprehensive checklist for optimizing web performance, covering image optimization, code splitting, caching, and more.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "website speed",
    date: "December 05, 2023",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 flex items-center justify-center">
          <Newspaper className="mr-3 h-8 w-8" />
          Latest Blog Posts
        </h2>
        {blogPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
                <CardHeader className="p-0">
                  <Link href={`/blog/${post.slug}`} aria-label={`Read more about ${post.title}`}>
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      width={600}
                      height={400}
                      data-ai-hint={post.imageHint}
                      className="object-cover aspect-[3/2] hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                </CardHeader>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <CardTitle className="text-xl lg:text-2xl font-semibold text-foreground mb-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground mb-1">{post.date}</CardDescription>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">{post.excerpt}</p>
                  <div className="mt-auto">
                    <Button asChild variant="link" className="p-0 h-auto text-primary hover:text-primary/80">
                      <Link href={`/blog/${post.slug}`} className="flex items-center">
                        Read More <ArrowRight className="ml-1.5 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground text-lg">
            No blog posts yet. Stay tuned for insightful articles!
          </p>
        )}
      </div>
    </section>
  );
}
