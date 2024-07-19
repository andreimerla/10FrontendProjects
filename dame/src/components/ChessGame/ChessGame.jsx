import React from 'react'
import Board from '../Board/Board'
import styles from "./ChessGame.module.css"
import Timer from '../Timer/Timer'

const ChessGame = ({ playerOneName, playerTwoName, timeValue }) => {
    return (
        <div className={styles.chessGameContainer}>
            <div className={styles.gameContainer}>
                <h1>{playerOneName}</h1>
                <Board />
                <h1>{playerTwoName}</h1>
            </div>
            <div className={styles.timerContainer}>
                <Timer timeValue={timeValue} playerOneName={playerOneName} playerTwoName={playerTwoName} />
            </div>


        </div>
    )
}

export default ChessGame
