import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import crypto from "crypto";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, password } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);
  // const newReferralCode = crypto.randomBytes(4).toString("hex").toUpperCase();

  try {
    // Check if referral code is valid and exists
    // let referrer = null;
    // if (referralCode) {
    //   referrer = await prisma.user.findUnique({
    //     where: { referralCode },
    //   });
    //   if (!referrer) {
    //     return res.status(400).json({ message: "Invalid referral code" });
    //   }
    // }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
      },
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
}
