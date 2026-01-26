function solution(num, k) {
    const arr = String(num).split("")
    return arr.includes(String(k)) ? arr.indexOf(String(k))+1 : -1
}