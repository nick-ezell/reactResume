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
      <div className="row center col-lg-12">
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

      <div className="row skills col-lg-12">
        <div className={state.frontendskills}>
          <br />
          React/Hooks
          <br />
          CSS/SCSS
          <br />
          Bulma
          <br />
          Bootstrap
          <br />
          HTML/HTML5
          <br />
          Javascript/ES6
        </div>

        <div className={state.backendskills}>
          <br />
          Node/Express
          <br />
          MySQL
          <br />
          Mongo.DB
          <br />
          Web/Server APIs (Rest)
        </div>
      </div>
    </>
  );
};

export default Skills;
