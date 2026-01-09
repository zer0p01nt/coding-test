function solution(a, b, c, d) {
    const arr = [a, b, c, d]
    const uniqueArr = [...new Set(arr)]
    const counts = {}
    arr.forEach((n) => {
        counts[n] = (counts[n] || 0) + 1
    })
    let result = 0;
    switch (uniqueArr.length) {
        case 1:
            result = 1111 * uniqueArr[0]
            break;
        case 2:
            let p = Number(Object.keys(counts).find((key) => counts[key] === 3))
            if (p) {
                let q = Number(Object.keys(counts).find((key) => counts[key] === 1))
                result = Math.pow(10 * p + q, 2)
            } else {
                p = Number(uniqueArr[0])
                let q = Number(uniqueArr[1])
                result = (p + q) * Math.abs(p - q)
            }
            break;
        case 3:
            let [q, r] = Object.keys(counts).filter((key) => counts[key] === 1)
            result = Number(q) * Number(r)
            break;
        case 4:
            result = Math.min(...arr)
            break;
    }
    return result
}