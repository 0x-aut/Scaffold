// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";


// Shadcn Components import
import { Button } from "@/components/ui/button"


export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`font-sans antialiased bg-white`}>
      <body
        className={`font-sans h-full w-full antialiased bg-white`}
      >
        <header className="bg-white h-auto pt-2.5 pl-7.5 pr-7.5 pb-2.5">
          <nav className="h-10 flex items-center justify-between ">
            <Image src="/scaffoldlogo.svg" alt="Scaffold logo" width={119} height={30} />
            <Button className="rounded-full" size="sm">
              <span className="font-sans font-light">Create project</span>
            </Button>
          </nav>
        </header>
        <main className="bg-white">{children}</main>
      </body>
    </html>
  );
}
