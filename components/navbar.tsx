"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-300">
            TC LOTTERY
          </span>
        </Link>
        <nav className="hidden md:flex ml-auto gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-zinc-200 hover:text-amber-500 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/how-it-works"
            className="text-sm font-medium text-zinc-200 hover:text-amber-500 transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="/faq"
            className="text-sm font-medium text-zinc-200 hover:text-amber-500 transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="/customer-service"
            className="text-sm font-medium text-zinc-200 hover:text-amber-500 transition-colors"
          >
            Customer Service
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-zinc-200 hover:text-amber-500 transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-zinc-200 hover:text-amber-500 transition-colors"
          >
            Contact
          </Link>
          <Link
            href="https://t.me/systummearninig"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-zinc-200 hover:text-amber-500 transition-colors flex items-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m22 2-7 20-4-9-9-4Z"></path>
              <path d="M22 2 11 13"></path>
            </svg>
            Telegram
          </Link>
        </nav>
        <div className="hidden md:flex items-center ml-4 gap-2">
          <Button
            variant="outline"
            className="text-zinc-200 border-zinc-700 hover:bg-zinc-800 hover:text-white"
            onClick={() => (window.location.href = "http://tcvvip2.com")}
          >
            Login
          </Button>
          <Button
            className="bg-gradient-to-r from-amber-500 to-yellow-300 text-black hover:from-amber-600 hover:to-yellow-400"
            onClick={() =>
              (window.location.href =
                "https://www.tcvvip12.com/#/register?invitationCode=vCW7t38771")
            }
          >
            Register
          </Button>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden ml-auto">
            <Button variant="ghost" size="icon" className="text-zinc-200">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-zinc-900 border-zinc-800">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-300">
                  TC LOTTERY
                </span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="flex flex-col gap-4 mt-8">
              <Link
                href="/"
                className="text-zinc-200 hover:text-amber-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/how-it-works"
                className="text-zinc-200 hover:text-amber-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="/faq"
                className="text-zinc-200 hover:text-amber-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/customer-service"
                className="text-zinc-200 hover:text-amber-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Customer Service
              </Link>
              <Link
                href="/blog"
                className="text-zinc-200 hover:text-amber-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-zinc-200 hover:text-amber-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="https://t.me/systummearninig"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-200 hover:text-amber-500 transition-colors flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m22 2-7 20-4-9-9-4Z"></path>
                  <path d="M22 2 11 13"></path>
                </svg>
                Telegram
              </Link>
              <div className="flex flex-col gap-2 mt-4">
                <Button
                  variant="outline"
                  className="w-full text-zinc-200 border-zinc-700 hover:bg-zinc-800 hover:text-white"
                  onClick={() => {
                    setIsOpen(false);
                    window.location.href = "http://tcvvip2.com";
                  }}
                >
                  Login
                </Button>
                <Button
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-300 text-black hover:from-amber-600 hover:to-yellow-400"
                  onClick={() => {
                    setIsOpen(false);
                    window.location.href =
                      "https://www.tcvvip12.com/#/register?invitationCode=vCW7t38771";
                  }}
                >
                  Register
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
