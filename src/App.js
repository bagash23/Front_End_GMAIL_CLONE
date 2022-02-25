import React from 'react';
import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Mail from './Mail';
import EmailList from './EmailList';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className='app_body'>
          <SideBar/>
          <Switch>
            <Route path="/mail">
              <Mail/>
            </Route>
            <Route path="/">
              <EmailList/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
