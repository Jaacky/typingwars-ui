import React, { Component } from 'react';

import styles from 'styles/GameRoomForm';

class GameRoomForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            roomId: "",
            username: "",
        };
    }

    handleUsernameChange = event => {
        this.setState({username: event.target.value})
    }

    handleOnChange = event => {
        this.setState({roomId: event.target.value})
    }

    handleCreateGameRoom = (event) => {
        event.preventDefault();

        this.props.createRoom(this.state);
    }

    handleEnterGameRoom = (event) => {
        event.preventDefault();

        this.props.enterRoom(this.state);
    }

    render() {
        return (
            <div className={styles.Container}>
                <div className={styles.GameRoomForm}>
                    <div>
                        <input className={styles.Field} type="text" placeholder="Username" 
                            onChange={this.handleUsernameChange} 
                            value={this.state.username}
                        />
                    </div>
                    {/* <span>/</span> */}
                    <form onSubmit={this.handleCreateGameRoom} >
                        <input type="submit" value="Create Game Room" />
                    </form>
                    {/* <span>/</span> */}
                    <form onSubmit={this.handleEnterGameRoom} >
                        <input className={styles.Field} placeholder="Room ID" onChange={this.handleOnChange} value={this.state.roomId} />
                        <input type="submit" value="Join Game Room" />
                    </form>
                </div>
            </div>
        )
    }
}

export default GameRoomForm;