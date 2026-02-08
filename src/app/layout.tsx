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
  title: "Alex Chen | Systems Builder & Security Researcher",
  description:
    "Building secure, scalable systems at the intersection of software engineering and cybersecurity. Full-stack developer, security researcher, and DevOps engineer.",
  keywords: [
    "software engineer",
    "security researcher",
    "full-stack developer",
    "cybersecurity",
    "devops",
    "portfolio",
  ],
  authors: [{ name: "Alex Chen" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Alex Chen | Systems Builder & Security Researcher",
    description:
      "Building secure, scalable systems at the intersection of software engineering and cybersecurity.",
    siteName: "Alex Chen Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Chen | Systems Builder & Security Researcher",
    description:
      "Building secure, scalable systems at the intersection of software engineering and cybersecurity.",
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
