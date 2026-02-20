import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import BlogPostCard from "@/components/BlogPostCard";
import { projects } from "@/data/projects";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

const pillars = [
  {
    icon: "🏛️",
    title: "Digital Assets",
    description:
      "Leading product strategy for one of the world's most technically advanced digital asset exchanges — across spot, derivatives, custody, media, and data.",
  },
  {
    icon: "🤖",
    title: "AI × Product",
    description:
      "Exploring how AI transforms product management, content creation, and decision-making. Building tools that put AI to work, not just on the roadmap.",
  },
  {
    icon: "🎯",
    title: "Leadership",
    description:
      "Building and scaling high-performing product and design organizations. Developing the people, processes, and culture that ship great products.",
  },
];

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <Hero />

      {/* What I Do */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 border-b border-border pb-8">
          <span className="font-mono text-[10px] tracking-widest uppercase text-accent/60 block mb-2">
            01
          </span>
          <h2 className="font-heading text-3xl italic text-foreground">
            What I Do
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group border border-border bg-card rounded-sm p-6 transition-all duration-300 hover:border-accent/25 hover:bg-card-hover"
            >
              <div className="mb-5 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
              <span className="text-2xl mb-4 block">{pillar.icon}</span>
              <h3 className="font-heading italic text-lg text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 flex items-end justify-between border-b border-border pb-8">
          <div>
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent/60 block mb-2">
              02
            </span>
            <h2 className="font-heading text-3xl italic text-foreground">
              Featured Work
            </h2>
          </div>
          <Link
            href="/projects"
            className="font-mono text-[10px] tracking-widest uppercase text-muted transition-colors hover:text-accent"
          >
            View all →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* Latest Blog Posts */}
      {latestPosts.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-12 flex items-end justify-between border-b border-border pb-8">
            <div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-accent/60 block mb-2">
                03
              </span>
              <h2 className="font-heading text-3xl italic text-foreground">
                Latest Writing
              </h2>
            </div>
            <Link
              href="/blog"
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

      {/* Newsletter CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="border border-border bg-card rounded-sm p-12">
          <div className="max-w-xl mx-auto text-center">
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent/60 block mb-4">
              04
            </span>
            <h2 className="font-heading text-4xl italic text-foreground mb-4">
              Stay in the Loop
            </h2>
            <p className="text-base text-muted mb-8 leading-relaxed">
              Writing about digital assets, AI-powered product management, and
              leadership. No fluff — just the stuff worth reading.
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
