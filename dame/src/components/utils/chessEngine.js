const isValidMove = (board, piece, rowIndexPiece, colIndexPiece, moveRow, moveCol, isRecursive = false) => {
    let newBoard;
    const color = piece.charAt(0);

    switch(piece) {
        case "wpawn":
        case "bpawn": {
            const result = isValidPawnMove(board, rowIndexPiece, colIndexPiece, moveRow, moveCol, color);
            if (result.valid) {
                newBoard = result.board;
                if (!isChecked(newBoard, color, isRecursive)) {
                    return true;
                }
            }
            return false;
        }
        case "wbishop":
        case "bbishop": {
            const result = isValidBishopMove(board, rowIndexPiece, colIndexPiece, moveRow, moveCol, color);
            if (result.valid) {
                newBoard = result.board;
                if (!isChecked(newBoard, color, isRecursive)) {
                    return true;
                }
            }
            return false;
        }
        case "wrook":
        case "brook": {
            const result = isValidRookMove(board, rowIndexPiece, colIndexPiece, moveRow, moveCol, color);
            if (result.valid) {
                newBoard = result.board;
                if (!isChecked(newBoard, color, isRecursive)) {
                    return true;
                }
            }
            return false;
        }
        case "wknight":
        case "bknight": {
            const result = isValidKnightMove(board, rowIndexPiece, colIndexPiece, moveRow, moveCol, color);
            if (result.valid) {
                newBoard = result.board;
                if (!isChecked(newBoard, color, isRecursive)) {
                    return true;
                }
            }
            return false;
        }
        case "wqueen":
        case "bqueen": {
            const result = isValidQueenMove(board, rowIndexPiece, colIndexPiece, moveRow, moveCol, color);
            if (result.valid) {
                newBoard = result.board;
                if (!isChecked(newBoard, color, isRecursive)) {
                    return true;
                }
            }
            return false;
        }
        case "wking":
        case "bking": {
            const result = isValidKingMove(board, rowIndexPiece, colIndexPiece, moveRow, moveCol, color);
            if (result.valid) {
                newBoard = result.board;
                if (!isChecked(newBoard, color, isRecursive)) {
                    return true;
                }
            }
            return false;
        }
        default:
            return false;
    }
}

const isValidPawnMove = (board, rowIndexPiece, colIndexPiece, moveRow, moveCol, color) => {
    const direction = color === "w" ? -1 : 1;
    const startRow = color === "w" ? 6 : 1;
    const piece = board[rowIndexPiece][colIndexPiece];

    const isOneSquareMove = colIndexPiece === moveCol && rowIndexPiece + direction === moveRow;
    const isTwoSquaresMove = colIndexPiece === moveCol && rowIndexPiece === startRow && rowIndexPiece + 2 * direction === moveRow;
    const isCapturing = rowIndexPiece + direction === moveRow && Math.abs(colIndexPiece - moveCol) === 1;

    const newBoard = board.map(row => [...row]);

    if ((isOneSquareMove || isTwoSquaresMove) && newBoard[moveRow][moveCol] === "") {
        newBoard[moveRow][moveCol] = piece;
        newBoard[rowIndexPiece][colIndexPiece] = "";
        return { valid: true, board: newBoard };
    } else if (isCapturing && newBoard[moveRow][moveCol] !== "" && newBoard[moveRow][moveCol].charAt(0) !== color) {
        newBoard[moveRow][moveCol] = piece;
        newBoard[rowIndexPiece][colIndexPiece] = "";
        return { valid: true, board: newBoard };
    }
    
    return { valid: false, board: null };
}

const isValidBishopMove = (board, rowIndexPiece, colIndexPiece, moveRow, moveCol, color) => {
    const rowDiff = Math.abs(moveRow - rowIndexPiece);
    const colDiff = Math.abs(moveCol - colIndexPiece);
    const piece = board[rowIndexPiece][colIndexPiece];
    
    if (rowDiff !== colDiff) {
        return { valid: false, board: null };
    }

    const rowDirection = moveRow > rowIndexPiece ? 1 : -1;
    const colDirection = moveCol > colIndexPiece ? 1 : -1;

    for (let i = 1; i < rowDiff; i++) {
        if (board[rowIndexPiece + i * rowDirection][colIndexPiece + i * colDirection] !== "") {
            return { valid: false, board: null };
        }
    }

    const newBoard = board.map(row => [...row]);
    if (newBoard[moveRow][moveCol] === "" || newBoard[moveRow][moveCol].charAt(0) !== color) {
        newBoard[moveRow][moveCol] = piece;
        newBoard[rowIndexPiece][colIndexPiece] = "";
        return { valid: true, board: newBoard };
    }

    return { valid: false, board: null };
}

