// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";

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
import { ChevronDown, Settings, ArrowRightLeft } from "lucide-react";

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
          Settings
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <ArrowRightLeft />
            Switch Projects
          </DropdownMenuSubTrigger>
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
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
      <body className={`${geistSans.variable} ${geistMono.variable} h-full w-full antialiased bg-white`}>
        <aside className="fixed flex flex-col left-0 w-64 h-full p-4 border-r">
          <div className="flex justify-between items-center">
            <ProjectAvatarDropdown />
            <Settings size={18} color="#D9D9D9" className="cursor-pointer" />
          </div>
        </aside>
        <main className="ml-64 p-4">{children}</main>
      </body>
    </html>
  )
}