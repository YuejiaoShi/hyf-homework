"use client";
import { usePathname } from "next/navigation";

function Blogs() {
  const pathname = usePathname();
  return (
    <div>
      <p>Current pathname: {pathname}</p>
    </div>
  );
}

export default Blogs;
