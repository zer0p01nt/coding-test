function solution(numLog) {
    const ary = []
    for (let i = 1; i <= numLog.length; i++) {
        let diff = numLog[i] - numLog[i-1]
        switch (diff) {
            case 1:
                ary.push("w")
                break;
            case -1:
                ary.push("s")
                break;
            case 10:
                ary.push("d")
                break;
            case -10:
                ary.push("a")
                break;
        }
    }
    return ary.join("")
}