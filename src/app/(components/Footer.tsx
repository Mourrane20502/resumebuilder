"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 shadow-inner mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <Link
            href="/"
            className="text-3xl font-extrabold text-[#8D54C0] mb-4 inline-block"
          >
            Resume Builder
          </Link>
          <p className="text-gray-400 max-w-xs">
            Build your perfect resume effortlessly with modern templates and
            export to PDF. Trusted by thousands worldwide.
          </p>

          <div className="flex space-x-5 mt-6">
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-[#8D54C0] transition"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-[#8D54C0] transition"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#8D54C0] transition"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:contact@resumebuilder.com"
              aria-label="Email"
              className="hover:text-[#8D54C0] transition"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
          <ul className="space-y-4 text-gray-400">
            {[
              { href: "/", label: "Home" },
              { href: "/dashboard", label: "Dashboard" },
              { href: "/features", label: "Features" },
              { href: "/pricing", label: "Pricing" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="hover:text-[#8D54C0] transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Account</h3>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <div className="flex flex-col space-y-4">
              <SignInButton>
                <button className="bg-[#8D54C0] text-white px-6 py-2 rounded-md hover:bg-[#6b3aab] transition font-semibold">
                  Sign In
                </button>
              </SignInButton>
              <Link href="/sign-up">
                <button className="border border-[#8D54C0] text-[#8D54C0] px-6 py-2 rounded-md hover:bg-[#8D54C0] hover:text-white transition font-semibold">
                  Sign Up
                </button>
              </Link>
            </div>
          </SignedOut>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} ResumeBuilder. All rights reserved.
      </div>
    </footer>
  );
}
