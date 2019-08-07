import React from 'react';
import { Link } from 'react-router-dom';
import "./ProjectDetails.css";
import myProjects from "../projects.json";

function ProjectDetails (props) {
  debugger
    const getProject = (id) => {

      let found = myProjects.find(oneProject => {
        return oneProject.id === id;
      })

      return found;

    };
  
  const { params } = props.match;
  const foundProject = getProject(params.id);

  return (
    <div className="project-details-container">
      <div>
        <h2>{ foundProject.name } <span style={{fontSize:"14px"}}>{ foundProject.year }</span></h2>
        <h3>Used technologies: { foundProject.technologies }</h3>
        <p>{ foundProject.description }</p>
        <Link to='/'>Back</Link>
      </div>
    </div>
  )
}

export default ProjectDetails;