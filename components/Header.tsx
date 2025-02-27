"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect } from "react";
import AgensePluse from "./AgensePluse";
import { Button } from "./ui/button";

export default function Header() {
  const { setTheme } = useTheme();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "system";
    setTheme(savedTheme as "light" | "dark" | "system");
  }, [setTheme]);

  return (
    <header className="sticky top-0 left-0 right-0 px-4 md:px-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Left */}
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-4">
              {/* AgentPulse */}
              <AgensePluse size="small" color="blue" />
              <h1 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-200 text-transparent bg-clip-text">
                AgentTube
              </h1>
            </Link>
          </div>
          {/* Right */}
          <div className="flex items-center gap-4">
            <ModeToggle />
            <SignedIn>
              <Link href="/manage-plan">
                <Button
                  variant="outline"
                  className="mr-4 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-200 text-transparent bg-clip-text"
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
                  className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-200 text-transparent bg-clip-text font-semibold"
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
