import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Image from "next/image";


// Shadcn Components import
import { Button } from "@/components/ui/button"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Scaffold__",
  description: "Interactively create, push and deploy projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} h-full w-full antialiased bg-white`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
