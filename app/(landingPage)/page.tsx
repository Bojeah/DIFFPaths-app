import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center md:items-stretch w-full px-4 py-8 md:px-12 md:py-16 lg:px-24 lg:py-24 gap-8 md:gap-12">
      <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <h1 className="font-black text-black text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
          The Money App For You
        </h1>
        <p className="mt-4 text-black text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-medium max-w-xl">
          Send money for free, experience seamless cashless payments, and grow your savings with DIFFPaths.
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <Image
          src="/favicon.ico"
          alt="project Logo"
          width={320}
          height={320}
          className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain"
          priority
        />
      </div>
    </div>
  );
}
