import React from "react";
import projects from "../projects.json";
import roamer from "../images/roamer.png";
import workout from "../images/workout.png";
import quiz from "../images/quiz.png";
import weather from "../images/weather.png";
import { FaGithub } from "react-icons/fa";
import { BsFillEyeFill } from "react-icons/bs";

function ProjectCard() {
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
    <div>
      <div>
        <h1>PROJECTS</h1>
      </div>
      <div>
        {/* maping over projects from json file and displaying  each project*/}
        {projectList.map((project) => {
          return (
            <div key={project.id}>
              <h2>{project.name}</h2>
              <img
                src={displayImage(project.name)}
                alt={project.name}
                height="200px"
              />
              <p>{project.description}</p>
              <a href={project.live} target="_blank" rel="noreferrer">
                <BsFillEyeFill />
              </a>
              <a href={project.repo} target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ProjectCard;
