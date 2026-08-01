import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import BottomNav from "@/components/navigation/BottomNav";
import FloatingBookButton from "@/components/navigation/FloatingBookButton";
import Footer from "@/components/footer/Footer";
import { SITE_NAME, SITE_DESCRIPTION } from "@/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${SITE_NAME} | Luxury Eco Resort Near Pilibhit Tiger Reserve`,
  description: SITE_DESCRIPTION,
  keywords: [
    "Chuka Resort",
    "Eco Resort",
    "Pilibhit Tiger Reserve",
    "Luxury Resort",
    "Jungle Safari",
    "Weekend Getaway",
    "Nature Resort",
    "Swimming Pool",
    "DJ Night",
    "Bonfire",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BottomNav />
        <FloatingBookButton />
      </body>
    </html>
  );
}
