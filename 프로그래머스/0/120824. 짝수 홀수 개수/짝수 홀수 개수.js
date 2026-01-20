function solution(num_list) {
    let even = []
    let odd = []
    for (const n of num_list) {
        if (n % 2 === 0) {
            even.push(n)
        } else {
            odd.push(n)
        }
    }
    return [even.length, odd.length]
}