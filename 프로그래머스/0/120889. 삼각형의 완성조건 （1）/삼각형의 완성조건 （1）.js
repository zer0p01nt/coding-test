function solution(sides) {
    const arr = sides.sort((a, b) => a - b)
    return sides[2] < sides[0] + sides[1] ? 1 : 2
}