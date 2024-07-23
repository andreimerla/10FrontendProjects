import React from 'react'
import styles from "./BoardCard.module.css"
import { useState } from 'react';
const BoardCard = ({ slides }) => {

    const [currentImage, setCurrentImage] = useState(0);
    const handleRight = () => {
        if (currentImage === 2) {
            setCurrentImage(0);
        } else {
            setCurrentImage(currentImage + 1);
        }
    }

    const handleLeft = () => {
        if (currentImage === 0) {
            setCurrentImage(2);
        } else {
            setCurrentImage(currentImage - 1);
        }
    }
    return (
        <div className={styles.boardContainer}>
            <button onClick={handleLeft}>left</button>
            <img src={slides[currentImage].url} alt={slides[currentImage].alt} />
            <button onClick={handleRight}>right</button>
        </div>
    )
}

export default BoardCard
