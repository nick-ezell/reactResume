import React from "react";
import "./App.css";
// import "./assets/style.css";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Credentials from "./components/Credentials/Credentials";

function App() {
  return (
    <div>
      <div className="App col-lg-10 col-md-10 col-sm-10 offset-2">
        <Header />
        <Info />
        <Credentials />
      </div>
    </div>
  );
}

export default App;
