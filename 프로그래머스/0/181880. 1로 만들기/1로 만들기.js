function solution(num_list) {
    let count = 0;
    num_list.map((num) => {
        while (true) {
            if (num === 1) {
                break;
            } else {
                if (num % 2 === 0) {
                    count++
                    num /= 2
                } else {
                    count++
                    num = (num - 1) / 2
                }
            }
        }
    })
    return count
}