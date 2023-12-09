import React from "react";
import NavBar from "../NavBar/NavBar.jsx";
import "./home.css";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="Hero" id="home">
        <h4>Hello, This is</h4>
        <h1> Bommali Sai Teja</h1>
        <p>
          I am an aspiring Frontend developer from vizag, India. I always try to
          show unique views to the audience through my websites.
        </p>
        <a
          href="https://drive.google.com/file/d/1-72GCMkSVlzFKDsa2qU6-LGvXmExsSSv/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fas fa-file-download"></i> Resume
        </a>
      </div>
    </>
  );
}
