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

  render(){
    return (
      <div className="main-layout">
        <BrowserRouter>
        <Sidebar/>
          <Switch>
            <Route exact path="/" render={() => <Projects/>} />
            <Route path="/inbox" render={() => <Inbox/>} />
            <Route path="/focus" render={() => <Focus/>} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


