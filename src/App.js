import React from "react";
import "./App.css";
// import "./assets/style.css";
import Header from "./components/Header";
import Info from "./components/Info/Info";
import Credentials from "./components/Credentials";

function App() {
  return (
    <div className="App">
      <Header />
      <Info />
      <Credentials />
    </div>
  );
}

export default App;
