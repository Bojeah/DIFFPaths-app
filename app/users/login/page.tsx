// app/login/page.tsx
"use client";

export default function LoginPage() {

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Welcome Back
        </h2>
        <form
          className="space-y-5"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-black p-3 text-white transition hover:-translate-y-1 hover:cursor-pointer transition-transform duration-200" 
          >
          Log In
          </button>
          <p className="mt-4 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <a href="./signup" className="text-black hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
