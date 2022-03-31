import React from "react";
import "./Form.scss";

export default function Form() {
  return (
    <form
      action="mailto:someone@example.com"
      method="post"
      enctype="text/plain"
    >
      <label for="fname">Namn</label>
      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="Ditt namn .."
      ></input>

      <label for="lname">E-post</label>
      <input
        type="text"
        id="lname"
        name="lastname"
        placeholder="Ditt efternamn.."
      ></input>

      <label for="subject">Skicka</label>
      <textarea
        id="subject"
        name="subject"
        placeholder="Ditt meddelande.."
      
      ></textarea>

      <input type="submit" value="SICKA"></input>
    </form>
  );
}
