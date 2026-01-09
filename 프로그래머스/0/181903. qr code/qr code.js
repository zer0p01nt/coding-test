function solution(q, r, code) {
    return [...code].filter((char, i) => i % q === r).join("")
}