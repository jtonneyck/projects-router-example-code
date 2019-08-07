import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import Home from "./components/Home";

function App() {
  return (
    <div className="app-container">
      <Projects />
      <Route exact path="/" component={Home} />
      <Route path="/details/:someId" component={ProjectDetails} />
    </div>
  );
}

export default App;
