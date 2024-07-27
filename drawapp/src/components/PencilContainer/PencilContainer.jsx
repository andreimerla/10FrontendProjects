import React, { useEffect } from 'react'
import styles from "./PencilContainer.module.css"
import { useState, useContext } from 'react'
import { faCircle, faSquare, faMinus } from '@fortawesome/free-solid-svg-icons';
import { ColorContext } from '../Context/ColorContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PencilContainer = () => {
    const { changeLineWidth, changeOpacity, opacity, lineWidth, changeColor, color, changeTypePointer, typePointer } = useContext(ColorContext)
    const [value, setValue] = useState(lineWidth);
    const [opac, setOpac] = useState(opacity);
    const [currentColor, setCurrentColor] = useState(color);
    const [selectedPointer, setSelectedPointer] = useState(typePointer);
    useEffect(() => {
        setCurrentColor(color)
    }, [color])
    const handleValue = (value) => {
        setValue(value);
        changeLineWidth(value);
    }
    const handleInputValue = (value) => {

        if (!isNaN(value) && value >= 0 && value <= 50) {
            setValue(value)
        }
    }

    const handleOpacity = (value) => {
        setOpac(value)
        changeOpacity(value);
    }

    const handleInputOpacity = (value) => {
        if (!isNaN(value) && value >= 0 && value <= 1) {
            setOpac(value)
        }
    }
    const hexToRgb = (hex) => {
        hex = hex.replace(/^#/, '');

        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);

        return `rgb(${r},${g},${b},${opac}`
    }

    const rgbToHex = (rgb) => {
        const [r, g, b] = rgb.match(/\d+/g);
        return "#" + ((1 << 24) + (+r << 16) + (+g << 8) + +b).toString(16).slice(1);
    }
    const handleColor = (color) => {
        changeColor(hexToRgb(color))
    }
    const handleChangeTypePointer = (pointer) => {
        changeTypePointer(pointer);
        setSelectedPointer(pointer);
    };
    return (
        <div className={styles.container}>
            <input onChange={(e) => handleValue(e.target.value)} type="range" min="1" max="50" step="1" value={value} />
            <input type="text" value={value} onChange={(e) => handleInputValue(e.target.value)} />
            <input onChange={(e) => handleOpacity(e.target.value)} type="range" min="0" max="1" step="0.01" value={opac} />
            <input type="text" value={opac} onChange={(e) => handleInputOpacity(e.target.value)} />
            <input type="color" onChange={(e) => handleColor(e.target.value)} value={currentColor.startsWith('rgb') ? rgbToHex(currentColor) : currentColor} />
            <div>
                <p>pointer type</p>
                <button
                    style={{ backgroundColor: selectedPointer === 'round' ? 'red' : 'blue' }}
                    onClick={() => handleChangeTypePointer('round')}
                    className={styles.buttonPointer}
                >
                    <FontAwesomeIcon icon={faCircle} />
                </button>
                <button
                    style={{ backgroundColor: selectedPointer === 'square' ? 'red' : 'blue' }}
                    onClick={() => handleChangeTypePointer('square')}
                    className={styles.buttonPointer}
                >
                    <FontAwesomeIcon icon={faSquare} />
                </button>
                <button
                    style={{ backgroundColor: selectedPointer === 'butt' ? 'red' : 'blue' }}
                    onClick={() => handleChangeTypePointer('butt')}
                    className={styles.buttonPointer}
                >
                    <FontAwesomeIcon icon={faMinus} />
                </button>
            </div>

        </div>
    )
}

export default PencilContainer
