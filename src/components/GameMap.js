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
    return (
        <div className={styles.GameMap}>
            Game Map
            <svg
                preserveAspectRatio="xMaxYMax none"
                viewBox={viewBox}
            >
                <Base adjustRatioWidth={adjustRatioWidth} adjustRatioHeight={adjustRatioHeight} x={5} y={50}/>
                <Base adjustRatioWidth={adjustRatioWidth} adjustRatioHeight={adjustRatioHeight} x={95} y={50}/>
            
                {/* <path d="M 20 20 C 20 110, 110 110, 110 20" stroke="black" fill="transparent"/> */}
            </svg>
        </div>
    )
}

export default GameMap;