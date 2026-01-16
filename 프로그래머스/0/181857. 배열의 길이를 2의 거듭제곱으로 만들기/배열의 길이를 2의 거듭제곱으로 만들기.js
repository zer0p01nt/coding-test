function solution(arr) {
    let array = arr
    let n = 0;
    while (2 ** n < array.length) {
        n += 1
    }
    for (i = array.length; i < 2 ** n; i++) {
        array[i] = 0
    }
    return array
}