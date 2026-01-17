function solution(order) {
    let result = 0;
    order.map((o) => {
        if (o.trim() === "anything" || o.trim().includes("americano")) {
            result += 4500
        } else result += 5000
    })
    
    return result
}