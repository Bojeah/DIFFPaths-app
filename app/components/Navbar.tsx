'use client';
import Link from "next/link";
import Image from "next/image";
import {
  HiHome,
  HiUser,
  HiSwitchHorizontal,
  HiCreditCard,
  HiCurrencyDollar,
  HiMenu,
  HiX,
} from "react-icons/hi";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full bg-white shadow-md px-4 py-2 border-b border-gray-200 sticky top-0 z-10">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Image
            src="/favicon.ico"
            alt="DIFFPaths Logo"
            width={32}
            height={32}
          />
          <span className="ml-2 text-lg font-bold text-black">DIFFPaths</span>
        </div>
        {/* Centered Nav Tabs */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex gap-2 md:gap-6">
            <Link
              href="/dashboard"
              className="flex items-center text-black hover:bg-gray-100 rounded px-3 py-2 transition-colors text-base"
            >
              <HiHome className="w-5 h-5 mr-2" /> Home
            </Link>
            <Link
              href="/dashboard/transfers"
              className="flex items-center text-black hover:bg-gray-100 rounded px-3 py-2 transition-colors text-base"
            >
              <HiSwitchHorizontal className="w-5 h-5 mr-2" /> Send
            </Link>
            <Link
              href="/dashboard/pay"
              className="flex items-center text-black hover:bg-gray-100 rounded px-3 py-2 transition-colors text-base"
            >
              <HiCurrencyDollar className="w-5 h-5 mr-2" /> Pay
            </Link>
            <Link
              href="/dashboard/cards"
              className="flex items-center text-black hover:bg-gray-100 rounded px-3 py-2 transition-colors text-base"
            >
              <HiCreditCard className="w-5 h-5 mr-2" /> Card
            </Link>
          </div>
        </div>
        {/* Account on right */}
        <div className="hidden md:flex items-center ml-4">
          <Link
            href="/dashboard/accounts"
            className="flex items-center text-black hover:bg-gray-100 rounded px-3 py-2 transition-colors text-base"
          >
            <HiUser className="w-5 h-5 mr-2" /> Account
          </Link>
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center p-2 text-black focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <HiX className="w-7 h-7" />
          ) : (
            <HiMenu className="w-7 h-7" />
          )}
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 flex flex-col gap-2 bg-white rounded shadow p-4 animate-fade-in">
          <Link
            href="/dashboard"
            className="flex items-center text-black hover:bg-gray-100 rounded px-3 py-2 transition-colors text-base"
            onClick={() => setMenuOpen(false)}
          >
            <HiHome className="w-5 h-5 mr-2" /> Home
          </Link>
          <Link
            href="/dashboard/transfers"
            className="flex items-center text-black hover:bg-gray-100 rounded px-3 py-2 transition-colors text-base"
            onClick={() => setMenuOpen(false)}
          >
            <HiSwitchHorizontal className="w-5 h-5 mr-2" /> Send
          </Link>
          <Link
            href="/dashboard/pay"
            className="flex items-center text-black hover:bg-gray-100 rounded px-3 py-2 transition-colors text-base"
            onClick={() => setMenuOpen(false)}
          >
            <HiCurrencyDollar className="w-5 h-5 mr-2" /> Pay
          </Link>
          <Link
            href="/dashboard/cards"
            className="flex items-center text-black hover:bg-gray-100 rounded px-3 py-2 transition-colors text-base"
            onClick={() => setMenuOpen(false)}
          >
            <HiCreditCard className="w-5 h-5 mr-2" /> Card
          </Link>
          <Link
            href="/dashboard/accounts"
            className="flex items-center text-black hover:bg-gray-100 rounded px-3 py-2 transition-colors text-base"
            onClick={() => setMenuOpen(false)}
          >
            <HiUser className="w-5 h-5 mr-2" /> Account
          </Link>
        </div>
      )}
    </nav>
  );
}
