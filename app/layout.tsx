import "./globals.css";
import CTA from "@/components/CTA";
import { GoogleTagManager } from "@next/third-parties/google";
import { formatMetadata, formatTitle } from "@/lib/helpers";
import { description, url } from "@/lib/constants";
import { Space_Grotesk, Inter } from "next/font/google";
import Clock from "@/components/Clock";
import Weather from "@/components/Weather";
import TopNavigation from "@/components/TopNavigation";

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
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
      )}
    </html>
  );
}
