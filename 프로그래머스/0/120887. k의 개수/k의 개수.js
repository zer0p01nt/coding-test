function solution(i, j, k) {
    let result = 0;
    while (i <= j) {
        if (String(i).includes(k)) {
            result += String(i).split(k).length - 1
        }
        i++
    }
    return result
}