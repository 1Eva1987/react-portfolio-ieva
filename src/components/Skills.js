import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiJquery, SiExpress, SiMongodb } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import "../css/skills.css";

function Skills() {
  return (
    <div className="wrap">
      <h1>SKILLS</h1>
      <div>
        <div className="skills-container">
          <div>
            <FaHtml5 />
          </div>
          <div>
            <FaCss3Alt />
          </div>
          <div>
            <FaBootstrap />
          </div>
          <div>
            <FaJsSquare />
          </div>
          <div>
            <SiJquery />
          </div>
          <div>
            <FaGithub />
          </div>
          <div>
            <TbBrandVscode />
          </div>
          <div>
            <FaNodeJs />
          </div>
          <div>
            <FaReact />
          </div>
          <div>
            <SiExpress />
          </div>
          <div>
            <SiMongodb />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
