import React from "react";
import { tools } from "../../images";

import "./Tech.scss";
import {
  DiSass,
  DiCss3,
  DiMongodb,
  DiHtml5,
  DiJavascript1,
  DiPhp,
  DiGulp,
  DiMysql,
} from "react-icons/di";
import { GrReactjs } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import { SiDotnet, SiAdobexd, SiAdobeillustrator } from "react-icons/si";

export default function Tech() {
  return (
    <section className="tech">
      <img className="sec-img" src={tools} salt="en man sitter vid datorer" />
      <h2>Verktyg jag använder</h2>
      <div className="mytech">
        <DiCss3 />
        <DiHtml5 />
        <DiJavascript1 />
        <DiPhp />
        <SiAdobeillustrator />
        <SiAdobexd />
        <SiDotnet />
        <DiMongodb />
        <DiSass />
        <AiFillGithub />
        <GrReactjs />
        <DiGulp />
        <DiMysql />
      </div>
    </section>
  );
}
