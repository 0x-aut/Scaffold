import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";


// Small chat is the chat box standard for the other pages so it looks good instead of using another aside
export async function SmallChat({
  slug_path,
  color,
}: {
  slug_path: string,
  color: string
}) { 
  return (
    <div className={`relative flex flex-col w-125 h-11 p-1.5 border border-[#D9D9D9] rounded-4xl bg-${color}`}>
      <textarea
        autoFocus
        className="relative p-1 font-sans tracking-[-0.03em] text-base resize-none border-0 outline-0 w-full bg-transparent"
        placeholder={`Make changes to your ${slug_path}`}
      >
      </textarea>
      <div className="absolute flex justify-between items-center right-1.5 bottom-1.25 cursor-pointer">
        <Button className="rounded-3xl" size="sm">
          <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  )
}

export function SmallAgentAnswer() {
  return (
    <div
      className="flex flex-col gap-y-2.5 justify-between w-125 h-fit p-1.25 rounded-2xl border border-[#D9D9D9] bg-white"
    >
      Answered agent
    </div>
  )
}