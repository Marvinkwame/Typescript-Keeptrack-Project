import React from 'react'
import { MOCK_PROJECTS } from './MockProject'
import { Project } from './Project'
import ProjectList from './ProjectList'

function ProjectsPage() {
    const [projects, setProjects] = React.useState<Project[]>(MOCK_PROJECTS)


    const saveProject = (project: Project) => {
        let updatedProjects = projects.map((p: Project) => {
            return p.id === project.id ? project : p
        });
        setProjects(updatedProjects)
    }


  return (
    <>
    <h1>Project</h1>
    <ProjectList projects={projects} onSave={saveProject} />
    </>
  )
}

export default ProjectsPage