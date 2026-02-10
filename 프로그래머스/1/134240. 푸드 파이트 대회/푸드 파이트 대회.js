function solution(food) {
    let a = []
    let b = []
    
    food.map((n, i) => {
        if (i === 0) {
            return
        } else {
            let amount = Math.trunc(n / 2)
            a.push(String(i).repeat(amount))
        }
    })
    food.map((n, i) => {
        if (i === 0) {
            return
        } else {
            let amount = Math.trunc(n / 2)
            b.unshift(String(i).repeat(amount))
        }
    })
    
    return [...a, 0, ...b].join("")
}