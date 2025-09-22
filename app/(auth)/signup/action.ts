"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

// Schema for registration validation
const signupSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }).trim(),
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .trim(),
});

interface SignupState {
  errors?: {
    name?: string[] | string;
    email?: string[] | string;
    password?: string[] | string;
    general?: string;
  };
}

export async function signup(prevState: SignupState | undefined, formData: FormData): Promise<SignupState> {
  const result = signupSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = result.data;

  try {
    // Hash the password before saving
    const passwordHash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
      },
    });
    console.log("User created:", user.name);
  } catch (error: any) {
    console.error("Registration error:", error);

    // Handle specific Prisma errors
    if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
      return {
        errors: { email: "Email already exists" },
      };
    }

    // General error
    return {
      errors: { general: "Something went wrong. Please try again." },
    };
  }

  // Redirect to login on successful registration
  redirect("/login");
}