const isValidKnightMove = (board, rowIndexPiece, colIndexPiece, moveRow, moveCol, color) => {
    const rowDiff = Math.abs(moveRow - rowIndexPiece);
    const colDiff = Math.abs(moveCol - colIndexPiece);
    const piece = board[rowIndexPiece][colIndexPiece];

    const newBoard = board.map(row => [...row]);

    if ((rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2)) {
        if (newBoard[moveRow][moveCol] === "" || newBoard[moveRow][moveCol].charAt(0) !== color) {
            newBoard[moveRow][moveCol] = piece;
            newBoard[rowIndexPiece][colIndexPiece] = "";
            return { valid: true, board: newBoard };
        }
    }

    return { valid: false, board: null };
}

const isValidRookMove = (board, rowIndexPiece, colIndexPiece, moveRow, moveCol, color) => {
    const rowDiff = Math.abs(moveRow - rowIndexPiece);
    const colDiff = Math.abs(moveCol - colIndexPiece);
    const piece = board[rowIndexPiece][colIndexPiece];

    if (rowDiff !== 0 && colDiff !== 0) {
        return { valid: false, board: null };
    }

    const direction = rowDiff === 0 ? [0, Math.sign(moveCol - colIndexPiece)] : [Math.sign(moveRow - rowIndexPiece), 0];

    for (let i = 1; i < Math.max(rowDiff, colDiff); i++) {
        if (board[rowIndexPiece + i * direction[0]][colIndexPiece + i * direction[1]] !== "") {
            return { valid: false, board: null };
        }
    }

    const newBoard = board.map(row => [...row]);
    if (newBoard[moveRow][moveCol] === "" || newBoard[moveRow][moveCol].charAt(0) !== color) {
        newBoard[moveRow][moveCol] = piece;
        newBoard[rowIndexPiece][colIndexPiece] = "";
        return { valid: true, board: newBoard };
    }

    return { valid: false, board: null };
}

const isValidQueenMove = (board, rowIndexPiece, colIndexPiece, moveRow, moveCol, color) => {
    const bishopResult = isValidBishopMove(board, rowIndexPiece, colIndexPiece, moveRow, moveCol, color);
    const rookResult = isValidRookMove(board, rowIndexPiece, colIndexPiece, moveRow, moveCol, color);

    return bishopResult.valid ? bishopResult : rookResult;
}

const isValidKingMove = (board, rowIndexPiece, colIndexPiece, moveRow, moveCol, color) => {
    const rowDiff = Math.abs(moveRow - rowIndexPiece);
    const colDiff = Math.abs(moveCol - colIndexPiece);
    const piece = board[rowIndexPiece][colIndexPiece];

    const newBoard = board.map(row => [...row]);

    if (rowDiff <= 1 && colDiff <= 1) {
        if (newBoard[moveRow][moveCol] === "" || newBoard[moveRow][moveCol].charAt(0) !== color) {
            newBoard[moveRow][moveCol] = piece;
            newBoard[rowIndexPiece][colIndexPiece] = "";
            return { valid: true, board: newBoard };
        }
    }

    return { valid: false, board: null };
}

const isChecked = (board, color, isRecursive = false) => {
    let kingRow, kingCol;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board[i][j] === `${color}king`) {
                kingRow = i;
                kingCol = j;
                break;
            }
        }
        if (kingRow !== undefined) break;
    }

    const enemyColor = color === "w" ? "b" : "w";

    if (!isRecursive) {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const piece = board[i][j];
                if (piece && piece.charAt(0) === enemyColor) {
                    if (isValidMove(board, piece, i, j, kingRow, kingCol, true)) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}
const isCheckmate = (board, color) => {
    // Verifică mai întâi dacă regele este în șah
    if (!isChecked(board, color)) {
        return false; // Nu poate fi șah mat dacă nu este în șah
    }

    // Găsește poziția regelui
    let kingRow, kingCol;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board[i][j] === `${color}king`) {
                kingRow = i;
                kingCol = j;
                break;
            }
        }
        if (kingRow !== undefined) break;
    }

    // Verifică toate piesele jucătorului pentru a găsi o mutare validă care evită șahul
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const piece = board[i][j];
            if (piece && piece.charAt(0) === color) {
                // Pentru fiecare piesă, verifică toate pozițiile posibile pe tablă
                for (let moveRow = 0; moveRow < 8; moveRow++) {
                    for (let moveCol = 0; moveCol < 8; moveCol++) {
                        if (isValidMove(board, piece, i, j, moveRow, moveCol, true)) {
                            // Creează o copie a tablei și efectuează mutarea
                            const newBoard = board.map(row => [...row]);
                            newBoard[moveRow][moveCol] = piece;
                            newBoard[i][j] = "";

                            // Verifică dacă după această mutare, regele nu mai este în șah
                            if (!isChecked(newBoard, color)) {
                                return false; // Am găsit o mutare care evită șahul, deci nu este șah mat
                            }
                        }
                    }
                }
            }
        }
    }

    // Dacă nu s-a găsit nicio mutare care să evite șahul, este șah mat
    return true;
};



export { isValidMove,isCheckmate,isChecked };