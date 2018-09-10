import React from 'react';

const Base = (props) => {
    console.log("base: ", props.adjustRatioWidth, props.adjustRatioHeight);
    const baseSize = 60;
    const x = props.x * props.adjustRatioWidth;
    const y = props.y * props.adjustRatioHeight;
    const path = `M${x - baseSize/2} ${y - baseSize/2} h ${baseSize} v ${baseSize} h ${-baseSize} Z`;
    
    return (
        <path
            d={path} fill="transparent" stroke="black" stroke-width="8" stroke-linejoin="round"
        />
        // <circle cx={props.x * props.adjustRatioWidth} cy={props.y * props.adjustRatioHeight} r={5} />
    )
}

export default Base;