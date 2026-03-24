function solution(name, yearning, photo) {
    let answer = []
    
    let object = {}
    for (let i = 0; i < name.length; i++) {
        object[name[i]] = yearning[i]
    }
    
    for (let j = 0; j < photo.length; j++) {
        let score = 0;
        photo[j].map((person) => {
            if (Object.keys(object).includes(person)) {
                score += object[person]
            }
        })
        answer.push(score)
    }
    return answer
}