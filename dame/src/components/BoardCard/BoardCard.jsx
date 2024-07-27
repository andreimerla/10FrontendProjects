import React from 'react'
import styles from "./BoardCard.module.css"
import { useContext, useState } from 'react'
import SettingsContext from '../SettingsContext/SettingsContext'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
const BoardCard = ({ slides }) => {
    const { toggleBoard } = useContext(SettingsContext)
    const [currentImage, setCurrentImage] = useState(0);
    const handleRight = () => {
        if (currentImage === 4) {
            setCurrentImage(0);
        } else {
            setCurrentImage(currentImage + 1);
        }
    }
    const handleChangeBoard = () => {
        toggleBoard(slides[currentImage].defWhite, slides[currentImage].defBlack)
    }

    const handleLeft = () => {
        if (currentImage === 0) {
            setCurrentImage(4);
        } else {
            setCurrentImage(currentImage - 1);
        }
    }
    return (
        <div className={styles.boardContainer}>
            <button className={styles.leftElement} onClick={handleLeft}><FaChevronLeft /></button>
            <img className={styles.boardImg} src={slides[currentImage].url} alt={slides[currentImage].alt} />
            <button className={styles.rightElement} onClick={handleRight}><FaChevronRight /></button>
            <div className={styles.buttonContainer}>
                <button className={styles.changeButton} onClick={handleChangeBoard}>ChangeBoard</button>
            </div>
        </div>
    )
}

export default BoardCard
