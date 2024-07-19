const isValidMove=(board,piece,rowIndexPiece,colIndexPiece,moveRow,moveCol)=>{
    switch(piece){
        case "wpawn":{
           return isValidPawnMove(board,rowIndexPiece,colIndexPiece,moveRow,moveCol,"w")
        }
        case "bpawn":{
            return isValidPawnMove(board,rowIndexPiece,colIndexPiece,moveRow,moveCol,"b")
        }
        
        

    }
}

const isValidPawnMove=(board,rowIndexPiece,colIndexPiece,moveRow,moveCol,color)=>{
    const direction = color === "w" ? -1:1;
    const startRow = color === "w" ? 6:1;

    if(board[moveRow][moveCol]!==""){
        return false;
    }

    const isOneSquareMove = colIndexPiece === moveCol && rowIndexPiece + direction === moveRow;
    const isTwoSquaresMove = colIndexPiece === moveCol && rowIndexPiece === startRow && rowIndexPiece + 2 * direction === moveRow;


    if(isOneSquareMove || isTwoSquaresMove){
        return true;
    }
    return false;
}

const isValidBishopMove = (board,rowIndexPiece,colIndexPiece,moveRow,moveCol,color)=>{
    ////urmeaza
}
const isValidKnightMove = (board,rowIndexPiece,colIndexPiece,moveRow,moveCol,color)=>{
    ////urmeaza
}
const isValidRookMove = (board,rowIndexPiece,colIndexPiece,moveRow,moveCol,color)=>{
    ////urmeaza
}
const isValidQueenMove = (board,rowIndexPiece,colIndexPiece,moveRow,moveCol,color)=>{
    ////urmeaza
}
const isValidKingMove = (board,rowIndexPiece,colIndexPiece,moveRow,moveCol,color)=>{
    ////urmeaza
}

export {isValidMove}