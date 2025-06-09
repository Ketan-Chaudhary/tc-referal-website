import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/favicon.ico" alt="TC Lottery Logo" width={32} height={32} className="rounded" />
              <h3 className="text-lg font-bold">TC Lottery</h3>
            </div>
            <p className="text-zinc-400 text-sm">
              The premier casino-style lottery platform where winners are made every day. Use referral code vCW7t38771
              for exclusive bonuses.
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
          <div>
            <h3 className="text-lg font-bold mb-4">Download App</h3>
            <div className="space-y-4">
              <Link
                href="#"
                className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 p-2 rounded-lg transition-colors"
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
                  className="h-6 w-6"
                >
                  <path d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5"></path>
                  <path d="M16 19h6"></path>
                  <path d="M19 16v6"></path>
                </svg>
                <div>
                  <p className="text-xs text-zinc-400">Download on</p>
                  <p className="text-sm font-medium">Android</p>
                </div>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 p-2 rounded-lg transition-colors"
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
                  className="h-6 w-6"
                >
                  <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                  <path d="M10 2c1 .5 2 2 2 5"></path>
                </svg>
                <div>
                  <p className="text-xs text-zinc-400">Download on</p>
                  <p className="text-sm font-medium">iOS</p>
                </div>
              </Link>
            </div>
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
