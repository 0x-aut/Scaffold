"use client";

// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { useUser } from "@clerk/nextjs"

import {
  TamboV1Provider
} from "@tambo-ai/react/v1"

// Shadcn components
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu, DropdownMenuContent,
  DropdownMenuSubContent, DropdownMenuTrigger,
  DropdownMenuLabel, DropdownMenuGroup,
  DropdownMenuSub, DropdownMenuSubTrigger,
  DropdownMenuPortal, DropdownMenuSeparator,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu"

// Lucide icons import
import {
  ChevronDown, Settings,
  ArrowRightLeft, House,
  Database, GitBranch,
  FolderTree, PanelLeft,
  Plus
} from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export function ProjectAvatarDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex justify-start pl-1 w-fit pr-4 rounded-xl">
          <div className="flex items-center">
            <Avatar className="rounded-lg bg-black w-7 h-7 mr-2.25 p-0">
              <AvatarImage src="/tambologo.svg" className="" />
              <AvatarFallback className="bg-black text-white">SC</AvatarFallback>
            </Avatar>
            <span className="text-base font-sans tracking-[-0.05em] mr-3.25">Project</span>
            <ChevronDown size={18} color="#0F0F0F" className="" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Settings />
          <span className="font-sans">Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <ArrowRightLeft />
            <span className="font-sans">Switch projects</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <Plus />
                <span className="font-sans">Create project</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


export default function ProjectSlugLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const { user } = useUser();
  
  return (
    <div lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
      <main className={`font-sans h-full w-full antialiased bg-white`}>
        <aside className="fixed flex flex-col left-0 w-64 h-full p-4 border-r">
          <div className="flex justify-between items-center mb-1.25">
            <ProjectAvatarDropdown />
            <PanelLeft size={18} color="#D9D9D9" className="cursor-pointer" />
          </div>
          <div className="flex flex-col">
            <Link href="/projects/render/" className="flex border rounded-lg gap-x-2.5 items-center justify-start p-1.25">
              <House size={18} color="#F0F0F0" />
              <span className="font-sans text-sm">Home</span>
            </Link>
            <Link href="/projects/render/db" className="flex rounded-lg gap-x-2.5 items-center justify-start p-1.25">
              <Database size={18} color="#F0F0F0" />
              <span className="font-sans text-sm">Database integration</span>
            </Link>
            <Link href="/projects/render/repo" className="flex rounded-lg gap-x-2.5 items-center justify-start p-1.25">
              <GitBranch size={18} color="#F0F0F0" />
              <span className="font-sans text-sm">Repository</span>
            </Link>
            <Link href="/projects/render/files" className="flex rounded-lg gap-x-2.5 items-center justify-start p-1.25">
              <FolderTree size={18} color="#F0F0F0" />
              <span className="font-sans text-sm">File directory</span>
            </Link>
          </div>
        </aside>
        <main className="ml-64 p-4 h-[91vh]">
          <TamboV1Provider
            apiKey={process.env.NEXT_PUBLIC_TAMBO_API_KEY || ""}
            userKey={user?.id}
          >
            {children}
          </TamboV1Provider>
        </main>
      </main>
    </div>
  )
}