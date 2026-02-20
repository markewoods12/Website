import type { Metadata } from "next";
import BlogPostCard from "@/components/BlogPostCard";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on software engineering, technology, and building things.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      <div className="mb-16 border-b border-border pb-12">
        <span className="font-mono text-[10px] tracking-widest uppercase text-accent/60 block mb-4">
          Blog
        </span>
        <h1
          className="font-heading italic text-foreground"
          style={{ fontSize: "clamp(3rem, 8vw, 5rem)", lineHeight: "0.95" }}
        >
          Writing
        </h1>
      </div>

      {posts.length === 0 ? (
        <p className="font-mono text-xs tracking-wider uppercase text-muted">
          No posts yet. Check back soon.
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
