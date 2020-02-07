import React from 'react';
import { NavLink } from 'react-router-dom';

export class SidebarButton extends React.Component{

  render(){
    return (
      <NavLink to={this.props.to} className="sidebar-btn">
        <h3 className="sidebar-btn-text">{this.props.name}</h3>
      </NavLink>    
    );
  }
}


