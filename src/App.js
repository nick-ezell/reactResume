import React from "react";
import "./App.css";
import "./assets/style.css";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";

function App() {
  return (
    <div>
      <div className="App col-lg-12">
        <Header />
        <Info />
      </div>
    </div>
  );
}

export default App;
