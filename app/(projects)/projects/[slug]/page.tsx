export default async function ProjectSlugHome({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  
  return (
    <div className="flex flex-col border border-black min-h-screen ml-7.5 mr-7.5">
      <main className="border">
        Hello
      </main>
    </div>
  )
}