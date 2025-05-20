import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "TC Lottery - Win Big with Referral Code vCW7t38771 | Register Now",
  description:
    "Join TC Lottery and win big! Use referral code vCW7t38771 for exclusive bonuses. Register today for exciting prizes and instant rewards.",
  keywords:
    "tc lottery, vCW7t38771, tc lottery referral code, tc lottery app, tc lottery download, tc lottery login, tc lottery coupon, tc lottery telegram, tc lottery manager referral code, tc lottery customer care, tc lottery sign-up bonus, tc lottery promo code, tc lottery game download",
  openGraph: {
    title: "TC Lottery - Win Big with Referral Code vCW7t38771",
    description: "Join TC Lottery, use referral code vCW7t38771 for exclusive bonuses. Register and win big!",
    url: "https://tclottery.com",
    siteName: "TC Lottery",
    images: [
      {
        url: "https://tclottery.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TC Lottery - Win Big with Referral Code vCW7t38771",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TC Lottery - Win Big with Referral Code vCW7t38771",
    description: "Join TC Lottery, use referral code vCW7t38771 for exclusive bonuses. Register and win big!",
    images: ["https://tclottery.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://tclottery.com",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="referral-code" content="vCW7t38771" />
        <link rel="canonical" href="https://tclottery.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "TC Lottery",
              url: "https://tclottery.com",
              description: "Join TC Lottery and win big using referral code vCW7t38771. Register for amazing bonuses!",
              potentialAction: {
                "@type": "RegisterAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://tclottery.com/register?ref=vCW7t38771",
                },
                description: "Register on TC Lottery with referral code vCW7t38771",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
