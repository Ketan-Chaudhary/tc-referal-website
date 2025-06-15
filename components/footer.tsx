import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/favicon.ico" alt="TC Lottery Logo" width={32} height={32} className="rounded" sizes="32px" />
              <h3 className="text-lg font-bold">TC Lottery</h3>
            </div>
            <p className="text-zinc-400 text-sm">
              Welcome to the TC Lottery official website. Play the best Color Prediction game with us and win unlimited
              money. 24×7 Support and fast withdrawals are our keys to your trust. Use referral code vCW7t38771 for
              sign-up bonus.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://t.me/systummearninig"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-amber-500"
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
                <span className="sr-only">Telegram</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-amber-500 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="https://t.me/systummearninig"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-amber-500 text-sm"
                >
                  Telegram Community
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-400 text-sm">© {new Date().getFullYear()} TC Lottery. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="text-zinc-400 text-xs">Referral Code: vCW7t38771</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
