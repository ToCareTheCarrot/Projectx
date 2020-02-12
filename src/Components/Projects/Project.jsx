import React from 'react';

export const Project = ({project, ...props}) => {

  const ActionBtn = () => (
      <div className="action-btn">
        {project.done ? <span onClick={() => props.doneProject()}>✔️</span> : <span onClick={() => props.doneProject()}>⚪️</span>}
      </div>
    );
  
  const className = "project " + (project.done ? "project-done" : "");

  return (
    <li className={className}>
      <div className="project-title-and-done-container">
        <ActionBtn/>
        <p>{project.title}</p>
      </div>
      <div className="project-btns-container">
        <span onClick={() => props.goToEditProject()}>✏️</span>
        <span onClick={() => props.goToDeleteProject()}>🗑️</span>
      </div>
    </li>
  );
}


