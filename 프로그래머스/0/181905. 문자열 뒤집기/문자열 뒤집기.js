function solution(my_string, s, e) {
    const before = my_string.slice(0, s)
    const after = my_string.slice(e+1, my_string.length)
    const rStr = my_string.slice(s, e+1).split("").reverse().join("")
    return before + rStr + after
}