import React, { Component } from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag.js";
import "./styles.css";
//import { randomNames } from "./data.js";

const randomNames = [
    {
        "id": 1,
        "name": "Julius",
    },
    {
        "id": 2,
        "name": "Tomothy"
    },
    {
        "id": 3,
        "name": "Vildan",
    },
    {
        "id": 4,
        "name": "Maja",
    },
    {
        "id": 5,
        "name": "Ellen",
    },
    {
        "id": 6,
        "name": "Danilo",
    },
    {
        "id": 7,
        "name": "آریا",
    },
    {
        "id": 8,
        "name": "Amandus",
    },
    {
        "id": 9,
        "name": "Catarina",
    },
    {
        "id": 10,
        "name": "Meral",
    },
    {
        "id": 11,
        "name": "Elisa",
    },
    {
        "id": 12,
        "name": "آرتين",
    },
    {
        "id": 13,
        "name": "مهراد",
    },
    {
        "id": 14,
        "name": "Willibald",
    },
    {
        "id": 15,
        "name": "Ahmed",
    },
    {
        "id": 16,
        "name": "Noelia",
    },
    {
        "id": 17,
        "name": "Roderich",
    },
    {
        "id": 18,
        "name": "Astrid",
    },
    {
        "id": 19,
        "name": "Daniel",
    },
    {
        "id": 20,
        "name": "Noah",
    },
    {
        "id": 21,
        "name": "Rouven",
    },
    {
        "id": 22,
        "name": "Ülkü",
    },
    {
        "id": 23,
        "name": "Niké",
    },
    {
        "id": 24,
        "name": "Martin",
    }
];

class App extends Component {

    state = { names : randomNames };

    renderNameTag = (nameObject) => 
    <NameTag key={nameObject.id} name={nameObject.name}/>;

    NameTagElements = this.state.names.map(this.renderNameTag);
    
    render() {
        return (
            <div className="App">
                <h1>Name Tag Generator</h1>
                {this.NameTagElements}
            </div>
        )
    }
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
