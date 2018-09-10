import React from 'react';

import styles from 'styles/GameMap';

const Unit = (props) => {
    console.log("Unit: ", props.adjustRatioWidth, props.adjustRatioHeight);
    const unitSize = 8;
    const x = props.x * props.adjustRatioWidth;
    const y = props.y * props.adjustRatioHeight;

    return (
        <g>
            <circle
                cx={x} cy={y} r={unitSize} fill="transparent" stroke="black" strokeWidth="8"/>  
            <text className={styles.Unit} x={x} y={y-20} textAnchor="middle">
                <tspan className={styles.Typed}>{props.typed}</tspan>
                <tspan>{props.remains}</tspan>
            </text>
        </g>
        // <circle cx={props.x * props.adjustRatioWidth} cy={props.y * props.adjustRatioHeight} r={5} />
    )
}

export default Unit;