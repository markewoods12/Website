import Link from "next/link";
import SiteDisclaimer from "./SiteDisclaimer";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-heading text-xl italic text-foreground mb-1">
              Mark <span className="text-accent">Woods</span>
            </p>
            <p className="font-mono text-[11px] tracking-widest uppercase text-muted mb-1">
              Head of Product @ Bullish · Building at the intersection of finance and technology
            </p>
            <p className="font-mono text-[10px] tracking-widest uppercase text-muted/50">
              &copy; {new Date().getFullYear()} · All rights reserved
            </p>
          </div>
          <div className="flex flex-wrap gap-6">
            {[
              { href: "https://github.com/markewoods12", label: "GitHub" },
              { href: "https://linkedin.com/in/mark-e-woods", label: "LinkedIn" },
              { href: "https://x.com/markewoods12", label: "X" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] tracking-widest uppercase text-muted transition-colors hover:text-foreground"
              >
                {social.label}
              </a>
            ))}
            <Link
              href="/contact"
              className="font-mono text-[11px] tracking-widest uppercase text-muted transition-colors hover:text-foreground"
            >
              Contact
            </Link>
            <Link
              href="/disclaimer"
              className="font-mono text-[11px] tracking-widest uppercase text-muted transition-colors hover:text-foreground"
            >
              Disclaimer
            </Link>
          </div>
        </div>
        <SiteDisclaimer />
      </div>
    </footer>
  );
}
