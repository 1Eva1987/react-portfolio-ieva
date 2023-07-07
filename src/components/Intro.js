import React from "react";
import "../css/intro.css";
import Typewriter from "typewriter-effect";
import cv from "../images/Ieva.B-CV.pdf";

function Intro() {
  return (
    <div className="intro">
      <div className="hello">
        <div className="type">
          <Typewriter
            options={{
              delay: 150,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Hello,")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Пpивeт,")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Labas,")
                .pauseFor(1000)
                .start();
            }}
          />
        </div>
        <h2>
          My name is <span>Ieva</span>
        </h2>
        <h3>I'm a Junior Web Developer</h3>
        <p className="question">Want to know MORE?</p>
        <p className="scroll">KEEP SCROLLING...</p>
        <p>or</p>
        <a className="cv" href={cv} download>
          Download CV
        </a>
      </div>
    </div>
  );
}

export default Intro;
