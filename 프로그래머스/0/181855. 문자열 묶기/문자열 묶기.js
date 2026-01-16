function solution(strArr) {
    let arr = new Array(30).fill(0)
    
    strArr.map((s) => {
        arr[s.length-1] += 1
    })
    
    return Math.max(...arr)
}