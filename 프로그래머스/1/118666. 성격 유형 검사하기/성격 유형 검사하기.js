function solution(survey, choices) {
    const char = {
        "RT": 0,
        "CF": 0,
        "JM": 0,
        "AN": 0,
    }
    const LENGTH = survey.length
    let result = []
    
    for (let i = 0; i < LENGTH; i++) {
        let score = 4 - +choices[i]
        if (Object.keys(char).includes(survey[i])) {
            char[survey[i]] += score;
        } else {
            char[survey[i].split("").reverse().join("")] -= score;
        }
    }
    
    Object.entries(char).map(([k, v]) => {
        if (+v >= 0) {
            result.push(k[0])
        } else {
            result.push(k[1])
        }
    })
    return result.join("")
}