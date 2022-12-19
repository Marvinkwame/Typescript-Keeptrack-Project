import React, { SyntheticEvent } from 'react'
import { Project } from './Project'

interface ProjectFormProps {
    project: Project;
    onCancel: () => void;
    onSave: (item: Project) => void;
}


function ProjectForm({ project: initialProject, onCancel, onSave }: ProjectFormProps) {
    const [project, setProject] = React.useState(initialProject)

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        onSave(project)
    }

    const handleChange = (event: any) => {
        const { type, name, value, checked } = event.target;
        // if input type is checked use checked
        //otherwise it's type is text, etc then use value
        let updatedValue = type === 'checkbox' ? checked : value;

        //if input type is number, convert the updatedValue string to a number
        if (type === 'number') {
            updatedValue = Number(updatedValue)
        }
        const change = {
            [name]: updatedValue,
        };

        let updatedProject: Project;
        setProject(p => {
            updatedProject = new Project({ ...p, ...change });
            return updatedProject;
        })
    }


    return (
        <div>
            <form className="input-group vertical" onSubmit={handleSubmit}>
                <label htmlFor="name">Project Name</label>
                <input type="text" name="name" placeholder="enter name" value={project.name} onChange={handleChange} />
                <label htmlFor="description">Project Description</label>

                <textarea name="description" placeholder="enter description" value={project.description} onChange={handleChange}></textarea>
                <label htmlFor="budget">Project Budget</label>

                <input type="number" name="budget" placeholder="enter budget" value={project.budget} onChange={handleChange} />
                <label htmlFor="isActive">Active?</label>
                <input type="checkbox" name="isActive" checked={project.isActive} onChange={handleChange} />

                <div className="input-group">
                    <button className="primary bordered medium">Save</button>
                    <span></span>
                    <button type="button" className="bordered medium" onClick={onCancel}>cancel</button>
                </div>
            </form>
        </div>
    )
}

export default ProjectForm