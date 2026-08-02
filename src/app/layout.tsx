import type { Metadata, Viewport } from "next";
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
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/* ── Viewport: crucial for mobile rendering ── */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdfcfa" },
    { media: "(prefers-color-scheme: dark)",  color: "#15803d" },
  ],
};

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
  /* Open Graph for social sharing */
  openGraph: {
    title: `${SITE_NAME} | Luxury Eco Resort`,
    description: SITE_DESCRIPTION,
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Sticky top navigation */}
        <Navbar />

        {/* Page content — pt accounts for fixed navbar height */}
        <main className="pt-14 md:pt-16 overflow-x-clip">{children}</main>

        <Footer />

        {/* Mobile-only navigation */}
        <BottomNav />
        <FloatingBookButton />
      </body>
    </html>
  );
}
