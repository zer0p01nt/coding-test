function solution(my_string, indices) {
    let str = my_string.split("")
    indices.map((num) => {
        str[num] = 0
    })
    return str.join("").replaceAll("0", "")
}