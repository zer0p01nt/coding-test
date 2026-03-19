function solution(s) {
    const STR_TO_NUM = {
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
        "zero": 0,
    }
    
    let arr = []
    let answer = ""
    for (let i = 0; i < s.length; i++) {
        if (Number.isInteger(+s[i])) {
            answer += s[i]
        } else {
            arr.push(s[i])
            if (Object.keys(STR_TO_NUM).includes(arr.join(""))) {
                answer += STR_TO_NUM[arr.join("")]
                arr = []
            } 
        }
    }
    return +answer;
}