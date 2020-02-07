import React from 'react';

import { Project } from './Project';
import { AddEditForm } from '../AddEditForm/AddEditForm';

export class Projects extends React.Component{
  state = {
    projects: [
      {id: 0, title: "Learn JS", done: true},
      {id: 1, title: "Learn React", done: false},
      {id: 2, title: "Learn React Router", done: false},
      {id: 3, title: "Learn Redux", done: false},
    ],

    projectToAddOrEdit: false,
    isEdit: false,
    idToEdit: 0
  }

  nextId = 4;

  doneProject = (projects,id,fieldToUpdate) => {
 
    const indexToChange = projects.map(projects => projects.id).indexOf(id);
    const projectToUpdate = projects[indexToChange];
    const projectCopy = {...projectToUpdate,...{done: fieldToUpdate}};
    const updateProjects = [
      ...projects.slice(0,indexToChange),
      projectCopy,
      ...projects.slice(indexToChange+1)
    ];
    this.setState({projects: updateProjects});
  }

  addProject = (projects, project) => {
    console.log('id: ',project.id);

    return [...projects, project];
  }

  deleteProject = (projects, projectId) => {

    const projectIndex = projects.findIndex(project => project.id === projectId);

    this.setState({
      projects: [
      ...projects.slice(0, projectIndex),
      ...projects.slice(projectIndex + 1)
    ]});
  }

  editProject = (projects,id,fieldToUpdate) => {

    const projectIndex = projects.findIndex(project => project.id === id);
    const projectToUpdate = projects[projectIndex];
    const projectCopy = {...projectToUpdate,...fieldToUpdate};

    return [
      ...projects.slice(0, projectIndex),
      projectCopy,
      ...projects.slice(projectIndex + 1)
    ];
  }

  render(){
    const {projects} = this.state;
    const {isEdit} = this.state;

    console.log('Projects: ',projects);
    console.log('idToEdit: ',this.state.idToEdit);

    if (this.state.projectToAddOrEdit){
      return (
        <AddEditForm

          onEdit={isEdit}
          
          toAdd={text => {
            const project = {
              id: this.nextId,
              title: text,
              done: false
            };

            const newProjects = this.addProject(projects, project);

            this.setState({
              projects: newProjects,
              projectToAddOrEdit: false
            })
            
            this.nextId++;
            
          }}

          projectText = {
            (Array.isArray(projects) && projects.length && isEdit) ? (projects.find(project => project.id === this.state.idToEdit).title) : ('')
          }

          onSave={title => {
            const copy = this.editProject(projects, this.state.idToEdit, {title});

            this.setState({
              projects: copy,
              projectToAddOrEdit: false,
              isEdit: false,
              idToEdit: 0
            })
          }}

          onCancel={() => this.setState({projectToAddOrEdit: false})}
        />
      );
    }

    return (
      <>
        <div className="App">
          <h1 className="top">Projects:</h1>
          <div className="add-project">
            <span 
              role="img"
              aria-label="add a Project"
              className="add-project-btn"
              onClick={() => this.setState({
                projectToAddOrEdit: true
              })}
            >➕<span className="add-project-btn-text">Добавить проект</span>
            </span>
          </div>
            {projects.map(project => (
              <Project 
                key={project.id} 
                project={project}
                doneProject={() => this.doneProject(projects, project.id, !project.done)}
                goToDeleteProject={() => this.deleteProject(projects, project.id)}
                goToEditProject={() => this.setState({
                  projectToAddOrEdit: true,
                  isEdit: true,
                  idToEdit: project.id
                })}
              />
            ))}
          <div className="owner-photo">
            <p>Мишуга</p>
          </div>
        </div>
      </>
    );
  }
}


