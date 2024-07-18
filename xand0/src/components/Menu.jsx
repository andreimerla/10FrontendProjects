import React from 'react'
import { useState } from 'react'



const Menu = ({ startGame }) => {
    const [isVsComputer, setIsVsComputer] = useState(false);

    const handleIsVsComputerSelected = () => {
        if (isVsComputer) {
            setIsVsComputer(false);
        } else {
            setIsVsComputer(true);
        }
    }
    return (
        <div className="container">
            <h1 className="title">XOXO</h1>
            <button onClick={() => startGame(0)} className="gamemode-button">vsPlayer</button>
            <button className="gamemode-button" onClick={handleIsVsComputerSelected}>vsComputer</button>
            {
                !isVsComputer ? (
                    <div></div>
                ) : (
                    <div className="difficulty-container">
                        <button onClick={() => startGame(2)} className="difficulty-button">Easy</button>
                        <button onClick={() => startGame(5)} className="difficulty-button">Medium</button>
                        <button onClick={() => startGame(10)} className="difficulty-button">Hard</button>
                    </div >)
            }
        </div >
    )
}

export default Menu
