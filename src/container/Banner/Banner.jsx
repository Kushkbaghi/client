import React from "react";
import "./Banner.scss";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { banner } from "../../images";
export default function Banner() {
  return (
    <section className="banner">
      <div className="banner__img">
        <img
          src={banner}
          alt="karton av två man och en kvinna och CSS, HTML och CSS logo"
        />
      </div>
      <div className="banner__CTA">
        <div className="banner__CTA-titles">
          <h1>Hej! Jag heter Nick.</h1>
          <p>Jag är en fullstack-utvecklare, välllkommen till min sida!</p>
        </div>
        <div className="banner__CTA-links">
          <a href="#contact" className="banner__CTA--kontakt">
            Kontakt
          </a>

          <div className="banner__CTA-media">
            <a href="#">
              <AiFillTwitterCircle />
            </a>
            <a href="#">
              <AiFillLinkedin />
            </a>
            <a href="#">
              {" "}
              <AiFillGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
