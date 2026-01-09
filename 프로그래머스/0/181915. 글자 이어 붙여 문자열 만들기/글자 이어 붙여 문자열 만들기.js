function solution(my_string, index_list) {
    let result = []
    index_list.map((n) => {
        result.push(my_string[n])
    })
    return result.join("")
}