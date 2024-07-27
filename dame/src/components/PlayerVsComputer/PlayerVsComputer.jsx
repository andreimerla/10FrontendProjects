import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styles from "./PlayerVsComputer.module.css";

const PlayerVsComputer = () => {
    const navigate = useNavigate();
    const [playerOneName, setPlayerOneName] = useState("");
    const [computer, setComputer] = useState("");
    const [computerPower, setComputerPower] = useState(1250);

    const handleStart = () => {
        navigate("/game", {
            state: {
                playerOneName,
                computer,
                computerPower,
                gameMode: 'computer'  // Adăugăm acest câmp pentru a indica modul de joc
            }
        });
    }

    return (
        <div className={styles.menu}>
            <div className={styles.card}>
                <p className={styles.paragraf2}>Player name:</p>
                <input className={styles.inputField} type="text" value={playerOneName} onChange={(e) => setPlayerOneName(e.target.value)} />
            </div>
            <div className={styles.card}>
                <p className={styles.paragraf2}>Bot name:</p>
                <input className={styles.inputField} type="text" value={computer} onChange={(e) => setComputer(e.target.value)} />
            </div>
            <div className={styles.card}>
                <div className={styles.paragraf}>
                    <p>Select bot power:</p>
                </div>
                <p className={styles.left}>1</p>
                <input className={styles.range} type="range" min="1" max="2500" step="1" value={computerPower} onChange={(e) => setComputerPower(Number(e.target.value))} />
                <p className={styles.right}>2500</p>
                <div className={styles.val}>
                    <p>{computerPower} power</p>
                </div>
            </div>
            <div className={styles.card}>
                <button onClick={handleStart} className={styles.buttonStart}>Start Game</button>
            </div>
        </div>
    );
}

export default PlayerVsComputer;