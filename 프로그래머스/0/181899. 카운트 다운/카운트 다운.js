function solution(start_num, end_num) {
    return [...new Array(start_num - end_num + 1)].map((_, i) => i === 0 ? start_num : start_num - i)
}