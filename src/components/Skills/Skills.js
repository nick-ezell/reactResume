import React from "react";
import "../../assets/style.css";

const Skills = () => {
  //Create a context for "skills" to show and hide "Front-End" and "Back-End" buttons
  const buttonState = React.createContext({
    skills: "hide",
    frontend: "hide",
    backend: "hide",
  });
  //Access point into the created context
  const useButtonState = React.useContext(buttonState);
  //Functions for using and making changes
  const [toggledState, setToggledState] = React.useState(useButtonState);

  //Create a context for skill lists to be shown/hidden
  const skillChoice = React.createContext({
    frontend: "hide",
    backend: "hide",
  });
  //Accessing context
  const useSkillChoice = React.useContext(skillChoice);
  //Functions for using/changing
  const [status, setStatus] = React.useState(useSkillChoice);
  //Event to be fired on click of "skills" button by calling in our JSX
  const handleSkills = (event) => {
    //Set a condition on the event target's name
    switch (event.target.name) {
      //the first two cases in our switch pertain to our "Front-End" and "Back-End" buttons
      //if hide
      case "hide":
        //Change the context
        setToggledState({
          skills: "show",
          frontend: "show",
          backend: "show",
        });
        break;
      //if show
      case "show":
        //Change the context
        setToggledState({
          skills: "hide",
          frontend: "hide",
          backend: "hide",
        });
        //Our lists our hidden so that, even if open, when "skills" is hidden, as are they
        setStatus({
          frontend: "hide",
          backend: "hide",
        });
        break;
      //Once our buttons have been clicked, we will be accessing our lists of skills
      //if frontend
      case "frontend":
        switch (status.frontend) {
          //if frontend is show
          case "show":
            //Change to hide
            setStatus({
              frontend: "hide",
              backend: "hide",
            });
            break;
          //By default, change to show
          default:
            setStatus({
              frontend: "show",
              backend: "hide",
            });
        }
        break;
      //Case for backend
      case "backend":
        switch (status.backend) {
          //if show
          case "show":
            setStatus({
              //Change to hide
              frontend: "hide",
              backend: "hide",
            });
            break;
          //By default change to show
          default:
            setStatus({
              frontend: "hide",
              backend: "show",
            });
        }
        break;
      default:
        console.log("Carol Baskin definitely did it 🐯");
    }
  };

  return (
    <div className="col-lg-6">
      <div className="column">
        <div className="row col-lg-6">
          <button
            name="frontend"
            className={toggledState.frontend}
            onClick={handleSkills}
          >
            Front-End
          </button>
        </div>
        <div className="row col-lg-6">
          <button
            name="backend"
            className={toggledState.backend}
            onClick={handleSkills}
          >
            Back-End
          </button>
        </div>
      </div>

      <div className="row">
        <div>
          <div className={status.frontend}>
            <ul>
              <li>React/Hooks</li>
              <li>CSS/SCSS</li>
              <li>Bulma</li>
              <li>Bootstrap</li>
              <li>HTML/HTML5</li>
              <li>Javascript/ES6</li>
            </ul>
          </div>

          <div className={status.backend}>
            <ul>
              <li>Node/Express</li>
              <li>MySQL</li>
              <li>Mongo.DB</li>
              <li>Web/Server APIs (Rest)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
