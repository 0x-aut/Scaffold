import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="min-h-screen flex items-center border border-red-600 justify-center bg-gray-50">
      <SignIn />
    </div>
  )
}