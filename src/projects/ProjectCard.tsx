import React from 'react'
import { Project } from './Project'

function formatDescription(description: string): string {
    return description.substring(0, 60) + '...';
}

interface ProjectCardProps {
    item: Project;
    onEdit: (item: Project) => void
}

function ProjectCard(props: ProjectCardProps) {
    const { item, onEdit } = props

    const handleEditClick = (projectBeingEdited: Project) => {
        onEdit(projectBeingEdited);
    };
    return (
        <div className="card">
            <img src={item.imageUrl} alt={item.name} />
            <section className="section dark">
                <h5 className="strong">
                    <strong>{item.name}</strong>
                </h5>
                <p>{formatDescription(item.description)}</p>
                <p>Budget: {item.budget.toLocaleString()}</p>
                <button className="bordered" onClick={() => handleEditClick(item)}>
                    <span className="icon-edit "></span>
                    Edit
                </button>
            </section>
        </div>

    )
}

export default ProjectCard