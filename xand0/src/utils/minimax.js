function minimax(board, depth, isMaximizing, difficulty, alpha = -Infinity, beta = Infinity) {
    const winner = checkWinner(board);
    if (winner === 'X') return 1000 - depth;
    if (winner === 'O') return -1000 + depth;
    if (winner === 'tie') return 0;

    // Limităm adâncimea de căutare în funcție de dificultate
    const maxDepth = Math.floor(difficulty * 2);
    if (depth >= maxDepth) return evaluateBoard(board);

    // Introducem un element de aleatoritate pentru dificultăți mai mici
    if (Math.random() > difficulty / 10) {
        return evaluateBoard(board);
    }

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === null) {
                board[i] = 'X';
                const score = minimax(board, depth + 1, false, difficulty, alpha, beta);
                board[i] = null;
                bestScore = Math.max(score, bestScore);
                alpha = Math.max(alpha, score);
                if (beta <= alpha) break;
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === null) {
                board[i] = 'O';
                const score = minimax(board, depth + 1, true, difficulty, alpha, beta);
                board[i] = null;
                bestScore = Math.min(score, bestScore);
                beta = Math.min(beta, score);
                if (beta <= alpha) break;
            }
        }
        return bestScore;
    }
}

function findBestMove(board, difficulty) {
    let bestScore = -Infinity;
    let bestMoves = [];
    for (let i = 0; i < 9; i++) {
        if (board[i] === null) {
            board[i] = 'X';
            const score = minimax(board, 0, false, difficulty);
            board[i] = null;
            if (score > bestScore) {
                bestScore = score;
                bestMoves = [i];
            } else if (score === bestScore) {
                bestMoves.push(i);
            }
        }
    }
    
    // Alege o mișcare aleatorie dintre cele mai bune pentru dificultăți mai mici
    if (difficulty < 8) {
        return bestMoves[Math.floor(Math.random() * bestMoves.length)];
    }
    return bestMoves[0];
}

function evaluateBoard(board) {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rânduri
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // coloane
        [0, 4, 8], [2, 4, 6] // diagonale
    ];

    let score = 0;

    for (const line of lines) {
        score += evaluateLine(board[line[0]], board[line[1]], board[line[2]]);
    }

    if (board[4] === 'X') score += 3;
    if (board[4] === 'O') score -= 3;

    const corners = [0, 2, 6, 8];
    for (const corner of corners) {
        if (board[corner] === 'X') score += 2;
        if (board[corner] === 'O') score -= 2;
    }

    return score;
}

function evaluateLine(a, b, c) {
    let score = 0;
    if (a === b && b === c) {
        if (a === 'X') return 100;
        if (a === 'O') return -100;
    }

    const xCount = [a, b, c].filter(cell => cell === 'X').length;
    const oCount = [a, b, c].filter(cell => cell === 'O').length;

    if (xCount === 2 && oCount === 0) score += 10;
    if (oCount === 2 && xCount === 0) score -= 10;
    if (xCount === 1 && oCount === 0) score += 1;
    if (oCount === 1 && xCount === 0) score -= 1;

    return score;
}
const checkWinner = (board) => {
    const winningPositions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rânduri
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // coloane
        [0, 4, 8], [2, 4, 6]  // diagonale
    ];

    for (const position of winningPositions) {
        const [a, b, c] = position;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }

    if (!board.some(element => element === null)) {
        return "tie";
    }

    return null;
};

export { findBestMove };


