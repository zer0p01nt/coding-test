function solution(s) {
    return s.split(" ").map((w) => {
        let wArr = w.split("")
        for (let i = 0; i < w.length; i++) {
            if (i % 2 === 0) {
                wArr[i] = wArr[i].toUpperCase()
            } else {
                wArr[i] = wArr[i].toLowerCase()
            }
        }
        return wArr.join("")
    }).join(" ")
}