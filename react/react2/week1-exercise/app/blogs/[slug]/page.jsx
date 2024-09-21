"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

function BlogCard() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop().replace(/-/g, " ").toUpperCase();

  return (
    <div>
      <p className="mb-4 italic">Current Pathname: {pathname}</p>
      <p className="mb-4 text-xl">Blog: {slug}</p>
    </div>
  );
}

export default BlogCard;
