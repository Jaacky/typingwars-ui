import React, { Component } from 'react';

import styles from 'styles/GameRoomForm';

class GameRoomForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            roomNumber: "",
            nickname: "",
        };
    }

    handleNicknameChange = event => {
        this.setState({nickname: event.target.value})
    }

    handleOnChange = event => {
        this.setState({roomNumber: event.target.value})
    }

    handleCreateGameRoom = (event) => {
        event.preventDefault();

        this.props.createGameRoom(this.state);
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.enterRoom(this.state);
    }

    render() {
        return (
            <div className={styles.GameRoomForm}>
                <div>
                    <input type="text" placeholder="Nickname" 
                        onChange={this.handleNicknameChange} 
                        value={this.state.nickname}
                    />
                </div>
                <span>/</span>
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