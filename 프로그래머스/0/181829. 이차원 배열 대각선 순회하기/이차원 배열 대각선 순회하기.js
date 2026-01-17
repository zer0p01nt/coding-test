function solution(board, k) {
    let sum = 0;
    for (i = 0; i < board.length; i++) {
        for (j = 0; j < board[0].length; j++) {
            if (i + j <= k) {
                sum += board[i][j]
            }
        }
    }
    
    return sum
}