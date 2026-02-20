import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
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
        <p
          className="font-mono mb-8 text-[10px] tracking-[0.35em] text-accent uppercase animate-fade-up"
          style={{ animationDelay: "0ms" }}
        >
          ◆ Software Engineer &amp; Builder ◆
        </p>

        <h1
          className="mb-8 font-heading leading-[0.88] tracking-tight animate-fade-up"
          style={{
            fontSize: "clamp(4.5rem, 14vw, 11rem)",
            animationDelay: "80ms",
          }}
        >
          <span className="block italic text-foreground">Mark</span>
          <span className="block italic text-accent">Woods</span>
        </h1>

        <p
          className="mb-10 max-w-md mx-auto text-base leading-relaxed text-muted animate-fade-up"
          style={{ animationDelay: "180ms" }}
        >
          I build thoughtful software, explore new technologies,
          and share what I learn along the way.
        </p>

        <div
          className="flex gap-3 justify-center flex-wrap animate-fade-up"
          style={{ animationDelay: "280ms" }}
        >
          <Link
            href="/projects"
            className="font-mono text-[11px] tracking-widest uppercase px-7 py-3 bg-accent text-background rounded-sm font-medium transition-all duration-200 hover:bg-accent-light"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="font-mono text-[11px] tracking-widest uppercase px-7 py-3 border border-border text-muted rounded-sm font-medium transition-all duration-200 hover:border-accent/40 hover:text-foreground"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up"
        style={{ animationDelay: "600ms" }}
      >
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted/40">
          Scroll
        </span>
        <div className="h-8 w-px bg-gradient-to-b from-border to-transparent" />
      </div>
    </section>
  );
}
