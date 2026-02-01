function solution(babbling) {
    let result = 0;
    babbling.map((b) => {
        b = b.replaceAll(/aya|ye|woo|ma/g, "")
        if (b.length === 0) result += 1
    })
    return result
}