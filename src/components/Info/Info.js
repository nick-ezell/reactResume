import React from "react";
import github from "./GitHub-Mark-32px.png";
import linkedIn from "./LI-In-Bug.png";
import Skills from "../Skills/Skills";
import "../../assets/style.css";

const Info = () => {
  return (
    <div>
      <div>
        <p>
          nickolasezell@gmail.com{" "}
          <a
            href="https://linkedin.com/in/nick-ezell"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="LinkedIn"
              src={linkedIn}
              id="linkedIn"
              className="transitionSlow"
            ></img>
            https://linkedin.com/in/nick-ezell
          </a>{" "}
          <a
            href="https://github.com/nick-ezell"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="GitHub"
              src={github}
              id="gitHub"
              className="transitionSlow"
            ></img>{" "}
            https://github.com/nick-ezell
          </a>
        </p>
        <br />

        <div>
          <p>
            Programmer with strong front-end skills, a background in customer
            service and an eye for aesthetics in design. I have a strong sense
            of self-management as well as a deep-seated desire for personal
            development. Coding was a hobby (in my early youth) that I have
            recently rediscovered, and reinvigorated, my passion for. A
            combination of technical expertise and emotional intelligence allows
            me to be a unique team member that will bring efficiency and value
            to your team; coupled with experience in collaborative,
            deadline-driven environments, make me a strong addition to any data
            analysis team. I seek a role in Web Development at a company where I
            can learn and continue my journey to master the ever-changing craft
            of code.
          </p>
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default Info;
