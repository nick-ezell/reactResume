import React from "react";
import "../../assets/style.css";
import { useSkillContext } from "../../utils/SkillsState";

const Skills = () => {
  const [state, dispatch] = useSkillContext();

  const handleClick = (event) => {
    dispatch({
      type: event.target.name,
    });
  };

  return (
    <>
      <div className="row">
        <button
          name="frontend"
          className={state.frontend}
          onClick={handleClick}
        >
          Front-End
        </button>

        <button name="backend" className={state.backend} onClick={handleClick}>
          Back-End
        </button>
      </div>

      <div className="row skills">
        <ul className={state.frontendskills}>
          <li>React/Hooks</li>
          <li>CSS/SCSS</li>
          <li>Bulma</li>
          <li>Bootstrap</li>
          <li>HTML/HTML5</li>
          <li>Javascript/ES6</li>
        </ul>

        <ul className={state.backendskills}>
          <li>Node/Express</li>
          <li>MySQL</li>
          <li>Mongo.DB</li>
          <li>Web/Server APIs (Rest)</li>
        </ul>
      </div>
    </>
  );
};

export default Skills;
