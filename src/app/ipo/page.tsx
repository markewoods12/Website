import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bullish NYSE IPO",
  description:
    "Bullish (BLSH) listed on the New York Stock Exchange on August 13, 2025. A look back at opening bell day.",
};

const photos = [
  {
    src: "/Bullish-OB-Photo-CC-20250813-200.jpg",
    alt: "Bullish team outside the NYSE with 'The future is Bullish' banner",
    caption: "The team outside 11 Wall Street — banner hanging, energy high.",
  },
  {
    src: "/Bullish-OB-Photo--20250813-CC-PRESS-70.jpg",
    alt: "Bullish leadership ringing the NYSE Opening Bell",
    caption: "Ringing the Opening Bell. $BLSH is officially live.",
  },
  {
    src: "/Bullish-OB-Photo--20250813-CC-PRESS-61.jpg",
    alt: "Bullish team on the NYSE trading floor",
    caption: "Trading floor, 9:31 AM — first trade is in.",
  },
  {
    src: "/HR-Bullish-OB-Photo-20250813-ACJ-PRESS-44.jpg",
    alt: "NYSE trading floor decorated with Bullish branding",
    caption: "The floor, lit up in Bullish blue.",
  },
];

export default function IPOPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      {/* Header */}
      <div className="mb-12 border-b border-border pb-8">
        <span className="font-mono text-[10px] tracking-widest uppercase text-accent/60 block mb-4">
          August 13, 2025
        </span>
        <h1
          className="font-heading italic text-foreground mb-4"
          style={{ fontSize: "clamp(2.5rem, 7vw, 4.5rem)", lineHeight: "0.95" }}
        >
          The Day Bullish<br />
          <span className="text-accent">Went Public</span>
        </h1>
        <p className="text-base text-muted leading-relaxed max-w-2xl mt-6">
          On August 13, 2025, Bullish listed on the New York Stock Exchange
          under ticker <span className="text-accent font-mono">$BLSH</span>.
          After years of building one of the most technically advanced digital
          asset exchanges in the world, the team gathered at 11 Wall Street to
          ring the Opening Bell. Here are some moments from that day.
        </p>
      </div>

      {/* Photo Grid */}
      <div className="space-y-6">
        {photos.map((photo, i) => (
          <div key={i} className="group">
            <div className="relative w-full overflow-hidden rounded-sm border border-border bg-card">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={1200}
                height={800}
                quality={90}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                unoptimized
              />
            </div>
            <p className="font-mono text-[11px] tracking-wider text-muted/70 mt-3 pl-1">
              {photo.caption}
            </p>
          </div>
        ))}
      </div>

      {/* Closing */}
      <div className="mt-12 pt-8 border-t border-border text-center">
        <p className="text-sm text-muted leading-relaxed max-w-lg mx-auto mb-6">
          Proud to lead Product for this team. The future is Bullish.
        </p>
        <Link
          href="/"
          className="font-mono text-[11px] tracking-widest uppercase text-accent/70 hover:text-accent transition-colors"
        >
          ← Back home
        </Link>
      </div>
    </div>
  );
}
