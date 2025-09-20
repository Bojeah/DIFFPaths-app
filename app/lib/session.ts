import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
const secretKey = process.env.NEXTAUTH_SECRET;
const encodeedKey = new TextEncoder().encode(secretKey);

export async function createSession(userId: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ userId, expiresAt });

  (await cookies()).set("session", session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
  });
}

type SessionPayload = {
  userId: string;
  expiresAt: Date;
};

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodeedKey);
}

export async function decrypt(session: string | undefined = "") {
  if (!session) {
    return null;
  }
  const { payload } = await jwtVerify(session, encodeedKey, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function deleteSession() {
  (await cookies()).delete("session");
}
