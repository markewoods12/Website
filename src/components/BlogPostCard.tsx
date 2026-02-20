import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";

export default function BlogPostCard({ post }: { post: BlogPostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="border border-border bg-card rounded-sm p-6 transition-all duration-300 hover:border-accent/25 hover:bg-card-hover">
        {/* Expanding accent line on hover */}
        <div className="mb-5 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />

        <div className="flex items-center gap-3 mb-3">
          <time className="font-mono text-[10px] tracking-wider uppercase text-muted">
            {post.date}
          </time>
          {post.readingTime && (
            <>
              <span className="text-border">·</span>
              <span className="font-mono text-[10px] tracking-wider uppercase text-muted">
                {post.readingTime}
              </span>
            </>
          )}
        </div>

        <h3 className="font-heading italic text-lg text-foreground mb-2 transition-colors duration-200 group-hover:text-accent-light">
          {post.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted mb-5">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 text-accent border border-accent/20 bg-accent/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
}
