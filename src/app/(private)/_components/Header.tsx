"use client";
import { Button } from "@/components/ui/button";
import { NavigationsLinks } from "@/data/data";
import useScroll from "@/hooks/useScroll";
import useTheme from "@/hooks/useTheme";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Moon, MoonIcon, Sun, SunIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;
  const { scrolled } = useScroll();
  const { theme, handleToggleTheme } = useTheme();

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-200 ease-in-out ${
        scrolled ? "shadow-md bg-background/95" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 md:p-6">
        <Link href="/" className="text-2xl text-[#8D54C0] font-bold">
          Resume Builder
        </Link>

        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          {NavigationsLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`hover:text-indigo-600 transition ${
                isActive(href) ? "text-[#8D54C0] font-semibold" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button className="hidden md:inline-block cursor-pointer">
                Sign In
              </Button>
            </SignInButton>
            <Link href="/sign-up">
              <Button className="hidden md:inline-block cursor-pointer">
                Sign Up
              </Button>
            </Link>
          </SignedOut>
          <div className="">
            {theme === "light" ? (
              <MoonIcon
                className="h-6 w-6 text-gray-700 cursor-pointer"
                onClick={handleToggleTheme}
                aria-label="Switch to dark mode"
              />
            ) : (
              <SunIcon
                onClick={handleToggleTheme}
                className="h-6 w-6 text-gray-700 cursor-pointer"
              />
            )}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 shadow-inner">
          <div className="flex flex-col p-4 space-y-4 text-gray-700 font-medium">
            {NavigationsLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`block px-2 py-2 rounded hover:bg-indigo-50 ${
                  isActive(href) ? "text-[#8D54C0] font-semibold" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}

            <SignedOut>
              <SignInButton>
                <Button className="w-full">Sign In</Button>
              </SignInButton>
              <Link href="/sign-up" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full mt-2">Sign Up</Button>
              </Link>
            </SignedOut>
          </div>
        </nav>
      )}
    </header>
  );
}
