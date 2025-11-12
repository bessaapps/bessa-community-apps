import "./globals.css";
import CTA from "@/components/CTA";
import { GoogleAnalytics } from "@next/third-parties/google";
import { formatMetadata, formatTitle } from "@/lib/helpers";
import { description, url } from "@/lib/constants";
import { Raleway, Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"]
});

const raleway = Raleway({ variable: "--font-raleway", subsets: ["latin"] });

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
      <body className={`${workSans.variable} ${raleway.variable} antialiased`}>
        {children}
        <CTA />
      </body>
      {process.env.NODE_ENV !== "development" && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
      )}
    </html>
  );
}
