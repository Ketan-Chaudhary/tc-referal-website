"use client"

import Link from "next/link"
import Image from "next/image"
import { Gift, Trophy, Users, Zap, Clock, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedRegisterButton from "@/components/animated-register-button"

export default function ClientPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/tclottery-banner.webp"
            alt="TC Lottery Color Prediction Game"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={85}
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="inline-block bg-gradient-to-r from-amber-500 to-yellow-300 text-black px-4 py-1 rounded-full text-sm font-medium">
              Best Color Prediction Game
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-400">
              Welcome to TC Lottery Official Website
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl">
              Play the best Color Prediction game with us and win unlimited money. 24×7 Support and fast withdrawals are
              our keys to your trust. Use referral code <span className="text-amber-500 font-bold">vCW7t38771</span> for
              sign-up bonus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
              <div className="flex-1">
                <AnimatedRegisterButton
                  size="lg"
                  text="Register & Get Bonus"
                  className="w-full animate-float shadow-lg shadow-amber-500/20"
                />
              </div>
              <Button
                size="lg"
                variant="outline"
                className="border-amber-500 text-amber-500 hover:bg-amber-500/10 flex-1"
                onClick={() => window.open("https://www.tcvvip12.com/#/login", "_blank")}
              >
                Login Now
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
              Sign-Up Bonus Available
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-400">
              Start Playing Color Prediction Game
            </h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
              Join thousands of players and start winning unlimited money with our Color Prediction game. Fast
              withdrawals and 24×7 support guaranteed.
            </p>

            {/* Highlighted referral code section */}
            <div className="mb-8 p-2 rounded-lg bg-gradient-to-r from-amber-500/20 to-yellow-300/20 max-w-md mx-auto">
              <div className="text-center p-4 border-2 border-dashed border-amber-500 rounded-lg">
                <p className="text-zinc-400 text-sm uppercase tracking-wider">Your Exclusive Referral Code</p>
                <div className="text-3xl md:text-5xl font-black text-amber-500 my-2 tracking-wider animate-pulse-glow">
                  vCW7t38771
                </div>
                <p className="text-zinc-300 text-xs">Use this code during registration for sign-up bonus</p>
              </div>
            </div>

            {/* Animated entrance div with scale and fade */}
            <div className="transform transition-all duration-700 animate-in fade-in slide-in-from-bottom-8">
              <AnimatedRegisterButton
                size="xl"
                text="Register Now & Get Bonus"
                variant="secondary"
                className="w-full sm:w-auto shadow-lg shadow-red-500/20 mx-auto"
              />
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
                <p className="text-3xl font-bold text-amber-500">100%</p>
                <p className="text-zinc-400 text-sm">Sign-Up Bonus</p>
              </div>
              <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
                <p className="text-3xl font-bold text-amber-500">24×7</p>
                <p className="text-zinc-400 text-sm">Support</p>
              </div>
              <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
                <p className="text-3xl font-bold text-amber-500">Fast</p>
                <p className="text-zinc-400 text-sm">Withdrawals</p>
              </div>
              <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
                <p className="text-3xl font-bold text-amber-500">Secure</p>
                <p className="text-zinc-400 text-sm">Platform</p>
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
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-black">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How Color Prediction Game Works</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Follow these simple steps to start playing and winning with TC Lottery Color Prediction Game
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
                sign-up bonus
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Deposit</h3>
              <p className="text-zinc-400">Add money to your account using secure payment methods</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Predict</h3>
              <p className="text-zinc-400">Choose your color and predict the outcome to win big</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Win</h3>
              <p className="text-zinc-400">Collect your winnings instantly with fast withdrawal</p>
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
              Hear from our community of winners who have experienced the thrill of TC Lottery Color Prediction Game
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold text-xl mr-4">
                  R
                </div>
                <div>
                  <h4 className="font-bold">Rajesh K.</h4>
                  <p className="text-zinc-400 text-sm">₹50,000 Winner</p>
                </div>
              </div>
              <p className="text-zinc-300">
                "I couldn't believe it when I won ₹50,000 on my first week using TC Lottery Color Prediction Game! The
                registration process was simple, and using the referral code{" "}
                <span className="text-amber-500 font-bold">vCW7t38771</span> gave me extra bonuses to play with."
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold text-xl mr-4">
                  P
                </div>
                <div>
                  <h4 className="font-bold">Priya S.</h4>
                  <p className="text-zinc-400 text-sm">₹1,00,000 Winner</p>
                </div>
              </div>
              <p className="text-zinc-300">
                "The gift coupons I received after registration helped me win big! TC Lottery has the best Color
                Prediction game and most exciting features. I've recommended it to all my friends with my referral
                code."
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold text-xl mr-4">
                  A
                </div>
                <div>
                  <h4 className="font-bold">Amit P.</h4>
                  <p className="text-zinc-400 text-sm">₹2,50,000 Winner</p>
                </div>
              </div>
              <p className="text-zinc-300">
                "The Telegram community is amazing! I got tips from other players that helped me win ₹2,50,000. The fast
                withdrawal feature meant I received my winnings right away without any hassle."
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
              Experience the best Color Prediction game platform with amazing features and opportunities to win
              unlimited money
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-amber-500 transition-colors">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Unlimited Winnings</h3>
              <p className="text-zinc-400">
                Win unlimited money with our Color Prediction game with high winning odds and exciting gameplay.
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-amber-500 transition-colors">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4">
                <Gift className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sign-Up Bonus</h3>
              <p className="text-zinc-400">
                Receive exclusive sign-up bonus when you register with referral code and start playing immediately.
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-amber-500 transition-colors">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">24×7 Support</h3>
              <p className="text-zinc-400">
                Get round-the-clock customer support for any queries or issues you may have while playing.
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-amber-500 transition-colors">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Withdrawals</h3>
              <p className="text-zinc-400">
                Enjoy fast and secure withdrawals directly to your account with no delays.
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-amber-500 transition-colors">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Platform</h3>
              <p className="text-zinc-400">
                Play with confidence on our secure platform with advanced encryption and data protection.
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-amber-500 transition-colors">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Active Community</h3>
              <p className="text-zinc-400">
                Join thousands of active players and share strategies in our vibrant Telegram community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Winning Unlimited Money?</h2>
            <p className="text-zinc-400 text-lg">
              Join thousands of winners on TC Lottery today. Register using our exclusive referral code, claim your
              sign-up bonus, and start your winning journey with the best Color Prediction game.
            </p>

            {/* Floating referral code */}
            <div className="bg-gradient-to-r from-amber-500 to-yellow-300 text-black px-6 py-3 rounded-lg font-bold text-lg animate-float">
              Use Referral Code: <span className="text-xl md:text-2xl tracking-wider">vCW7t38771</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <AnimatedRegisterButton size="lg" text="Register Now" variant="primary" />
              <Button
                size="lg"
                variant="outline"
                className="border-amber-500 text-amber-500 hover:bg-amber-500/10"
                onClick={() => window.open("https://www.tcvvip12.com/#/login", "_blank")}
              >
                Login Now
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
