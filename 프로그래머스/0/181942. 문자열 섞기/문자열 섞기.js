function solution(str1, str2) {
    var answer = '';
    const str1Array = str1.split('')
    const str2Array = str2.split('')
    
    for (let i = 0; i < str1Array.length; i++) {
        answer += str1Array[i]
        answer += str2Array[i]
    }
    
    return answer;
}