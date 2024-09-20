"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

function BlogCard() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop().replace(/-/g, " ").toUpperCase();

  return (
    <div>
      <h1>Blog: {slug}</h1>
      <p>Current Pathname: {pathname}</p>
    </div>
  );
}

export default BlogCard;
