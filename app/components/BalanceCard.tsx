// components/BalanceCard.tsx
import React from "react";

type Props = {
  name?: string;
  balance: number;
  currency?: string;
};

export default function BalanceCard({
  name = "Benedict",
  balance,
  currency = "NGN",
}: Props) {
  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-2xl shadow-sm p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-gray-500">
            Hello, <span className="font-medium text-gray-800">{name}</span>
          </p>
          <div className="mt-3 flex items-end gap-3">
            <span className="text-xs text-gray-500">{currency}</span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              {balance.toLocaleString()}
            </h2>
          </div>
          <p className="mt-1 text-sm text-gray-400">Available balance</p>
        </div>

        <div className="flex flex-col items-end gap-3">
          <button className="px-4 py-2 rounded-lg bg-[#5E2CD8] text-white text-sm shadow-md hover:opacity-95">
            Send
          </button>
          <button className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 bg-white">
            Receive
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <div className="p-3 rounded-lg bg-gray-50 text-center">
          <p className="text-xs text-gray-500">Savings</p>
          <p className="mt-1 text-sm font-medium">₦0.00</p>
        </div>
        <div className="p-3 rounded-lg bg-gray-50 text-center">
          <p className="text-xs text-gray-500">Spending</p>
          <p className="mt-1 text-sm font-medium">₦0.00</p>
        </div>
        <div className="p-3 rounded-lg bg-gray-50 text-center">
          <p className="text-xs text-gray-500">Invest</p>
          <p className="mt-1 text-sm font-medium">—</p>
        </div>
      </div>
    </div>
  );
}
