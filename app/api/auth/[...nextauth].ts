import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import prisma from "../../lib/prisma";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Authentication logic here
        if (!credentials) {
          return null;
        }
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (
          user &&
          bcrypt.compareSync(credentials.password, user.passwordHash)
        ) {
          return user;
        }

        return null;
      },
    }),
  ],
  // Other NextAuth options
});
