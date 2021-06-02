import React from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag.js";
import "./styles.css";
import { randomNames } from "./data.js";

/* Callback function 
    - takes object and returns rendered NameTag */
const renderNameTag = (nameObject) => 
    <NameTag key={nameObject.id} name={nameObject.name}/>;




const App = () => {
    const nameArray = randomNames;
    if (!nameArray) {
        return null;
    }
    const NameTagElements = nameArray.map(renderNameTag);
    
    return (
        <div className="App">
            <h1>Name Tag Generator</h1>
            {NameTagElements}
        </div>
    )
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
