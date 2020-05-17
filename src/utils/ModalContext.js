import React, { createContext, useReducer, useContext } from "react";
import Skills from "../components/Skills/Skills";
import Credentials from "../components/Credentials/Credentials";

const ModalContext = createContext({
  background: "",
  visibility: "",
  eventHandler: () => {},
});
const { Provider } = ModalContext;

function reducer(state, event) {
  switch (event) {
    case event.name === "skills":
      return <Skills />;
    case event.name === "credentials":
      return <Credentials />;
    default:
      return state;
  }
}

function ModalProvider({ value = [], ...props }) {
  const [state, dispatch] = useReducer(reducer, []);

  return <Provider value={[state, dispatch]} {...props} />;
}

function useModalContext() {
  return useContext(ModalContext);
}

export { ModalProvider, useModalContext };
