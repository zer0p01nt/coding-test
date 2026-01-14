function solution(myStr) {
    const strAry = myStr.split("").map((s) => {
        if (s === "a" || s === "b" || s === "c") return " "
        else return s
    }).join("").trim().split(" ").filter((s) => s.length > 0)
    
    return strAry.length === 0 ? ["EMPTY"] : strAry
}