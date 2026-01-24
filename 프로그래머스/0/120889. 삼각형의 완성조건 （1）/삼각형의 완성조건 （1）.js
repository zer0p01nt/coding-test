function solution(sides) {
    let sum = 0;
    const long = Math.max(...sides)
    sides.map((s, i) => {
        if (i !== sides.indexOf(long)) {
            sum += s
        }
    })
    return long < sum ? 1 : 2
}