import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import BlogPostCard from "@/components/BlogPostCard";
import { projects } from "@/data/projects";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <Hero />

      {/* Featured Projects */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 flex items-end justify-between border-b border-border pb-8">
          <div>
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent/60 block mb-2">
              01
            </span>
            <h2 className="font-heading text-3xl italic text-foreground">
              Featured Projects
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
                02
              </span>
              <h2 className="font-heading text-3xl italic text-foreground">
                Latest Posts
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

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="border border-border bg-card rounded-sm p-12 text-center">
          <span className="font-mono text-[10px] tracking-widest uppercase text-accent/60 block mb-4">
            03
          </span>
          <h2 className="font-heading text-4xl italic text-foreground mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-base text-muted mb-8 max-w-md mx-auto leading-relaxed">
            Have a project in mind or just want to connect? I&apos;d love to
            hear from you.
          </p>
          <Link
            href="/contact"
            className="font-mono text-[11px] tracking-widest uppercase px-8 py-3 bg-accent text-background rounded-sm font-medium transition-all duration-200 hover:bg-accent-light inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
