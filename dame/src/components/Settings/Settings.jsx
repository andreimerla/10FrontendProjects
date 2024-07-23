import React from 'react'
import styles from "./Settings.module.css"
import BoardCard from '../BoardCard/BoardCard'
import { useContext } from 'react'
import SettingsContext from '../SettingsContext/SettingsContext'
import img1 from "../../img/chesspieces/black-bishop.png"
import img2 from "../../img/chesspieces/black-king.png"
import img3 from "../../img/chesspieces/black-knight.png"


const Settings = () => {
    const slides = [
        { url: img1, alt: "bishop" },
        { url: img2, alt: "king" },
        { url: img3, alt: "knigth" },
    ]
    const { toggleBoard } = useContext(SettingsContext)
    const changeBoard = () => {
        toggleBoard("whiteCell", "blackCell")
    }
    return (
        <div className={styles.settingsContainer}>
            <BoardCard slides={slides} />
            <button onClick={changeBoard}>Change board</button>

        </div>
    )
}

export default Settings
