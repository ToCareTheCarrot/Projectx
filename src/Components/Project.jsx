import React from 'react';

export const Project = ({project, ...props}) => {

  const ActionBtn = () => (
      <div className="action-btn">
        {project.done ? <span onClick={() => props.doneTask()}>✔️</span> : <span onClick={() => props.doneTask()}>⚪️</span>}
      </div>
    );
  
  const className = "task " + (project.done ? "task-done" : "");

  return (
    <li className={className}>
      <ActionBtn/>
      <p>{project.title}</p>
    </li>
  );
}


