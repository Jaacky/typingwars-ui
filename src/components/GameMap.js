import React from 'react';

import Base from 'components/svg/Base';
import Unit from 'components/svg/Unit';

import styles from 'styles/GameMap';

const GameMap = (props) => {
    const width = window.innerWidth;
    const height = window.innerHeight - 50;

    const adjustRatioWidth = width / 100;
    const adjustRatioHeight = height / 100;
    const viewBox = [0, 0, width, height];
    console.log(props)
    let space = props.space || { bases: [], units: [] };

    let bases = []
    for (let i=0; i<space.bases.length; i++) {
        console.log("Base: ", space.bases[i]);
        let base = space.bases[i];
        bases.push(
            <Base adjustRatioWidth={adjustRatioWidth} adjustRatioHeight={adjustRatioHeight} x={base.position.x} y={base.position.y} hp={base.hp} size={base.size} user={base.owner}/>
        )
    }

    let units = []
    for (let i=0; i<space.units.length; i++) {
        let unit = space.units[i];
        units.push(
            <Unit adjustRatioWidth={adjustRatioWidth} adjustRatioHeight={adjustRatioHeight} x={unit.position.x} y={unit.position.y} word={unit.word} typed={unit.typed} size={unit.size}/>
        )
    }

    return (
        <div className={styles.GameMap}>
            <svg
                preserveAspectRatio="xMidYMid"
                viewBox={viewBox}>
                {bases}
                {units}
            </svg>
        </div>
    )
}

export default GameMap;