
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Newspaper, ArrowRight, AlertTriangle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/types";
import { format } from 'date-fns';

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    // In a server component, you can fetch directly from your domain
    // Ensure your domain is correctly configured (e.g., http://localhost:9002 for dev)
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:9002'}/api/blogs`, {
      cache: 'no-store', // Or 'force-cache' or specific revalidation
    });

    if (!res.ok) {
      // Log error details for server-side debugging
      console.error(`Failed to fetch blog posts: ${res.status} ${res.statusText}`);
      const errorBody = await res.text();
      console.error("Error body:", errorBody);
      return []; // Return empty array or throw error
    }
    const posts = await res.json();
    return posts.map((post: BlogPost) => ({
        ...post,
        // Ensure date is formatted correctly for display
        date: format(new Date(post.date), "MMMM dd, yyyy"),
      }));
  } catch (error) {
    console.error("Error fetching blog posts in component:", error);
    return []; // Return empty array on error
  }
}


export default async function BlogSection() {
  const blogPosts = await getBlogPosts();

  return (
    <section id="blog" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 flex items-center justify-center">
          <Newspaper className="mr-3 h-8 w-8" />
          Latest Blog Posts
        </h2>
        {blogPosts && blogPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post._id.toString()} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
                <CardHeader className="p-0">
                  <Link href={`/blog/${post.slug}`} aria-label={`Read more about ${post.title}`}>
                    <Image
                      src={post.imageUrl || "https://placehold.co/600x400.png"}
                      alt={post.title}
                      width={600}
                      height={400}
                      data-ai-hint={post.imageHint || "blog image"}
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
                  <CardDescription className="text-sm text-muted-foreground mb-1">{post.date as string}</CardDescription>
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
          <div className="text-center text-muted-foreground text-lg flex flex-col items-center">
            <AlertTriangle className="w-12 h-12 text-destructive mb-4" />
            <p className="font-semibold text-xl text-destructive-foreground">Could not load blog posts.</p>
            <p>There might be an issue connecting to the database or the API.</p>
            <p>Please ensure your MongoDB URI is correctly set up in your environment variables and the database is accessible.</p>
          </div>
        )}
      </div>
    </section>
  );
}
