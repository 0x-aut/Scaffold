# Scaffold

This is a project generator built using tambo to help users build their projects and push or deploy them to github or vercel respectively.

## Features (Pages)
- Home/Chat Page - The page you type to tambo to generate the docs for you
- Project Page - The page you see all your created projects and have the ability to create a project

Database integration page shows the orm and the database specs and values and relationship in a canvas.
File Directory shows the directory of the files in a visual manner and allows tambo to make changes to said directory.
Repository shows the current repo or repos connected to a project based on what the user tells tambo.
Repo also shows possible errors and issues opened in the repo if possible using the mcp

Use tambo as the orchestrator, the main agent handling the instruction handling of the project:
What the project will be like, the core details of the project and everything of that nature
After that use another agent (perhaps groq) to handle the formation of code according to the docs on the website.
Only go for codebases(peripherals) that are well documented for easier alignment with the code.

CharlieHelps has to be used too

Use supermemory to handle conversation state for external agents

So what we want to do is to get thread id and save it for calling all messages
Each project is its own thread

a json schema of:
```json
{
  project_name: "render",
  project_id: "thread_id",
  thread_id: "thread_id"
}
```

First things first we setup dexie for the database


## TODOs:
- Handle auth using clerk or better-auth (whichever is easier) - Done
- Create the tambo messaging thread in home and make it work - Almost done
- Hookup a database (postgres is easier to hookup in render) for users to store projects
- Create the first tambo component which is project framework selector - Almost done
- Create the second tambo component which is project auth selector
- Create the third tambo component which is project ORM selector
- Create the fourth tambo component which is project database selector
- Create the fifth tambo component which is project folder/file tree
- Create the questions prompt inbetween components for better results.