import Image from 'next/image';
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="mb-8 flex flex-col items-center">
        <Image src="/favicon.ico" alt="Project Logo" width={80} height={80} />
        <h1 className="mt-4 text-3xl font-bold text-gray-800">DIFFPaths</h1>
      </div>
      <div className="text-center">
        <a href="/users/login">
          <button className="px-6 py-2 mr-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Login
          </button>
        </a>
        <a href="/users/signup">
          <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition">
            Sign Up
          </button>
        </a>
      </div>
    </div>
  );
}