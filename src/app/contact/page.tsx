"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const subjects = ["General", "Speaking", "Advisory", "Press"];

const socials = [
  { label: "GitHub", href: "https://github.com/markewoods12" },
  { label: "LinkedIn", href: "https://linkedin.com/in/mark-e-woods" },
  { label: "X (Twitter)", href: "https://x.com/markewoods12" },
];

function ContactForm() {
  const searchParams = useSearchParams();
  const defaultSubject = searchParams.get("subject") ?? "General";
  const [subject, setSubject] = useState(
    subjects.includes(defaultSubject) ? defaultSubject : "General"
  );
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xform", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-accent/30 bg-accent/5 rounded-sm p-6">
        <p className="font-heading italic text-foreground text-lg mb-2">Message sent.</p>
        <p className="text-sm text-muted">
          Thanks for reaching out. I&apos;ll get back to you as soon as I can.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="font-mono text-[10px] tracking-widest uppercase text-accent/70 hover:text-accent transition-colors mt-4 block"
        >
          Send another →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
          htmlFor="subject"
          className="font-mono text-[10px] tracking-widest uppercase text-muted mb-2 block"
        >
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full border border-border bg-card rounded-sm px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent/50 appearance-none cursor-pointer"
        >
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
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

      {status === "error" && (
        <p className="font-mono text-[10px] tracking-wider uppercase text-red-400">
          Something went wrong. Please try again or email hello@markewoods.com directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="font-mono text-[11px] tracking-widest uppercase px-8 py-3 bg-accent text-background rounded-sm font-medium transition-all duration-200 hover:bg-accent-light disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

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
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
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
