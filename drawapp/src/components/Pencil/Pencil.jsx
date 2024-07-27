import React from 'react'
import { useState, useContext, useEffect } from 'react'
import { BsFillPencilFill } from "react-icons/bs";
import styles from "./Pencil.module.css"
import PencilContainer from '../PencilContainer/PencilContainer';
import { ColorContext } from '../Context/ColorContext';

function Pencil() {
    const [isPressed, setIsPressed] = useState(false);
    const { changeTool, tool } = useContext(ColorContext);

    const buttonClass = isPressed && tool === "pencil" ? `${styles.buttonPencilPressed}` : `${styles.buttonPencil}`;
    useEffect(() => {
        if (tool !== "pencil") {
            setIsPressed(false);
        }
    }, [tool])

    const handlePressed = () => {
        if (isPressed) {
            changeTool(null);
            setIsPressed(false);

        } else {
            changeTool("pencil")
            setIsPressed(true)

        }
    }

    return (
        <div className={styles.container}>
            <button onClick={handlePressed} className={buttonClass}><BsFillPencilFill /></button>
            {isPressed && tool === "pencil" && <PencilContainer />}
        </div>

    )
}

export default Pencil
