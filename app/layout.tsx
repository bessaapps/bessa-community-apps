import "./globals.css";
import CTA from "@/components/CTA";
import { GoogleAnalytics } from "@next/third-parties/google";
import { formatMetadata, formatTitle } from "@/lib/helpers";
import { description, url } from "@/lib/constants";
import { Space_Grotesk, Inter } from "next/font/google";
import Clock from "@/components/Clock";
import Weather from "@/components/Weather";

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
        {children}
        <CTA />
        <Clock />
        <Weather />
      </body>
      {process.env.NODE_ENV !== "development" && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
      )}
    </html>
  );
}
