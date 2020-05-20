import React from "react";
import "../../assets/style.css";
import Header from "../Header/Header";
import Contact from "../Contact/Contact";
import BrandStatement from "../BrandStatement/BrandStatement";
import Buttons from "../Buttons/Buttons";
import Skills from "../Skills/Skills";
import Credentials from "../Credentials/Credentials";

import { SkillsProvider } from "../../utils/SkillsState";

const Container = () => {
  return (
    <SkillsProvider>
      <div className="row ">
        <div className="row ">
          <Header />
        </div>
        <div className="row ">
          <Contact />
        </div>
        <div className="row ">
          <BrandStatement />
          <Buttons />
          <Skills />
          <Credentials />
        </div>
      </div>
    </SkillsProvider>
  );
};

export default Container;
