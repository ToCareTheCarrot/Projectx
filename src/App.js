import React from 'react';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import {Projects} from './Components/Projects/Projects';
import {Sidebar} from './Components/Sidebar/Sidebar';
import {Inbox} from './Components/Inbox/Inbox';
import {Focus} from './Components/Focus/Focus';


export class App extends React.Component{

  state = {
    projects: [],
  };

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
    const newProjects = [...projects, project];

    this.setState({
      projects: newProjects
    });
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

    const copy = [
      ...projects.slice(0, projectIndex),
      projectCopy,
      ...projects.slice(projectIndex + 1)
    ];

    this.setState({
      projects: copy
    })
  }

  render(){
    return (
      <div className="main-layout">
        <BrowserRouter>
        <Sidebar projects={this.state.projects}/>
          <Switch>
            <Route exact path="/" render={() => <Projects 
              projects={this.state.projects}
              doneProject={this.doneProject}
              deleteProject={this.deleteProject}
              addProject={this.addProject}
              editProject={this.editProject}
              />} />
            <Route path="/inbox" render={() => <Inbox/>} />
            <Route path="/focus" render={() => <Focus/>} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


