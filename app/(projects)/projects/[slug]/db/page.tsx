import { SmallChat, SmallAgentAnswer } from "@/components/sccomps/SmallAgent";

export default function SlugDBPage() {
  return (
    <div className="flex border h-full bg-[#F2F2F2]">
      Hello to db for the slug
      <div className="fixed flex flex-col gap-y-2.25 bottom-6.5 left-[40%]">
        {/*<SmallAgentAnswer />*/}
        <SmallChat slug_path="database integration" color="white" />
      </div>
    </div>
  )
}