import React from "react";
import { logo } from "../../images";
import "./Navbar.scss";

import { useState } from "react";

export default function Navbar() {
  const [toggle, setToggle] = useState(false); // Set toggle for hamburger menu

  return (
    <nav class="nav">
      <a class="nav__logo-link" href="index.html">
        <img src={logo} alt="logotype"></img>
        <strong class="logo_text">Nick Kushkbaghi</strong>
      </a>
      <ul class=" desk-nav">
        {["Start", "Om mig", "Case", "Arbetserfarenhet", "Studier"].map(
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
