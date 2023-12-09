import React from "react";
import "./education.css";
import NavBar from "../NavBar/NavBar.jsx";

export default function Skills() {
  return (
    <>
      <NavBar />
      <div className="skillSet">
        <div className="skills" id="skills">
          <h1>Skils</h1>
          <ul>
            <li>
              <h3>HTML</h3>
              <div className="progressBarContainer">
                {" "}
                <div className="progressBarValue value-90">
                  <p>90%</p>
                </div>
              </div>
            </li>
            <li>
              <h3>css</h3>
              <div className="progressBarContainer">
                {" "}
                <div className="progressBarValue value-80">
                  <p>80%</p>
                </div>
              </div>
            </li>
            <li>
              <h3>java script</h3>
              <div className="progressBarContainer">
                {" "}
                <div className="progressBarValue value-70">
                  <p>70%</p>
                </div>
              </div>
            </li>
            <li>
              <h3>React js</h3>
              <div className="progressBarContainer">
                {" "}
                <div className="progressBarValue value-50">
                  <p>50%</p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="education" id="education">
          <h1>Education</h1>
          <ul>
            <li>
              <span>
                <i className="fas fa-graduation-cap"></i>Bachelor of Commerce
                (B-com)
              </span>
              <span>Gandhi Insstitute Of Technology And Management</span>
              <span>73%</span>
            </li>
            <li>
              <span>
                <i className="fas fa-graduation-cap"></i>Electrical &
                Electronics Engineer (Diploma){" "}
              </span>
              <span>SGPV, Visakhapatnam </span>
              <span>70.64%</span>
            </li>
            <li>
              <span>
                <i className="fas fa-graduation-cap"></i>SSC (10th)
              </span>
              <span>
                Prasanthi Niketan MVVSM EM HS Annakapali, Visakhapatnam{" "}
              </span>
              <span>7.3GDP</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
