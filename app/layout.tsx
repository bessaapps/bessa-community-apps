import "./globals.css";
import CTA from "@/components/CTA";
import { GoogleAnalytics } from "@next/third-parties/google";
import { formatMetadata, formatTitle } from "@/lib/helpers";
import { description, url } from "@/lib/constants";
import { Space_Grotesk, Inter } from "next/font/google";
import Clock from "@/components/Clock";
import Weather from "@/components/Weather";
import TopNavigation from "@/components/TopNavigation";

/* SEO */

// Keyword: custom mobile app development services, KD: 4, SV: 2K
// Supporting keyword: mobile app development services, KD: 26, SV: 9.8K
// Supporting keyword: custom application development, KD: 9, SV: 2.9K

const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk" });

const inter = Inter({ variable: "--font-inter" });

export const metadata = formatMetadata({
  metadataTitle: formatTitle(""),
  metadataDescription: description,
  path: url
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"en"}>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        <div className={"h-full max-h-screen grid grid-rows-[auto_1fr]"}>
          <TopNavigation />
          <main>
            <div className={"overflow-y-scroll"}>
              {children}
              <CTA />
            </div>
          </main>
        </div>
        <Clock />
        <Weather />
      </body>
      {process.env.NODE_ENV !== "development" && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
      )}
    </html>
  );
}
