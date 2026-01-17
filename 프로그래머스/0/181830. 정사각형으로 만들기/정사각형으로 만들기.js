function solution(arr) {
    let row = arr.length
    let column = arr[0].length
    
    if (row > column) {
        arr.map((a) => {
            for (let i = column; i < row; i++) {
                a.push(0)
            }
        })
    } else {
        for (let i = row; i < column; i++) {
            arr.push(new Array(column).fill(0))
        }
    }
    
    return arr
}