"use server";

import { z } from "zod";
import bcrypt from "bcrypt";
import { createSession } from "../../lib/session";
import { redirect } from "next/navigation";
import prisma from "../../lib/prisma";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .trim(),
});

export async function login(prevState: any, formData: FormData) {
  const result = loginSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { email, password } = result.data;

    // Find the user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // Verify user exists and password is correct
    if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
      return {
        errors: {
          email: ["Invalid email or password"],
        },
      };
    }

    // If authentication is successful, create a session and redirect
  await createSession(user.id);
  

  redirect("/dashboard");

}



