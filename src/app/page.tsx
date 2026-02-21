import Hero from "@/components/Hero";
import BlogPostCard from "@/components/BlogPostCard";
import { getAllPosts } from "@/lib/blog";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <Hero />

      {/* Bullish IPO Highlight — slot 2 */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <Link href="/ipo" className="group block border border-border bg-card rounded-sm overflow-hidden transition-all duration-300 hover:border-accent/25 hover:bg-card-hover">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-auto">
              <Image
                src="/Bullish-OB-Photo--20250813-CC-PRESS-70.jpg"
                alt="Bullish NYSE Opening Bell"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="font-mono text-[10px] tracking-widest uppercase text-accent/60 block mb-3">
                August 13, 2025
              </span>
              <h3 className="font-heading text-2xl italic text-foreground mb-3">
                Bullish Goes Public
              </h3>
              <p className="text-sm leading-relaxed text-muted mb-4">
                $BLSH listed on the NYSE. After years of building, our team rang the Opening Bell
                at 11 Wall Street. A milestone worth remembering.
              </p>
              <span className="font-mono text-[10px] tracking-widest uppercase text-accent/70 group-hover:text-accent transition-colors">
                View photos →
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* Latest Writing */}
      {latestPosts.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-14">
          <div className="mb-8 flex items-end justify-between border-b border-border pb-6">
            <div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-accent/60 block mb-2">
                01
              </span>
              <h2 className="font-heading text-3xl italic text-foreground">
                Latest Writing
              </h2>
            </div>
            <Link
              href="/writing"
              className="font-mono text-[10px] tracking-widest uppercase text-muted transition-colors hover:text-accent"
            >
              View all →
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* About Teaser */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="border border-border bg-card rounded-sm p-8 md:p-12">
          <span className="font-mono text-[10px] tracking-widest uppercase text-accent/60 block mb-6">
            02
          </span>
          <blockquote className="font-heading text-2xl italic text-foreground leading-snug mb-6 max-w-2xl">
            &ldquo;I&apos;ve spent 15 years at the intersection of finance, technology, and
            the messy reality of building products that actually work.&rdquo;
          </blockquote>
          <p className="text-base leading-relaxed text-muted mb-6 max-w-2xl">
            Head of Product at Bullish. Former Block.one. The path ran through enterprise software,
            clinical research, blockchain infrastructure, and the early days of institutional-grade
            crypto — before landing here, building the exchange that went public on the NYSE in
            August 2025.
          </p>
          <Link
            href="/about"
            className="font-mono text-[11px] tracking-widest uppercase text-accent transition-colors hover:text-accent-light"
          >
            Read more →
          </Link>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="border border-border bg-card rounded-sm p-8">
          <div className="max-w-xl mx-auto text-center">
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent/60 block mb-4">
              03
            </span>
            <h2 className="font-heading text-4xl italic text-foreground mb-4">
              Think Better About What You&apos;re Building
            </h2>
            <p className="text-base text-muted mb-8 leading-relaxed">
              I write about digital assets, AI-powered product management, and what it takes to
              ship products in regulated industries. Twice a month. No fluff, no sponsored content.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
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
          </div>
        </div>
      </section>
    </>
  );
}
