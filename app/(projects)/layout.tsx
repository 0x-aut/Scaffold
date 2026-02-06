import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
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
  title: "Scaffold Projects__",
  description: "Your projects created with scaffold",
};


export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} w-full antialiased bg-white`}
      >
        <header className="fixed bg-white w-full h-auto pt-2.5 pl-7.5 pr-7.5 pb-2.5 border-b">
          <nav className="h-10 flex items-center justify-between">
            <Image src="/scaffoldlogo.svg" alt="Scaffold logo" width={119} height={30} />
            <Button className="rounded-full" size="sm">
              <span className="font-sans font-light">Create project</span>
            </Button>
          </nav>
        </header>
        <main className="bg-white pt-15 h-full">{children}</main>
      </body>
    </html>
  );
}