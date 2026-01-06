function solution(code) {
    const codeArray = code.split('')
    let ret = ""
    let mode = 0;
    
    for (let idx = 0; idx < codeArray.length; idx++) {
        if (mode === 0) {
            if (codeArray[idx] === "1") {
                mode = 1;
            } else {
                if (idx % 2 === 0) {
                    ret += codeArray[idx]
                }
            }
        } else {
            if (codeArray[idx] === "1") {
                mode = 0;
            } else {
                if (idx % 2 === 1) {
                    ret += codeArray[idx]
                }
            }
        }
    }
    if (ret.length === 0) return "EMPTY"
    else return ret
}