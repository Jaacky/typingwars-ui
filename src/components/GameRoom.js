import React, { Component } from 'react';
import { Redirect } from 'react-router';
import GameMap from 'components/GameMap';

import styles from 'styles/GameRoom';

class GameRoom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ready: false,
        };
    }

    handleReadyToggle = () => {
        let readyFlag = !this.state.ready;
        this.setState({ready: readyFlag});
        this.props.playerReady(readyFlag);
    }

    render() {
        console.log("Game room this.props", this.props, this.state.ready);
        let players, p1, p2;
        if (!this.props.playerID || !this.props.players) {
            console.log("Redirecting to home from game room", this.props);
            return (
                <Redirect to="/" />
            )
        }

        players = this.props.players;
        p1 = players[0]
        if (players.length > 1) {
            p2 = players[1]
        } else {
            p2 = { nickname: "Waiting for another player..." }
        }

        let isClientP1 = this.props.playerID == p1.id,
            isClientP2 = this.props.playerID == p2.id;

        return (
            <div className={styles.GameRoom}>
                <div className={styles.Header}>
                    <h1>Game room - {this.props.gameId}</h1>
                </div>
                <div className={styles.Display}>
                    <ul>
                        <li className={`${styles.Player} ${isClientP1 && this.state.ready ? styles.readyPlayer : ''}`}>
                            {p1.nickname} { isClientP1 ? '(You)': ''}
                        </li>
                        <li className={`${styles.Player} ${isClientP2 && this.state.ready ? styles.readyPlayer : ''}`}>
                            {p2.nickname} { isClientP2 ? '(You)': ''}
                        </li>
                        <button className={`${styles.Ready} ${this.state.ready ? styles.readyButton : ''}`} onClick={this.handleReadyToggle}>Ready</button>
                    </ul>
                </div>
                {/* <GameMap /> */}
            </div>
        )
    }
}

export default GameRoom;