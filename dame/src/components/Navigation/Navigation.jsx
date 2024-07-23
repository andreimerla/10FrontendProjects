import React from 'react'
import styles from "./Navigation.module.css"
import PlayerVsPlayerMenu from '../PlayerVsPlayerMenu/PlayerVsPlayerMenu'
import { useState } from 'react'
import Settings from '../Settings/Settings'


const Navigation = () => {
    const [isPlayerVsPlayer, setIsPlayerVsPlayer] = useState(false);
    const [isSettings, setIsSettings] = useState(false);

    const handlePlayerVsPlayer = () => {
        if (isPlayerVsPlayer) {
            setIsPlayerVsPlayer(false);
        } else {
            setIsPlayerVsPlayer(true);
        }
    }

    const handleSettings = () => {
        if (isSettings) {
            setIsSettings(false);
        } else {
            setIsSettings(true);
        }
    }
    return (
        <div>
            <nav className={styles.navigation}>
                <button onClick={handlePlayerVsPlayer} className={styles.buttons}>Player vs Player</button>
                <button className={styles.buttons}>Player vs Computer</button>
                <button onClick={handleSettings} className={styles.buttons}>Settings</button>
                <button className={styles.buttons}>Learn</button>
            </nav>
            {isPlayerVsPlayer && (<PlayerVsPlayerMenu />)}
            {isSettings && (<Settings />)}
        </div>


    )
}

export default Navigation
