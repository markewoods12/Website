import Link from "next/link";

interface PostDisclaimerProps {
  variant?: "standard" | "market-commentary" | "none";
}

export default function PostDisclaimer({ variant = "standard" }: PostDisclaimerProps) {
  if (variant === "none") return null;

  const text =
    variant === "market-commentary"
      ? "This post contains commentary on digital asset markets. The views expressed are my own and not those of Bullish Group or any affiliated company. I hold positions in various digital assets, including bitcoin (BTC) and ether (ETH). Nothing in this post constitutes investment advice or a solicitation to buy or sell any asset."
      : "The views expressed in this post are my own and do not represent those of Bullish Group or any of its affiliates. I may hold positions in digital assets mentioned. This is not investment advice.";

  return (
    <aside className="mt-16 border-t border-border pt-8">
      <p className="font-mono text-[9px] tracking-wider uppercase text-muted/50 leading-relaxed">
        {text}{" "}
        <Link
          href="/disclaimer"
          className="text-muted/70 hover:text-accent/70 transition-colors underline underline-offset-2"
        >
          Full disclaimer →
        </Link>
      </p>
    </aside>
  );
}
