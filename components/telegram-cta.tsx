import Link from "next/link";
import { Button } from "@/ui/button";

export default function TelegramCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#0088cc]/20 to-black">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-block bg-[#0088cc]/20 text-[#0088cc] px-4 py-1 rounded-full text-sm font-medium mb-4">
              Join Our Community
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Connect with TC Lottery on Telegram
            </h2>
            <p className="text-zinc-400 mb-6">
              Join our active Telegram community to get the latest updates,
              exclusive promotions, and connect with other TC Lottery players.
              Share strategies, celebrate wins, and get instant support.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <div className="mr-2 mt-1 bg-[#0088cc]/20 p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0088cc"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-zinc-300">
                  Get exclusive bonus codes and gift coupons
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 bg-[#0088cc]/20 p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0088cc"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-zinc-300">
                  Receive instant notifications about new games and promotions
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 bg-[#0088cc]/20 p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0088cc"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-zinc-300">
                  Connect with other players and share strategies
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 bg-[#0088cc]/20 p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0088cc"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-zinc-300">
                  Get direct access to customer support
                </span>
              </li>
            </ul>
            <Link
              href="https://t.me/systummearninig"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#0088cc] hover:bg-[#0088cc]/90 text-white flex items-center gap-2"
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
                Join Our Telegram
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-[#0088cc]/20 rounded-full blur-3xl opacity-30"></div>
            <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#0088cc"
                  className="h-10 w-10"
                >
                  <path d="m22 2-7 20-4-9-9-4Z"></path>
                  <path d="M22 2 11 13" stroke="#fff" strokeWidth="2"></path>
                </svg>
                <div>
                  <h3 className="font-bold text-lg">TC Lottery Vip</h3>
                  <p className="text-zinc-400 text-sm">
                    @tclottery • 25K members
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-zinc-900 p-3 rounded-lg">
                  <p className="text-zinc-300 text-sm">
                    🎉 <strong>Welcome Bonus Alert!</strong> Use code TELEGRAM50
                    when you register to get a 50% bonus on your first deposit!
                    Limited time offer. #TCLottery
                  </p>
                  <p className="text-zinc-500 text-xs mt-2">
                    Today at 10:30 AM
                  </p>
                </div>
                <div className="bg-zinc-900 p-3 rounded-lg">
                  <p className="text-zinc-300 text-sm">
                    🏆 Congratulations to our big winner John S. who just won
                    $50,000 on our Mega Jackpot game! Who's next? 💰 #BigWinner
                  </p>
                  <p className="text-zinc-500 text-xs mt-2">
                    Yesterday at 6:15 PM
                  </p>
                </div>
                <div className="bg-zinc-900 p-3 rounded-lg">
                  <p className="text-zinc-300 text-sm">
                    📱 Our new app update is live! Download now for improved
                    performance and new exciting games! #TCLotteryApp
                  </p>
                  <p className="text-zinc-500 text-xs mt-2">2 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
