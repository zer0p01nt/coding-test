function solution(num_list) {
    let oddSum = 0;
    let evenSum = 0;
    num_list.map((num, i) => {
        if (i % 2 + 1 === 1) {
            oddSum += num
        } else {
            evenSum += num
        }
    })
    return oddSum >= evenSum ? oddSum : evenSum
}