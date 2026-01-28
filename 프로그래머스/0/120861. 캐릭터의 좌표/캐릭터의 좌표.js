function solution(keyinput, board) {
    let result = [0, 0]
    const xLimit = Math.floor(board[0] / 2)
    const yLimit = Math.floor(board[1] / 2)
    keyinput.map((input) => {
        switch (input) {
            case "left":
                if (result[0] > -xLimit) {
                    result[0] -= 1
                }
                break;
            case "right":
                if (result[0] < xLimit) {
                    result[0] += 1
                }
                break;
            case "up":
                if (result[1] < yLimit) {
                    result[1] += 1
                }
                break;
            case "down":
                if (result[1] > -yLimit) {
                    result[1] -= 1
                }
                break;
            default:
                break;
        }
    })
    return result
}