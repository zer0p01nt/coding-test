function solution(a, b, c) {
    let score = 0;
    if (a !== b && b !== c && a !== c) {
        score = a + b + c
    } else if (a === b && b === c) {
        score = (a + b + c) * ((a ** 2) + (b ** 2) + (c ** 2)) * ((a ** 3) + (b ** 3) + (c ** 3))
    } else {
        score = (a + b + c) * ((a ** 2) + (b ** 2) + (c ** 2))
    }
    return score
}