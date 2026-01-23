function solution(num_list, n) {
    let answer = [];
    const len = num_list.length / n
    for (let i = 0; i < len; i++) {
        let arr = []
        while (true) {
            arr.push(num_list.shift())
            if (arr.length === n) break;
        }
        answer.push(arr)
    }
    return answer;
}