"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SubstackPost } from "@/lib/substack";

interface BlogListProps {
  posts: SubstackPost[];
}

export function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No posts found yet. Subscribe below to get notified!</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 max-w-3xl mx-auto">
      {posts.map((post, index) => (
        <motion.div
          key={post.link}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link href={post.link} target="_blank" rel="noopener noreferrer">
            <Card className="hover:bg-muted/50 transition-colors h-full">
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {new Date(post.pubDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <CardDescription className="line-clamp-2">{post.contentSnippet}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
