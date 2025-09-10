import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://firesafex.example"),
  title: {
    default: "FireSafeX: The Future of Fire Safety Training",
    template: "%s | FireSafeX",
  },
  description:
    "Immersive, realistic, and cost‑effective mixed reality fire safety training. Experience true readiness with FireSafeX.",
  keywords: [
    "FireSafeX",
    "fire safety training",
    "mixed reality",
    "VR training",
    "MR headset",
    "safety simulation",
  ],
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    url: "/",
    title: "FireSafeX: The Future of Fire Safety Training",
    description:
      "Immersive, realistic, and cost‑effective mixed reality fire safety training.",
    images: [
      {
        url: "https://dummyimage.com/1200x630/0a0a0a/ffffff&text=FireSafeX",
        width: 1200,
        height: 630,
        alt: "FireSafeX preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FireSafeX: The Future of Fire Safety Training",
    description:
      "Immersive, realistic, and cost‑effective mixed reality fire safety training.",
    images: [
      "https://dummyimage.com/1200x630/0a0a0a/ffffff&text=FireSafeX",
    ],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-background text-foreground`}
      >
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
