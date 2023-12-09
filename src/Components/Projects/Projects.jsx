import React from "react";
import "./project.css";
import { details } from "./projects-data.js";
import NavBar from "../NavBar/NavBar.jsx";

export default function Projects() {
  const item = details.map(({ title, viewCode, viewProject }, index) => {
    return (
      <div className="item" key={index}>
        <img
          src={require(`./Projects-photos/project-${index}.png`)}
          alt={title}
        />
        <div className="details">
          <h2>{title} </h2>
          <ul>
            <li>
              <a href={viewCode} target="_blank" rel="noreferrer">
                view code
              </a>
            </li>
            <li>
              <a href={viewProject} target="_blank" rel="noreferrer">
                view project
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  });

  return (
    <>
      <NavBar />
      <div className="projects" id="projects">
        <h1>Projects</h1>

        <div className="warp">{item}</div>
      </div>
    </>
  );
}
