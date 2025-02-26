"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import AgensePluse from "./AgensePluse";
import { Button } from "./ui/button";

export default function Header({
  toggleDarkMode,
  isDarkMode,
}: {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}) {
  return (
    <header className="sticky top-0 left-0 right-0 px-4 md:px-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Left */}
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-4">
              {/* AgentPulse */}
              <AgensePluse size="small" color="blue" />
              <h1 className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 text-transparent bg-clip-text">
                AgentTube
              </h1>
            </Link>
          </div>
          {/* Right */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 w-10 h-10 flex items-center justify-center rounded-full border bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
            >
              {isDarkMode ? "🌙" : "☀️"}
            </button>
            <SignedIn>
              <Link href="/manage-plan">
                <Button
                  variant="outline"
                  className="mr-4 bg-gradient-to-r from-[#143D60] to-[#143D60] text-transparent bg-clip-text"
                >
                  Manage Plan
                </Button>
              </Link>
              <div className="p-2 w-10 h-10 flex items-center justify-center rounded-full border bg-blue-100 border-blue-200">
                <UserButton />
              </div>
            </SignedIn>

            <SignedOut>
              <SignInButton mode="modal">
                <Button
                  variant="ghost"
                  className="bg-gradient-to-r from-[#143D60] to-[#143D60] text-transparent bg-clip-text"
                >
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  );
}
