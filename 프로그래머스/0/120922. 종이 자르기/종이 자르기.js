function solution(M, N) {
    if (M + N === 2) return 0
    
    return (M-1) + ((N-1)*M)
}