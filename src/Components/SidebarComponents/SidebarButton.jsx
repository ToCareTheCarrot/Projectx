import React from 'react';

export class SidebarButton extends React.Component{

  render(){
    return (
      <button className="sidebar-btn">
        <h3 className="sidebar-btn-text">{this.props.name}</h3>
      </button>
    );
  }
}


