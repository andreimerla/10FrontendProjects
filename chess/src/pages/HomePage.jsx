import Navigation from "../components/Navigation/Navigation";
import React from 'react'
import { SettingsProvider } from "../components/SettingsContext/SettingsContext";

const HomePage = () => {
    return (
        <div className="app-container">
            <Navigation />
        </div>
    )
}

export default HomePage
