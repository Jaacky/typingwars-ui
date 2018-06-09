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

        console.log("this.props.readyStatus", this.props.readyStatus, this.props.playerID);

        players = this.props.players;

        let playersDisplay = players.map((player) => {
            console.log("Generating player display: ", player)
            return (
            <li className={`
                ${styles.Player}
                ${this.props.readyStatus[player.id] ? styles.readyPlayer : ''}
            `}>
                {player.nickname} {this.props.playerID === player.id ? '(You)' : ''}
            </li>
            )
        })
        
        if (playersDisplay.length < this.props.roomSize) {
            while (playersDisplay.length < this.props.roomSize) {
                playersDisplay.push(
                    <li className={styles.Player}>Waiting for another player...</li>
                )
            }
        }
        console.log("playersDisplay: ", playersDisplay);

        return (
            <div className={styles.GameRoom}>
                <div className={styles.Header}>
                    <h1>Game room - {this.props.gameId}</h1>
                </div>
                <div className={styles.Display}>
                    <ul>
                        {playersDisplay}
                        <button className={`${styles.Ready} ${this.state.ready ? styles.readyButton : ''}`} onClick={this.handleReadyToggle}>Ready</button>
                    </ul>
                </div>
                {/* <GameMap /> */}
            </div>
        )
    }
}

export default GameRoom;