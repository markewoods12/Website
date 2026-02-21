export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  section: "leadership" | "personal";
}

export const projects: Project[] = [
  {
    title: "Bullish Exchange",
    description:
      "Built the product organization and led strategy across one of the world's most technically advanced digital asset exchanges — spanning spot trading, derivatives, custody, and institutional-grade infrastructure. Drove the product roadmap from pre-launch through NYSE IPO in August 2025.",
    tech: ["Exchange Design", "Derivatives", "Custody", "Product Strategy", "UX"],
    live: "https://bullish.com",
    featured: true,
    section: "leadership",
  },
  {
    title: "CoinDesk Media & Data",
    description:
      "Led product across CoinDesk Media (the editorial platform), CoinDesk Data (institutional market data and pricing), and CoinDesk Indices — the benchmark indices referenced by ETFs and financial products globally.",
    tech: ["Media Product", "Market Data", "APIs", "Indices", "Editorial"],
    live: "https://coindesk.com",
    featured: true,
    section: "leadership",
  },
  {
    title: "Content Engine",
    description:
      "A personal AI-powered content pipeline that transforms raw ideas into polished writing. Built to accelerate my own publishing cadence using LLMs, structured prompting, and automation.",
    tech: ["AI", "Claude API", "Automation", "Content Strategy"],
    featured: true,
    section: "personal",
  },
  {
    title: "Market Intelligence Dashboard",
    description:
      "A personal crypto competitive intelligence tool that aggregates exchange metrics, token flows, and market signals to inform product and strategy decisions.",
    tech: ["Python", "Data Analysis", "Crypto Markets", "APIs"],
    section: "personal",
  },
];
