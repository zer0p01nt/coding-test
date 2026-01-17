function solution(myString) {
    const idx = myString.indexOf("l")
    return myString.split("").map((s) => {
        if (/^[a-k]/.test(s)) {
            return s = "l"
        } else return s
    }).join("")
}