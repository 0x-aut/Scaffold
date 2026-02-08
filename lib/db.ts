// lib/db.ts
import { Dexie, type EntityTable } from 'dexie'
// import datetime



interface Project {
  id: string
  project_name: string
  project_desc: string
  thread_id: string | null
  project_created: Date
  project_modified: Date | null
}

export const db = new Dexie('ScaffoldDB') as Dexie & {
  projects: EntityTable<
    Project,
    "id"
  >
}

// Schema declaration
db.version(1).stores({
  projects: "++id, project_name, project_desc, thread_id, project_created, project_modified"
})

export type { Project }
