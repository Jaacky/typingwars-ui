import React from 'react';
import { Redirect } from 'react-router';
import GameMap from 'components/GameMap';

import styles from 'styles/GameRoom';

const GameRoom = (props) => {
    console.log("Game room props", props);
    let players, p1, p2;
    if (!props.playerID || !props.players) {
        console.log("Redirecting to home from game room", props);
        return (
            <Redirect to="/" />
        )
    } else  {
        players = props.players;
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
                <h1>Game room - {props.gameId}</h1>
            </div>
            <div className={styles.Display}>
                <ul>
                    <li>{p1.nickname} {props.playerID == p1.id ? '(You)': ''} </li>
                    <li>{p2.nickname} {props.playerID == p2.id ? '(You)': ''}</li>
                    <li><button>Ready</button></li>
                </ul>
            </div>
            {/* <GameMap /> */}
        </div>
    )
}

export default GameRoom;