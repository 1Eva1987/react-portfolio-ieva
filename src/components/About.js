import React from "react";
import driving from "../images/driving.jpeg";
import walking from "../images/walking.jpeg";
import traveling from "../images/traveling.png";
import coding from "../images/coding.jpeg";

import "../css/about.css";

function About() {
  return (
    <div className="wrap">
      <h1>ABOUT ME</h1>
      <div className="about">
        <p>
          Prior to my career in coding and development, I worked in various
          customer service roles and the care sector. Although I enjoyed these
          jobs, I knew I wanted a career that would continuously challenge me
          and push me to grow. I wasn't sure what path to take until one day,
          while observing a friend working on a coding project, I realized that
          coding was the challenge I had been looking for.
        </p>
        <br></br>
        <p>
          From that moment on, I took a self-taught route. I was determined to
          succeed, and eventually enrolled in a sixteen-week intensive bootcamp
          in front-end development. During this program, I honed my skills in
          <strong>
            {" "}
            HTML, CSS, Bootstrap, JavaScript, jQuery, Node.js, and React
          </strong>
          .
        </p>
        <br></br>
        <p>
          I am thrilled to have the opportunity to showcase my work and share my
          passion with you through my portfolio. It is my hope that my projects
          and experiences will convey my enthusiasm for coding and the value I
          can bring to any team or project. Thank you for considering my
          portfolio, and I look forward to the opportunity to work with you.
        </p>
      </div>
      <div className="more-about">
        <h2 className="love">Thing I Love To Do:</h2>
        <div className="grid">
          <ul>
            <li>CODING</li>
            <li>DRIVING</li>
            <li>WALKING</li>
            <li>TRAVELING</li>
          </ul>
          <div className="img-about-div">
            <img
              className="img-about"
              alt="driving"
              src={driving}
              height={"150px"}
              width={"150px"}
            ></img>
            <img
              className="img-about"
              alt="walking"
              src={walking}
              height={"150px"}
              width={"150px"}
            ></img>
            <img
              className="img-about"
              alt="traveling"
              src={traveling}
              height={"150px"}
              width={"150px"}
            ></img>
            <img
              className="img-about"
              alt="walking"
              src={coding}
              height={"150px"}
              width={"150px"}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
