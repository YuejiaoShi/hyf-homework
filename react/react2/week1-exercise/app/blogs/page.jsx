"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Blogs() {
  const pathname = usePathname();

  // Example blog slugs
  const blogSlugs = ["first-blog-post", "second-blog-post", "third-blog-post"];

  return (
    <div>
      <p className="mb-4 italic">Current pathname: {pathname}</p>

      <p className="mb-4 text-xl">
        Try clicking one of the blog links below to explore:
      </p>

      <ul className="list-disc pl-6 mb-4">
        {blogSlugs.map((slug) => (
          <li key={slug} className="mb-2">
            <Link
              href={`/blogs/${slug}`}
              className="text-blue-500 hover:underline"
            >
              {slug.replace(/-/g, " ")}
            </Link>
          </li>
        ))}
      </ul>

      <p className="mb-4 text-lg">
        Or manually change the URL to something like:
        <code className="bg-gray-200 rounded border px-2">
          /blogs/your-blog-name
        </code>
      </p>
    </div>
  );
}

export default Blogs;
