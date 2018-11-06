import React from 'react';

import Base from 'components/svg/Base';
import Unit from 'components/svg/Unit';

import styles from 'styles/GameMap';

const GameMap = (props) => {
    // console.log("Game Map props:", props);
    // const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight - 50];
    const width = window.innerWidth;
    const height = window.innerHeight - 50;

    const adjustRatioWidth = width / 100;
    const adjustRatioHeight = height / 100;
    // console.log("gamemap: ", adjustRatioWidth, adjustRatioHeight);
    const viewBox = [0, 0, width, height];

    var hp = 50;
    let space = props.space || { bases: [] };

    let bases = []
    for (let i=0; i<space.bases.length; i++) {
        console.log("Base: ", space.bases[i]);
        let base = space.bases[i];
        bases.push(
            <Base adjustRatioWidth={adjustRatioWidth} adjustRatioHeight={adjustRatioHeight} x={base.position.x} y={base.position.y} hp={base.hp} user={base.owner}/>
        )
    }

    return (
        <div className={styles.GameMap}>
            Game Map
            <svg
                preserveAspectRatio="xMidYMid"
                viewBox={viewBox}
            >
                {bases}
                {/* <Base adjustRatioWidth={adjustRatioWidth} adjustRatioHeight={adjustRatioHeight} x={5} y={50} hp={hp} user="abc"/>
                <Base adjustRatioWidth={adjustRatioWidth} adjustRatioHeight={adjustRatioHeight} x={95} y={50} hp={hp} user="def"/> */}
                <Unit adjustRatioWidth={adjustRatioWidth} adjustRatioHeight={adjustRatioHeight} x={50} y={50} word="fabuloous" typed="fab" remains="uloous"/>
                {/* <path d="M 20 20 C 20 110, 110 110, 110 20" stroke="black" fill="transparent"/> */}
            </svg>
        </div>
    )
}

export default GameMap;