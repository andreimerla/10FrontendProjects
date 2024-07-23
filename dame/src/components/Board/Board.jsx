import React from 'react'
import { useState } from 'react'
import styles from "./Board.module.css"
import { chessPieceImage } from '../utils/chessPieceImage'
import { isValidMove, isCheckmate, isChecked } from '../utils/chessEngine'
import { useContext } from 'react'
import SettingsContext from '../SettingsContext/SettingsContext'
const Board = () => {
    const { boardStyle, toggleBoard } = useContext(SettingsContext)
    const [board, setBoard] = useState([
        ["brook", "bknight", "bbishop", "bqueen", "bking", "bbishop", "bknight", "brook"],
        ["bpawn", "bpawn", "bpawn", "bpawn", "bpawn", "bpawn", "bpawn", "bpawn"],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["wpawn", "wpawn", "wpawn", "wpawn", "wpawn", "wpawn", "wpawn", "wpawn"],
        ["wrook", "wknight", "wbishop", "wqueen", "wking", "wbishop", "wknight", "wrook"]
    ])
    const [selectedPiece, setSelectedPiece] = useState(null);

    const [pieceSelected, setPieceSelected] = useState(null);
    const [enPassant, setEnPassant] = useState(null);
    const [player, setPlayer] = useState("w");
    const [startGame, setStartGame] = useState(true)
    const [winner, setWinner] = useState(null)



    const handlePieceClick = (piece, rowIndex, colIndex) => {
        if (startGame) {
            if (isCheckmate(board, player)) {
                setStartGame(false);
                if (player === "white") {
                    setWinner("black")
                } else {
                    setWinner("white")
                }

                return;
            }


            let newBoard = [...board];

            if (piece === "" && selectedPiece === null) {
                return;
            }

            const pieceColor = newBoard[rowIndex][colIndex].charAt(0);

            if (player === "w" && pieceColor === "w" || player === "b" && pieceColor === "b") {
                if (selectedPiece === null) {
                    setSelectedPiece({ rowIndex, colIndex });
                    setPieceSelected(piece);
                } else if (selectedPiece.rowIndex === rowIndex && selectedPiece.colIndex === colIndex) {
                    setSelectedPiece(null);
                    setPieceSelected(null);
                } else {
                    setSelectedPiece({ rowIndex, colIndex });
                    setPieceSelected(piece);
                }

            } else if (selectedPiece !== null) {
                if (isValidMove(newBoard, pieceSelected, selectedPiece.rowIndex, selectedPiece.colIndex, rowIndex, colIndex)) {
                    newBoard[selectedPiece.rowIndex][selectedPiece.colIndex] = "";
                    newBoard[rowIndex][colIndex] = pieceSelected;
                    setBoard(newBoard);
                    setPieceSelected(null);
                    setSelectedPiece(null);
                    setEnPassant(null);
                    console.log(newBoard)
                    setPlayer(player === "w" ? "b" : "w");
                    console.log(startGame);


                } else {
                    alert("invalid move")
                }

            }
        } else {
            return;

        }


    }
    return (
        <div className={styles.board} >
            {board.map((row, rowIndex) => (
                <div className={styles.boardRow} key={rowIndex}>
                    {row.map((cell, colIndex) => (
                        <div onClick={() => handlePieceClick(cell, rowIndex, colIndex)}
                            className={
                                selectedPiece &&
                                    selectedPiece.rowIndex === rowIndex &&
                                    selectedPiece.colIndex === colIndex
                                    ? styles.isSelectedPiece
                                    : selectedPiece &&
                                        isValidMove(board, pieceSelected, selectedPiece.rowIndex, selectedPiece.colIndex, rowIndex, colIndex)
                                        ? styles.displayMove
                                        : (rowIndex + colIndex) % 2 === 0
                                            ? styles[boardStyle.defaultWhiteCell]
                                            : styles[boardStyle.defaultBlackCell]

                            } key={colIndex}>
                            {cell && <img className={styles.piece} src={chessPieceImage[cell]} alt={cell} />}
                        </div>
                    ))}
                </div>

            ))
            }
            <h1>{winner}</h1>
            <button onClick={() => toggleBoard("whiteCell", "blackCell")}>clickme</button>
        </div >
    )
}

export default Board
