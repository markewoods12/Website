import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 50% at 50% -5%, rgba(232, 167, 58, 0.11) 0%, transparent 65%)",
        }}
      />
      {/* Dot grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #f2ede4 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative flex flex-col items-center">
        {/* Headshot */}
        <div
          className="mb-8 animate-fade-up"
          style={{ animationDelay: "0ms" }}
        >
          <div
            className="relative h-40 w-40 md:h-48 md:w-48 rounded-full overflow-hidden border-2 border-accent/30 mx-auto"
            style={{
              boxShadow: "0 0 40px rgba(232, 167, 58, 0.15), 0 0 0 1px rgba(232, 167, 58, 0.08)",
            }}
          >
            <Image
              src="/WoodsHeadshots-24.jpg"
              alt="Mark Woods"
              fill
              sizes="(max-width: 768px) 160px, 192px"
              quality={95}
              className="object-cover object-top"
              priority
              unoptimized
            />
          </div>
        </div>

        <p
          className="font-mono mb-8 text-[13px] tracking-[0.3em] text-accent uppercase animate-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          ◆ Head of Product · Bullish ◆
        </p>

        <h1
          className="mb-8 font-heading leading-[0.88] tracking-tight animate-fade-up"
          style={{
            fontSize: "clamp(4.5rem, 14vw, 11rem)",
            animationDelay: "160ms",
          }}
        >
          <span className="block italic text-foreground">Mark</span>
          <span className="block italic text-accent">Woods</span>
        </h1>

        <p
          className="mb-10 max-w-xl mx-auto text-base leading-relaxed text-muted animate-fade-up"
          style={{ animationDelay: "260ms" }}
        >
          Scaling a highly efficient and multi-faceted Product Management
          organization for a leading digital asset exchange, media, and data
          &amp; indices businesses. Building at the intersection of finance and
          technology.
        </p>

        <div
          className="flex gap-3 justify-center flex-wrap animate-fade-up"
          style={{ animationDelay: "360ms" }}
        >
          <Link
            href="/projects"
            className="font-mono text-[11px] tracking-widest uppercase px-7 py-3 bg-accent text-background rounded-sm font-medium transition-all duration-200 hover:bg-accent-light"
          >
            View Work
          </Link>
          <Link
            href="/now"
            className="font-mono text-[11px] tracking-widest uppercase px-7 py-3 border border-border text-muted rounded-sm font-medium transition-all duration-200 hover:border-accent/40 hover:text-foreground"
          >
            What I&apos;m Doing Now
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up"
        style={{ animationDelay: "700ms" }}
      >
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted/40">
          Scroll
        </span>
        <div className="h-8 w-px bg-gradient-to-b from-border to-transparent" />
      </div>
    </section>
  );
}
