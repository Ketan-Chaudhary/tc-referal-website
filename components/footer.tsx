import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/favicon.ico"
                alt="TC Lottery India Logo"
                width={32}
                height={32}
                className="rounded"
                sizes="32px"
              />
              <h3 className="text-lg font-bold">TC Lottery India</h3>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              India's most trusted Color Prediction Game platform with 5+ lakh active players. Win up to ₹10 lakh daily
              with 99% accuracy. Fast 2-minute withdrawals, 24×7 support in Hindi & English. Use referral code{" "}
              <strong>vCW7t38771</strong> for ₹500 instant bonus.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://t.me/systummearninig"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-amber-500 transition-colors"
                aria-label="Join TC Lottery Telegram Community"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="m22 2-7 20-4-9-9-4Z"></path>
                  <path d="M22 2 11 13"></path>
                </svg>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-amber-400">Color Prediction Game</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-amber-500 text-sm transition-colors">
                  How to Play Color Prediction
                </Link>
              </li>
              <li>
                <Link href="/" className="text-zinc-400 hover:text-amber-500 text-sm transition-colors">
                  Winning Strategies & Tips
                </Link>
              </li>
              <li>
                <Link href="/" className="text-zinc-400 hover:text-amber-500 text-sm transition-colors">
                  Fast Withdrawal Guide
                </Link>
              </li>
              <li>
                <Link
                  href="https://t.me/systummearninig"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-amber-500 text-sm transition-colors"
                >
                  Join Telegram Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-green-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-zinc-400 text-sm">
                  Referral Code: <strong className="text-amber-500">vCW7t38771</strong>
                </span>
              </li>
              <li>
                <span className="text-zinc-400 text-sm">
                  Instant Bonus: <strong className="text-green-500">₹500</strong>
                </span>
              </li>
              <li>
                <span className="text-zinc-400 text-sm">
                  Withdrawal Time: <strong className="text-blue-500">2 Minutes</strong>
                </span>
              </li>
              <li>
                <span className="text-zinc-400 text-sm">
                  Support: <strong className="text-purple-500">24×7</strong>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-400 text-sm">
              © {new Date().getFullYear()} TC Lottery India. All rights reserved. | Best Color Prediction Game Platform
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-zinc-500">
              <span>🎯 99% Win Rate</span>
              <span>⚡ 2-Min Withdrawals</span>
              <span>🔒 100% Safe & Secure</span>
              <span>🏆 5+ Lakh Players</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
