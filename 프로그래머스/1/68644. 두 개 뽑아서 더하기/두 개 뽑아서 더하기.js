function solution(numbers) {
    let answer = []
    numbers.sort((a, b) => a - b).map((n, i) => {
        for (let j = i+1; j < numbers.length; j++) {
            answer.push(n+numbers[j])
        }
    })
    return [...new Set(answer)].sort((a, b) => a - b)
}