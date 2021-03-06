import React, { createContext, useContext, useReducer } from "react";

//Create a context for skill lists to be shown/hidden
const skillContext = createContext({
  skills: "hide",
  frontend: "hide",
  backend: "hide",
  frontendskills: "hide",
  backendskills: "hide",
  button: "closed",
  credentials: "hide",
});

//Accessing context
const useSkillContext = () => {
  return useContext(skillContext);
};
// console.log(useSkillContext);

const { Provider } = skillContext;

function reducer(state, action) {
  //Set a condition on the event target's name
  switch (action.type) {
    //the first two cases in our switch pertain to our "Front-End" and "Back-End" buttons
    //if hide
    case "hide":
      return {
        ...state,
        //Change the context

        skills: "show",
        frontend: "show",
        backend: "show",
      };
    //if show
    case "show":
      return {
        ...state,
        //Change the context

        skills: "hide",
        frontend: "hide",
        backend: "hide",
        //Our lists our hidden so that, even if open, when "skills" is hidden, as are they
        frontendskills: "hide",
        backendskills: "hide",
      };
    //Once our buttons have been clicked, we will be accessing our lists of skills
    //if frontend
    case "frontend":
      switch (state.frontend === "hide") {
        //if frontend is show
        case state.frontend === "show":
          return {
            ...state,
            //Change to hide
            frontendskills: "hide",
            backendskills: "hide",
          };

        //By default, change to show
        default:
          return {
            ...state,

            frontendskills: "show",
            backendskills: "hide",
            button: "closed",
            credentials: "hide",
          };
      }
    //Case for backend
    case "backend":
      switch (state.backend === "hide") {
        //if show
        case state.backend === "show":
          return {
            ...state,
            //Change to hide
            frontendskills: "hide",
            backendskills: "hide",
          };
        //By default change to show
        default:
          return {
            ...state,
            frontendskills: "hide",
            backendskills: "show",
            button: "closed",
            credentials: "hide",
          };
      }

    case "closed":
      return {
        ...state,
        skills: "hide",
        frontend: "hide",
        backend: "hide",
        frontendskills: "hide",
        backendskills: "hide",
        button: "open",
        credentials: "show",
      };

    case "open":
      return {
        ...state,
        skills: "hide",
        frontend: "hide",
        backend: "hide",
        frontendskills: "hide",
        backendskills: "hide",
        button: "closed",
        credentials: "hide",
      };

    default:
      console.log("Carol Baskin definitely did it 🐯");
  }
}

function SkillsProvider({ value = [], ...props }) {
  const [state, dispatch] = useReducer(reducer, {
    skills: "hide",
    frontend: "hide",
    backend: "hide",
    frontendskills: "hide",
    backendskills: "hide",
    button: "closed",
    credentials: "hide",
  });

  return <Provider value={[state, dispatch]} {...props} />;
}

export { SkillsProvider, useSkillContext };
