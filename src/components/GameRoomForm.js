import React, { Component } from 'react';

import styles from 'styles/GameRoomForm';

class GameRoomForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            roomNumber: ""
        };
    }

    handleOnChange = event => {
        this.setState({roomNumber: event.target.value})
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
            <div className={styles.GameRoomForm}>
                <form onSubmit={this.handleCreateGameRoom} >
                    <input type="submit" value="Create game room" />
                </form>
                <span>/</span>
                <form onSubmit={this.handleSubmit} >
                    <input placeholder="Room Number" onChange={this.handleOnChange} value={this.state.roomNumber} />
                    <input type="submit" value="Enter" />
                </form>
            </div>
        )
    }
}

export default GameRoomForm;