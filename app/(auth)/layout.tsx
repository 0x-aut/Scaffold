import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  <div className="font-sans min-h-screen bg-black">
    <header className="fixed bg-white w-full h-auto pt-2.5 pl-7.5 pr-7.5 pb-2.5 border-b">
      <nav className="h-10 flex items-center justify-center">
        <Link href="/"><Image src="/scaffoldlogo.svg" alt="Scaffold logo" width={119} height={30} /></Link>
      </nav>
    </header>
    <main className="w-full max-w-md p-8">{children}</main>
  </div>
}