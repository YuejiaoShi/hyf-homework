"use client";
import { usePathname } from "next/navigation";

function BlogCard({ params }) {
  const { slug } = params;
  const formattedSlug = slug.replace(/-/g, " ").toUpperCase();
  const pathname = usePathname();

  return (
    <div>
      <p className="mb-4 italic">Current Pathname: {pathname}</p>
      <p className="mb-4 italic">Blog Slug: {formattedSlug}</p>
    </div>
  );
}

export default BlogCard;
