import React from "react";
import "../../assets/style.css";

const Skills = () => {
  const buttonState = React.createContext({
    skills: "hide",
    frontend: "hide",
    backend: "hide",
  });
  const useButtonState = React.useContext(buttonState);
  const [toggledState, setToggledState] = React.useState(useButtonState);

  const skillChoice = React.createContext({
    frontend: "hide",
    backend: "hide",
  });
  const useSkillChoice = React.useContext(skillChoice);
  const [status, setStatus] = React.useState(useSkillChoice);

  const handleSkills = (event) => {
    switch (event.target.name) {
      case "hide":
        setToggledState({
          skills: "show",
          frontend: "show",
          backend: "show",
        });
        setStatus({
          frontend: "hide",
          backend: "hide",
        });
        break;

      case "show":
        setToggledState({
          skills: "hide",
          frontend: "hide",
          backend: "hide",
        });
        setStatus({
          frontend: "hide",
          backend: "hide",
        });
        break;

      case "frontend":
        switch (status.frontend) {
          case "show":
            setStatus({
              frontend: "hide",
              backend: "hide",
            });
            break;
          default:
            setStatus({
              frontend: "show",
              backend: "hide",
            });
        }
        break;

      case "backend":
        switch (status.backend) {
          case "show":
            setStatus({
              frontend: "hide",
              backend: "hide",
            });
            break;
          default:
            setStatus({
              frontend: "hide",
              backend: "show",
            });
        }
        break;
      default:
    }
  };

  // console.log(status);
  // const handleSkillChoice = (event) => {
  //   console.log(status);
  //   if (toggledState.skills === "show") {
  //   } else {
  //     setStatus({
  //       frontend: "hide",
  //       backend: "hide",
  //     });
  //   }
  // };

  return (
    <div className="row">
      <section>
        <button name={toggledState.skills} onClick={handleSkills}>
          Skills
        </button>
      </section>

      <div>
        <button
          name="frontend"
          className={toggledState.frontend}
          onClick={handleSkills}
        >
          Front-End
        </button>
        <button
          name="backend"
          className={toggledState.backend}
          onClick={handleSkills}
        >
          Back-End
        </button>
      </div>

      <div className={status.frontend + " col-lg-2 column"}>
        <ul>
          <li>React/Hooks</li>
          <li>CSS/SCSS</li>
          <li>Bulma</li>
          <li>Bootstrap</li>
          <li>HTML/HTML5</li>
          <li>Javascript/ES6</li>
        </ul>
      </div>

      <div className={status.backend + " col-lg-2 column"}>
        <ul>
          <li>Node/Express</li>
          <li>MySQL</li>
          <li>Mongo.DB</li>
          <li>Web/Server APIs (Rest)</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
