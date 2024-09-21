import Link from "next/link";
import SignUpForm from "./components/SignUpForm";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <SignUpForm />
    </div>
  );
}
