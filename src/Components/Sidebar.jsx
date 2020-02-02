import React from 'react';

import {SidebarButton} from './SidebarComponents/SidebarButton';
// import {Inbox} from './Components/SidebarComponents/Inbox';
// import {Focus} from './Components/SidebarComponents/Focus';
// import {Projects} from './Components/SidebarComponents/Projects';
{/* <div className="btn"></div> */}

export class Sidebar extends React.Component{

  render(){
    return (
      <div className="sidebar">
        <SidebarButton name="GTD"/>
        <SidebarButton name="Inbox"/>
        <SidebarButton name="Focus"/>
        <SidebarButton name="Projects"/>
      </div>
    );
  }
}


