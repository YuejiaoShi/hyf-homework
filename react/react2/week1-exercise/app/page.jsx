import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <p className="text-center text-3xl">Home Page</p>
      <Link href="/astronomy-picture">Navigate to Astronomy Picture</Link>
      <br></br>
      <Link href="/rover-photos">Navigate to Rover Photos</Link>
    </div>
  );
}
