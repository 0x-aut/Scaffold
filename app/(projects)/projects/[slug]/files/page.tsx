import { SmallChat, SmallAgentAnswer } from "@/components/sccomps/SmallAgent";

export default function SlugFiles() {
  return (
    <div className="flex border h-full">
      Hello to files for the slug
      <div className="fixed bottom-6.5 left-[40%]">
        <SmallChat slug_path="files" color="[#F2F2F2]" />
      </div>
    </div>
  )
}