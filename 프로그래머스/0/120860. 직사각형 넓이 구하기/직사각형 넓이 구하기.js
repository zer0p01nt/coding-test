function solution(dots) {
    const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots
    const x = [...new Set([x1, x2, x3, x4])]
    const y = [...new Set([y1, y2, y3, y4])]
    return Math.abs(x[0]-x[1]) * Math.abs(y[0]-y[1])
}