import React, { useState } from 'react'
import "./style.scss";

const getRamdom = () => {
    const colors = ['red', 'black', 'yellow', 'blue']
    return colors[Math.trunc(Math.random() * 4)]
}

const ColorBox = () => {
    const [color, setColor] = useState(() => localStorage.getItem('color') || 'red' )

    const handleColorBox = () => {
        const newColor = getRamdom()
        setColor(newColor)

        localStorage.setItem('color', newColor)
    }

    return ( <div 
    className="colorbox"
    onClick={handleColorBox}
    style={{ backgroundColor: color }}>
    </div> );
}
 
export default ColorBox;