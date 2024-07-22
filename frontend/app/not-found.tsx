import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center">
      <div className="text-red-200 text-4xl">Page does not exist</div>
      <div className="mt-5">
        <Link href="/">Go To Home Page</Link>
      </div>
    </div>
  );
}
