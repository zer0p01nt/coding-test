function solution(strArr) {
    strArr.map((_, i) => {
        if (i % 2 === 1) {
            strArr[i] = strArr[i].toUpperCase()
        } else {
            strArr[i] = strArr[i].toLowerCase()
        }
    })
    return strArr
}