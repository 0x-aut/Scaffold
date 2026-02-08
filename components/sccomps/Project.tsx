"use client";

import Link from "next/link";
import { db } from "@/lib/db";
import { useState } from "react";


// Shadcn component import
import { Button } from "@/components/ui/button";

// Lcide icon import
import { X } from "lucide-react";

export function ProjectCard({ 
  projectTitle,
  projectCreated,
  projectModified,
  projectDesc
}: Readonly<{
  projectTitle: string,
  projectCreated: Date,
  projectModified: Date,
  projectDesc: string
}>) {
  return (
    <Link href="/projects/render" className="flex items-center justify-between w-200 rounded-xl p-1 pr-5 cursor-pointer select-none">
      <div className="flex gap-x-2.25 items-center">
        <div className="flex h-20 w-30 border rounded-lg justify-center items-center bg-black text-white">
          Project
        </div>
        <span className="font-sans tracking-[-0.03em] text-base font-medium">{projectTitle}</span>
      </div>
      <span className="font-sans tracking-[-0.03em] text-sm font-medium">{projectCreated.toDateString()}</span>
      <span className="font-sans tracking-[-0.03em] text-sm font-medium">{projectModified.toDateString()}</span>
    </Link>
  )
}


interface CreateProjectModalProps {
  onclose: () => void
}

// Opening a modal to create a new project is easier for now
export function CreateProjectModal({ onclose }: CreateProjectModalProps) {
  
  const [project_name, setProjectName] = useState("");
  const [project_desc, setProjectDesc] = useState("");
  
  async function addProject() {
    const project_created = new Date();
    const project_modified = new Date();
    const thread_id = null; // Thread_id will be null until we can get it then we update the project thread_id
    try {
      const id = await db.projects.add({
        project_name,
        project_desc,
        thread_id,
        project_created,
        project_modified
      })
      
      setProjectName("");
      setProjectDesc("");
      
    } catch (err) {
      alert("An error occured whilst adding project to db")
    }
  }
  
  return (
    <div className="flex flex-col gap-y-8.5 p-2.5 h-fit w-125 bg-white border border-[#D9D9D9] rounded-2xl">
      <header className="flex w-full justify-between items-center">
        <span className="font-sans text-[20px] font-semibold tracking-[-0.05em]">Create a project</span>
        <Button variant="ghost" size="icon" className="rounded-full" onClick={onclose}>
          <X size={16} color="#121212" />
        </Button>
      </header>
      <div className="flex flex-col w-full gap-2.5">
        <input
          type="text"
          autoFocus
          value={project_name}
          onChange={(ev) => setProjectName(ev.target.value)}
          placeholder="Project Name"
          className="font-sans text-[24px] tracking-[-0.05em] font-medium w-full p-1.25 h-8 outline-0 border-0 border-b border-black"
        />
        <textarea
          placeholder="Project description"
          value={project_desc}
          onChange={(ev) => setProjectDesc(ev.target.value)}
          className="resize-none p-1.25 outline-none border border-[#D9D9D9] rounded-lg"
          autoComplete="on"
        >
        </textarea>
      </div>
      <div className="flex w-full justify-end items-center">
        <Button
          className="rounded-full cursor-pointer w-fit"
          onClick={addProject}
        >
          <span className="font-sans font-medium text-base">Create project</span>
        </Button>  
      </div>
    </div>
  )
}