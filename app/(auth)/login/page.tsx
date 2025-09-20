"use client";
import { useActionState } from "react";
import { useFormStatus } from "react-dom"; 
import { login } from "./action";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="w-full rounded-lg bg-black p-3 text-white transition hover:-translate-y-1 hover:cursor-pointer transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? "Logging in..." : "Log In"}
    </button>
  );
}


export default function LoginPage() {
  const [state, loginAction] = useActionState(login, undefined);
  
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-md sm:p-8">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Welcome Back
        </h2>
        <form action={loginAction} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:border-black focus:outline-none focus:ring-1 focus:ring-black text-gray-700"
            />
            {state?.errors?.email && (
              <p className="text-red-500">{state.errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:border-black focus:outline-none focus:ring-1 focus:ring-black text-gray-700"
            />
            {state?.errors?.password && (
              <p className="text-red-500">{state.errors.password}</p>
            )}
          </div>
          <SubmitButton />
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
