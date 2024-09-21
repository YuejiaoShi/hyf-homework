"use client";
import { usePathname } from "next/navigation";

function Blogs() {
  const pathname = usePathname();
  return (
    <div>
      <p className="mb-4 italic">Current pathname: {pathname}</p>
      <p className="mb-4 text-xl">
        Try changing the URL to something like{" "}
        <code className="bg-gray-200 rounded border">
          /blogs/your-blog-name
        </code>
        to see if you can find any blogs!
      </p>
    </div>
  );
}

export default Blogs;
