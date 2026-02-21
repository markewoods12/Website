"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const subjects = ["General", "Speaking", "Advisory", "Press"];

function ContactFormInner() {
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

export default function ContactForm() {
  return (
    <Suspense fallback={null}>
      <ContactFormInner />
    </Suspense>
  );
}
