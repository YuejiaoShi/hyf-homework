import Image from "next/image";
import AstronomyPicture from "./astronomy-picture/page";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <p className="text-center text-3xl">Home Page</p>
      <Link href="/astronomy-picture">Navigate to Astronomy Picture</Link>
    </div>
  );
}
