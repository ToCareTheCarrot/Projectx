import React from 'react';

import {Project} from './Components/Project';

export class App extends React.Component{
  state = {
    projects: [
      {id: 0, title: "Learn JS", done: true},
      {id: 1, title: "Learn React", done: false},
      {id: 2, title: "Learn React Router", done: false},
      {id: 3, title: "Learn Redux", done: false},
    ]
  }

  doneTask = (projects,id,fieldToUpdate) => {
 
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

  render(){
    const {projects} = this.state;

    return (
      <div className="App">
        <h1 className="top">Projects:</h1>
        {projects.map(project => (
          <Project 
            key={project.id} 
            project={project}
            doneTask={() => this.doneTask(this.state.projects, project.id, !project.done)}
          />
        ))}
      </div>
    );
  }
}


