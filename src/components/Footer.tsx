import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-heading text-xl italic text-foreground mb-1">
            Mark <span className="text-accent">Woods</span>
          </p>
          <p className="font-mono text-[11px] tracking-widest uppercase text-muted">
            &copy; {new Date().getFullYear()} · All rights reserved
          </p>
        </div>
        <div className="flex flex-wrap gap-6">
          {[
            { href: "https://github.com", label: "GitHub", external: true },
            { href: "https://linkedin.com", label: "LinkedIn", external: true },
            { href: "https://twitter.com", label: "Twitter", external: true },
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
        </div>
      </div>
    </footer>
  );
}
