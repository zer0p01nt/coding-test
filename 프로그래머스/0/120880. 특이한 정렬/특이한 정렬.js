function solution(numlist, n) {
    return numlist.map((num) => num - n)
        .sort((a, b) => {
            if (Math.abs(a) ===  Math.abs(b)) {
                return b - a
            }
            return Math.abs(a) - Math.abs(b)
        })
        .map((num) => num + n)
}