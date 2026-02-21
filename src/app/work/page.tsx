import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Product leadership at scale — from a regulated digital asset exchange to the world's most trusted crypto media brand.",
};

export default function WorkPage() {
  const leadership = projects.filter((p) => p.section === "leadership");
  const personal = projects.filter((p) => p.section === "personal");

  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-16 border-b border-border pb-12">
        <span className="font-mono text-[10px] tracking-widest uppercase text-accent/60 block mb-4">
          Work
        </span>
        <h1
          className="font-heading italic text-foreground"
          style={{ fontSize: "clamp(3rem, 8vw, 5rem)", lineHeight: "0.95" }}
        >
          What I&apos;ve Built
        </h1>
        <p className="text-base leading-relaxed text-muted mt-6 max-w-2xl">
          Product leadership at scale — from a regulated digital asset exchange to the world&apos;s
          most trusted crypto media brand. And personal projects at the intersection of AI and
          market intelligence.
        </p>
      </div>

      {/* Product Leadership */}
      <section className="mb-20">
        <div className="flex items-center gap-4 mb-8 border-b border-border pb-4">
          <span className="font-mono text-[10px] tracking-widest uppercase text-accent/40">01</span>
          <h2 className="font-heading text-2xl italic text-foreground">Product Leadership</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {leadership.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* Personal Projects */}
      <section>
        <div className="flex items-center gap-4 mb-8 border-b border-border pb-4">
          <span className="font-mono text-[10px] tracking-widest uppercase text-accent/40">02</span>
          <h2 className="font-heading text-2xl italic text-foreground">Personal Projects</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {personal.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
