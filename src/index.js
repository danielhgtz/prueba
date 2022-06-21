//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDom from "react-dom";

const hora = new Date("December 17, 1995 23:24:00").getHours();

let saludo = "";
const estilo = {
  color: ""
};

if (hora < 12) {
  saludo = "Good Morning";
  estilo.color = "red";
} else if (hora >= 12 && hora < 18) {
  saludo = "Wuenas Tardes";
  estilo.color = "green";
} else if (hora >= 18) {
  saludo = "Choches";
  estilo.color = "blue";
}

ReactDom.render(
  <div>
    <h1 className="heading" style={estilo}>
      {saludo}
    </h1>
  </div>,
  document.getElementById("root")
);
