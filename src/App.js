import React from 'react';

import {Projects} from './Components/Projects';
import {Sidebar} from './Components/Sidebar';


export class App extends React.Component{

  render(){
    return (
      <div className="main-layout">
        <Sidebar/>
        <Projects/>
      </div>
    );
  }
}


