import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Mark Woods speaks on digital assets, product management in regulated industries, AI and product, and building high-performing teams.",
};

const topics = [
  {
    title: "The Future of Digital Asset Exchanges",
    description:
      "What separates the exchanges that will define the next decade from those that won't. Architecture, trust, regulatory clarity, and what institutional adoption actually requires from a product perspective.",
  },
  {
    title: "Product Management in Regulated Industries",
    description:
      "How to build and ship fast when compliance is non-negotiable. The frameworks, culture, and decision-making processes that let great teams move without breaking things that matter.",
  },
  {
    title: "AI × Product: What's Actually Changing",
    description:
      "Beyond the hype — what AI is genuinely doing to the product management function, which workflows are being transformed, and what irreducibly human judgment looks like in an AI-augmented organization.",
  },
  {
    title: "Building High-Performing Product Organizations",
    description:
      "How to hire, structure, and lead product teams that scale. The processes that work, the ones that just feel like they work, and how to tell the difference before it costs you a year.",
  },
  {
    title: "Writing and Thinking in Public",
    description:
      "Why building-in-public is a competitive advantage for executives in technical industries, how to do it responsibly in a regulated environment, and what happens to your thinking when you have to explain it.",
  },
];

export default function SpeakingPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      <div className="mb-16 border-b border-border pb-12">
        <span className="font-mono text-[10px] tracking-widest uppercase text-accent/60 block mb-4">
          Speaking
        </span>
        <h1
          className="font-heading italic text-foreground"
          style={{ fontSize: "clamp(3rem, 8vw, 5rem)", lineHeight: "0.95" }}
        >
          Speaking
        </h1>
        <p className="text-base leading-relaxed text-muted mt-6 max-w-2xl">
          I speak on digital assets, product management in regulated industries, AI and its real
          impact on how product teams work, and what it takes to build organizations that ship at
          scale. Practitioner-level. First-person. No slides full of buzzwords.
        </p>
      </div>

      {/* Topics */}
      <section className="mb-20">
        <div className="flex items-center gap-4 mb-8 border-b border-border pb-4">
          <span className="font-mono text-[10px] tracking-widest uppercase text-accent/40">01</span>
          <h2 className="font-heading text-2xl italic text-foreground">Topics</h2>
        </div>
        <div className="space-y-0">
          {topics.map((topic, i) => (
            <div key={i} className="border-b border-border py-8 last:border-b-0">
              <h3 className="font-heading text-xl italic text-foreground mb-3">{topic.title}</h3>
              <p className="text-sm leading-relaxed text-muted max-w-2xl">{topic.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking CTA */}
      <section className="mb-20">
        <div className="border border-border bg-card rounded-sm p-8">
          <h2 className="font-heading text-2xl italic text-foreground mb-3">
            Invite Me to Speak
          </h2>
          <p className="text-sm leading-relaxed text-muted mb-6">
            I speak at conferences, company offsites, and private events. If you&apos;re interested
            in having me present on any of the topics above — or something adjacent — get in touch.
          </p>
          <Link
            href="/contact?subject=Speaking"
            className="inline-block font-mono text-[11px] tracking-widest uppercase px-7 py-3 bg-accent text-background rounded-sm font-medium transition-all duration-200 hover:bg-accent-light"
          >
            Get in touch →
          </Link>
        </div>
      </section>

      {/* Past appearances */}
      <section>
        <div className="flex items-center gap-4 mb-8 border-b border-border pb-4">
          <span className="font-mono text-[10px] tracking-widest uppercase text-accent/40">02</span>
          <h2 className="font-heading text-2xl italic text-foreground">Past Appearances</h2>
        </div>
        <p className="font-mono text-[10px] tracking-wider uppercase text-muted/50">
          Coming soon — past appearances will be listed here.
        </p>
      </section>
    </div>
  );
}
