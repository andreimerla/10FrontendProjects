import React from 'react'
import { useState } from 'react'
import styles from "./Board.module.css"
import { chessPieceImage } from '../utils/chessPieceImage'
import { isValidMove } from '../utils/chessEngine'
const Board = () => {
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

    const handlePieceClick = (piece, rowIndex, colIndex) => {
        let newBoard = [...board];
        if (piece === "" && selectedPiece === null) {
            return;
        } else {
            if (piece != "") {
                setPieceSelected(piece);
            }
            if (newBoard[rowIndex][colIndex] === "" && selectedPiece != null) {
                console.log(`piesa selectata este ${pieceSelected}`)
                console.log(`linia piesei este ${selectedPiece.rowIndex}`)
                console.log(`coloana piesei este ${selectedPiece.colIndex}`)
                console.log(`linia unde trebuie mutata este ${rowIndex}`)
                console.log(`coloana unde trebuie mutata este ${colIndex}`)
                if (isValidMove(newBoard, pieceSelected, selectedPiece.rowIndex, selectedPiece.colIndex, rowIndex, colIndex)) {
                    newBoard[selectedPiece.rowIndex][selectedPiece.colIndex] = "";
                    newBoard[rowIndex][colIndex] = pieceSelected;
                    setBoard(newBoard);
                    setPieceSelected(null);
                    setSelectedPiece(null);
                } else {
                    alert("is not a valid move")
                }


            } else {
                if (selectedPiece === null) {
                    setSelectedPiece({ rowIndex, colIndex })
                } else if (selectedPiece.rowIndex != rowIndex || selectedPiece.colIndex != colIndex) {
                    setSelectedPiece({ rowIndex, colIndex });
                } else {
                    setSelectedPiece(null);
                }
            }
        }



    }
    return (
        <div className={styles.board} >
            {board.map((row, rowIndex) => (
                <div className={styles.boardRow} key={rowIndex}>
                    {row.map((cell, colIndex) => (
                        <div onClick={() => handlePieceClick(cell, rowIndex, colIndex)} className={selectedPiece &&
                            selectedPiece.rowIndex === rowIndex && selectedPiece.colIndex === colIndex ? styles.isSelectedPiece : styles.boardCell} key={colIndex}>
                            {cell && <img className={styles.piece} src={chessPieceImage[cell]} alt={cell} />}
                        </div>
                    ))}
                </div>

            ))}
        </div>
    )
}

export default Board
