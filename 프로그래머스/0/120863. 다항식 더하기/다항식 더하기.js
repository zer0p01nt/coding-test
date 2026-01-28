function solution(polynomial) {
    const arr = polynomial.split(" + ")
    const linearArr = arr.filter(i => i.includes("x"))
    .map((i) => {
        if (i.length === 1) {
            return i.replace("x", "1")
        } else {
            return i.replace("x", "")
        }
    })
    const constantArr = arr.filter(i => !i.includes("x"))
    
    const linearRes = linearArr.length !== 0 ? linearArr.reduce((a, c) => +a + +c) : ""
    const linear = linearRes.length === 0 ? "" : linearRes === "1" ? "x" : linearRes + "x"
    const constant = constantArr.length !== 0 ? constantArr.reduce((a, c) => +a + +c) : ""
    
    return (linear.length !== 0 && constant.length !== 0) ? linear + " + " + constant : linear + constant
}