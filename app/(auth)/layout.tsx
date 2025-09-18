import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-xl rounded-3xl p-10 relative
        sm:rounded-3xl sm:p-10
        rounded-none p-0 min-h-screen
        sm:min-h-0
      ">
        <div className="mb-8 text-center items-center justify-center relative z-10">
          <div className="items-center">
            <Link href="/" className="flex items-center justify-center">
              <Image
                src="/favicon.ico"
                alt="Project Logo"
                width={40}
                height={40}
              />
              <h1 className="ml-2 text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium">
                DIFFPaths
              </h1>
            </Link>
          </div>
        </div>
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}
