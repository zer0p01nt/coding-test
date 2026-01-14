function solution(myString, pat) {
    const patIndex = myString.lastIndexOf(pat)
    const patLength = pat.length
    return myString.slice(0, patIndex + patLength)
}