function solution(food) {
    let arr = food.map((n, i) => {
        if (i !== 0) {
            let amount = Math.trunc(n/2)
            return String(i).repeat(amount)
        }
    })
    
    return arr.join("") + "0" + arr.reverse().join("")
}