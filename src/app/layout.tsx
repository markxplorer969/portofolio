import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Mark | Software Engineer & Vibe Coder",
  description: "Portfolio of Mark, a Systems Architect and Bot Creator building high-performance web applications with Next.js and AI.",
  keywords: ["Software Engineer", "Next.js", "React", "Portfolio", "Vibe Coder", "Web Developer Indonesia"],
  authors: [{ name: "Mark" }],
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Mark | Software Engineer & Vibe Coder",
    description: "Portfolio of Mark, a Systems Architect and Bot Creator building high-performance web applications with Next.js and AI.",
    url: "https://markxplorer.me",
    siteName: "Mark's Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/avatar.png",
        width: 1200,
        height: 630,
        alt: "Mark - Software Engineer & Vibe Coder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark | Software Engineer & Vibe Coder",
    description: "Portfolio of Mark, a Systems Architect and Bot Creator building high-performance web applications with Next.js and AI.",
    images: ["/avatar.png"],
  },
  metadataBase: new URL("https://markxplorer.me"),
  alternates: {
    canonical: "https://markxplorer.me",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-zinc-950 text-zinc-100`}
      >
        {/* Premium Noise Texture */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50">
          <div 
            className="absolute inset-0 bg-repeat" 
            style={{
              backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" /%3E%3CfeColorMatrix type=\"saturate\" values=\"0\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\" opacity=\"1\"/%3E%3C/svg%3E')"
            }}
          />
        </div>
        
        {children}
        <Toaster />
      </body>
    </html>
  );
}
