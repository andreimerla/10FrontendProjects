import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import ChessGame from '../components/ChessGame/ChessGame';

function GamePage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { playerOneName, playerTwoName, timeValue } = location.state;
    const handleHome = () => {
        navigate("/");
    }

    return (
        <div>
            <ChessGame playerOneName={playerOneName} playerTwoName={playerTwoName} timeValue={timeValue} />
            <button onClick={handleHome}>Main page</button>
        </div>
    )
}

export default GamePage
