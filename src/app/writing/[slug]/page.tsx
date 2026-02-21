import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import MDXContent from "@/components/MDXContent";
import PostDisclaimer from "@/components/PostDisclaimer";
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

export default function WritingPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const disclaimerVariant = (post.disclaimer ?? "standard") as
    | "standard"
    | "market-commentary"
    | "none";

  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <Link
        href="/writing"
        className="font-mono text-[10px] tracking-widest uppercase text-muted transition-colors hover:text-accent mb-12 inline-flex items-center gap-2"
      >
        ← Back to Writing
      </Link>

      <article className="mt-12">
        <header className="mb-12 border-b border-border pb-12">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            {post.pinned && (
              <>
                <span className="font-mono text-[9px] tracking-wider uppercase px-2 py-0.5 text-accent border border-accent/30 bg-accent/10">
                  Featured
                </span>
                <span className="text-border font-mono text-[10px]">·</span>
              </>
            )}
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

        <PostDisclaimer variant={disclaimerVariant} />

        {/* Per-post newsletter CTA */}
        <section className="mt-16 border border-border bg-card rounded-sm p-8">
          <h2 className="font-heading text-2xl italic text-foreground mb-3">
            Enjoyed this?
          </h2>
          <p className="text-sm leading-relaxed text-muted mb-6">
            I write about digital assets, AI-powered product management, and what it takes to ship
            in regulated industries. Twice a month, no fluff.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mb-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 border border-border bg-background rounded-sm px-4 py-3 text-sm text-foreground placeholder-muted/40 outline-none transition-colors focus:border-accent/50"
            />
            <button
              type="submit"
              className="font-mono text-[11px] tracking-widest uppercase px-6 py-3 bg-accent text-background rounded-sm font-medium transition-all duration-200 hover:bg-accent-light whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="font-mono text-[10px] tracking-wider uppercase text-muted/50">
            Or{" "}
            <Link
              href="/contact"
              className="text-accent/70 hover:text-accent transition-colors"
            >
              reach out directly →
            </Link>
          </p>
        </section>
      </article>
    </div>
  );
}
