import React from 'react'
import styles from "./Settings.module.css"
import BoardCard from '../BoardCard/BoardCard'
import { useContext } from 'react'

import defaultBoard from "../../img/chessboard/Default.png"
import red from "../../img/chessboard/Red.png"
import blue from "../../img/chessboard/Blue.png"
import brown from "../../img/chessboard/Brown.png"
import green from "../../img/chessboard/Green.png"


const Settings = () => {

    const slides = [
        { url: defaultBoard, alt: "defaultBoard", defWhite: "defaultWhiteCell", defBlack: "defaultBlackCell" },
        { url: green, alt: "green", defWhite: "lightGreenCell", defBlack: "darkGreenCell" },
        { url: blue, alt: "blue", defWhite: "lightBlueCell", defBlack: "darkBlueCell" },
        { url: brown, alt: "brown", defWhite: "lightBrownCell", defBlack: "darkBrownCell" },
        { url: red, alt: "red", defWhite: "whiteCell", defBlack: "blackCell" },
    ]
    return (
        <div className={styles.settingsContainer}>
            <BoardCard slides={slides} />
        </div>
    )
}

export default Settings
