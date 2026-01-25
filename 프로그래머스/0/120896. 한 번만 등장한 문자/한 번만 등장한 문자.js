function solution(s) {
    const arr = s.split("")
    return arr.filter(a => arr.indexOf(a) == arr.lastIndexOf(a)).sort().join('');
}