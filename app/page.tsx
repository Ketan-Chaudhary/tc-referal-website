import Image from "next/image";
import { Gift, Link, Smartphone, Trophy, Users, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import GiftCouponCard from "@/components/gift-coupon-card";
import TelegramCTA from "@/components/telegram-cta";
import AnimatedRegisterButton from "@/components/animated-register-button";
import SEOSchema from "@/components/seo-schema";

export const metadata = {
  title: "TC Lottery - Win Big with Referral Code vCW7t38771 | Home",
  description:
    "Join TC Lottery today and win big! Use referral code vCW7t38771 for exclusive bonuses and rewards. Register now for instant access to exciting lottery games.",
  keywords:
    "tc lottery, vCW7t38771, tc lottery referral code, win big, lottery games, casino games, referral bonus",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEOSchema />
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="\tclottery-banner.webp"
            alt="TC Lottery casino background with referral code vCW7t38771"
            fill
            className="object-cover"
            priority
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
              Register using referral code{" "}
              <span className="text-amber-500 font-bold">vCW7t38771</span> for
              exclusive bonuses and join thousands of winners on the premier
              casino-style lottery platform.
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
        <div className="absolute inset-0 bg-cover bg-center opacity-20 z-0"></div>

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
              Sign up today using our exclusive referral code to receive special
              bonuses and start your winning journey with TC Lottery.
            </p>

            {/* Highlighted referral code section */}
            <div className="mb-8 p-2 rounded-lg bg-gradient-to-r from-amber-500/20 to-yellow-300/20 max-w-md mx-auto">
              <div className="text-center p-4 border-2 border-dashed border-amber-500 rounded-lg">
                <p className="text-zinc-400 text-sm uppercase tracking-wider">
                  Your Exclusive Referral Code
                </p>
                <div className="text-3xl md:text-5xl font-black text-amber-500 my-2 tracking-wider animate-pulse-glow">
                  vCW7t38771
                </div>
                <p className="text-zinc-300 text-xs">
                  Use this code during registration for maximum bonuses
                </p>
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

      {/* Gift Coupon Section */}
      <section className="py-16 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Exclusive Gift Coupons
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Unlock special rewards and bonuses with our exclusive gift coupons
              when you register or refer friends
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GiftCouponCard
              title="Welcome Bonus"
              code="WELCOME100"
              description="Get 100% bonus on your first deposit up to $100"
              expiryDays={7}
            />
            <GiftCouponCard
              title="Referral Reward"
              code="REFER50"
              description="Earn a $50 bonus when you refer a friend who makes their first deposit"
              expiryDays={30}
            />
            <GiftCouponCard
              title="Weekend Special"
              code="WEEKEND25"
              description="Get a 25% reload bonus every weekend on deposits over $20"
              expiryDays={2}
            />
          </div>
          <div className="text-center mt-10">
            <a
              href="https://t.me/tclotteryvipgroup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-amber-500 text-amber-500 hover:bg-amber-500/10"
              >
                Join Telegram for Gift Card
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Telegram Community Section */}
      <TelegramCTA />

      {/* How It Works Section */}
      <section className="py-16 bg-black">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              How TC Lottery Works
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Follow these simple steps to start playing and winning with TC
              Lottery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Register</h3>
              <p className="text-zinc-400">
                Create an account using referral code{" "}
                <span className="text-amber-500 font-bold">vCW7t38771</span> for
                bonus rewards
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Deposit</h3>
              <p className="text-zinc-400">
                Fund your account using one of our secure payment methods
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Play</h3>
              <p className="text-zinc-400">
                Choose from our variety of exciting lottery and casino games
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Win</h3>
              <p className="text-zinc-400">
                Collect your winnings instantly and withdraw to your account
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="py-16 bg-gradient-to-r from-zinc-900 to-black">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Download the TC Lottery App
              </h2>
              <p className="text-zinc-400 mb-6">
                Get the TC Lottery app on your mobile device for the best gaming
                experience. Play anytime, anywhere and never miss out on winning
                opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-zinc-800 hover:bg-zinc-700 text-white flex items-center gap-2">
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
                    <path d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5"></path>
                    <path d="M16 19h6"></path>
                    <path d="M19 16v6"></path>
                  </svg>
                  Download for Android
                </Button>
                <Button className="bg-zinc-800 hover:bg-zinc-700 text-white flex items-center gap-2">
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
                    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                    <path d="M10 2c1 .5 2 2 2 5"></path>
                  </svg>
                  Download for iOS
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-amber-500/20 rounded-full blur-3xl opacity-30"></div>
              <Image
                src="/tcimage.jpeg"
                alt="TC Lottery Mobile App"
                width={300}
                height={600}
                className="mx-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              What Our Winners Say
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Hear from our community of winners who have experienced the thrill
              of TC Lottery
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
                "I couldn't believe it when I won $5,000 on my first week using
                TC Lottery! The registration process was simple, and using the
                referral code{" "}
                <span className="text-amber-500 font-bold">vCW7t38771</span>{" "}
                gave me extra bonuses to play with."
              </p>
              <div className="flex mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#F59E0B"
                  className="h-5 w-5"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#F59E0B"
                  className="h-5 w-5"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#F59E0B"
                  className="h-5 w-5"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#F59E0B"
                  className="h-5 w-5"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#F59E0B"
                  className="h-5 w-5"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
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
                "The gift coupons I received after registration helped me win
                big! TC Lottery has the best odds and most exciting games. I've
                recommended it to all my friends with my referral code."
              </p>
              <div className="flex mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#F59E0B"
                  className="h-5 w-5"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#F59E0B"
                  className="h-5 w-5"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#F59E0B"
                  className="h-5 w-5"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#F59E0B"
                  className="h-5 w-5"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#F59E0B"
                  className="h-5 w-5"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
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
                "The Telegram community is amazing! I got tips from other
                players that helped me win $25,000. The instant payout feature
                meant I received my winnings right away without any hassle."
              </p>
              <div className="flex mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#F59E0B"
                  className="h-5 w-5"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#F59E0B"
                  className="h-5 w-5"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#F59E0B"
                  className="h-5 w-5"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#F59E0B"
                  className="h-5 w-5"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#F59E0B"
                  className="h-5 w-5"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose TC Lottery
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Experience the best casino-style lottery platform with amazing
              features and opportunities to win big
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-amber-500 transition-colors">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Huge Winnings</h3>
              <p className="text-zinc-400">
                Win big with our daily jackpots and exciting lottery games with
                high odds of winning.
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-amber-500 transition-colors">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4">
                <Gift className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Gift Coupons</h3>
              <p className="text-zinc-400">
                Receive exclusive gift coupons when you register, refer friends,
                or participate in special events.
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-amber-500 transition-colors">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Referral Bonuses</h3>
              <p className="text-zinc-400">
                Use a manager referral code to get additional bonuses and
                rewards when you sign up.
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-amber-500 transition-colors">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4">
                <Smartphone className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Mobile App</h3>
              <p className="text-zinc-400">
                Play anytime, anywhere with our user-friendly mobile app
                available for iOS and Android.
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-amber-500 transition-colors">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Instant Payouts</h3>
              <p className="text-zinc-400">
                Enjoy fast and secure payouts directly to your account with no
                delays.
              </p>
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
                Choose from a variety of exciting Color Prediction, Poker,
                Rummy, Slots, Sports Games, and more games.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Winning?
            </h2>
            <p className="text-zinc-400 text-lg">
              Join thousands of winners on TC Lottery today. Register using our
              exclusive referral code, claim your gift coupons, and start your
              winning journey.
            </p>

            {/* Floating referral code */}
            <div className="bg-gradient-to-r from-amber-500 to-yellow-300 text-black px-6 py-3 rounded-lg font-bold text-lg animate-float">
              Use Referral Code:{" "}
              <span className="text-xl md:text-2xl tracking-wider">
                vCW7t38771
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <AnimatedRegisterButton
                size="lg"
                text="Register Now"
                variant="primary"
              />
              <Button
                size="lg"
                variant="outline"
                className="border-amber-500 text-amber-500 hover:bg-amber-500/10"
              >
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
  );
}
