import { ProjectCard } from "@/components/sccomps/Project";
import { db } from "@/lib/db";
import { useLiveQuery } from "dexie-react-hooks"


export default function projectsPage() {
  
  // We want to first fetch all projects and if there are no projects simply write there are no projects
  const projects = useLiveQuery(() => db.projects.toArray());
  
  if (!projects) {
    return (
      <div className="flex flex-col min-h-screen ml-7.5 mr-7.5">
        <h1 className="flex text-[36px] font-medium mt-5 h-fit w-fit items-center justify-start font-sans tracking-[-0.05em]">
          Create and Manage your projects here
        </h1>
        <main className="flex flex-col gap-y-2.25 mt-5">
          <span className="font-sans font-medium text-base">No projects created yet</span>
        </main>
      </div>
    )
  }
  
  return (
    <div className="flex flex-col min-h-screen ml-7.5 mr-7.5">
      <h1 className="flex text-[36px] font-medium mt-5 h-fit w-fit items-center justify-start font-sans tracking-[-0.05em]">
        Create and Manage your projects here
      </h1>
      <main className="flex flex-col gap-y-2.25 mt-5">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            projectTitle={project.project_name}
            projectCreated={project.project_created}
            projectModified={project.project_modified || new Date()}
            projectDesc={project.project_desc}
          />
        ))}
      </main>
    </div>
  )
}