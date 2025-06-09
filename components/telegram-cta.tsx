import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Gift, Users } from "lucide-react"

export default function TelegramCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0088cc]/20 to-black">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#0088cc]/20 text-[#0088cc] px-4 py-1 rounded-full text-sm font-medium mb-4">
              Join Our Community
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#0088cc]">
              Get Exclusive Benefits on Telegram
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Join our active Telegram community to receive exclusive gift coupons, daily bonuses, promotional codes,
              and connect with thousands of TC Lottery players worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Benefits List */}
            <div className="space-y-6">
              <div className="bg-zinc-800/50 p-6 rounded-lg border border-[#0088cc]/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0088cc]/20 rounded-full flex items-center justify-center">
                    <Gift className="h-6 w-6 text-[#0088cc]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Exclusive Gift Coupons</h3>
                </div>
                <p className="text-zinc-300">
                  Receive daily gift coupons, welcome bonuses, and special promotional codes exclusively available to
                  our Telegram community members.
                </p>
              </div>

              <div className="bg-zinc-800/50 p-6 rounded-lg border border-[#0088cc]/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0088cc]/20 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-[#0088cc]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Active Community</h3>
                </div>
                <p className="text-zinc-300">
                  Connect with other players, share strategies, celebrate wins, and get instant support from our
                  community and customer service team.
                </p>
              </div>

              <div className="text-center">
                <Link href="https://t.me/systummearninig" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-[#0088cc] hover:bg-[#0088cc]/90 text-white flex items-center gap-2 w-full sm:w-auto"
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
                    Join Our Telegram Community
                  </Button>
                </Link>
              </div>
            </div>

            {/* Telegram Preview */}
            <div className="relative">
              <div className="absolute -inset-4 bg-[#0088cc]/20 rounded-full blur-3xl opacity-30"></div>
              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#0088cc"
                    className="h-12 w-12"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z"></path>
                    <path d="M22 2 11 13" stroke="#fff" strokeWidth="2"></path>
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg">TC Lottery VIP Community</h3>
                    <p className="text-zinc-400 text-sm">@systummearninig • 25K+ members</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-zinc-900 p-4 rounded-lg border-l-4 border-[#0088cc]">
                    <div className="flex items-center gap-2 mb-2">
                      <Gift className="h-4 w-4 text-amber-500" />
                      <span className="text-amber-500 font-bold text-sm">GIFT COUPON ALERT</span>
                    </div>
                    <p className="text-zinc-300 text-sm">
                      🎁 <strong>New Gift Code:</strong> TELEGRAM100 - Get 100% bonus on your next deposit! Valid for 24
                      hours only. Use referral code vCW7t38771 for extra rewards!
                    </p>
                    <p className="text-zinc-500 text-xs mt-2">Today at 10:30 AM</p>
                  </div>

                  <div className="bg-zinc-900 p-4 rounded-lg">
                    <p className="text-zinc-300 text-sm">
                      🏆 Congratulations to our big winner Sarah M. who just won $50,000 using our exclusive gift
                      coupons! Who's next? 💰 #BigWinner
                    </p>
                    <p className="text-zinc-500 text-xs mt-2">Yesterday at 6:15 PM</p>
                  </div>

                  <div className="bg-zinc-900 p-4 rounded-lg">
                    <p className="text-zinc-300 text-sm">
                      📱 Weekend Special: Join our community and get instant access to exclusive weekend gift coupons
                      worth up to $500! #WeekendBonus
                    </p>
                    <p className="text-zinc-500 text-xs mt-2">2 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
