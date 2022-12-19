import React, { SyntheticEvent } from 'react'
import { Project } from './Project'
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

interface ProjectsListProps {
    projects: Project[];
    onSave: (project: Project) => void
}

function ProjectList({ projects, onSave }: ProjectsListProps) {
    const [projectBeingEdited, setProjectBeingEdited] = React.useState({});

    const handleEdit = (item: Project) => {
        setProjectBeingEdited(item)
    }

    const handleCancel = () => {
        setProjectBeingEdited({})
    }

    const items = projects.map(item => {
        return (
            <div key={item.id} className="cols-sm">
                {item === projectBeingEdited ? <ProjectForm project={item} onSave={onSave} onCancel={handleCancel} /> : <ProjectCard item={item} onEdit={handleEdit} />}
            </div>
        )
    })

    return (
        <div className='row'>
            {items}
        </div>
    )
}

export default ProjectList