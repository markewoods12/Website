import type { Metadata } from "next";
import BlogPostCard from "@/components/BlogPostCard";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Mark Woods writes about digital assets, AI and product management, and leadership. First-person, opinionated, no fluff.",
};

export default function WritingPage() {
  const posts = getAllPosts();
  const pinned = posts.find((p) => p.pinned);
  const rest = posts.filter((p) => !p.pinned);

  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      <div className="mb-16 border-b border-border pb-12">
        <span className="font-mono text-[10px] tracking-widest uppercase text-accent/60 block mb-4">
          Writing
        </span>
        <h1
          className="font-heading italic text-foreground"
          style={{ fontSize: "clamp(3rem, 8vw, 5rem)", lineHeight: "0.95" }}
        >
          Writing
        </h1>
        <p className="text-base leading-relaxed text-muted mt-6 max-w-2xl">
          Essays on digital assets, AI-powered product management, and what it takes to ship
          products in regulated industries. First-person. Opinionated. No fluff.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="font-mono text-xs tracking-wider uppercase text-muted">
          No posts yet. Check back soon.
        </p>
      ) : (
        <div className="space-y-4">
          {pinned && (
            <div className="mb-8">
              <BlogPostCard post={pinned} />
            </div>
          )}
          <div className="grid gap-4 md:grid-cols-2">
            {rest.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
