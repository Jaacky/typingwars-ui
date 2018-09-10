import React from 'react';

import Base from 'components/svg/Base';

import styles from 'styles/GameMap';

const GameMap = (props) => {
    console.log("Game Map props:", props);
    // const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight - 50];
    const width = window.innerWidth;
    const height = window.innerHeight - 50;

    const adjustRatioWidth = width / 100;
    const adjustRatioHeight = height / 100;
    console.log("gamemap: ", adjustRatioWidth, adjustRatioHeight);
    const viewBox = [0, 0, width, height];

    var hp = 50;
    return (
        <div className={styles.GameMap}>
            Game Map
            <svg
                preserveAspectRatio="xMidYMid"
                viewBox={viewBox}
            >
                <Base adjustRatioWidth={adjustRatioWidth} adjustRatioHeight={adjustRatioHeight} x={5} y={50} hp={hp} user="abc"/>
                <Base adjustRatioWidth={adjustRatioWidth} adjustRatioHeight={adjustRatioHeight} x={95} y={50} hp={hp} user="def"/>
                
                {/* <path d="M 20 20 C 20 110, 110 110, 110 20" stroke="black" fill="transparent"/> */}
            </svg>
        </div>
    )
}

export default GameMap;