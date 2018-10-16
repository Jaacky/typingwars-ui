import React, { Component } from 'react';
import { Redirect } from 'react-router';
import GameMap from 'components/GameMap';

import styles from 'styles/GameRoom';

class GameRoom extends Component {
    constructor(props) {
        super(props);
    }

    handleReadyToggle = () => {
        let readyFlag = !this.props.readyStatus[this.props.clientId];
        this.props.playerReady(readyFlag);
    }

    render() {
        console.log("Game room this.props", this.props);
        if (this.props.loading) {
            return <h1>Loading</h1>
        }
        let players;
        if (!this.props.clientId || !this.props.players) {
            console.log("Redirecting to home from game room", this.props);
            return (
                <Redirect to="/" />
            )
        }

        console.log("this.props.readyStatus", this.props.readyStatus, this.props.clientId);

        players = this.props.players;

        let playersDisplay = Object.keys(players).map((clientId) => {
            let player = players[clientId];
            console.log("Generating player display: ", player)
            return (
            <li className={`
                ${styles.Player}
                ${this.props.readyStatus[player.id] ? styles.PlayerReady : ''}
            `}>
                {player.username} {this.props.clientId === player.id ? '(You)' : ''}
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

        let display = this.props.gameStatus
            ? 
                <div className={styles.Display}>
                    <GameMap
                        bases={this.props.bases}
                    />
                </div>
            : <div className={styles.Display}>
                <ul>
                    {playersDisplay}
                    <li>
                        <button className={`${styles.Ready} ${this.props.readyStatus[this.props.clientId] ? styles.readyButton : ''}`} onClick={this.handleReadyToggle}>Ready</button>
                    </li>
                    <li>
                        <button className={styles.Ready} onClick={this.props.startGame} disabled={!this.props.startFlag}>Start</button>
                    </li>
                </ul>
            </div>

        return (
            <div className={styles.GameRoom}>
                <div className={styles.Header}>
                    <h1>Game room - {this.props.roomId}</h1>
                </div>
                {display}
                {/* <GameMap /> */}
            </div>
        )
    }
}

export default GameRoom;