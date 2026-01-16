function solution(date1, date2) {
    if (date1[0] === date2[0] && date1[1] === date2[1] && date1[2] === date2[2]) return 0
    
    for (let i = 0; i < date1.length; i++) {
        if (date1[i] > date2[i]) {
            return 0
        } else if (date1[i] < date2[i]) {
            return 1
        } else continue;
    }
}