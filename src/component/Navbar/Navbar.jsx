import React from "react";
import { banner, logo } from "../../images";

export default function Navbar() {
  return (
    <nav class="nav">
      <a class="nav__logo-link" href="index.html">
        <img src={logo} alt="nick signatur"></img>

        <strong class="logo_text">Nick Kushkbaghi</strong>
      </a>

      <ul class="nav__list-items">
        <li>
          <a href="index.html">Start</a>
        </li>
        <li>
          <a href="#nav_om">Om mig</a>
        </li>
        <li>
          <a href="#nav_projekt">Projekt</a>
        </li>
        <li>
          <a href="#nav_studier">Studier</a>
        </li>
        <li>
          <a href="#nav_arbete">Arbetserfarenhet</a>
        </li>
      </ul>
    </nav>
  );
}
