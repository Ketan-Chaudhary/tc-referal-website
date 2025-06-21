import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "TC Lottery - Best Color Prediction Game | Win Unlimited Money",
    template: "%s | TC Lottery",
  },
  description:
    "Welcome to the TC Lottery official website. Play the best Color Prediction game with us and win unlimited money. 24×7 Support and fast withdrawals are our keys to your trust. Login or Register now and get sign-up bonus.",
  keywords: [
    "tc lottery",
    "color prediction game",
    "vCW7t38771",
    "referral code",
    "sign up bonus",
    "fast withdrawal",
    "24x7 support",
    "win money online",
    "lottery games",
    "prediction games",
    "online gaming",
    "instant payout",
    "secure gaming",
    "mobile lottery",
    "indian lottery",
    "rupees winning",
    "tc lottery",
    "vCW7t38771",
    "account",
    "active",
    "amazing",
    "android",
    "anytime",
    "best",
    "blog",
    "bonus",
    "bonuses",
    "card",
    "casino",
    "celebrate",
    "choose",
    "claim",
    "code",
    "community",
    "conditions",
    "connect",
    "contact",
    "copy",
    "coupons",
    "customer",
    "days",
    "deposit",
    "deposits",
    "download",
    "earn",
    "exciting",
    "exclusive",
    "experience",
    "expires",
    "friend",
    "friends",
    "games",
    "gaming",
    "gift",
    "helped",
    "home",
    "instant",
    "instantly",
    "john",
    "join",
    "lottery",
    "offer",
    "opportunities",
    "payouts",
    "platform",
    "play",
    "players",
    "policy",
    "premier",
    "privacy",
    "referral",
    "register",
    "registration",
    "reload",
    "reward",
    "rewards",
    "secure",
    "service",
    "share",
    "sign",
    "simple",
    "special",
    "start",
    "strategies",
    "style",
    "support",
    "tclottery",
    "telegram",
    "terms",
    "thousands",
    "time",
    "today",
    "toggle",
    "unlock",
    "updates",
    "using",
    "variety",
    "weekend",
    "welcome",
    "winner",
    "winners",
    "winning",
    "winnings",
    "wins",
    "works",
    "colour games",
    "daily gift codes",
    "mobile lottery app",
    "lottery bonuses",
    "referral bonuses",
  ].join(", "),
  authors: [{ name: "TC Lottery" }],
  creator: "TC Lottery",
  publisher: "TC Lottery",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.tclotteryvip.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.tclotteryvip.com",
    title: "TC Lottery - Best Color Prediction Game | Win Unlimited Money",
    description:
      "Welcome to the TC Lottery official website. Play the best Color Prediction game with us and win unlimited money. 24×7 Support and fast withdrawals.",
    siteName: "TC Lottery",
    images: [
      {
        url: "/tclottery-banner.webp",
        width: 1200,
        height: 630,
        alt: "TC Lottery - Best Color Prediction Game",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TC Lottery - Best Color Prediction Game | Win Unlimited Money",
    description:
      "Welcome to the TC Lottery official website. Play the best Color Prediction game with us and win unlimited money. 24×7 Support and fast withdrawals.",
    images: ["/tclottery-banner.webp"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  other: {
    "referral-code": "vCW7t38771",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="theme-color" content="#F59E0B" />
        <meta name="msapplication-TileColor" content="#F59E0B" />
        <meta name="apple-mobile-web-app-title" content="TC Lottery" />
        <meta name="application-name" content="TC Lottery" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.tclotteryvip.com" />
        <link rel="preload" href="/tclottery-banner.webp" as="image" />
        <link rel="preload" href="/favicon.ico" as="image" />

        {/* Enhanced Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "TC Lottery",
                alternateName: "TC LOTTERY",
                url: "https://www.tclotteryvip.com",
                description:
                  "Welcome to the TC Lottery official website. Play the best Color Prediction game with us and win unlimited money. 24×7 Support and fast withdrawals are our keys to your trust. Login or Register now and get sign-up bonus.",
                potentialAction: [
                  {
                    "@type": "RegisterAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate:
                        "https://www.tclotteryvip.com/register?ref=vCW7t38771",
                    },
                    description:
                      "Register on TC Lottery with referral code vCW7t38771",
                  },
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "TC Lottery",
                url: "https://www.tclotteryvip.com",
                logo: "https://www.tclotteryvip.com/favicon.ico",
                description:
                  "Premier online lottery platform offering exciting games and bonuses",
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "customer service",
                  availableLanguage: ["English"],
                  url: "https://t.me/systummearninig",
                },
              },
            ]),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
