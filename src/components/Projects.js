import React from 'react';
import "./Projects.css";
import {Link} from "react-router-dom";
import myProjects from "../projects.json";

export default () => {
 
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      {myProjects.map((project) => {
        return (
        <div className="project-container" >
            <Link to={`/details/${project.id}`} >
                <div key={project.id}>
                    <h3>
                    {project.name}
                    </h3>
                    <h4>{project.technologies}</h4>
                    <hr />
                </div>
            </Link> 
        </div>
        )
      })}
    </div>
  )
}