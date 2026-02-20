export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Cloud Infrastructure Dashboard",
    description:
      "A real-time monitoring dashboard for cloud infrastructure, providing visibility into resource usage, alerts, and deployment status across multiple providers.",
    tech: ["React", "TypeScript", "AWS", "Go"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "AI-Powered Code Review Tool",
    description:
      "An automated code review assistant that uses LLMs to analyze pull requests, suggest improvements, and catch potential bugs before they reach production.",
    tech: ["Python", "FastAPI", "OpenAI", "Docker"],
    github: "https://github.com",
    featured: true,
  },
  {
    title: "Distributed Task Queue",
    description:
      "A high-performance distributed task queue built for processing millions of background jobs with guaranteed delivery and automatic retries.",
    tech: ["Rust", "Redis", "PostgreSQL", "gRPC"],
    github: "https://github.com",
    featured: true,
  },
  {
    title: "Personal Finance Tracker",
    description:
      "A privacy-first personal finance application that runs entirely locally, with data visualization and budget tracking capabilities.",
    tech: ["Next.js", "SQLite", "D3.js", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "CLI Productivity Suite",
    description:
      "A collection of CLI tools for developer productivity — including a task manager, time tracker, and project scaffolder.",
    tech: ["Go", "Cobra", "SQLite"],
    github: "https://github.com",
  },
  {
    title: "Real-time Collaboration Engine",
    description:
      "A WebSocket-based engine powering real-time collaborative editing with conflict resolution using CRDTs.",
    tech: ["TypeScript", "WebSockets", "CRDTs", "Node.js"],
    github: "https://github.com",
  },
];
