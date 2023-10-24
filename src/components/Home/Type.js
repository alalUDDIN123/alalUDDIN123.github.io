import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "I'm a Software Engineer",
          "Full stack developer",
          "A Tech Enthusiast",
          "An Innovative Thinker",
          "And a Lifelong Learner",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Type;
