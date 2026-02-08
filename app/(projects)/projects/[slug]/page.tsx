import {
  ChatBox, Messages
} from "@/components/sccomps/Chat";





export default function ProjectSlugHome() {
  return (
    <div className="flex flex-col min-h-[90vh] h-[90vh] overflow-y-scroll scrollbar-hide ml-7.5 mr-7.5">
      <main className="flex flex-col items-center justify-center min-h-fit">
        <div className=" pb-50 h-fit">
          <Messages />
        </div>
        <div className="fixed z-20 h-fit w-fit left-[35.5%] top-[50%]">
          <ChatBox />
        </div>
      </main>
    </div>
  )
}