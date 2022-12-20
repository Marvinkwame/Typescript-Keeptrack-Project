import React, { SyntheticEvent } from 'react'
import { Project } from './Project'

interface ProjectFormProps {
    project: Project;
    onCancel: () => void;
    onSave: (item: Project) => void;
}


function ProjectForm({ project: initialProject, onCancel, onSave }: ProjectFormProps) {
    const [project, setProject] = React.useState(initialProject)
    const [errors, setErrors] = React.useState({ name: '', description: '', budget: '' }) //For handling erros

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        if (!isValid()) return
        onSave(project)
    }

    const formValidate = (project: Project) => {
        let erros: any = { name: '', description: '', budget: '' };
        if (project.name.length === 0) {
            erros.name = "Name is required"
        }

        if (project.name.length > 0 && project.name.length < 3) {
            errors.name = "Name needs to be at least 3 characters"
        }

        if (project.description.length === 0) {
            errors.description = "Description is required"
        }

        if (project.budget === 0) {
            errors.budget = "Budget should be greater than $0"
        }

        return errors
    }

    function isValid() {
        return (
            errors.name.length === 0 &&
            errors.description.length === 0 &&
            errors.budget.length === 0
        );
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
        // need to do functional update b/c
        // the new project state is based on the previous project state
        // so we can keep the project properties that aren't being edited +like project.id
        // the spread operator (...) is used to
        // spread the previous project properties and the new change
        setProject(p => {
            updatedProject = new Project({ ...p, ...change });
            return updatedProject;
        })
        setErrors(() => formValidate(updatedProject))
    }


    return (
        <div>
            <form className="input-group vertical" onSubmit={handleSubmit}>
                <label htmlFor="name">Project Name</label>
                <input type="text" name="name" placeholder="enter name" value={project.name} onChange={handleChange} />
                {errors.name.length > 0 &&(<div className='card error'><p>{errors.name}</p></div>)}
                <label htmlFor="description">Project Description</label>

                <textarea name="description" placeholder="enter description" value={project.description} onChange={handleChange}></textarea>
                {errors.description.length > 0 &&(<div className='card error'><p>{errors.description}</p></div>)}
                <label htmlFor="budget">Project Budget</label>

                <input type="number" name="budget" placeholder="enter budget" value={project.budget} onChange={handleChange} />
                {errors.budget.length > 0 &&(<div className='card error'><p>{errors.budget}</p></div>)}
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