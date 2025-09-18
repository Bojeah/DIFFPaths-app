import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 bg-white shadow-md flex flex-col justify-between p-6 border-r border-gray-200">
      <div>
        <div className="flex items-center mb-10">
          <Image
            src="/favicon.ico"
            alt="DIFFPaths Logo"
            width={36}
            height={36}
          />
          <span className="ml-3 text-xl font-bold text-black">DIFFPaths</span>
        </div>
        <nav className="flex flex-col gap-4">
          <Link
            href="/dashboard"
            className="text-black hover:bg-gray-100 rounded px-3 py-2 transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/accounts"
            className="text-black hover:bg-gray-100 rounded px-3 py-2 transition-colors"
          >
            Accounts
          </Link>
          <Link
            href="/dashboard/transactions"
            className="text-black hover:bg-gray-100 rounded px-3 py-2 transition-colors"
          >
            Transactions
          </Link>
          <Link
            href="/dashboard/transfers"
            className="text-black hover:bg-gray-100 rounded px-3 py-2 transition-colors"
          >
            Transfers
          </Link>
          <Link
            href="/dashboard/cards"
            className="text-black hover:bg-gray-100 rounded px-3 py-2 transition-colors"
          >
            Cards
          </Link>
          <Link
            href="/dashboard/settings"
            className="text-black hover:bg-gray-100 rounded px-3 py-2 transition-colors"
          >
            Settings
          </Link>
        </nav>
      </div>
      <div className="text-xs text-gray-400">&copy; 2025 DIFFPaths</div>
    </aside>
  );
}
