import React from "react";
import github from "./GitHub-Mark-32px.png";
import linkedIn from "./LI-In-Bug.png";
import "../../assets/style.css";

const Info = () => {
  return (
    <div>
      <div className="info col-md-12">
        <p id="nav">
          nickolasezell@gmail.com <span id="decorate">|</span>{" "}
          <a
            href="https://linkedin.com/in/nick-ezell"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="LinkedIn"
              src={linkedIn}
              id="linkedIn"
              className="make-it-slow"
            ></img>
            https://linkedin.com/in/nick-ezell
          </a>
          <span id="decorate">|</span>{" "}
          <a
            href="https://github.com/nick-ezell"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="GitHub"
              src={github}
              id="gitHub"
              className="make-it-slow"
            ></img>{" "}
            https://github.com/nick-ezell
          </a>
        </p>
        <br />

        <div className="statement">
          <p>
            Programmer with strong front-end skills, a background in customer
            service and an eye for aesthetics in design. I have a strong sense
            of self-management as well as a deep-seated desire for personal
            development. Coding was a hobby (in my early youth) that I have
            recently rediscovered, and reinvigorated, my passion for. A
            combination of technical expertise and emotional intelligence allows
            me to be a unique team member that will bring efficiency and value
            to your team; coupled with experience in collaborative,
            deadline-driven environments make me a strong addition to any data
            analysis team. I seek a role in web development at a company where I
            can learn and continue my journey to master the ever-changing craft
            of code.
          </p>
        </div>

        <section>
          <h2 id="dropdown1">Skills</h2>
        </section>
      </div>
      <div className="skills">
        <div className="list">
          <ul className="hide1">
            <li>React/Hooks</li>
            <li>Node/Express</li>
            <li>HTML/HTML5</li>
            <li>Javascript/ES6</li>
          </ul>
        </div>

        <div className="list">
          <ul className="hide1">
            <li>CSS/SCSS</li>
            <li>Bulma</li>
            <li>Bootstrap</li>
          </ul>
        </div>

        <div className="list">
          <ul className="hide1">
            <li>MySQL</li>
            <li>Mongo.DB</li>
            <li>Web/Server APIs (Rest)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Info;
