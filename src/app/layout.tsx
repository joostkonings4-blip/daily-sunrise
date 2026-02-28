import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SessionProvider from "@/components/SessionProvider";

export const metadata: Metadata = {
  title:       "Daily Sunrise — The Same Life, a Different Perspective",
  description: "Real health lives inside you. Slow down, breathe, and discover the beauty of the present moment. A slow living journal by Daily Sunrise.",
  keywords:    ["slow living", "health", "mindfulness", "sunrise", "daily sunrise", "wellness"],
  openGraph: {
    title:       "Daily Sunrise",
    description: "The Same Life — a different perspective. #slowliving",
    url:         "https://www.dailysunrise.com",
    siteName:    "Daily Sunrise",
    type:        "website",
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
        <SessionProvider>
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
