import React from "react";
import driving from "../images/driving.jpeg";
import walking from "../images/walking.jpeg";
import traveling from "../images/traveling.png";
import coding from "../images/coding.jpeg";

import "../css/about.css";

function About() {
  return (
    <div className="wrap wrap-about">
      <h1>ABOUT ME</h1>
      <div className="about">
        <p>
          Prior to my career in web development, I worked in various customer
          service roles. Although I enjoyed them, I knew I wanted a career that
          would continuously challenge me and push me to grow. I wasn't sure
          what path to take until one day, while observing a friend working on a
          web development project, a realization struck me: web development held
          the exhilarating challenge I had been yearning for.
        </p>
        <br></br>
        <p>
          From that moment on, I took a self-taught route. Driven by my
          determination to succeed, I dedicated myself to learning and
          ultimately successfully completed a sixteen-week intensive bootcamp in
          front-end development.
        </p>
        <br></br>
        <p>
          However, my learning journey does not end there. Each day, I strive to
          expand my skill set and deepen my understanding of various
          technologies. Throughout this exciting process, I have completed
          projects using
          <strong>
            {" "}
            HTML, CSS, Bootstarp, JavaScript, jQuery, Node.js, React, MongoDB
            and Express.js.
          </strong>
        </p>
      </div>
      <div className="more-about">
        <h2 className="love">Things I Love To Do:</h2>
        <div className="grid">
          <ul>
            <li>CODING</li>
            <li>DRIVING</li>
            <li>WALKING</li>
            <li>TRAVELLING</li>
          </ul>
          <div className="img-about-div">
            <img className="img-about" alt="driving" src={driving}></img>
            <img className="img-about" alt="walking" src={walking}></img>
            <img className="img-about" alt="traveling" src={traveling}></img>
            <img className="img-about" alt="walking" src={coding}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
