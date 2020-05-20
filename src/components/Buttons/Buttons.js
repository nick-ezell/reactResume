import React from "react";
import { useSkillContext } from "../../utils/SkillsState";

const Buttons = () => {
  const [state, dispatch] = useSkillContext();
  const handleClick = (event) => {
    dispatch({
      type: event.target.name,
    });
  };
  console.log(state.skills);
  return (
    <div className="row col-lg-12">
      <button name={state.skills} onClick={handleClick}>
        Skills
      </button>

      <button name={state.button} onClick={handleClick}>
        Credentials
      </button>
    </div>
  );
};

export default Buttons;
