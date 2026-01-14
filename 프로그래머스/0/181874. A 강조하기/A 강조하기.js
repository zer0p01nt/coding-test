function solution(myString) {
    let strArr = myString.split("")
    strArr = strArr.map((str) => {
        if (str === "a") {
           return "A"
        } else if (str === str.toUpperCase() && str !== "A") {
            return str.toLowerCase()
        } else return str
    })
    return strArr.join("")
}