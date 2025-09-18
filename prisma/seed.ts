// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash("Password123!", 10);

  const user = await prisma.user.create({
    data: {
      name: "Demo User",
      email: "demo@bank.com",
      passwordHash,
      accounts: {
        create: [
          { type: "checking", name: "Main Checking", balance: 2500 },
          { type: "savings", name: "Emergency Savings", balance: 5000 },
        ],
      },
    },
    include: { accounts: true },
  });

  // Add some transactions
  await prisma.transaction.createMany({
    data: [
      {
        accountId: user.accounts[0].id,
        type: "credit",
        amount: 2500,
        description: "Initial deposit",
      },
      {
        accountId: user.accounts[1].id,
        type: "credit",
        amount: 5000,
        description: "Initial deposit",
      },
      {
        accountId: user.accounts[0].id,
        type: "debit",
        amount: 120.5,
        description: "Groceries",
      },
      {
        accountId: user.accounts[0].id,
        type: "debit",
        amount: 45.0,
        description: "Transport",
      },
    ],
  });

  console.log("Seed complete");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => process.exit());
