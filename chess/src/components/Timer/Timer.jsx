import React from 'react'
import styles from "./Timer.module.css"
import { useState } from 'react';
const Timer = ({ timeValue, playerOneName, playerTwoName }) => {
    const [playerOneTime, setPlayerOneTime] = useState(timeValue);
    const [playerTwoTime, setPlayerTwoTime] = useState(timeValue);
    return (
        <div className={styles.timerContainer}>
            <div className={styles.playerTime}>
                <h1>{playerOneName} time:</h1>
                <h1>{playerOneTime}</h1>
            </div>

            <div className={styles.playerTime}>
                <h1>{playerTwoName} time:</h1>
                <h1>{playerTwoTime}</h1>
            </div >

        </div>
    )
}

export default Timer
