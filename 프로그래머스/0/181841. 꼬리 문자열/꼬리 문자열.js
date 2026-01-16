function solution(str_list, ex) {
    let arr = str_list.filter((s) => !s.includes(ex))
    return arr.join("")
}