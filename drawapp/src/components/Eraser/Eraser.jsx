import React, { useEffect } from 'react'
import styles from "./Eraser.module.css"
import { FaEraser } from "react-icons/fa";
import { useState, useContext } from 'react';
import { ColorContext } from '../Context/ColorContext';
import EraserContainer from '../EraserContainer/EraserContainer';

const Eraser = () => {
    const [isPressed, setIsPressed] = useState(false);
    const { changeTool, tool } = useContext(ColorContext);

    const buttonClass = isPressed && tool === "eraser" ? `${styles.buttonEraserPressed}` : `${styles.buttonEraser}`;
    useEffect(() => {
        if (tool !== "eraser") {
            setIsPressed(false);
        }
    }, [tool])

    const handlePressed = () => {
        console.log(tool + " " + isPressed)
        if (isPressed) {
            changeTool(null);
            setIsPressed(false);

        } else {
            changeTool("eraser")
            setIsPressed(true)

        }
    }

    return (
        <div className={styles.container}>
            <button className={buttonClass} onClick={handlePressed}><FaEraser /></button>
            {isPressed && tool === "eraser" && <EraserContainer />}
        </div >
    )
}

export default Eraser
