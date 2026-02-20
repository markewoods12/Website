import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans, DM_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.markewoods.com"),
  title: {
    default: "Mark Woods — Chief Product Officer",
    template: "%s | Mark Woods",
  },
  description:
    "Mark Woods — Chief Product Officer at Bullish. Leading product strategy across digital asset exchange, CoinDesk Media, CoinDesk Data, and CoinDesk Indices.",
  openGraph: {
    title: "Mark Woods — Chief Product Officer",
    description:
      "Leading product strategy at the intersection of finance and technology. CPO @ Bullish.",
    url: "https://www.markewoods.com",
    siteName: "Mark Woods",
    images: [
      {
        url: "/WoodsHeadshots-24.jpg",
        width: 1200,
        height: 630,
        alt: "Mark Woods — Chief Product Officer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@markewoods12",
    creator: "@markewoods12",
    title: "Mark Woods — Chief Product Officer",
    description:
      "CPO @ Bullish. Leading product at the intersection of finance and technology.",
    images: ["/WoodsHeadshots-24.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${jakartaSans.variable} ${dmMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
