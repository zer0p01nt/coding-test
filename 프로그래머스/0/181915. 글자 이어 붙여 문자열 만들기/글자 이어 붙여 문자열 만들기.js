function solution(my_string, index_list) {
    const stringArr = my_string.split("")
    let result = []
    index_list.map((n) => {
        result.push(stringArr[n])
    })
    return result.join("")
}