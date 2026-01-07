function solution(num_list) {
    const lastIndex = num_list.length - 1
    if (num_list[lastIndex] > num_list[lastIndex - 1]) {
        num_list.push(num_list[lastIndex] - num_list[lastIndex - 1])
    } else {
        num_list.push(num_list[lastIndex] * 2)
    }
    return num_list
}