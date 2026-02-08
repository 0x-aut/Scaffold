import Image from "next/image";

// Shadcn Components import
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <div className="flex min-h-screen font-sans bg-white ml-7.5 mr-7.5">
      <main className="flex flex-col h-auto w-full justify-start items-center">
        <div className="flex flex-col items-center justify-center mt-15">
          <h2 className="flex w-fit h-fit font-sans text-[40px] font-semibold tracking-[-0.05em] justify-center text-center">
            Use <Image className="h-fit" src="/tambologo.svg" alt="Tambo.co logo" height={60} width={60} /> tambo to interactively
          </h2>
          <h2 className="flex w-fit h-fit font-sans text-[40px] font-semibold tracking-[-0.05em] justify-center text-center">
            create, push and deploy your projects
          </h2>
        </div>
        <Button className="rounded-full cursor-pointer mt-7.5">
          <span className="font-sans text-base font-normal">Create project</span>
        </Button>
        <div className="relative flex justify-center items-center border border-[#D9D9D9] bg-[#F2F2F2] overflow-hidden mt-15 w-310 h-175 rounded-[15px]">
          <Image
            src="/background.jpg"
            alt="Background"
            fill
            className="object-cover z-10"
            priority
          />
          <Image
            className="relative z-11 object-contain"
            src="/Scaffoldspage.svg"
            alt="Scaffold page"
            height={500}
            width={850}
          />
        </div>
      </main>
    </div>
  );
}
