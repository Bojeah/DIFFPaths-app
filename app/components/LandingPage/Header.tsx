import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-16 bg-white shadow-md px-16 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/" className="flex items-center justify-center">
          <Image src="/favicon.ico" alt="Project Logo" width={40} height={40} />
            <h1 className="ml-2 text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium">
            DIFFPaths
            </h1>
        </Link>
      </div>

      <div className="flex gap-4">
        <Link
          href="/users/login"
          className="px-6 py-2 bg-black text-white rounded hover:-translate-y-1 hover:cursor-pointer transition-transform duration-200"
        >
          Login
        </Link>
        <Link
          href="/users/signup"
          className="px-6 py-2 bg-gray-200 text-black rounded hover:cursor-pointer hover:-translate-y-1 transition-transform duration-200 "
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
}
