function solution(s) {
    let l = s.length
    if (l % 2 === 0) {
        return s.slice(l/2-1, l/2+1)
    } else {
        return s.slice(Math.floor(l/2), Math.floor(l/2)+1)
    }
}