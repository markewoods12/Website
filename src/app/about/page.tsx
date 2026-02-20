import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mark Woods — Product Executive with 15+ years leading product management, financial systems, and blockchain technology.",
};

const expertise = [
  "Product Management",
  "Product Design",
  "Blockchain & Web3",
  "Financial Systems",
  "Enterprise Software",
  "Team Leadership",
  "Strategic Roadmaps",
  "Stakeholder Management",
  "ERP Implementation",
  "Process Improvement",
];

const experience = [
  {
    title: "Chief Product Officer",
    company: "Bullish",
    location: "Radford, VA (remote)",
    period: "Jan 2022 — Present",
    description:
      "Responsible for the Product Management & Product Design organizations across all of Bullish Group — Bullish Exchange, CoinDesk Media, CoinDesk Data, and CoinDesk Indices.",
  },
  {
    title: "Vice President, Product Management",
    company: "Bullish",
    location: "Radford, VA (remote)",
    period: "Jul 2021 — Dec 2021",
    description:
      "Led multiple teams building the blockchain-based systems supporting the Bullish exchange platform, including Custody, Authentication & Authorization, and Core Blockchain — while simultaneously supporting Block.one.",
  },
  {
    title: "Vice President, Product Management",
    company: "Block.one",
    location: "Blacksburg, VA",
    period: "Nov 2019 — Dec 2021",
    description:
      "Defined and operated the Block.one Product Management Process. Built and managed teams of Product Managers, Business Analysts, and UX designers. Drove the internal five-quarter Product Roadmap across all product lines and aligned technical roadmaps to product strategy.",
  },
  {
    title: "Director, Finance Innovation",
    company: "PPD",
    location: "Wilmington, NC",
    period: "Aug 2017 — Oct 2019",
    description:
      "Owned product & release management, roadmaps, and software implementations across the GCD Finance organization — PPD's largest business unit by revenue. Led major initiatives including an ASC 605-to-606 systems conversion, a cloud-native month-end controls platform, and an Oracle Cloud ERP implementation.",
  },
  {
    title: "Owner",
    company: "12Logics LLC",
    location: "Wilmington, NC",
    period: "Mar 2016 — Oct 2019",
    description:
      "Founded and operated a consultancy specializing in software implementation, financial system development, blockchain technology (consulting, mining, and investing), and web-based application development.",
  },
  {
    title: "Assoc. Director, Business Management Organization",
    company: "PPD",
    location: "Wilmington, NC",
    period: "Nov 2014 — Oct 2016",
    description:
      "System owner of PPD's CA Clarity PPM implementation — managing project financials exceeding $100M/month and resourcing for 10,000+ employees. Led a team of 4 direct reports plus an outsourced managed services team across India, Mexico, and the USA. Restructured and rebranded the entire department, rebuilding 100% of its processes.",
  },
  {
    title: "Project & Implementation Manager",
    company: "PPD",
    location: "Wilmington, NC",
    period: "Nov 2013 — Nov 2014",
    description:
      "Managed the second-wave CA Clarity PPM implementation, delivering non-OOTB financial management functionality. Led global cross-functional teams through requirements, design, testing, and training.",
  },
  {
    title: "Senior Implementation & Business Analyst",
    company: "PPD",
    location: "Wilmington, NC",
    period: "Sep 2012 — Nov 2013",
    description:
      "Core team member for the first-wave CA Clarity PPM implementation, covering project and resource management. Responsible for requirements gathering, data structure design, system testing, and training facilitation.",
  },
];

const earlier = [
  { title: "Senior Financial Analyst – FP&A", company: "PPD", period: "Mar 2011 — Sep 2012" },
  { title: "Project Cost Analyst", company: "PPD", period: "Sep 2009 — Mar 2011" },
  { title: "Assoc. Financial Systems Analyst", company: "PPD", period: "Oct 2008 — Sep 2009" },
  { title: "Associate", company: "UBS Financial Services", period: "Dec 2007 — Aug 2008" },
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
            I&apos;m the Chief Product Officer at Bullish, based in Radford, Virginia, where I lead
            Product Management and Product Design across the full breadth of Bullish Group —
            Bullish Exchange, CoinDesk Media, CoinDesk Data, and CoinDesk Indices. It&apos;s a rare
            scope: one role spanning a regulated digital asset exchange, the world&apos;s most trusted
            crypto media brand, institutional-grade market data, and benchmark indices.
          </p>
          <p>
            My background spans digital assets, fintech, blockchain, enterprise software, and
            clinical research — giving me a perspective that bridges deep technical complexity with
            business strategy. I&apos;m passionate about building and scaling high-performing product
            teams, defining long-range roadmaps, and shipping products that create real value at scale.
          </p>
          <p>
            Outside of work, I&apos;ve spent 20+ years volunteering as a mentor and coach with
            The First Tee, an organization focused on youth development through golf.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-20">
        <div className="flex items-center gap-4 mb-8 border-b border-border pb-4">
          <span className="font-mono text-[10px] tracking-widest uppercase text-accent/40">02</span>
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
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-mono text-[10px] tracking-wider uppercase text-accent">
                      {role.company}
                    </span>
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

        {/* Earlier roles */}
        <div className="mt-8 pt-8 border-t border-border">
          <span className="font-mono text-[10px] tracking-widest uppercase text-muted/40 block mb-4">
            Earlier Experience
          </span>
          <div className="grid sm:grid-cols-2 gap-3">
            {earlier.map((role, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-sm text-muted">{role.title}</span>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="font-mono text-[10px] tracking-wider uppercase text-accent/70">
                    {role.company}
                  </span>
                  <span className="text-border">·</span>
                  <span className="font-mono text-[10px] text-muted/50">{role.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-20">
        <div className="flex items-center gap-4 mb-8 border-b border-border pb-4">
          <span className="font-mono text-[10px] tracking-widest uppercase text-accent/40">03</span>
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

      {/* Expertise */}
      <section>
        <div className="flex items-center gap-4 mb-8 border-b border-border pb-4">
          <span className="font-mono text-[10px] tracking-widest uppercase text-accent/40">04</span>
          <h2 className="font-heading text-2xl italic text-foreground">Areas of Expertise</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {expertise.map((item) => (
            <span
              key={item}
              className="font-mono text-[10px] tracking-wider uppercase px-3 py-1.5 border border-border text-muted transition-colors hover:border-accent/30 hover:text-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
