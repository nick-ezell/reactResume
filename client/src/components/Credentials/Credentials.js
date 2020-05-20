import React from "react";
import "../../assets/style.css";
import { useSkillContext } from "../../utils/SkillsState";

const Credentials = () => {
  const [state] = useSkillContext();

  return (
    <div className="col-lg-12">
      <div className={state.credentials + " creds"}>
        <div>
          <div>
            <i>
              <b>'Houston Coding Bootcamp'</b>
            </i>
            <br />
            Certified in Web Development, using the MERN stack technologies
            Mongo, Express, React and Node, to build fast, responsive and
            progressive single page applications
            <br />
            UT of Austin & Red McCombs School of Business
            <br />
            <i>(December Dec 2019-June 2020)</i>
          </div>
          <div>
            <i>
              <b>
                <a
                  href="https://nick-ezell.github.io/code.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  'code.me - https://nick-ezell.github.io/code.me/'
                </a>
              </b>
            </i>
            <br />
            GitHub Pages website made to generate practice coding problems, of
            varying difficulties, as well as relevant video references, with
            CodeWars and YouTube APIs
            <br />
            Kristen Evans, Mathew Thomas, Nick Ezell - Feb 2020
            <br />
            <i>(Bulma, HTML/SCSS, JavaScript/jQuery)</i>
            <br />
            <a
              href="https://github.com/nick-ezell/code.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              repo
            </a>
          </div>
          <div>
            <i>
              <b>
                <a
                  href="http://crisiscenter.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  'Coronavirus Crisis Center -
                  http://crisiscenter.herokuapp.com/'
                </a>
              </b>
            </i>
            <br />
            Full-stack application, utilizing the{" "}
            <a
              href="http://map.bitboy.live"
              target="_blank"
              rel="noopener noreferrer"
            >
              John Hopkins map
            </a>{" "}
            , NYT and Twitter APIs, that allows users to stay up-to-date with
            COVID-19 news, find and share quarantine activity ideas along with
            the ability to make and comment on posts in a forum
            <br />
            Angeli Li, Michael Connell, Nick Ezell - April 2020
            <br />
            <i>
              (Express/Node server, HTML/CSS/JS front-end, MySQL/Sequelize
              database)
            </i>
            <br />
            <a
              href="https://github.com/nick-ezell/crisisCenter"
              target="_blank"
              rel="noopener noreferrer"
            >
              repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credentials;
