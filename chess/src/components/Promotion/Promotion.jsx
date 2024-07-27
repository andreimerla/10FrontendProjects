import React from 'react'
import styles from "./Promotion.module.css"
import wknight from "../../img/chesspieces/white-knight.png"
import wbishop from "../../img/chesspieces/white-bishop.png"
import wqueen from "../../img/chesspieces/white-queen.png"
import wrook from "../../img/chesspieces/white-rook.png"
import bknight from "../../img/chesspieces/black-knight.png"
import bbishop from "../../img/chesspieces/black-bishop.png"
import bqueen from "../../img/chesspieces/black-queen.png"
import brook from "../../img/chesspieces/black-rook.png"

const Promotion = ({ color, handlePromotion }) => {

    return (
        <div className={color === "w" ? styles.container : styles.containerBlack}>
            <div onClick={() => handlePromotion(`${color}knight`)} className={styles.cell}><img className={styles.piece} src={color === "w" ? wknight : bknight} alt={`${color} knight`} /></div>
            <div onClick={() => handlePromotion(`${color}bishop`)} className={styles.blackCell}><img className={styles.piece} src={color === "w" ? wbishop : bbishop} alt="bishop" /></div>
            <div onClick={() => handlePromotion(`${color}queen`)} className={styles.cell}><img className={styles.piece} src={color === "w" ? wqueen : bqueen} alt="queen" /></div>
            <div onClick={() => handlePromotion(`${color}rook`)} className={styles.blackCell}><img className={styles.piece} src={color === "w" ? wrook : brook} alt="rook" /></div>
        </div>
    )
}

export default Promotion
