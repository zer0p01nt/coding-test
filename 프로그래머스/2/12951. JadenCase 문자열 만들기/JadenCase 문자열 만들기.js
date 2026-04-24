function solution(s) {
    const arr = [...s]
    let result = []
    let stack = []
    arr.map((c) => {
       if (c === " ") {
           if (stack.length > 0) {
               result.push(stack.shift().toUpperCase())
               result.push(stack.join("").toLowerCase())
               stack = []
           }
           result.push("띄")
       } else {
           stack.push(c)
       }
    })
    
    if (stack.length > 0) {
        result.push(stack.shift().toUpperCase())
        result.push(stack.join("").toLowerCase())
    }
    
    
    return result.join("").replaceAll("띄", " ")
}