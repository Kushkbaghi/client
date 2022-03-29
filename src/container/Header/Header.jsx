import React from "react";
import "./Header.scss";
import { Navbar } from "../../component";
import { MobNav } from "../../component";

export default function Header() {
  return (
    <header className="header">
      <Navbar />
      <MobNav />
    </header>
  );
}
