import React, { useState } from "react";
import "./App.css";
// import "./assets/style.css";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Credentials from "./components/Credentials/Credentials";
import Modal from "./components/Modal/Modal";
import ModalContext from "./utils/ModalContext";

function App() {
  const [modal, setModal] = useState(
    {
      background: "show",
      modal: "hide",
      modalProps: () => {},
    },
    []
  );

  return (
    <div className="App col-md-10 offset-2 col-sm-10 offset-2">
      <ModalContext.Provider value={[modal, setModal]}>
        <Header />
        <Info />
        <Modal />
        <Credentials />
      </ModalContext.Provider>
    </div>
  );
}

export default App;
