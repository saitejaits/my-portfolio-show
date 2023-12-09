import React from "react";
import "./footer.css";
import NavBar from "../NavBar/NavBar";

export default function Footer() {
  return (
    <>
      <NavBar />
      <footer>
        <div className="person">
          <h1>Bommali Sai Teja</h1>
          <h3>Frontend Developer</h3>
        </div>
        <div className="contact-info" id="me">
          <h2>Contact info</h2>
          <ul>
            <li>+91-8106646665</li>
            <li>saitej14146@gmail.com</li>
            <li>Visakhapatnm, Andhra Pradesh, India, 530003</li>
          </ul>
        </div>
        <div className="social-links">
          <h2>Important links</h2>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/bommali-sai-teja-0bb5a8202/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i> linked in
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/saiteja14146/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <i className="fab fa-instagram"></i> instagram
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1-72GCMkSVlzFKDsa2qU6-LGvXmExsSSv/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fas fa-file-download"></i> Resume
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
