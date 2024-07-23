import React from 'react'
import { createContext, useState } from 'react'
const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
    const [boardStyle, setBoardStyle] = useState({
        defaultWhiteCell: "defaultWhiteCell",
        defaultBlackCell: "defaultBlackCell"
    })

    const toggleBoard = (whiteCell, blackCell) => {
        setBoardStyle({ defaultWhiteCell: whiteCell, defaultBlackCell: blackCell })
    }
    return (
        <SettingsContext.Provider value={{ toggleBoard, boardStyle }}>
            {children}
        </SettingsContext.Provider>
    )
}

export default SettingsContext
