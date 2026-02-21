"use client";

import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

export default function BlogSlugRedirect() {
  const router = useRouter();
  const params = useParams();
  useEffect(() => {
    router.replace(`/writing/${params.slug}`);
  }, [router, params.slug]);
  return null;
}
