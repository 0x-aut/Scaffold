"use client";

// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { useUser, SignedIn } from "@clerk/nextjs";

import { CreateProjectModal } from "@/components/sccomps/Project";

// Shadcn Components import
import { Button } from "@/components/ui/button"


// export const metadata: Metadata = {
//   title: "Scaffold Projects__",
//   description: "Your projects created with scaffold",
// };

// Projects created will be stored in localstorage first before going to database

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [modal_state, setModal_state] = useState(false);
  
  function changeModalState() {
    setModal_state(!modal_state)
  }
  
  return (
    <div lang="en" className={`font-sans antialiased bg-white`}>
      <SignedIn>
        <main
          className={`font-sans w-full antialiased bg-white`}
        >
          <header className="fixed bg-white w-full h-auto pt-2.5 pl-7.5 pr-7.5 pb-2.5 border-b">
            <nav className="h-10 flex items-center justify-between">
              <Link href="/"><Image src="/scaffoldlogo.svg" alt="Scaffold logo" width={119} height={30} /></Link>
              <Button className="rounded-full cursor-pointer" size="sm" onClick={changeModalState}>
                <span className="font-sans font-light">Create project</span>
              </Button>
            </nav>
          </header>
          {modal_state && (
            <>
              {/* Backdrop */}
              <div 
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                onClick={() => changeModalState()}
              />
              
              {/* Modal container */}
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <CreateProjectModal onclose={() => changeModalState()} />
              </div>
            </>
          )}
          <main className="bg-white pt-15 h-[90vh]">{children}</main>
        </main>
      </SignedIn>
    </div>
  );
}