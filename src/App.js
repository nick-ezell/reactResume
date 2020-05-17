import React, { useEffect, useState } from "react";
import "./App.css";
// import "./assets/style.css";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Credentials from "./components/Credentials/Credentials";
import Modal from "./components/Modal/Modal";
import { ModalProvider, useModalContext } from "./utils/ModalContext";

function App() {
  const [state, dispatch] = useModalContext();
  const [initialState, setInitialState] = useState(useModalContext);

  const handleEvent = (event) => {
    switch (event) {
      case event.name === "skills":
        return dispatch({
          background: "hide",
          visibility: "show",
        });
      // case event.name === "credentials":
      //   return;
      default:
        return state;
    }
  };

  useEffect(() => {
    setInitialState({
      background: "show",
      visibility: "hide",
      eventHandler: handleEvent,
    });
  }, []);
  return (
    <div>
      <ModalProvider>
        <div className="App col-lg-10 col-md-10 col-sm-10 offset-2">
          <Header />
          <Info />
          <Modal />
          <Credentials />
        </div>
      </ModalProvider>
    </div>
  );
}

export default App;
