import React from 'react'
import { useContext } from 'react'
import { ColorContext } from '../Context/ColorContext'
import styles from "./ColorPalette.module.css"

const ColorPalette = () => {
    const { changeColor } = useContext(ColorContext)

    const handleColor = (color) => {
        changeColor(color)
    }

    return (
        <div className={styles.container}>
            <div className={styles.column}>
                <button style={{ backgroundColor: "red" }} onClick={() => handleColor("rgb(255, 0, 0, 1)")} className={styles.button}></button>
                <button style={{ backgroundColor: "blue" }} onClick={() => handleColor("rgb(0, 0, 255, 1)")} className={styles.button}></button>
                <button style={{ backgroundColor: "green" }} onClick={() => handleColor("rgb(0, 128, 0, 1)")} className={styles.button}></button>
                <button style={{ backgroundColor: "brown" }} onClick={() => handleColor("rgb(165, 42, 42, 1)")} className={styles.button}></button>
                <button style={{ backgroundColor: "pink" }} onClick={() => handleColor("rgb(255, 192, 203, 1)")} className={styles.button}></button>
                <button style={{ backgroundColor: "purple" }} onClick={() => handleColor("rgb(128, 0, 128, 1)")} className={styles.button}></button>
                <button style={{ backgroundColor: "orange" }} onClick={() => handleColor("rgb(255, 165, 0, 1)")} className={styles.button}></button>
                <button style={{ backgroundColor: "black" }} onClick={() => handleColor("rgb(0, 0, 0, 1)")} className={styles.button}></button>
            </div>
            <div className={styles.column}>
                <button style={{ backgroundColor: "yellow" }} onClick={() => handleColor("rgb(255, 255, 0, 1)")} className={styles.button}></button>
                <button style={{ backgroundColor: "olive" }} onClick={() => handleColor("rgb(128, 128, 0, 1)")} className={styles.button}></button>
                <button style={{ backgroundColor: "lime" }} onClick={() => handleColor("rgb(0, 255, 0, 1)")} className={styles.button}></button>
                <button style={{ backgroundColor: "teal" }} onClick={() => handleColor("rgb(0, 128, 128, 1)")} className={styles.button}></button>
                <button style={{ backgroundColor: "navy" }} onClick={() => handleColor("rgb(0, 0, 128, 1)")} className={styles.button}></button>
                <button style={{ backgroundColor: "cyan" }} onClick={() => handleColor("rgb(0, 255, 255, 1)")} className={styles.button}></button>
                <button style={{ backgroundColor: "silver" }} onClick={() => handleColor("rgb(192, 192, 192, 1)")} className={styles.button}></button>
                <button style={{ backgroundColor: "white" }} onClick={() => handleColor("rgb(255, 255, 255, 1)")} className={styles.button}></button>
            </div>
        </div>
    )
}

export default ColorPalette
