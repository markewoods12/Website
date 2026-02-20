import { MDXRemote } from "next-mdx-remote/rsc";

export default function MDXContent({ source }: { source: string }) {
  return (
    <div className="prose prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted prose-a:text-accent-light prose-strong:text-foreground prose-code:text-accent-light prose-li:text-muted">
      <MDXRemote source={source} />
    </div>
  );
}
