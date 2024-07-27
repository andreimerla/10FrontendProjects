import React, { useState, useEffect, useContext } from 'react';
import styles from "./Board.module.css";
import { chessPieceImage } from '../utils/chessPieceImage';
import SettingsContext from '../SettingsContext/SettingsContext';
import Promotion from '../Promotion/Promotion';
import { isValidMove, isCheckmate } from '../utils/chessEngine';

const Board = ({ gameMode, computerPower, playerName, computerName }) => {
    const { boardStyle } = useContext(SettingsContext);
    const [board, setBoard] = useState([
        ["brook", "bknight", "bbishop", "bqueen", "bking", "bbishop", "bknight", "brook"],
        ["bpawn", "bpawn", "bpawn", "bpawn", "bpawn", "bpawn", "bpawn", "bpawn"],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["wpawn", "wpawn", "wpawn", "wpawn", "wpawn", "wpawn", "wpawn", "wpawn"],
        ["wrook", "wknight", "wbishop", "wqueen", "wking", "wbishop", "wknight", "wrook"]
    ]);
    const [selectedPiece, setSelectedPiece] = useState(null);
    const [pieceSelected, setPieceSelected] = useState(null);
    const [promotionData, setPromotionData] = useState(null);
    const [player, setPlayer] = useState("w");
    const [winner, setWinner] = useState(null);
    const [isRokade, setIsRokade] = useState({ leftWhite: true, rightWhite: true, leftBlack: true, rightBlack: true });

    useEffect(() => {
        if (gameMode === 'computer' && player === 'b' && !winner) {
            setTimeout(makeComputerMove, 500);
        }
    }, [player, gameMode, winner]);

    const makeComputerMove = () => {
        console.log("Computer is making a move");
        const moves = getAllValidMoves(board, 'b');
        if (moves.length > 0) {
            // Aici puteți utiliza computerPower pentru a ajusta dificultatea
            const moveIndex = Math.floor(Math.random() * moves.length);
            const move = moves[moveIndex];
            const newBoard = [...board];
            newBoard[move.toRow][move.toCol] = newBoard[move.fromRow][move.fromCol];
            newBoard[move.fromRow][move.fromCol] = "";

            const promotionCheck = checkPromotion(newBoard, 'b');
            if (promotionCheck.valid) {
                newBoard[promotionCheck.row][promotionCheck.col] = 'bqueen'; 
            }

            setBoard(newBoard);
            setPlayer('w');
            if (isCheckmate(newBoard, 'w')) {
                setWinner('b');
            }
        }
    };

    const getAllValidMoves = (board, color) => {
        const moves = [];
        for (let fromRow = 0; fromRow < 8; fromRow++) {
            for (let fromCol = 0; fromCol < 8; fromCol++) {
                const piece = board[fromRow][fromCol];
                if (piece && piece.charAt(0) === color) {
                    for (let toRow = 0; toRow < 8; toRow++) {
                        for (let toCol = 0; toCol < 8; toCol++) {
                            if (isValidMove(board, piece, fromRow, fromCol, toRow, toCol, false, isRokade)) {
                                moves.push({ fromRow, fromCol, toRow, toCol });
                            }
                        }
                    }
                }
            }
        }
        return moves;
    };

    const handlePieceClick = (piece, rowIndex, colIndex) => {
        if (winner || (gameMode === 'computer' && player === 'b')) return;

        if (!selectedPiece) {
            if (piece && piece.charAt(0) === player) {
                setSelectedPiece({ rowIndex, colIndex });
                setPieceSelected(piece);
            }
        } else if (selectedPiece.rowIndex === rowIndex && selectedPiece.colIndex === colIndex) {
            setSelectedPiece(null);
            setPieceSelected(null);
        } else {
            if (isValidMove(board, pieceSelected, selectedPiece.rowIndex, selectedPiece.colIndex, rowIndex, colIndex, false, isRokade)) {
                const newBoard = board.map(row => [...row]);
                newBoard[rowIndex][colIndex] = pieceSelected;
                newBoard[selectedPiece.rowIndex][selectedPiece.colIndex] = "";

                const promotionCheck = checkPromotion(newBoard, player);
                if (promotionCheck.valid) {
                    setPromotionData({ piece: pieceSelected, row: promotionCheck.row, col: promotionCheck.col });
                    setBoard(newBoard);
                } else {
                    setBoard(newBoard);
                    setSelectedPiece(null);
                    setPieceSelected(null);
                    setPlayer(player === 'w' ? 'b' : 'w');

                    if (isCheckmate(newBoard, player === 'w' ? 'b' : 'w')) {
                        setWinner(player);
                    }
                }
            } else {
                setSelectedPiece(null);
                setPieceSelected(null);
            }
        }
    };

    const checkPromotion = (board, color) => {
        const row = color === "w" ? 0 : 7;
        for (let i = 0; i < 8; i++) {
            if (board[row][i] === `${color}pawn`) {
                return { valid: true, row, col: i };
            }
        }
        return { valid: false };
    };

    const handlePromotion = (promotedPiece) => {
        if (promotionData) {
            let newBoard = [...board];
            newBoard[promotionData.row][promotionData.col] = promotedPiece;
            setBoard(newBoard);
            setPromotionData(null);
            setPlayer(player === "w" ? "b" : "w");

            if (isCheckmate(newBoard, player === 'w' ? 'b' : 'w')) {
                setWinner(player);
            }
        }
    };

    return (
        <div className={styles.board}>
            {board.map((row, rowIndex) => (
                <div className={styles.boardRow} key={rowIndex}>
                    {row.map((cell, colIndex) => (
                        <div
                            onClick={() => handlePieceClick(cell, rowIndex, colIndex)}
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
                            }
                            key={colIndex}
                        >
                            {cell && (
                                <img
                                    className={styles.piece}
                                    src={chessPieceImage[cell]}
                                    alt={cell}
                                />
                            )}
                        </div>
                    ))}
                </div>
            ))}
            {winner && <h1>{winner === 'w' ? 'White' : 'Black'} wins!</h1>}
            {promotionData && (
                <Promotion
                    color={player}
                    handlePromotion={handlePromotion}
                    onClose={() => setPromotionData(null)}
                />
            )}
        </div>
    );
};

export default Board;