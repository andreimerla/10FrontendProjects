import React from 'react'
import styles from "./Navigation.module.css"
import PlayerVsPlayerMenu from '../PlayerVsPlayerMenu/PlayerVsPlayerMenu'
import { useState } from 'react'
import Settings from '../Settings/Settings'
import PlayerVsComputer from '../PlayerVsComputer/PlayerVsComputer'


const Navigation = () => {
    const [isPlayerVsPlayer, setIsPlayerVsPlayer] = useState(false);
    const [isSettings, setIsSettings] = useState(false);
    const [isPlayerVsComputer, setIsPlayerVsComputer] = useState(false);

    const handleMenu = (menuItem) => {
        switch (menuItem) {
            case "player-vs-player":
                if (isPlayerVsPlayer) {
                    setIsPlayerVsPlayer(false);
                } else {
                    setIsPlayerVsPlayer(true)
                }
                setIsSettings(false);
                setIsPlayerVsComputer(false);
                break;
            case "player-vs-computer":
                if (isPlayerVsComputer) {
                    setIsPlayerVsComputer(false);
                } else {
                    setIsPlayerVsComputer(true)
                }
                setIsSettings(false);
                setIsPlayerVsPlayer(false);
                break;
            case "settings":
                if (isSettings) {
                    setIsSettings(false);
                } else {
                    setIsSettings(true)
                }
                setIsPlayerVsPlayer(false);
                setIsPlayerVsComputer(false);
                break;
        }
    }
    return (
        <div>
            <nav className={styles.navigation}>
                <button onClick={() => handleMenu("player-vs-player")} className={styles.buttons}>Player vs Player</button>
                <button onClick={() => handleMenu("player-vs-computer")} className={styles.buttons}>Player vs Computer</button>
                <button onClick={() => handleMenu("settings")} className={styles.buttons}>Settings</button>
            </nav>
            {isPlayerVsPlayer && (<PlayerVsPlayerMenu />)}
            {isSettings && (<Settings />)}
            {isPlayerVsComputer && (<PlayerVsComputer />)}
        </div>


    )
}

export default Navigation
