import React from "react";
import "../css/intro.css";
import Typewriter from "typewriter-effect";

function Intro() {
  return (
    <div className="home">
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
        <p>I'm a Junior Developer</p>
        <p>based in</p>
        <p>North Lincolnshire</p>
        <p className="question">Want to know MORE?</p>
        <p className="more">
          Feell free to use the <span>LINKS </span>above
        </p>
        <p>or</p>
        <p className="scroll">KEEP SCROLLING</p>
      </div>
    </div>
  );
}

export default Intro;
