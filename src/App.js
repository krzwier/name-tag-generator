import React, { Component } from "react";
import NameTagList from "./NameTagList.js";

class App extends Component {
  state = {
    names: [
        "Julius",
       "Tomothy",
        "Vildan",
        "Maja",
        "Ellen",
        "Danilo",
       "آریا",
        "Amandus",
        "Catarina",
        "Meral",
        "Elisa",
        "آرتين",
        "مهراد",
        "Willibald",
        "Ahmed",
        "Noelia",
        "Roderich",
        "Astrid",
        "Daniel",
        "Noah",
        "Rouven",
        "Ülkü",
        "Niké",
        "Martin"]
  };
  removeName = (clickedIndex) => {
    // to learn how the .filter method works, check out https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    const filterCallback = (_, index) => index !== clickedIndex;
    const newNames = this.state.names.filter(filterCallback);
    this.setState({ names: newNames });
  };
  render() {
    return (
      <div className="App">
        <h1>Name Tag Generator</h1>
        <NameTagList names={this.state.names} removeName={this.removeName} />
      </div>
    );
  }
}

export default App;
