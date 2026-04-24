function solution(A,B){
    A.sort((a, b) => a - b)
    B.sort((a, b) => b - a)
    
    let answer = 0;
    for (let i = 0; i < A.length; i++) {
        let result = A[i] * B[i]
        answer += result
    }
    
    return answer;
}