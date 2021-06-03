import React, { Component } from "react";

class UserInput extends Component {

    /*** STATE ***/
    state = {
        name: ""
    }

    /*** EVENT HANDLERS ***/

    updateName = event => {
        this.setState({ name : event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
    }


    /*** RENDER ***/

    render = () => (
        <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Add a new name here..." value={this.state.name} />
            <input type="submit" value="Create Name Tag" />
        </form>
    )
    

}

export default UserInput;