import React, { Component } from "react";
import NameTagList from "./NameTagList";
import UserInput from "./UserInput"

class App extends Component {

  state = {
    names: []
  };

  componentDidUpdate() {
      const stateString = JSON.stringify(this.state);
      localStorage.setItem("stateString", stateString);
  }

  componentDidMount() {
      const stateString = localStorage.getItem("stateString");
      if (stateString) {
          this.setState(JSON.parse(stateString));
      }
  }

  addName = newName => {
      const newNameList = [newName, ...this.state.names];
      this.setState({names: newNameList});
  }

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
        <UserInput addName={this.addName} />
        <NameTagList names={this.state.names} removeName={this.removeName} />
      </div>
    );
  }
}

export default App;
