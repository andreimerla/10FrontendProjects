import React from 'react'
import styles from "./EraserContainer.module.css"
import { useState, useContext, useEffect } from 'react'
import { ColorContext } from '../Context/ColorContext'

const EraserContainer = () => {
    const { changeLineWidth, lineWidth, changeColor, changeTypePointer } = useContext(ColorContext)
    const [value, setValue] = useState(lineWidth);

    const handleValue = (value) => {
        setValue(value);
        changeLineWidth(value);
    }
    const handleInputValue = (value) => {

        if (!isNaN(value) && value >= 0 && value <= 50) {
            setValue(value)
        }
    }

    return (
        <div className={styles.container}>
            <input onChange={(e) => handleValue(e.target.value)} type="range" min="1" max="50" step="1" value={value} />
            <input type="text" value={value} onChange={(e) => handleInputValue(e.target.value)} />
        </div>
    )
}

export default EraserContainer
