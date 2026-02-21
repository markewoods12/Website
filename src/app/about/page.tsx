import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mark Woods — Head of Product at Bullish. 15+ years at the intersection of finance, technology, and digital assets.",
};

const convictions = [
  "Regulated industries can move fast — the constraint is usually culture, not compliance.",
  "The exchange that wins in digital assets will win on trust, not fees. Reliability is the moat.",
  "AI is a multiplier, not a replacement. The product managers who thrive are the ones who keep their judgment while delegating the rest.",
  "Great products are built by people who care more about the outcome than the process.",
  "Writing publicly makes you a better thinker. The discipline of explaining forces the gaps to show up.",
];

const experience = [
  {
    title: "Head of Product",
    company: "Bullish",
    companyUrl: "https://bullish.com",
    irUrl: "https://bullish.com/investors",
    location: "Radford, VA (remote)",
    period: "Jan 2022 — Present",
    description:
      "Responsible for the Product Management and Product Design organizations across all of Bullish Group — Bullish Exchange, CoinDesk Media, CoinDesk Data, and CoinDesk Indices. Led the product organization through the exchange's NYSE IPO in August 2025 ($BLSH).",
  },
  {
    title: "Vice President, Product Management",
    company: "Block.one",
    location: "Blacksburg, VA",
    period: "Nov 2019 — Dec 2021",
    description:
      "Defined and operated the Block.one Product Management Process. Built and managed teams of Product Managers, Business Analysts, and UX designers. Drove the internal five-quarter Product Roadmap across all product lines. Transitioned to Bullish VP PM role as the exchange was built out.",
  },
  {
    title: "Director, Finance Innovation",
    company: "PPD",
    location: "Wilmington, NC",
    period: "Aug 2017 — Oct 2019",
    description:
      "Owned product and release management, roadmaps, and software implementations across the GCD Finance organization — PPD's largest business unit by revenue. Led major initiatives including an ASC 605-to-606 systems conversion, a cloud-native month-end controls platform, and an Oracle Cloud ERP implementation.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      {/* Page header */}
      <div className="mb-16 border-b border-border pb-12">
        <span className="font-mono text-[10px] tracking-widest uppercase text-accent/60 block mb-4">
          About
        </span>
        <h1
          className="font-heading italic text-foreground"
          style={{ fontSize: "clamp(3rem, 8vw, 5rem)", lineHeight: "0.95" }}
        >
          Mark Woods
        </h1>
      </div>

      {/* Bio */}
      <section className="mb-20">
        <div className="flex items-center gap-4 mb-8 border-b border-border pb-4">
          <span className="font-mono text-[10px] tracking-widest uppercase text-accent/40">01</span>
          <h2 className="font-heading text-2xl italic text-foreground">Background</h2>
        </div>
        <div className="space-y-4 text-base leading-relaxed text-muted max-w-2xl">
          <p>
            I&apos;m Mark Woods — Head of Product at Bullish, based in Radford, Virginia.
          </p>
          <p>
            I lead Product Management and Product Design across the full breadth of Bullish Group:
            Bullish Exchange (a regulated digital asset exchange), CoinDesk Media, CoinDesk Data,
            and CoinDesk Indices. It&apos;s a scope I&apos;ve spent 15 years building toward — one
            role spanning a regulated exchange, the world&apos;s most trusted crypto media brand,
            institutional-grade market data, and benchmark indices referenced by ETFs globally.
          </p>
          <p>
            My path here ran through enterprise software, clinical research, blockchain
            infrastructure, and the early days of institutional-grade crypto. I spent years at PPD
            managing financial systems and large-scale project portfolios. Then Block.one, where I
            built the product management function from scratch during the peak of blockchain
            ambition. Then Bullish — first as VP, then as Head of Product through the
            exchange&apos;s{" "}
            <Link href="/ipo" className="text-accent/80 hover:text-accent transition-colors">
              NYSE IPO in August 2025
            </Link>
            .
          </p>
          <p>
            The through-line: complex systems, long time horizons, and the discipline to ship
            products that actually work at scale.
          </p>
          <p>
            Outside of work, I&apos;ve spent 20+ years volunteering as a mentor and coach with
            The First Tee, an organization focused on youth development through golf.
          </p>
        </div>
      </section>

      {/* What I Believe */}
      <section className="mb-20">
        <div className="flex items-center gap-4 mb-8 border-b border-border pb-4">
          <span className="font-mono text-[10px] tracking-widest uppercase text-accent/40">02</span>
          <h2 className="font-heading text-2xl italic text-foreground">What I Believe</h2>
        </div>
        <ul className="space-y-5">
          {convictions.map((conviction, i) => (
            <li key={i} className="flex gap-5">
              <span className="font-mono text-accent/40 text-[10px] mt-1.5 shrink-0">◆</span>
              <p className="text-base leading-relaxed text-muted">{conviction}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section className="mb-20">
        <div className="flex items-center gap-4 mb-8 border-b border-border pb-4">
          <span className="font-mono text-[10px] tracking-widest uppercase text-accent/40">03</span>
          <h2 className="font-heading text-2xl italic text-foreground">Experience</h2>
        </div>
        <div className="space-y-0">
          {experience.map((role, i) => (
            <div
              key={i}
              className="group relative border-b border-border py-8 last:border-b-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-heading text-lg italic text-foreground">{role.title}</h3>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <span className="font-mono text-[10px] tracking-wider uppercase text-accent">
                      {role.companyUrl ? (
                        <a
                          href={role.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent-light transition-colors"
                        >
                          {role.company}
                        </a>
                      ) : (
                        role.company
                      )}
                    </span>
                    {role.irUrl && (
                      <>
                        <span className="text-border">·</span>
                        <a
                          href={role.irUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[10px] tracking-wider uppercase text-muted/60 hover:text-accent transition-colors"
                        >
                          Investor Relations
                        </a>
                      </>
                    )}
                    <span className="text-border">·</span>
                    <span className="font-mono text-[10px] tracking-wider text-muted/60">
                      {role.location}
                    </span>
                  </div>
                </div>
                <span className="font-mono text-[10px] tracking-wider uppercase text-muted/50 shrink-0">
                  {role.period}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted">{role.description}</p>
            </div>
          ))}
        </div>

        {/* Earlier roles — one sentence */}
        <div className="mt-8 pt-8 border-t border-border">
          <span className="font-mono text-[10px] tracking-widest uppercase text-muted/40 block mb-4">
            Earlier
          </span>
          <p className="text-sm leading-relaxed text-muted max-w-2xl">
            Earlier career at PPD across finance and project management roles (2008–2017), including
            Senior Financial Analyst in FP&amp;A, Project Cost Analyst, Associate Financial Systems
            Analyst, and several implementation-focused roles. Also founded and operated 12Logics
            LLC (2016–2019), a boutique consultancy in software implementation and financial systems.
            Prior to PPD: Associate at UBS Financial Services (2007–2008).
          </p>
        </div>
      </section>

      {/* Education */}
      <section className="mb-20">
        <div className="flex items-center gap-4 mb-8 border-b border-border pb-4">
          <span className="font-mono text-[10px] tracking-widest uppercase text-accent/40">04</span>
          <h2 className="font-heading text-2xl italic text-foreground">Education</h2>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
          <div>
            <h3 className="font-heading text-lg italic text-foreground">Virginia Tech</h3>
            <span className="font-mono text-[10px] tracking-wider uppercase text-accent">
              B.A. Economics — College of Arts and Science
            </span>
          </div>
          <span className="font-mono text-[10px] tracking-wider uppercase text-muted/50">
            December 2007 · Blacksburg, VA
          </span>
        </div>
      </section>

      {/* Holdings Disclosure */}
      <section>
        <div className="flex items-center gap-4 mb-6 border-b border-border pb-4">
          <span className="font-mono text-[10px] tracking-widest uppercase text-accent/40">05</span>
          <h2 className="font-heading text-2xl italic text-foreground">Holdings Disclosure</h2>
        </div>
        <div className="space-y-3 text-sm leading-relaxed text-muted/70 max-w-2xl">
          <p>
            I personally hold positions in various digital assets, including bitcoin (BTC) and
            ether (ETH). I may hold other digital assets from time to time. My holdings may change
            without notice.
          </p>
          <p>
            Nothing on this site constitutes investment advice or a recommendation to buy, sell, or
            hold any asset.{" "}
            <Link href="/disclaimer" className="text-accent/70 hover:text-accent transition-colors">
              Full disclaimer →
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
