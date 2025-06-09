import Link from "next/link"
import Image from "next/image"
import { Gift, Smartphone, Trophy, Users, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedRegisterButton from "@/components/animated-register-button"

export const metadata = {
  title: "TC Lottery Login - Sign In to Your Account now",
  description:
    "Access your TC Lottery account easily at tclottery.com. Enter your mobile number and password to log in securely and start using the app features. Use referral code vCW7t38771 for exclusive bonuses.",
  keywords:
    "tc lottery login, sign in, account access, mobile number, password, secure login, app features, vCW7t38771, referral code, exclusive bonuses",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/tclottery-banner.webp"
            alt="TC Lottery welcome bonus banner with referral code vCW7t38771"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="inline-block bg-gradient-to-r from-amber-500 to-yellow-300 text-black px-4 py-1 rounded-full text-sm font-medium">
              Win Big Today
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-400">
              Join TC Lottery and Start Winning Instantly
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl">
              Register using referral code <span className="text-amber-500 font-bold">vCW7t38771</span> for exclusive
              bonuses and join thousands of winners on the premier casino-style lottery platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
              <div className="flex-1">
                <AnimatedRegisterButton
                  size="lg"
                  text="Register Now"
                  className="w-full animate-float shadow-lg shadow-amber-500/20"
                />
              </div>
              <Button
                size="lg"
                variant="outline"
                className="border-amber-500 text-amber-500 hover:bg-amber-500/10 flex-1"
              >
                Download App
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Registration CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black/80 z-0"></div>

        {/* Animated light beams */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-0 left-1/4 w-1 h-full bg-amber-500/20 rotate-12 animate-pulse"></div>
          <div className="absolute top-0 right-1/4 w-1 h-full bg-amber-500/20 -rotate-12 animate-pulse"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-gradient-to-r from-amber-500 to-yellow-300 text-black px-4 py-1 rounded-full text-sm font-medium mb-6 animate-bounce">
              Limited Time Offer
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-400">
              Register Now with Our Special Referral Code
            </h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
              Sign up today using our exclusive referral code to receive special bonuses and start your winning journey
              with TC Lottery.
            </p>

            {/* Highlighted referral code section */}
            <div className="mb-8 p-2 rounded-lg bg-gradient-to-r from-amber-500/20 to-yellow-300/20 max-w-md mx-auto">
              <div className="text-center p-4 border-2 border-dashed border-amber-500 rounded-lg">
                <p className="text-zinc-400 text-sm uppercase tracking-wider">Your Exclusive Referral Code</p>
                <div className="text-3xl md:text-5xl font-black text-amber-500 my-2 tracking-wider animate-pulse-glow">
                  vCW7t38771
                </div>
                <p className="text-zinc-300 text-xs">Use this code during registration for maximum bonuses</p>
              </div>
            </div>

            {/* Animated entrance div with scale and fade */}
            <div className="transform transition-all duration-700 animate-in fade-in slide-in-from-bottom-8">
              <AnimatedRegisterButton
                size="xl"
                text="Register Now & Win Big"
                variant="secondary"
                className="w-full sm:w-auto shadow-lg shadow-red-500/20 mx-auto"
              />
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
                <p className="text-3xl font-bold text-amber-500">100%</p>
                <p className="text-zinc-400 text-sm">Welcome Bonus</p>
              </div>
              <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
                <p className="text-3xl font-bold text-amber-500">50+</p>
                <p className="text-zinc-400 text-sm">Exciting Games</p>
              </div>
              <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
                <p className="text-3xl font-bold text-amber-500">24/7</p>
                <p className="text-zinc-400 text-sm">Customer Support</p>
              </div>
              <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
                <p className="text-3xl font-bold text-amber-500">Instant</p>
                <p className="text-zinc-400 text-sm">Payouts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combined Telegram Community & Gift Coupons Section */}
      <section className="py-20 bg-gradient-to-r from-[#0088cc]/20 to-black">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-[#0088cc]/20 text-[#0088cc] px-4 py-1 rounded-full text-sm font-medium mb-4">
                Join Our Telegram
              </div>
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#0088cc]">
                Get Exclusive Benefits on Telegram
              </h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                Join our Telegram channels to receive exclusive gift coupons, daily bonuses, promotional codes, and
                connect with thousands of TC Lottery players worldwide.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {/* Gift Coupons Card */}
              <div className="bg-zinc-800/50 p-6 rounded-lg border border-amber-500/30 hover:border-amber-500 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
                    <Gift className="h-6 w-6 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Exclusive Gift Coupons</h3>
                </div>
                <p className="text-zinc-300 mb-6">
                  Get daily gift coupons, welcome bonuses, and special promotional codes exclusively available to our
                  gift channel subscribers. Never miss a bonus opportunity!
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-zinc-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                    Daily gift codes and bonus coupons
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                    Exclusive welcome bonuses up to 100%
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                    Special weekend and holiday promotions
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                    VIP member exclusive offers
                  </li>
                </ul>
                <Link href="https://t.me/tclotteryvipgroup" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-amber-500 to-yellow-300 text-black hover:from-amber-600 hover:to-yellow-400 flex items-center gap-2">
                    <Gift className="h-4 w-4" />
                    Join Gift Channel
                  </Button>
                </Link>
              </div>

              {/* Community Card */}
              <div className="bg-zinc-800/50 p-6 rounded-lg border border-[#0088cc]/30 hover:border-[#0088cc] transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0088cc]/20 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-[#0088cc]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Active Community</h3>
                </div>
                <p className="text-zinc-300 mb-6">
                  Connect with other players, share strategies, celebrate wins, and get instant support from our
                  community and customer service team. Join 25K+ active members!
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-zinc-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#0088cc] rounded-full"></div>
                    Share winning strategies and tips
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#0088cc] rounded-full"></div>
                    Celebrate big wins with the community
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#0088cc] rounded-full"></div>
                    Get instant customer support
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#0088cc] rounded-full"></div>
                    Access to VIP events and tournaments
                  </li>
                </ul>
                <Link href="https://t.me/systummearninig" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-[#0088cc] hover:bg-[#0088cc]/90 text-white flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Join Community Group
                  </Button>
                </Link>
              </div>
            </div>

            {/* Telegram Preview */}
            <div className="relative max-w-2xl mx-auto">
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
                    <h3 className="font-bold text-lg">TC Lottery Telegram Channels</h3>
                    <p className="text-zinc-400 text-sm">Gift Channel & Community Group • 25K+ members</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-zinc-900 p-4 rounded-lg border-l-4 border-amber-500">
                    <div className="flex items-center gap-2 mb-2">
                      <Gift className="h-4 w-4 text-amber-500" />
                      <span className="text-amber-500 font-bold text-sm">GIFT CHANNEL</span>
                    </div>
                    <p className="text-zinc-300 text-sm">
                      🎁 <strong>New Gift Code:</strong> TELEGRAM100 - Get 100% bonus on your next deposit! Valid for 24
                      hours only. Use referral code vCW7t38771 for extra rewards!
                    </p>
                    <p className="text-zinc-500 text-xs mt-2">Gift Channel • Today at 10:30 AM</p>
                  </div>

                  <div className="bg-zinc-900 p-4 rounded-lg border-l-4 border-[#0088cc]">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4 text-[#0088cc]" />
                      <span className="text-[#0088cc] font-bold text-sm">COMMUNITY GROUP</span>
                    </div>
                    <p className="text-zinc-300 text-sm">
                      🏆 Congratulations to our big winner Sarah M. who just won $50,000 using our exclusive gift
                      coupons! Who's next? 💰 #BigWinner
                    </p>
                    <p className="text-zinc-500 text-xs mt-2">Community Group • Yesterday at 6:15 PM</p>
                  </div>

                  <div className="bg-zinc-900 p-4 rounded-lg border-l-4 border-amber-500">
                    <div className="flex items-center gap-2 mb-2">
                      <Gift className="h-4 w-4 text-amber-500" />
                      <span className="text-amber-500 font-bold text-sm">GIFT CHANNEL</span>
                    </div>
                    <p className="text-zinc-300 text-sm">
                      📱 Weekend Special: Exclusive weekend gift coupons worth up to $500! Available only for channel
                      subscribers. #WeekendBonus
                    </p>
                    <p className="text-zinc-500 text-xs mt-2">Gift Channel • 2 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-black">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How TC Lottery Works</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Follow these simple steps to start playing and winning with TC Lottery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Register</h3>
              <p className="text-zinc-400">
                Create an account using referral code <span className="text-amber-500 font-bold">vCW7t38771</span> for
                bonus rewards
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Deposit</h3>
              <p className="text-zinc-400">Fund your account using one of our secure payment methods</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Play</h3>
              <p className="text-zinc-400">Choose from our variety of exciting lottery and casino games</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Win</h3>
              <p className="text-zinc-400">Collect your winnings instantly and withdraw to your account</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What Our Winners Say</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Hear from our community of winners who have experienced the thrill of TC Lottery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold text-xl mr-4">
                  J
                </div>
                <div>
                  <h4 className="font-bold">John D.</h4>
                  <p className="text-zinc-400 text-sm">$5,000 Winner</p>
                </div>
              </div>
              <p className="text-zinc-300">
                "I couldn't believe it when I won $5,000 on my first week using TC Lottery! The registration process was
                simple, and using the referral code <span className="text-amber-500 font-bold">vCW7t38771</span> gave me
                extra bonuses to play with."
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold text-xl mr-4">
                  S
                </div>
                <div>
                  <h4 className="font-bold">Sarah M.</h4>
                  <p className="text-zinc-400 text-sm">$10,000 Winner</p>
                </div>
              </div>
              <p className="text-zinc-300">
                "The gift coupons I received after registration helped me win big! TC Lottery has the best odds and most
                exciting games. I've recommended it to all my friends with my referral code."
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold text-xl mr-4">
                  R
                </div>
                <div>
                  <h4 className="font-bold">Robert T.</h4>
                  <p className="text-zinc-400 text-sm">$25,000 Winner</p>
                </div>
              </div>
              <p className="text-zinc-300">
                "The Telegram community is amazing! I got tips from other players that helped me win $25,000. The
                instant payout feature meant I received my winnings right away without any hassle."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-black">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose TC Lottery</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Experience the best casino-style lottery platform with amazing features and opportunities to win big
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-amber-500 transition-colors">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Huge Winnings</h3>
              <p className="text-zinc-400">
                Win big with our daily jackpots and exciting lottery games with high odds of winning.
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-amber-500 transition-colors">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4">
                <Gift className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Gift Coupons</h3>
              <p className="text-zinc-400">
                Receive exclusive gift coupons when you register, refer friends, or participate in special events.
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-amber-500 transition-colors">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Referral Bonuses</h3>
              <p className="text-zinc-400">
                Use a manager referral code to get additional bonuses and rewards when you sign up.
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-amber-500 transition-colors">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4">
                <Smartphone className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Mobile App</h3>
              <p className="text-zinc-400">
                Play anytime, anywhere with our user-friendly mobile app available for iOS and Android.
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-amber-500 transition-colors">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Instant Payouts</h3>
              <p className="text-zinc-400">Enjoy fast and secure payouts directly to your account with no delays.</p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-amber-500 transition-colors">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4">
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
                  className="h-6 w-6 text-amber-500"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Multiple Games</h3>
              <p className="text-zinc-400">
                Choose from a variety of exciting Color Prediction, Poker, Rummy, Slots, Sports Games, and more games.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Winning?</h2>
            <p className="text-zinc-400 text-lg">
              Join thousands of winners on TC Lottery today. Register using our exclusive referral code, claim your gift
              coupons, and start your winning journey.
            </p>

            {/* Floating referral code */}
            <div className="bg-gradient-to-r from-amber-500 to-yellow-300 text-black px-6 py-3 rounded-lg font-bold text-lg animate-float">
              Use Referral Code: <span className="text-xl md:text-2xl tracking-wider">vCW7t38771</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <AnimatedRegisterButton size="lg" text="Register Now" variant="primary" />
              <Button size="lg" variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-500/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky bottom registration button */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-zinc-900 to-black border-t border-amber-500/30 p-3 z-50 md:hidden">
        <AnimatedRegisterButton
          size="default"
          text="Register Now"
          variant="secondary"
          className="w-full shadow-lg shadow-amber-500/20"
        />
      </div>

      <Footer />
    </div>
  )
}
