import React from 'react';

import GameMap from 'components/GameMap';

import styles from 'styles/GameRoom';

const GameRoom = (props) => {
    return (
        <div className={styles.GameRoom}>
            <div className={styles.Header}>
                <h1>Game room - {props.gameId}</h1>
            </div>
            <div className={styles.Display}>
                <ul>
                    <li>You</li>
                    <li>Player 2</li>
                    <li><button>Ready</button></li>
                </ul>
            </div>
            {/* <GameMap /> */}
        </div>
    )
}

export default GameRoom;