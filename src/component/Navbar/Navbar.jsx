import React from "react";
import { logo } from "../../images";
import "./Navbar.scss";

import { useState } from "react";

export default function Navbar() {
  const [toggle, setToggle] = useState(false); // Set toggle for hamburger menu

  return (
    <nav className="nav">
      <a className="nav__logo-link" href="index.html">
        <img src={logo} alt="logotype"></img>
        <strong className="logo_text">Nick Kushkbaghi</strong>
      </a>
      <ul className=" desk-nav">
        {["start", "kontakt", "case", "arbetserfarenhet", "studier"].map(
          (nav) => (
            <li className="nav__list-item" key={`link-${nav}`}>
              <a href={`#${nav}`}>{nav}</a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}
