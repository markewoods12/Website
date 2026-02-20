import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now",
  description: "What Mark Woods is focused on right now — February 2026.",
};

const sections = [
  {
    number: "01",
    title: "Work",
    items: [
      "Running Product Management and Product Design at Bullish — across Bullish Exchange, CoinDesk Media, CoinDesk Data, and CoinDesk Indices",
      "Driving the next phase of the Bullish Exchange roadmap: expanding derivatives, deepening institutional infrastructure, and improving UX for sophisticated traders",
      "Working closely with the CoinDesk teams on editorial product, market data quality, and index methodology improvements",
    ],
  },
  {
    number: "02",
    title: "Building",
    items: [
      "A personal AI content engine — automating the gap between raw ideas and polished writing using Claude API and structured prompting",
      "A crypto market intelligence dashboard to track competitive signals, token flows, and exchange metrics across the industry",
      "This site — continuously improving the writing workflow and design",
    ],
  },
  {
    number: "03",
    title: "Writing",
    items: [
      "Publishing essays about digital asset exchange product strategy — what makes a great exchange, where the industry is headed, and what it takes to build in this space",
      "Writing about AI tools and how they're actually changing how product managers work (beyond the hype)",
      "Documenting what I'm learning in public, which is new for me",
    ],
  },
  {
    number: "04",
    title: "Beyond Work",
    items: [
      "Volunteering with The First Tee — 20+ years mentoring youth through golf. Still one of the most important things I do",
      "Playing golf (not just mentoring it)",
      "Based in Radford, Virginia — working remotely with a global team across New York, Hong Kong, and London",
    ],
  },
];

export default function NowPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <div className="mb-16 border-b border-border pb-12">
        <span className="font-mono text-[10px] tracking-widest uppercase text-accent/60 block mb-4">
          /now
        </span>
        <h1
          className="font-heading italic text-foreground"
          style={{ fontSize: "clamp(3rem, 8vw, 5rem)", lineHeight: "0.95" }}
        >
          What I&apos;m Doing Now
        </h1>
        <p className="font-mono text-[10px] tracking-widest uppercase text-muted mt-6">
          Updated February 2026 · Radford, VA
        </p>
      </div>

      <div className="space-y-16">
        {sections.map((section) => (
          <section key={section.number}>
            <div className="flex items-center gap-4 mb-6 border-b border-border pb-4">
              <span className="font-mono text-[10px] tracking-widest uppercase text-accent/40">
                {section.number}
              </span>
              <h2 className="font-heading text-2xl italic text-foreground">
                {section.title}
              </h2>
            </div>
            <ul className="space-y-4">
              {section.items.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-mono text-accent/40 text-[10px] mt-1.5 shrink-0">◆</span>
                  <p className="text-base leading-relaxed text-muted">{item}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-border">
        <p className="font-mono text-[10px] tracking-wider uppercase text-muted/50">
          This is a{" "}
          <a
            href="https://nownownow.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent/60 hover:text-accent transition-colors"
          >
            /now page
          </a>
          , inspired by Derek Sivers. A snapshot of what I&apos;m focused on at this moment in time.
        </p>
      </div>
    </div>
  );
}
