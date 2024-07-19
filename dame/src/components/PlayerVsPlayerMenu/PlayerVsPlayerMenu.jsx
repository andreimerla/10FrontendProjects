import React from 'react'
import styles from "./PlayerVsPlayer.module.css"
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

const PlayerVsPlayerMenu = () => {
    const navigate = useNavigate();
    const [playerOneName, setPlayerOneName] = useState("");
    const [playerTwoName, setPlayerTwoName] = useState("")
    const [timeValue, setTimeValue] = useState(50);

    const handleStart = () => {
        navigate("/game", { state: { playerOneName, playerTwoName, timeValue } });
    }
    return (
        <div className={styles.menu}>
            <div className={styles.card}>
                <p>Player one:</p>
                <input className={styles.inputField} type="text" value={playerOneName} onChange={(e) => { setPlayerOneName(e.target.value) }} />
            </div>
            <div className={styles.card}>
                <p>Player two:</p>
                <input className={styles.inputField} type="text" value={playerTwoName} onChange={(e) => { setPlayerTwoName(e.target.value) }} />
            </div>
            <div className={styles.card}>
                <div className={styles.paragraf}>
                    <p>Select play time:</p>
                </div>

                <p className={styles.left}>1</p>
                <input className={styles.range} type="range" min="1" max="100" step="1" value={timeValue} onChange={(e) => setTimeValue(e.target.value)} />
                <p className={styles.right}>100</p>
                <div className={styles.val}>
                    <p>{timeValue} minute</p>
                </div>
            </div>
            <div className={styles.card}>
                <button onClick={handleStart} className={styles.buttonStart}>Start Game</button>
            </div>


        </div>
    )
}

export default PlayerVsPlayerMenu
