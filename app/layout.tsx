import "./globals.css";
import CTA from "@/components/CTA";
import { GoogleAnalytics } from "@next/third-parties/google";
import { formatMetadata, formatTitle } from "@/lib/helpers";
import { description, url } from "@/lib/constants";
import { Space_Grotesk, Inter } from "next/font/google";
import Clock from "@/components/Clock";
import Weather from "@/components/Weather";
import TopNavigation from "@/components/TopNavigation";
import Script from "next/script";

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
      <Script
        nowprocket
        nitro-exclude
        type={"text/javascript"}
        id={"sa-dynamic-optimization"}
        data-uuid={"c1ff90ad-79f8-402b-9b17-9819ee969269"}
        src={
          "data:text/javascript;base64,dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoInNjcmlwdCIpO3NjcmlwdC5zZXRBdHRyaWJ1dGUoIm5vd3Byb2NrZXQiLCAiIik7c2NyaXB0LnNldEF0dHJpYnV0ZSgibml0cm8tZXhjbHVkZSIsICIiKTtzY3JpcHQuc3JjID0gImh0dHBzOi8vZGFzaGJvYXJkLnNlYXJjaGF0bGFzLmNvbS9zY3JpcHRzL2R5bmFtaWNfb3B0aW1pemF0aW9uLmpzIjtzY3JpcHQuZGF0YXNldC51dWlkID0gImMxZmY5MGFkLTc5ZjgtNDAyYi05YjE3LTk4MTllZTk2OTI2OSI7c2NyaXB0LmlkID0gInNhLWR5bmFtaWMtb3B0aW1pemF0aW9uLWxvYWRlciI7ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpOw=="
        }
      />
    </html>
  );
}
