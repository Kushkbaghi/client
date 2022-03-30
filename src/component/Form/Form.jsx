import React from 'react'
import './Form.scss'

export default function Form() {
  return (
<form action="nick.kushkbaghi@gmail.com" method="post" enctype="text/plain">
   
   <label for="fname">Namn</label>
   <input type="text" id="fname" name="firstname" placeholder="Ditt namn .." /> 
   
   <label for="lname">E-post</label>
   <input type="text" id="lname" name="lastname" placeholder="Ditt efternamn.."/>

   <label for="subject">Skicka</label>
   <textarea id="subject" name="subject" placeholder="Ditt meddelande.." style="height:200px"></textarea>

   <input type="submit" value="SICKA"/>
</form>

  );
}
