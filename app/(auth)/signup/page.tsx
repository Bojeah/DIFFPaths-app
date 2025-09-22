"use client";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signup } from "./action";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="w-full rounded-lg bg-black p-3 text-white transition hover:-translate-y-1 hover:cursor-pointer transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? "Signing up..." : "Sign Up"}
    </button>
  );
}

export default function SignupPage() {
  const [state, signupAction] = useActionState(signup, undefined);

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-md sm:p-8">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Create an Account
        </h2>
        <form action={signupAction} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:border-black focus:outline-none focus:ring-1 focus:ring-black text-gray-700"
            />
            {state?.errors?.name && (
              <p className="text-red-500 text-sm mt-1">
                {Array.isArray(state.errors.name) ? state.errors.name[0] : state.errors.name}
              </p>
            )}
          </div>
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
              <p className="text-red-500 text-sm mt-1">
                {Array.isArray(state.errors.email) ? state.errors.email[0] : state.errors.email}
              </p>
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
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
            />
            {state?.errors?.password && (
              <p className="text-red-500 text-sm mt-1">
                {Array.isArray(state.errors.password) ? state.errors.password[0] : state.errors.password}
              </p>
            )}
          </div>
          <SubmitButton />
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="./login" className="text-black hover:underline">
              Log in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
