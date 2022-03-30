import React from "react";
import "./Contact.scss";
import { mailbox } from "../../images";
import { Form } from "../../component";

export default function Contact() {
  return (
    <section className="contact">
      <img className="sec-img" src={mailbox} alt="en post loda med brev" />
      <h2>Kontakta mig</h2>
      <Form/>
    </section>
  );
}
