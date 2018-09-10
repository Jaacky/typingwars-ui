import React from 'react';

import styles from 'styles/GameMap';

const GameMap = (props) => {
    console.log("Game Map props:", props);
    // const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight - 50];
    const width = window.innerWidth;
    const height = window.innerHeight - 50;

    const adjustRatioWidth = width / 100;
    const adjustRatioHeight = height / 100;
    console.log(5 * adjustRatioWidth);
    const viewBox = [0, 0, width, height];
    return (
        <div className={styles.GameMap}>
            Game Map
            <svg
                preserveAspectRatio="xMaxYMax none"
                viewBox={viewBox}
            >
                <circle cx={5 * adjustRatioWidth} cy={50 * adjustRatioHeight} r={5} />
                <circle cx={95 * adjustRatioWidth} cy={50 * adjustRatioHeight} r={50} />
                <path d="M 20 20 C 20 110, 110 110, 110 20" stroke="black" fill="transparent"/>
            </svg>
        </div>
    )
}

export default GameMap;