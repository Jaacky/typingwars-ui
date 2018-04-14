import React, { Component } from 'react';

class GameRoomForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            room: ""
        };
    }

    handleOnChange = event => {
        this.setState({room: event.target.value})
    }

    handleCreateGameRoom = (event) => {
        event.preventDefault();

        this.props.createGameRoom();
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.enterRoom(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleCreateGameRoom} >
                    <input type="submit" value="Create game room" />
                </form>
                <br/>
                <form onSubmit={this.handleSubmit} >
                    <input placeholder="Room" onChange={this.handleOnChange} value={this.state.room} />
                    <input type="submit" value="Enter" />
                </form>
            </div>
        )
    }
}

export default GameRoomForm;