
// export const addProject = (projects, project) => {
//   return [...projects, project];
// }

// export const editProject = (projects,projectId,fieldToUpdate) => {

//   const projectIndex = projects.findIndex(project => project.id === projectId);
//   const projectToUpdate = projects[projectIndex];
//   const projectCopy = {...projectToUpdate,...fieldToUpdate};

//   return [
//     ...projects.slice(0, projectIndex),
//     projectCopy,
//     ...projects.slice(projectIndex + 1)
//   ];
// }

// const deleteProject = (projects, projectId) => {

//   const projectIndex = projects.findIndex(project => project.id === projectId);

//   this.setState({
//     projects: [
//     ...projects.slice(0, projectIndex),
//     ...projects.slice(projectIndex + 1)
//   ]})
// }

// export const doneProject = (projects,id,fieldToUpdate) => {
 
//   const indexToChange = projects.map(projects => projects.id).indexOf(id);
//   const projectToUpdate = projects[indexToChange];
//   const projectCopy = {...projectToUpdate,...{done: fieldToUpdate}};
//   const updateProjects = [
//     ...projects.slice(0,indexToChange),
//     projectCopy,
//     ...projects.slice(indexToChange+1)
//   ];
//   this.setState({projects: updateProjects});
// }
