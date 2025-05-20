export default function SEOSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([
          // Website Schema
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "TC Lottery",
            url: "https://tclottery.com",
            description:
              "Join TC Lottery and win big using referral code vCW7t38771. Register for amazing bonuses!",
            potentialAction: {
              "@type": "RegisterAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://tclottery.com/register?ref=vCW7t38771",
              },
              description:
                "Register on TC Lottery with referral code vCW7t38771",
            },
          },
          // Organization Schema
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "TC Lottery",
            url: "https://tclottery.com",
            logo: "https://tclottery.com/logo.png",
            sameAs: [
              "https://t.me/tclottery",
              "https://facebook.com/tclottery",
              "https://twitter.com/tclottery",
              "https://instagram.com/tclottery",
              "https://thetclottery.com",
              "https://tclottery.ong/",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-800-555-5555",
              contactType: "customer service",
              availableLanguage: ["English"],
            },
          },
          // Offer Schema
          {
            "@context": "https://schema.org",
            "@type": "Offer",
            name: "TC Lottery Registration Bonus",
            description:
              "Register with referral code vCW7t38771 and get 100% welcome bonus",
            priceCurrency: "USD",
            price: "0",
            url: "https://tclottery.com/register?ref=vCW7t38771",
            availability: "https://schema.org/InStock",
            seller: {
              "@type": "Organization",
              name: "TC Lottery",
            },
          },
        ]),
      }}
    />
  );
}
