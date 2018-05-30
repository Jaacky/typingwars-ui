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

    render() {
        console.log("Game room this.props", this.props);
        let players, p1, p2;
        if (!this.props.playerID || !this.props.players) {
            console.log("Redirecting to home from game room", this.props);
            return (
                <Redirect to="/" />
            )
        } else  {
            players = this.props.players;
            p1 = players[0]
            if (players.length > 1) {
                p2 = players[1]
            } else {
                p2 = { nickname: "Waiting for player..." }
            }
        }
        
        return (
            <div className={styles.GameRoom}>
                <div className={styles.Header}>
                    <h1>Game room - {this.props.gameId}</h1>
                </div>
                <div className={styles.Display}>
                    <ul>
                        <li>{p1.nickname} {this.props.playerID == p1.id ? '(You)': ''}</li>
                        <li>{p2.nickname} {this.props.playerID == p2.id ? '(You)': ''}</li>
                        <li><button>Ready</button></li>
                    </ul>
                </div>
                {/* <GameMap /> */}
            </div>
        )
    }
}

export default GameRoom;