import Link from "next/link";

export default function SiteDisclaimer() {
  return (
    <div className="border-t border-border/50 mt-6 pt-6">
      <p className="font-mono text-[9px] tracking-wider uppercase text-muted/40 leading-relaxed max-w-3xl">
        The views expressed on this site are my own and do not represent those of Bullish Group or
        any of its affiliates. Nothing on this site constitutes investment advice or a
        recommendation to buy or sell any asset.{" "}
        <Link
          href="/disclaimer"
          className="text-muted/60 hover:text-accent/70 transition-colors underline underline-offset-2"
        >
          Full disclaimer →
        </Link>
      </p>
    </div>
  );
}
