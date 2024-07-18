import React from 'react'
import { useState } from 'react';
import { findBestMove } from '../utils/minimax';

const Game = ({ goMenu, dificulty }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const winningPosition = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
  const [winningPlayer, setWinningPlayer] = useState("");

  const handleClick = (index) => {
    if (checkWinner(board, player) || checkWinner(board, "O") || checkDraw(board) || board[index] !== null) {
      return;
    }
    console.log(dificulty);
    let newGameState = [...board];
    newGameState[index] = player;
    setBoard(newGameState);

    if (checkWinner(newGameState, player)) {
      setWinningPlayer(`${player} a castigat`)
    } else if (checkDraw(newGameState)) {
      setWinningPlayer("Jocul s-a terminat la egal");
    }
    if (dificulty === 0) {
      if (player === "X") {
        setPlayer("O")
      } else {
        setPlayer("X")
      }
    }

    if (dificulty !== 0 && !checkWinner(newGameState, player)) {
      const aimove = findBestMove(newGameState, dificulty);

      newGameState[aimove] = "O";
      setBoard(newGameState);

      if (checkWinner(newGameState, "O")) {
        setWinningPlayer("Ai-ul a castigat")
      } else if (checkDraw(newGameState)) {
        setWinningPlayer("Jocul s-a terminat la egal")
      }
    }



  }

  const checkDraw = (board) => {
    return !board.some(element => element === null);
  }

  const checkWinner = (board, player) => {
    for (const position of winningPosition) {

      if (board[position[0]] === player && board[position[1]] === player && board[position[2]] === player) {
        return true;
      }
    }
    return false;
  }

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setWinningPlayer("");
    setPlayer("X")
  }



  return (
    <div className="game-container">
      <div className="button-container">
        <button className="control-button" onClick={goMenu}>Menu</button>
        <button className="control-button" onClick={restartGame}>Restart</button>
      </div>
      <div className="gameboard">
        {board.map((cell, index) => (
          <div key={index} className="cell" onClick={() => handleClick(index)}
          >{cell}</div>
        ))}
      </div>
      <h1 className="playerwinner">{`${winningPlayer}`}</h1>
    </div>

  )
}

export default Game;
