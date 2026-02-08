"use client";

import {
  useTamboV1, useTamboV1ThreadInput
} from "@tambo-ai/react/v1";

// Shadcn component import
import { Button } from "@/components/ui/button";

// Lucide icon import
import { ArrowRight } from "lucide-react";

export function ChatBox() {
  
  
  const { value, setValue, submit, isPending, threadId } = useTamboV1ThreadInput();
  
  // threadId will be stored per project
  
  return (
    <div className="relative flex flex-col w-162.5 h-25 p-1.5 border border-[#D9D9D9] rounded-4xl bg-[#F2F2F2]">
      <textarea
        autoFocus
        className="relative p-1 font-sans tracking-[-0.03em] text-base resize-none border-0 outline-0 w-full bg-transparent"
        placeholder="How do you want your project built"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && submit()}
        disabled={isPending}
      >
      </textarea>
      <div className="absolute flex justify-between items-center right-1.5 bottom-1.5 cursor-pointer">
        <Button
          className="rounded-3xl"
          size="sm"
          onClick={() => submit()}
          disabled={isPending || !value.trim()}
        >
          <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  )
}

export function Messages() {
  const { messages, isStreaming, currentThreadId } = useTamboV1();
  return (
    <div className="flex flex-col max-h-auto w-162.5">
      {messages.map((msg) => (
        <div key={msg.id} className={`flex flex-col w-full gap-x-2.5 message message-${msg.role}`}>
          {msg.content.map((contentPart, idx) => {
            if (contentPart.type === "text") {
              return (
                <div key={idx} className={`flex max-w-75 h-fit rounded-2xl bg-[#F2F2F2] p-2.5 message-${msg.role}`} >
                  <span className="font-sans text-base font-medium tracking-[-0.03em]">{contentPart.text}</span>
                </div>
              )
            }
            return null;
          })}
        </div>
      ))}
    </div>
  )
}