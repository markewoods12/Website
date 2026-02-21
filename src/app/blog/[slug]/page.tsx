import { redirect } from "next/navigation";
import { getAllSlugs } from "@/lib/blog";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default function BlogSlugRedirect({ params }: { params: { slug: string } }) {
  redirect(`/writing/${params.slug}`);
}
