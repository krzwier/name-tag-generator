import React from "react";
import ReactDOM from "react-dom";

import NameTag from "./NameTag.js";
import "./styles.css";

const App = () => (
  <div className="App">
    <h1>Name Tag Generator</h1>
    <NameTag name="Sabina"/>
    <NameTag name="Gopal"/>
    <NameTag name="Bonnie"/>
    <NameTag name="Hafsah"/>
    <NameTag name="Xiu" />
    <NameTag name="Otto"/>
    <NameTag name="Mbali"/>
    <NameTag name="Azad"/>
    <NameTag name="Mattias"/>

  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
