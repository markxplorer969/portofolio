import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mark | Software Engineer Student & Vibe Coder",
  description: "A vibe coder building full-stack applications with AI-driven workflows. Explore my projects, skills, and experience.",
  keywords: ["Mark", "Software Engineer", "Vibe Coder", "Next.js", "AI", "TypeScript", "Full Stack", "Portfolio"],
  authors: [{ name: "Mark" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Mark | Software Engineer Student & Vibe Coder",
    description: "Building full-stack applications with AI-driven workflows",
    url: "https://mark.dev",
    siteName: "Mark's Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark | Software Engineer Student & Vibe Coder",
    description: "Building full-stack applications with AI-driven workflows",
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
        {children}
        <Toaster />
      </body>
    </html>
  );
}
