import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:
      "TC Lottery - India's #1 Color Prediction Game | Win ₹10 Lakh Daily with vCW7t38771",
    template: "%s | TC Lottery - Best Color Prediction Game India",
  },
  description:
    "Play India's most trusted Color Prediction Game at TC Lottery! Win up to ₹10 Lakh daily with 99% winning accuracy. Use referral code vCW7t38771 for ₹500 instant bonus. Fast 2-minute withdrawals, 24×7 support. Join 5 lakh+ winners today!",
  keywords: [
    // Primary Keywords
    "color prediction game",
    "colour prediction game india",
    "tc lottery",
    "online lottery india",
    "color trading game",
    "prediction game app",
    "win money online india",

    // Long-tail Keywords
    "best color prediction game india",
    "color prediction game with fast withdrawal",
    "tc lottery referral code vCW7t38771",
    "color prediction game 24x7 support",
    "online color prediction earning",
    "color prediction game real money",
    "indian color prediction platform",

    // LSI Keywords
    "colour chart prediction",
    "red green blue prediction",
    "color forecasting game",
    "live color trading",
    "color betting strategy",
    "color prediction tips",
    "color prediction signals",
    "color prediction patterns",

    // Location-based Keywords
    "color prediction game mumbai",
    "color prediction game delhi",
    "color prediction game bangalore",
    "color prediction game hyderabad",
    "color prediction game chennai",
    "color prediction game kolkata",

    // Action Keywords
    "play color prediction game",
    "download color prediction app",
    "color prediction game registration",
    "color prediction game login",
    "color prediction game bonus",
    "color prediction game withdrawal",

    // Referral & Bonus Keywords
    "vCW7t38771 referral code",
    "tc lottery bonus code",
    "color prediction signup bonus",
    "instant withdrawal color game",
    "fast payout prediction game",

    // Trust & Security Keywords
    "safe color prediction game",
    "trusted lottery platform india",
    "secure color prediction",
    "licensed lottery game india",
    "verified color prediction app",
  ].join(", "),
  authors: [{ name: "TC Lottery India" }],
  creator: "TC Lottery",
  publisher: "TC Lottery India",
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
    locale: "en_IN",
    url: "https://www.tclotteryvip.com",
    title: "TC Lottery - India's #1 Color Prediction Game | Win ₹10 Lakh Daily",
    description:
      "🎯 Play India's most trusted Color Prediction Game! Win up to ₹10 Lakh daily with 99% accuracy. Use code vCW7t38771 for ₹500 bonus. Fast withdrawals in 2 minutes!",
    siteName: "TC Lottery India",
    images: [
      {
        url: "/tclottery-banner.webp",
        width: 1200,
        height: 630,
        alt: "TC Lottery India - Best Color Prediction Game with Fast Withdrawal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TC Lottery - India's #1 Color Prediction Game | Win ₹10 Lakh Daily",
    description:
      "🎯 Play India's most trusted Color Prediction Game! Win up to ₹10 Lakh daily. Use code vCW7t38771 for ₹500 bonus. Fast 2-minute withdrawals!",
    images: ["/tclottery-banner.webp"],
    site: "@tclotteryindia",
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
    "geo.region": "IN",
    "geo.country": "India",
    language: "English",
    "target-audience": "India",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="theme-color" content="#F59E0B" />
        <meta name="msapplication-TileColor" content="#F59E0B" />
        <meta name="apple-mobile-web-app-title" content="TC Lottery India" />
        <meta name="application-name" content="TC Lottery" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.country" content="India" />
        <meta name="language" content="English" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="canonical" href="https://tclotteryvip.com" />
        <link rel="preload" href="/tclottery-banner.webp" as="image" />
        <link rel="preload" href="/favicon.ico" as="image" />

        {/* Enhanced Schema Markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "TC Lottery India",
                alternateName: ["TC Lottery", "Color Prediction Game India"],
                url: "https://www.tclotteryvip.com",
                description:
                  "India's most trusted Color Prediction Game platform. Win up to ₹10 Lakh daily with 99% winning accuracy. Fast 2-minute withdrawals, 24×7 support.",
                inLanguage: "en-IN",
                potentialAction: [
                  {
                    "@type": "RegisterAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate:
                        "https://www.tclotteryvip.com/register?ref=vCW7t38771",
                    },
                    description:
                      "Register for TC Lottery Color Prediction Game with referral code vCW7t38771",
                  },
                  {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate:
                        "https://www.tclotteryvip.com/search?q={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
                  },
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "TC Lottery India",
                url: "https://www.tclotteryvip.com",
                logo: "https://www.tclotteryvip.com/favicon.ico",
                description:
                  "India's premier Color Prediction Game platform with fast withdrawals and 24×7 support",
                areaServed: "India",
                serviceType: "Online Gaming Platform",
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "customer service",
                  availableLanguage: ["English", "Hindi"],
                  url: "https://t.me/systummearninig",
                  hoursAvailable: "24/7",
                },
                sameAs: ["https://t.me/systummearninig"],
              },
              {
                "@context": "https://schema.org",
                "@type": "GameServer",
                name: "TC Lottery Color Prediction Game",
                description:
                  "Play India's most accurate Color Prediction Game with 99% winning rate",
                game: {
                  "@type": "VideoGame",
                  name: "Color Prediction Game",
                  genre: "Prediction Game",
                  gamePlatform: ["Web Browser", "Mobile"],
                  operatingSystem: ["Android", "iOS", "Windows"],
                },
                offers: {
                  "@type": "Offer",
                  name: "Sign-up Bonus",
                  description:
                    "Get ₹500 instant bonus with referral code vCW7t38771",
                  price: "0",
                  priceCurrency: "INR",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is TC Lottery Color Prediction Game?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "TC Lottery is India's most trusted Color Prediction Game where you predict colors (Red, Green, Blue) to win real money. With 99% accuracy rate and fast 2-minute withdrawals.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How to use referral code vCW7t38771?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Enter referral code vCW7t38771 during registration to get ₹500 instant bonus and additional benefits on TC Lottery platform.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How fast are withdrawals on TC Lottery?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "TC Lottery offers fastest withdrawals in India - your winnings are processed within 2 minutes directly to your bank account or UPI.",
                    },
                  },
                ],
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
      </body>
    </html>
  );
}
