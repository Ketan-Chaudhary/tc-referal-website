import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export const metadata = {
  title: "404 - Page Not Found | TC Lottery",
  description:
    "The page you're looking for doesn't exist. Return to TC Lottery homepage and use referral code vCW7t38771 for exclusive bonuses.",
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 max-w-2xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image src="/favicon.ico" alt="TC Lottery Logo" width={48} height={48} className="rounded" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-300">
              TC LOTTERY
            </span>
          </div>

          {/* 404 Error */}
          <div className="space-y-4">
            <h1 className="text-8xl md:text-9xl font-black text-amber-500 opacity-50">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold">Page Not Found</h2>
            <p className="text-lg text-zinc-400 max-w-md mx-auto">
              Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the
              wrong URL.
            </p>
          </div>

          {/* Referral Code Reminder */}
          <div className="bg-gradient-to-r from-amber-500/20 to-yellow-300/20 p-6 rounded-lg border border-amber-500/30 max-w-md mx-auto">
            <p className="text-zinc-300 text-sm mb-2">Don't forget our referral code:</p>
            <div className="text-2xl font-black text-amber-500 tracking-wider">vCW7t38771</div>
            <p className="text-zinc-400 text-xs mt-2">Use this code when registering for exclusive bonuses!</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <Button
              asChild
              className="bg-gradient-to-r from-amber-500 to-yellow-300 text-black hover:from-amber-600 hover:to-yellow-400 flex-1"
            >
              <Link href="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-500/10 flex-1">
              <Link href="javascript:history.back()" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Go Back
              </Link>
            </Button>
          </div>

          {/* Additional Help */}
          <div className="text-center space-y-2">
            <p className="text-zinc-500 text-sm">Need help? Contact our support team</p>
            <Link
              href="https://t.me/systummearninig"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors text-sm"
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
              Join our Telegram
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
