import { SmallChat, SmallAgentAnswer } from "@/components/sccomps/SmallAgent";

export default function SlugRepoPage() {
  return (
    <div className="flex border h-full">
      Hello to repo for the slug
      <div className="fixed bottom-6.5 left-[40%]">
        <SmallChat slug_path="repository" color="[#F2F2F2]" />
      </div>
    </div>
  )
}