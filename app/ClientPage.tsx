"use client"

import Link from "next/link"
import Image from "next/image"
import { Gift, Trophy, Users, Zap, Clock, Shield, Star, TrendingUp, Award, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedRegisterButton from "@/components/animated-register-button"

export default function ClientPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section - SEO Optimized */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/tclottery-banner.webp"
            alt="TC Lottery India - Best Color Prediction Game with Fast Withdrawal and 24x7 Support"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={85}
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-300 text-black px-4 py-2 rounded-full text-sm font-medium">
              <Star className="h-4 w-4" />
              India's #1 Color Prediction Game
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-400">
              Win ₹10 Lakh Daily with TC Lottery Color Prediction Game
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 max-w-4xl leading-relaxed">
              🎯 <strong>India's Most Trusted Color Prediction Platform</strong> - Join 5+ Lakh Winners! Play Red,
              Green, Blue prediction game with <span className="text-amber-400 font-bold">99% winning accuracy</span>.
              Get <span className="text-green-400 font-bold">₹500 instant bonus</span> with referral code{" "}
              <span className="text-amber-500 font-black text-xl">vCW7t38771</span>. Fast 2-minute withdrawals & 24×7
              support guaranteed!
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-400 mb-4">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>5+ Lakh Active Players</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>99% Winning Accuracy</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>2-Min Fast Withdrawal</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>24×7 Customer Support</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
              <div className="flex-1">
                <AnimatedRegisterButton
                  size="lg"
                  text="Get ₹500 Bonus Now"
                  className="w-full animate-float shadow-lg shadow-amber-500/20"
                />
              </div>
              <Button
                size="lg"
                variant="outline"
                className="border-amber-500 text-amber-500 hover:bg-amber-500/10 flex-1 bg-transparent"
                onClick={() => window.open("https://www.tcvvip12.com/#/login", "_blank")}
              >
                Login to Play
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Color Prediction Game - SEO Content Section */}
      <section className="py-16 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-400">
              What is Color Prediction Game? Complete Guide 2024
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                <strong>Color Prediction Game</strong> is India's most popular online earning game where players predict
                the outcome of colors (Red, Green, Blue) to win real money. TC Lottery offers the most accurate color
                prediction platform with advanced algorithms and real-time results.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
                  <h3 className="text-xl font-bold mb-4 text-amber-400">How Color Prediction Works</h3>
                  <ul className="space-y-2 text-zinc-300">
                    <li>• Choose your color: Red, Green, or Blue</li>
                    <li>• Place your bet amount (Min ₹10)</li>
                    <li>• Wait for the live result (30 seconds)</li>
                    <li>• Win 2x to 10x your bet amount</li>
                    <li>• Instant withdrawal to bank/UPI</li>
                  </ul>
                </div>

                <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
                  <h3 className="text-xl font-bold mb-4 text-amber-400">Why Choose TC Lottery?</h3>
                  <ul className="space-y-2 text-zinc-300">
                    <li>• 99% accurate prediction algorithms</li>
                    <li>• Fastest 2-minute withdrawals in India</li>
                    <li>• ₹500 welcome bonus with code vCW7t38771</li>
                    <li>• 24×7 customer support in Hindi/English</li>
                    <li>• Safe & secure platform with SSL encryption</li>
                  </ul>
                </div>
              </div>
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
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-400 text-black px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce">
              <TrendingUp className="h-4 w-4" />
              ₹500 Instant Bonus Available
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-400">
              Start Earning ₹5,000 Daily with Color Prediction Game
            </h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
              Join India's largest color prediction community! Over <strong>5 lakh players</strong> are already earning
              daily. Use exclusive referral code <strong>vCW7t38771</strong> to get ₹500 instant bonus + 100% first
              deposit bonus.
            </p>

            {/* Highlighted referral code section */}
            <div className="mb-8 p-2 rounded-lg bg-gradient-to-r from-amber-500/20 to-yellow-300/20 max-w-md mx-auto">
              <div className="text-center p-4 border-2 border-dashed border-amber-500 rounded-lg">
                <p className="text-zinc-400 text-sm uppercase tracking-wider">🎁 Exclusive Referral Code</p>
                <div className="text-3xl md:text-5xl font-black text-amber-500 my-2 tracking-wider animate-pulse-glow">
                  vCW7t38771
                </div>
                <p className="text-zinc-300 text-xs">Get ₹500 Instant Bonus + 100% First Deposit Bonus</p>
              </div>
            </div>

            {/* Animated entrance div with scale and fade */}
            <div className="transform transition-all duration-700 animate-in fade-in slide-in-from-bottom-8">
              <AnimatedRegisterButton
                size="xl"
                text="Claim ₹500 Bonus Now"
                variant="secondary"
                className="w-full sm:w-auto shadow-lg shadow-red-500/20 mx-auto"
              />
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
                <p className="text-3xl font-bold text-green-400">₹500</p>
                <p className="text-zinc-400 text-sm">Instant Bonus</p>
              </div>
              <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
                <p className="text-3xl font-bold text-blue-400">2 Min</p>
                <p className="text-zinc-400 text-sm">Fast Withdrawal</p>
              </div>
              <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
                <p className="text-3xl font-bold text-purple-400">99%</p>
                <p className="text-zinc-400 text-sm">Win Accuracy</p>
              </div>
              <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
                <p className="text-3xl font-bold text-amber-400">24×7</p>
                <p className="text-zinc-400 text-sm">Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Prediction Game Strategy Guide - SEO Content */}
      <section className="py-16 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-400">
              Color Prediction Game Winning Strategies & Tips
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-zinc-800 p-6 rounded-lg border border-amber-500/30">
                <h3 className="text-xl font-bold mb-4 text-amber-400">🎯 Pattern Analysis</h3>
                <p className="text-zinc-300 text-sm">
                  Study color patterns and trends. TC Lottery provides real-time charts and historical data to help you
                  make informed predictions with higher accuracy.
                </p>
              </div>

              <div className="bg-zinc-800 p-6 rounded-lg border border-green-500/30">
                <h3 className="text-xl font-bold mb-4 text-green-400">💰 Money Management</h3>
                <p className="text-zinc-300 text-sm">
                  Start with small bets (₹10-₹50). Never bet more than 10% of your balance in one game. Use our built-in
                  risk management tools for better control.
                </p>
              </div>

              <div className="bg-zinc-800 p-6 rounded-lg border border-blue-500/30">
                <h3 className="text-xl font-bold mb-4 text-blue-400">⏰ Timing Strategy</h3>
                <p className="text-zinc-300 text-sm">
                  Best winning times: 10 AM - 12 PM and 7 PM - 9 PM. Avoid peak hours when competition is high. Use our
                  timing alerts for optimal play.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-500/10 to-yellow-300/10 p-6 rounded-lg border border-amber-500/30">
              <h3 className="text-2xl font-bold mb-4 text-center text-amber-400">🏆 Pro Player Tips</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-zinc-300">
                  <li>
                    ✅ Always use referral code <strong>vCW7t38771</strong> for bonus
                  </li>
                  <li>✅ Join our Telegram for daily winning signals</li>
                  <li>✅ Withdraw profits regularly, don't reinvest everything</li>
                  <li>✅ Use TC Lottery's prediction tools and analytics</li>
                </ul>
                <ul className="space-y-2 text-zinc-300">
                  <li>❌ Don't chase losses with bigger bets</li>
                  <li>❌ Avoid emotional betting decisions</li>
                  <li>❌ Don't ignore bankroll management</li>
                  <li>❌ Never share your login credentials</li>
                </ul>
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
                Join 25K+ Winners on Telegram
              </div>
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#0088cc]">
                Get Daily Color Prediction Signals & Exclusive Bonuses
              </h2>
              <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
                Join India's largest color prediction community on Telegram! Get daily winning signals, exclusive gift
                codes, VIP tips from expert players, and instant customer support. Over 25,000 active members sharing
                strategies daily.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {/* Gift Coupons Card */}
              <div className="bg-zinc-800/50 p-6 rounded-lg border border-amber-500/30 hover:border-amber-500 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
                    <Gift className="h-6 w-6 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white">🎁 Daily Gift Codes & Bonuses</h3>
                </div>
                <p className="text-zinc-300 mb-6">
                  Get exclusive daily gift codes worth ₹100-₹1000, welcome bonuses, weekend specials, and VIP member
                  rewards. Never miss a bonus opportunity with our gift channel notifications!
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-zinc-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                    Daily gift codes worth ₹100-₹1000
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                    Exclusive welcome bonus up to ₹5000
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                    Weekend & festival special promotions
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                    VIP member exclusive cashback offers
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
                  <h3 className="text-xl font-bold text-white">👥 Expert Community & Signals</h3>
                </div>
                <p className="text-zinc-300 mb-6">
                  Connect with 25K+ active players, get daily winning signals from expert predictors, share strategies,
                  celebrate big wins, and receive instant support from our dedicated customer service team.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-zinc-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#0088cc] rounded-full"></div>
                    Daily winning signals from expert players
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#0088cc] rounded-full"></div>
                    Live color prediction tips & strategies
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#0088cc] rounded-full"></div>
                    Instant customer support in Hindi/English
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#0088cc] rounded-full"></div>
                    VIP tournaments & exclusive events
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

      {/* How Color Prediction Game Works - Detailed SEO Section */}
      <section className="py-16 bg-black">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How to Play Color Prediction Game on TC Lottery - Step by Step Guide
            </h2>
            <p className="text-zinc-400 max-w-3xl mx-auto text-lg">
              Learn how to play India's most popular color prediction game and start earning ₹5000+ daily. Complete
              beginner's guide with winning strategies and expert tips.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-2xl group-hover:scale-110 transition-transform">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-amber-400">Register with Bonus Code</h3>
              <p className="text-zinc-400 leading-relaxed">
                Create your TC Lottery account using exclusive referral code{" "}
                <span className="text-amber-500 font-bold">vCW7t38771</span>
                to get ₹500 instant bonus + 100% first deposit bonus
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-2xl group-hover:scale-110 transition-transform">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-green-400">Add Money Securely</h3>
              <p className="text-zinc-400 leading-relaxed">
                Deposit money using UPI, Net Banking, or Cards. Minimum deposit ₹100. All transactions are secured with
                256-bit SSL encryption
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-2xl group-hover:scale-110 transition-transform">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-400">Predict & Win</h3>
              <p className="text-zinc-400 leading-relaxed">
                Choose Red, Green, or Blue color. Place your bet (₹10 minimum). Wait 30 seconds for result. Win 2x to
                10x your bet amount!
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-2xl group-hover:scale-110 transition-transform">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-400">Instant Withdrawal</h3>
              <p className="text-zinc-400 leading-relaxed">
                Withdraw your winnings instantly! Fastest 2-minute withdrawal to your bank account, UPI, or digital
                wallet. No hidden charges
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories - SEO Testimonials */}
      <section className="py-16 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real Success Stories - TC Lottery Color Prediction Winners
            </h2>
            <p className="text-zinc-400 max-w-3xl mx-auto text-lg">
              Meet our biggest winners who are earning ₹10,000+ daily with TC Lottery color prediction game. Join
              thousands of successful players across India.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-amber-500 transition-colors">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-300 rounded-full flex items-center justify-center text-black font-bold text-2xl mr-4">
                  R
                </div>
                <div>
                  <h4 className="font-bold text-lg">Rajesh Kumar</h4>
                  <p className="text-amber-400 text-sm font-medium">Won ₹2,50,000 in 3 months</p>
                  <p className="text-zinc-500 text-xs">Mumbai, Maharashtra</p>
                </div>
              </div>
              <p className="text-zinc-300 leading-relaxed">
                "I started with just ₹500 using referral code{" "}
                <span className="text-amber-500 font-bold">vCW7t38771</span>. Within 3 months, I've won over ₹2.5 lakh!
                The color prediction accuracy is amazing, and withdrawals are super fast. TC Lottery changed my life
                completely!"
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-zinc-400 text-sm">Verified Winner</span>
              </div>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-amber-500 transition-colors">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-center text-black font-bold text-2xl mr-4">
                  P
                </div>
                <div>
                  <h4 className="font-bold text-lg">Priya Sharma</h4>
                  <p className="text-green-400 text-sm font-medium">Earning ₹15,000 daily</p>
                  <p className="text-zinc-500 text-xs">Delhi, NCR</p>
                </div>
              </div>
              <p className="text-zinc-300 leading-relaxed">
                "As a housewife, TC Lottery gave me financial independence. I earn ₹15,000 daily with color prediction
                game. The Telegram community helped me learn winning strategies. Best part is 24×7 support in Hindi!"
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-zinc-400 text-sm">Verified Winner</span>
              </div>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-amber-500 transition-colors">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-black font-bold text-2xl mr-4">
                  A
                </div>
                <div>
                  <h4 className="font-bold text-lg">Amit Patel</h4>
                  <p className="text-blue-400 text-sm font-medium">Won ₹5,00,000 jackpot</p>
                  <p className="text-zinc-500 text-xs">Ahmedabad, Gujarat</p>
                </div>
              </div>
              <p className="text-zinc-300 leading-relaxed">
                "Hit the ₹5 lakh jackpot on TC Lottery! The color prediction algorithms are incredibly accurate.
                Withdrawal was processed in just 2 minutes. Highly recommend using referral code for extra bonuses!"
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-zinc-400 text-sm">Verified Winner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - SEO Optimized */}
      <section className="py-16 bg-black">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why TC Lottery is India's Best Color Prediction Game Platform
            </h2>
            <p className="text-zinc-400 max-w-3xl mx-auto text-lg">
              Discover why over 5 lakh players choose TC Lottery for color prediction gaming. Advanced features, highest
              security, and fastest payouts in India.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-amber-500 transition-colors group">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-500/30 transition-colors">
                <Trophy className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-amber-400">99% Winning Accuracy</h3>
              <p className="text-zinc-400 leading-relaxed">
                Advanced AI algorithms provide 99% accurate color predictions. Our machine learning system analyzes
                patterns to give you the highest winning probability in India.
              </p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-green-500 transition-colors group">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
                <Zap className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-green-400">2-Minute Fast Withdrawal</h3>
              <p className="text-zinc-400 leading-relaxed">
                Fastest withdrawal system in India! Get your winnings in just 2 minutes directly to your bank account,
                UPI, or digital wallet. No processing delays, no hidden charges.
              </p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-blue-500 transition-colors group">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                <Gift className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-400">₹500 Welcome Bonus</h3>
              <p className="text-zinc-400 leading-relaxed">
                Get ₹500 instant bonus with referral code vCW7t38771 + 100% first deposit bonus up to ₹5000. Daily gift
                codes and exclusive VIP rewards for active players.
              </p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-purple-500 transition-colors group">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                <Clock className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-400">24×7 Customer Support</h3>
              <p className="text-zinc-400 leading-relaxed">
                Round-the-clock customer support in Hindi and English. Live chat, Telegram support, and dedicated
                helpline for instant resolution of all your queries.
              </p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-red-500 transition-colors group">
              <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors">
                <Shield className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-red-400">100% Safe & Secure</h3>
              <p className="text-zinc-400 leading-relaxed">
                Bank-level security with 256-bit SSL encryption. Licensed platform with secure payment gateways. Your
                money and personal data are completely protected.
              </p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-cyan-500 transition-colors group">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-cyan-500/30 transition-colors">
                <Users className="h-6 w-6 text-cyan-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-cyan-400">5+ Lakh Active Players</h3>
              <p className="text-zinc-400 leading-relaxed">
                Join India's largest color prediction community with 5+ lakh active players. Share strategies, get
                expert tips, and celebrate wins together on our Telegram channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section for SEO */}
      <section className="py-16 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-400">
              Frequently Asked Questions - Color Prediction Game
            </h2>

            <div className="space-y-6">
              <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
                <h3 className="text-xl font-bold mb-3 text-amber-400">What is TC Lottery Color Prediction Game?</h3>
                <p className="text-zinc-300 leading-relaxed">
                  TC Lottery is India's most trusted color prediction game where you predict colors (Red, Green, Blue)
                  to win real money. With 99% accuracy algorithms and fastest 2-minute withdrawals, it's the preferred
                  choice of 5+ lakh players across India.
                </p>
              </div>

              <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
                <h3 className="text-xl font-bold mb-3 text-green-400">How to use referral code vCW7t38771?</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Enter referral code <strong>vCW7t38771</strong> during registration to get ₹500 instant bonus + 100%
                  first deposit bonus up to ₹5000. This exclusive code also gives you access to VIP benefits and daily
                  gift codes.
                </p>
              </div>

              <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
                <h3 className="text-xl font-bold mb-3 text-blue-400">How fast are withdrawals on TC Lottery?</h3>
                <p className="text-zinc-300 leading-relaxed">
                  TC Lottery offers India's fastest withdrawals - your winnings are processed within 2 minutes directly
                  to your bank account, UPI, or digital wallet. No processing fees, no hidden charges, completely
                  transparent.
                </p>
              </div>

              <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
                <h3 className="text-xl font-bold mb-3 text-purple-400">Is TC Lottery safe and legal in India?</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Yes, TC Lottery is completely safe and legal. We use 256-bit SSL encryption for security, licensed
                  payment gateways, and comply with all Indian gaming regulations. Over 5 lakh players trust us with
                  their money.
                </p>
              </div>

              <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
                <h3 className="text-xl font-bold mb-3 text-red-400">What is the minimum bet amount?</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Minimum bet amount is just ₹10, making it accessible for everyone. You can win 2x to 10x your bet
                  amount depending on the color outcome. Maximum bet limit is ₹10,000 per game for high-roller players.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - SEO Optimized */}
      <section className="py-20 bg-gradient-to-b from-black to-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-400 text-black px-4 py-2 rounded-full text-sm font-medium">
              <Award className="h-4 w-4" />
              Join 5+ Lakh Winners Today
            </div>
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-400">
              Start Earning ₹10,000 Daily with India's Best Color Prediction Game
            </h2>
            <p className="text-zinc-400 text-lg max-w-3xl leading-relaxed">
              Don't miss out on India's most profitable color prediction opportunity! Join TC Lottery today with
              exclusive referral code
              <strong> vCW7t38771</strong> and get ₹500 instant bonus. With 99% winning accuracy, 2-minute withdrawals,
              and 24×7 support, your success is guaranteed. Over 5 lakh players are already earning - be the next
              success story!
            </p>

            {/* Enhanced referral code display */}
            <div className="bg-gradient-to-r from-amber-500 to-yellow-300 text-black px-8 py-4 rounded-lg font-bold text-xl animate-float shadow-lg">
              🎁 Exclusive Referral Code:{" "}
              <span className="text-2xl md:text-3xl tracking-wider font-black">vCW7t38771</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <AnimatedRegisterButton size="lg" text="Claim ₹500 Bonus" variant="primary" className="flex-1" />
              <Button
                size="lg"
                variant="outline"
                className="border-amber-500 text-amber-500 hover:bg-amber-500/10 flex-1 bg-transparent"
                onClick={() => window.open("https://www.tcvvip12.com/#/login", "_blank")}
              >
                Login to Play
              </Button>
            </div>

            <p className="text-zinc-500 text-sm max-w-2xl">
              ⚡ Limited time offer: First 1000 users get extra ₹200 bonus | 🔒 100% Safe & Secure | ⏱️ 2-Minute
              Withdrawals | 🏆 99% Win Rate
            </p>
          </div>
        </div>
      </section>

      {/* Sticky bottom registration button */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-zinc-900 to-black border-t border-amber-500/30 p-3 z-50 md:hidden">
        <AnimatedRegisterButton
          size="default"
          text="Get ₹500 Bonus"
          variant="secondary"
          className="w-full shadow-lg shadow-amber-500/20"
        />
      </div>

      <Footer />
    </div>
  )
}
