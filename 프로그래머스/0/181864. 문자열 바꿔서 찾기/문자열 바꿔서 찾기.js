function solution(myString, pat) {
    const str = myString.split("").map((s) => {
        if (s === "A") return "B"
        else return "A"
    }).join("")
    return Number(str.includes(pat))
}