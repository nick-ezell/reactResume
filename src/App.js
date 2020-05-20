import React from "react";
import "./App.css";
import "./assets/style.css";
import Container from "./components/Container/Container";
import { SkillsProvider } from "./utils/SkillsState";

function App() {
  return (
    <SkillsProvider>
      <div className="App col-lg-12">
        <Container />
      </div>
    </SkillsProvider>
  );
}

export default App;
