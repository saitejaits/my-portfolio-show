import React, { useState } from "react";
import "./NavBar.css";
import { MenuList } from "./menuList";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [clicked, setClicked] = useState(false);
  const menuList = MenuList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <Link to={url}>{title}</Link>
      </li>
    );
  });

  const clickHandler = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <nav>
        <div>
          <div className="menu-icon" onClick={clickHandler}>
            <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <ul className={clicked ? "menu-list" : "menu-list close"}>
            {menuList}
          </ul>
        </div>
      </nav>
    </div>
  );
}
