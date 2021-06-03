import React, { Component } from "react";

class UserInput extends Component {

    /*** STATE ***/
    state = {
        name: ""
    }

    /*** EVENT HANDLERS ***/

    updateName = event => {
        this.setState({ name: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.name !== "") {
            this.props.addName(this.state.name);
            this.setState({ name: "" });
        }

    }


    /*** RENDER ***/

    render = () => (
        <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Add a new name here..." value={this.state.name} onChange={this.updateName} />
            <input type="submit" value="Create Name Tag" />
        </form>
    )


}

export default UserInput;