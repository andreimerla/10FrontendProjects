import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import ChessGame from '../components/ChessGame/ChessGame';
import Board from '../components/Board/Board'; // Adăugați această linie

function GamePage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { playerOneName, playerTwoName, timeValue, gameMode, computer, computerPower } = location.state;

    const handleHome = () => {
        navigate("/");
    }

    return (
        <div>
            {gameMode === 'player' ? (
                <ChessGame playerOneName={playerOneName} playerTwoName={playerTwoName} timeValue={timeValue} />
            ) : (
                <Board
                    gameMode={gameMode}
                    computerPower={computerPower}
                    playerName={playerOneName}
                    computerName={computer}
                />
            )}
            <button onClick={handleHome}>Main page</button>
        </div>
    )
}

export default GamePage