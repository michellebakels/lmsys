import type { Metadata } from "next";
// import { Toolbar } from "basehub/next-toolbar";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const norBPen = localFont({
  src: "../public/fonts/NorBPen-BoldItalic.otf",
  variable: "--font-norb-pen",
});

export const metadata: Metadata = {
  title: "Let Me Show You Something",
  description: "South Florida Developer Meetup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Toolbar /> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${norBPen.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
