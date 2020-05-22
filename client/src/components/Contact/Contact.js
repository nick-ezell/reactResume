import React from "react";
import github from "./GitHub-Mark-32px.png";
import linkedIn from "./LI-In-Bug.png";

const Contact = () => {
  return (
    <div className="row">
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
    </div>
  );
};

export default Contact;
