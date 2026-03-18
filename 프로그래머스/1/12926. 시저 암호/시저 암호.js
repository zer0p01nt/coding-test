function solution(s, n) {
    let answer = []
    
    s.split("").map((c) => {
        if (c === " ") {
            answer.push(" ")
        } else {
            code = c.charCodeAt(0) + n
        
            if (c === c.toUpperCase() && code > 90) {
                answer.push(String.fromCharCode(code - 26))
            } else if (c === c.toLowerCase() && code > 122) {
                answer.push(String.fromCharCode(code - 26))
            } else {
                answer.push(String.fromCharCode(code))
            }
        }
        
    })
    
    return answer.join("")
}