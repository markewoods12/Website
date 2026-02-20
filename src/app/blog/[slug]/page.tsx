import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import MDXContent from "@/components/MDXContent";
import Link from "next/link";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <Link
        href="/blog"
        className="font-mono text-[10px] tracking-widest uppercase text-muted transition-colors hover:text-accent mb-12 inline-flex items-center gap-2"
      >
        ← Back to Blog
      </Link>

      <article className="mt-12">
        <header className="mb-12 border-b border-border pb-12">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <time className="font-mono text-[10px] tracking-wider uppercase text-muted">
              {post.date}
            </time>
            {post.readingTime && (
              <>
                <span className="text-border font-mono text-[10px]">·</span>
                <span className="font-mono text-[10px] tracking-wider uppercase text-muted">
                  {post.readingTime}
                </span>
              </>
            )}
          </div>
          <h1
            className="font-heading italic text-foreground leading-tight mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            {post.title}
          </h1>
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
        </header>

        <MDXContent source={post.content} />
      </article>
    </div>
  );
}
