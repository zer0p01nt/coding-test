function solution(s) {
    let arr = [...s]
    let result = []
    let isX = 0;
    let isNotX = 0;
    let nowX = 0;
    
    for (let i = 0; i <= s.length; i++) {
        if (arr[i] === arr[nowX]) {
            isX++
        } else {
            isNotX++
        }
        
        if (isX === isNotX) {
            result.push(arr.slice(nowX, i+1))
            nowX = i+1
            isX = 0
            isNotX = 0
        } else if (i === s.length - 1) {
            result.push(arr.splice(nowX, i+1))
        }
    }
    return result.length
}