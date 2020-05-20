import React from "react";

const Buttons = () => {
  return (
    <div className="row col-lg-12">
      <section>
        <button name={toggledState.skills} onClick={handleSkills}>
          Skills
        </button>
      </section>
      <section>
        <button name={toggledState.button} onClick={handleCreds}>
          Credentials
        </button>
      </section>
    </div>
  );
};

export default Buttons;
