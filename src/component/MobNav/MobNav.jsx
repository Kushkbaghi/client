import React from "react";
import { logo } from "../../images";
import "./MobNav.scss";
// Include framer motion and react icons
import { BiMenuAltLeft } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

import { motion } from "framer-motion";

export default function MobNav() {
  const [toggle, setToggle] = useState(false); // Set toggle for hamburger menu

  return (
    <div className="mobNav">
      <div className="log">
        <img className="mobLogo" src={logo} alt="logotype"></img>
      </div>
      {toggle ? (
        <motion.div
          whileInView={{ x: [300, -5] }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <div className="close">
            <AiOutlineClose onClick={() => setToggle(false)} />
          </div>
          <ul class="mobNav__items">
            {["start", "kontakt", "case", "arbetserfarenhet", "studier"].map(
              (nav) => (
                <li className="nav__list-item mobNav__item-" key={nav}>
                  <a href={`#${nav}`}>{nav}</a>
                </li>
              )
            )}
          </ul>
        </motion.div>
      ) : (
      
          <div className="open">
            <BiMenuAltLeft className="open" onClick={() => setToggle(true)} />
          </div>
       
      )}
    </div>
  );
}
