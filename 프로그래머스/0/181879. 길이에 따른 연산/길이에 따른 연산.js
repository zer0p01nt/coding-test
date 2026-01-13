function solution(num_list) {
    let result = 0;
    if (num_list.length >= 11) {
        result = num_list.reduce((a, c) => a + c)
    } else {
        result = num_list.reduce((a, c) => a * c)
    }
    return result
}