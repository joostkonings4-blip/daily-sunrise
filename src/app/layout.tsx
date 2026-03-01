import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import NewsletterPopup from "@/components/NewsletterPopup";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dailysunrise.com"),
  title: {
    default: "Daily Sunrise — The Same Life, a Different Perspective",
    template: "%s | Daily Sunrise",
  },
  description: "Real health lives inside you. Slow down, breathe, and discover the beauty of the present moment. A slow living journal by Daily Sunrise.",
  keywords: ["slow living", "health", "mindfulness", "sunrise", "daily sunrise", "wellness", "morning routine", "intentional living"],
  openGraph: {
    title: "Daily Sunrise",
    description: "The Same Life — a different perspective. #slowliving",
    url: "https://www.dailysunrise.com",
    siteName: "Daily Sunrise",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Sunrise",
    description: "The Same Life — a different perspective. #slowliving",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <CustomCursor />
          <Navbar />
          <NewsletterPopup />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
