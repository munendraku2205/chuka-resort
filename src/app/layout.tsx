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

/* Critical for mobile rendering — maximumScale:5 allows user zoom */
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
  title: {
    default: `${SITE_NAME} | Luxury Eco Resort Near Pilibhit Tiger Reserve`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Chuka Resort", "Eco Resort", "Pilibhit Tiger Reserve", "Luxury Resort",
    "Jungle Safari", "Weekend Getaway", "Nature Resort", "Swimming Pool", "DJ Night", "Bonfire",
  ],
  openGraph: {
    title: `${SITE_NAME} | Luxury Eco Resort`,
    description: SITE_DESCRIPTION,
    type: "website",
    siteName: SITE_NAME,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Skip-to-content for keyboard / screen-reader users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-green-700 focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold focus:shadow-lg"
        >
          Skip to main content
        </a>

        <Navbar />

        {/* pt-14 / pt-16 clears fixed header */}
        <main id="main-content" className="pt-14 md:pt-16 overflow-x-clip" tabIndex={-1}>
          {children}
        </main>

        <Footer />
        <BottomNav />
        <FloatingBookButton />
      </body>
    </html>
  );
}
