function solution(arr) {
    if (arr.length === 1) {
        return [-1]
    } else {
        let array = [...arr]
        let min = array.sort((a, b) => b - a).pop()
        return arr.filter(n => n !== min)
    }
}