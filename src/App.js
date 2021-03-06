/*jshint esversion: 6*/
import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from'./components/About';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Resume from './components/Resume';
import Projects from './components/Projects';
function App() {
  return (
<Router>
    <div className="App">
    <div className="container">
    <div className="row">
    <div className="col-lg-3">

    <Sidebar />

     </div>
    <div className="col-lg-9 app_main-content">
    <Navbar/>
    <Switch>
    <Route exact path="/">
       <About/>
     </Route>
     <Route path="/resume">
       <Resume/>
     </Route>
      <Route path="/projects">
       <Projects/>
     </Route>
     <Route>
    <Redirect to="/" />
    </Route>
   </Switch>
    </div>
    </div>
    </div>
    </div>
</Router>
  );
}

export default App;
