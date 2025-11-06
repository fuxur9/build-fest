import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Badger Build Fest",
  description:
    "Badger Build Fest held by Tech Exploration Lab and Badger Blockchain",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='overflow-x-hidden'>
      <body
        className={`${spaceGrotesk.variable} antialiased overflow-x-hidden bg-gradient-to-br from-background via-primary/10 to-background`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
