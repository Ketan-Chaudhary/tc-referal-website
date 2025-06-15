"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/favicon.ico"
            alt="TC Lottery Logo"
            width={32}
            height={32}
            className="rounded"
            priority
            sizes="32px"
          />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-300">
            TC LOTTERY
          </span>
        </Link>
        <nav className="hidden md:flex ml-auto gap-6">
          <Link href="/" className="text-sm font-medium text-zinc-200 hover:text-amber-500 transition-colors">
            Home
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
            onClick={() => window.open("https://www.tcvvip12.com/#/login", "_blank")}
          >
            Login
          </Button>
          <Button
            className="bg-gradient-to-r from-amber-500 to-yellow-300 text-black hover:from-amber-600 hover:to-yellow-400"
            onClick={() => window.open("https://www.tcvvip12.com/#/register?invitationCode=vCW7t38771", "_blank")}
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
          <SheetContent side="right" className="bg-zinc-900 border-zinc-800 w-[300px] sm:w-[400px]">
            <div className="flex items-center justify-between mb-6">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <Image
                  src="/favicon.ico"
                  alt="TC Lottery Logo"
                  width={24}
                  height={24}
                  className="rounded"
                  sizes="24px"
                />
                <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-300">
                  TC LOTTERY
                </span>
              </Link>
              <SheetClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </SheetClose>
            </div>
            <nav className="flex flex-col gap-4">
              <SheetClose asChild>
                <Link
                  href="/"
                  className="text-zinc-200 hover:text-amber-500 transition-colors py-2 px-3 rounded-md hover:bg-zinc-800"
                >
                  Home
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="https://t.me/systummearninig"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-200 hover:text-amber-500 transition-colors flex items-center gap-2 py-2 px-3 rounded-md hover:bg-zinc-800"
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
              </SheetClose>
              <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-zinc-700">
                <SheetClose asChild>
                  <Button
                    variant="outline"
                    className="w-full text-zinc-200 border-zinc-700 hover:bg-zinc-800 hover:text-white"
                    onClick={() => {
                      setIsOpen(false)
                      window.open("https://www.tcvvip12.com/#/login", "_blank")
                    }}
                  >
                    Login
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    className="w-full bg-gradient-to-r from-amber-500 to-yellow-300 text-black hover:from-amber-600 hover:to-yellow-400"
                    onClick={() => {
                      setIsOpen(false)
                      window.open("https://www.tcvvip12.com/#/register?invitationCode=vCW7t38771", "_blank")
                    }}
                  >
                    Register
                  </Button>
                </SheetClose>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
