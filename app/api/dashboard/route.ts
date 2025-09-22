import prisma from "../../lib/prisma";
import { decrypt } from "../../lib/session";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

interface SavingsAccount {
  id: string;
  name: string;
  type: "AUTOMATED" | "SAFELOCK" | "TARGET";
  currentAmount: number;
  goalAmount: number;
  progress: number;
  interestRate?: number;
  lockPeriod?: string;
}

export async function GET(request: NextRequest) {
    try {
        // Get session from cookie
        const cookie = (await cookies()).get("session")?.value;
        const session = await decrypt(cookie);

        // Check if session exists and has userId
        if (!session?.userId) {
            return NextResponse.json(
                { error: "Unauthorized: No valid session found" },
                { status: 401 }
            );
        }

        const savingsDetails = await prisma.savingsAccount.findMany({
            where: {
                userId: session.userId,
            },
            select: {
                id: true,
                name: true,
                type: true,
                currentAmount: true,
                goalAmount: true,
            }
        });

        // Transform the data to match the interface
        const transformedSavings: SavingsAccount[] = savingsDetails.map((account: {
            id: string;
            name: string;
            type: string;
            currentAmount: number;
            goalAmount: number;
        }) => ({
            id: account.id,
            name: account.name,
            type: account.type as "AUTOMATED" | "SAFELOCK" | "TARGET",
            currentAmount: Number(account.currentAmount),
            goalAmount: Number(account.goalAmount),
            progress: account.goalAmount > 0 ? Math.round((Number(account.currentAmount) / Number(account.goalAmount)) * 100) : 0,
            // Note: interestRate and lockPeriod are not in the database schema
            // You may want to add these fields to your database model or remove them from the interface
        }));

        return NextResponse.json(transformedSavings);
    } catch (error) {
        console.error("Error fetching savings accounts:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
