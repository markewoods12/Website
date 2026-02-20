import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group border border-border bg-card rounded-sm p-6 transition-all duration-300 hover:border-accent/25 hover:bg-card-hover">
      {/* Expanding accent line on hover */}
      <div className="mb-5 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />

      <h3 className="font-heading italic text-lg text-foreground mb-2">
        {project.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted mb-5">
        {project.description}
      </p>

      <div className="mb-5 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 text-accent border border-accent/20 bg-accent/5"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-wider uppercase text-muted transition-colors hover:text-foreground"
          >
            GitHub →
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-wider uppercase text-accent transition-colors hover:text-accent-light"
          >
            Live →
          </a>
        )}
      </div>
    </div>
  );
}
