import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Mark Woods.",
};

const socials = [
  { label: "GitHub", href: "https://github.com/markewoods12" },
  { label: "LinkedIn", href: "https://linkedin.com/in/mark-e-woods" },
  { label: "X (Twitter)", href: "https://x.com/markewoods12" },
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
          <ContactForm />
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
