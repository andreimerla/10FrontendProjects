import React from 'react'
import styles from "./Navigation.module.css"
import PlayerVsPlayerMenu from '../PlayerVsPlayerMenu/PlayerVsPlayerMenu'
import { useState } from 'react'

const Navigation = () => {
    const [isPlayerVsPlayer, setIsPlayerVsPlayer] = useState(false);

    const handlePlayerVsPlayer = () => {
        if (isPlayerVsPlayer) {
            setIsPlayerVsPlayer(false);
        } else {
            setIsPlayerVsPlayer(true);
        }
    }
    return (
        <div>
            <nav className={styles.navigation}>
                <button onClick={handlePlayerVsPlayer} className={styles.buttons}>Player vs Player</button>
                <button className={styles.buttons}>Player vs Computer</button>
                <button className={styles.buttons}>Settings</button>
                <button className={styles.buttons}>Learn</button>
            </nav>
            {isPlayerVsPlayer && (<PlayerVsPlayerMenu />)}
        </div>


    )
}

export default Navigation
