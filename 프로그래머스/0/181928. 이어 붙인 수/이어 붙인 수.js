function solution(num_list) {
    let odd = ""
    let even = ""
    num_list.map((n) => {
        if (n % 2 === 1) {
            odd += String(n)
        } else {
            even += String(n)
        }
    })
    return Number(odd) + Number(even)
}