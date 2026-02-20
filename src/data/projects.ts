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
    title: "Bullish Exchange",
    description:
      "Leading product strategy across one of the world's most technically advanced digital asset exchanges — spanning spot trading, derivatives, custody, and institutional-grade infrastructure.",
    tech: ["Exchange Design", "Derivatives", "Custody", "Product Strategy", "UX"],
    live: "https://bullish.com",
    featured: true,
  },
  {
    title: "CoinDesk Media & Data",
    description:
      "Product leadership across CoinDesk Media (editorial platform), CoinDesk Data (market data and pricing), and CoinDesk Indices — reaching millions of institutional and retail users.",
    tech: ["Media Product", "Market Data", "APIs", "Indices", "Editorial"],
    live: "https://coindesk.com",
    featured: true,
  },
  {
    title: "Content Engine",
    description:
      "A personal AI-powered content pipeline that transforms raw ideas into polished writing. Built to accelerate my own publishing cadence using LLMs, structured prompting, and automation.",
    tech: ["AI", "Claude API", "Automation", "Content Strategy"],
    featured: true,
  },
  {
    title: "Market Intelligence Dashboard",
    description:
      "A personal crypto competitive intelligence tool that aggregates exchange metrics, token flows, and market signals to inform product and strategy decisions.",
    tech: ["Python", "Data Analysis", "Crypto Markets", "APIs"],
  },
  {
    title: "This Website",
    description:
      "My personal site — built to be fast, readable, and actually representative of who I am. Next.js static export with MDX for writing and Tailwind for styling.",
    tech: ["Next.js", "Tailwind CSS", "MDX", "TypeScript"],
    live: "https://www.markewoods.com",
  },
];
