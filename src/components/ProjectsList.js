import React from "react";
import projects from "../projects.json";
import roamer from "../images/roamer.png";
import workout from "../images/workout.png";
import quiz from "../images/quiz.png";
import weather from "../images/weather.png";
import { FaGithub } from "react-icons/fa";
import { BsFillEyeFill } from "react-icons/bs";
import "../css/projects.css";

function ProjectsList() {
  const projectList = projects;

  //   function to display corect image
  const displayImage = (projectName) => {
    if (projectName === "Roamer App") {
      return roamer;
    } else if (projectName === "Workout Kitchen App") {
      return workout;
    } else if (projectName === "Weather Dashboard App") {
      return weather;
    } else if (projectName === "Quiz Game") {
      return quiz;
    }
  };
  return (
    <div className="wrap">
      <div>
        <h1>PROJECTS</h1>
      </div>
      <div className="wrapper">
        {/* maping over projects from json file and displaying  each project*/}
        {projectList.map((project) => {
          return (
            <div className="projects" key={project.id}>
              <h2>{project.name}</h2>
              <img
                className="card-img"
                src={displayImage(project.name)}
                alt={project.name}
                height="200px"
              />
              <p>{project.description}</p>
              <div className="links">
                <a href={project.live} target="_blank" rel="noreferrer">
                  <BsFillEyeFill className="icon" />
                </a>
                <a href={project.repo} target="_blank" rel="noreferrer">
                  <FaGithub className="icon" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ProjectsList;
