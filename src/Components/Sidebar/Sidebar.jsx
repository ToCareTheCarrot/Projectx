import React from 'react';

import {SidebarButton} from './SidebarButton';

export class Sidebar extends React.Component{

  render(){
    return (
      <div className="sidebar">
        <SidebarButton to="/gtd" name="GTD"/>
        <SidebarButton to="/inbox" name="Inbox"/>
        <SidebarButton to="/focus" name="Focus"/>
        <SidebarButton to="/" name="Projects"/>
        
      </div>
    );
  }
}


