import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MotionProvider } from "@/components/motion-provider";
import { NoiseOverlay } from "@/components/ui/noise-overlay";
import { ScrollToTop } from "@/components/scroll-to-top";
import { DebugPanel } from "@/components/debug-panel";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Reyhan | Self-taught Developer & Security Enthusiast",
  description:
    "Self-taught developer passionate about programming, cybersecurity, and prompt engineering. Building tools and exploring the intersection of AI and security.",
  keywords: [
    "self-taught developer",
    "security enthusiast",
    "prompt engineering",
    "cybersecurity",
    "portfolio",
    "indonesia",
  ],
  authors: [{ name: "Muhammad Reyhan" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    title: "Muhammad Reyhan | Self-taught Developer & Security Enthusiast",
    description:
      "Self-taught developer passionate about programming, cybersecurity, and prompt engineering.",
    siteName: "Muhammad Reyhan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Reyhan | Self-taught Developer & Security Enthusiast",
    description:
      "Self-taught developer passionate about programming, cybersecurity, and prompt engineering.",
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
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col">
        <MotionProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTop />
          <DebugPanel />
        </MotionProvider>
        <NoiseOverlay />
      </body>
    </html>
  );
}
