function solution(my_string, alp) {
    let strArr = my_string.split("")
    strArr = strArr.map((char) => {
        return char === alp ? char.toUpperCase() : char
    })
    return strArr.join("")
}