import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Mark Woods.",
};

const socials = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Twitter", href: "https://twitter.com" },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      <div className="mb-16 border-b border-border pb-12">
        <span className="font-mono text-[10px] tracking-widest uppercase text-accent/60 block mb-4">
          Contact
        </span>
        <h1
          className="font-heading italic text-foreground"
          style={{ fontSize: "clamp(3rem, 8vw, 5rem)", lineHeight: "0.95" }}
        >
          Get in Touch
        </h1>
      </div>

      <div className="grid gap-16 md:grid-cols-2">
        {/* Contact Form */}
        <div>
          <h2 className="font-heading text-2xl italic text-foreground mb-8">
            Send a Message
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="font-mono text-[10px] tracking-widest uppercase text-muted mb-2 block"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border border-border bg-card rounded-sm px-4 py-3 text-sm text-foreground placeholder-muted/30 outline-none transition-colors focus:border-accent/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="font-mono text-[10px] tracking-widest uppercase text-muted mb-2 block"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border border-border bg-card rounded-sm px-4 py-3 text-sm text-foreground placeholder-muted/30 outline-none transition-colors focus:border-accent/50"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="font-mono text-[10px] tracking-widest uppercase text-muted mb-2 block"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full border border-border bg-card rounded-sm px-4 py-3 text-sm text-foreground placeholder-muted/30 outline-none transition-colors focus:border-accent/50 resize-none"
                placeholder="What's on your mind?"
              />
            </div>
            <button
              type="submit"
              className="font-mono text-[11px] tracking-widest uppercase px-8 py-3 bg-accent text-background rounded-sm font-medium transition-all duration-200 hover:bg-accent-light"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="font-heading text-2xl italic text-foreground mb-8">
            Other Ways to Connect
          </h2>
          <div className="space-y-8">
            <div>
              <p className="font-mono text-[10px] tracking-widest uppercase text-muted mb-2">
                Email
              </p>
              <a
                href="mailto:hello@markewoods.com"
                className="text-foreground transition-colors hover:text-accent"
              >
                hello@markewoods.com
              </a>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-widest uppercase text-muted mb-4">
                Socials
              </p>
              <div className="flex flex-col gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs tracking-wider uppercase text-muted transition-colors hover:text-accent flex items-center gap-3 group"
                  >
                    <span className="h-px w-4 bg-border inline-block transition-all duration-300 group-hover:w-8 group-hover:bg-accent/40" />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
