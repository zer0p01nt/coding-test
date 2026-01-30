function solution(spell, dic) {
    let sum = 0;
    dic.map((d, i) => {
        let correct = true
        spell.map((s) => {
            if (!d.includes(s) || !(d.indexOf(s) === d.lastIndexOf(s))) {
                correct = false
            }
        })
        if (correct) {
            sum += 1
        }
    })
    return sum === 0 ? 2 : 1
}