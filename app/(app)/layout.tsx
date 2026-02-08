// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { SignedOut } from '@clerk/nextjs'

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

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-full w-full antialiased bg-white`}
      >
        <header className="bg-white h-auto pt-2.5 pl-7.5 pr-7.5 pb-2.5">
          <nav className="h-10 flex items-center justify-between ">
            <Link href="/"><Image src="/scaffoldlogo.svg" alt="Scaffold logo" width={119} height={30} /></Link>
            <div className="flex items-center gap-x-2.25">
              <SignedOut>
                <Button className="rounded-full cursor-pointer" size="sm" variant="outline">
                  <span className="font-sans font-light">Sign in</span>
                </Button>
              </SignedOut>
              <Button className="rounded-full cursor-pointer" size="sm">
                <span className="font-sans font-light">Create project</span>
              </Button>
            </div>
          </nav>
        </header>
        <main className="bg-white">{children}</main>
      </body>
    </html>
  );
}
