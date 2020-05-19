import React from "react";
import github from "./GitHub-Mark-32px.png";
import linkedIn from "./LI-In-Bug.png";
import Skills from "../Skills/Skills";
import "../../assets/style.css";
import BrandStatement from "../BrandStatement/BrandStatement";
import Credentials from "../Credentials/Credentials";

const Info = () => {
  // const handleButtonClick = (event) => {
  //   switch (event.target.name) {
  //     case "skills":
  //       return;
  //     case "credentials":
  //       return;
  //     default:
  //   }
  // };

  return (
    <div className="row col-lg-12">
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
        <BrandStatement />
      </div>
      <div className="row col-lg-12">
        <Skills />
        <Credentials />
      </div>
      {/* <div className="row col-lg-12">
        {
          
        }
      </div> */}
    </div>
  );
};

export default Info;
