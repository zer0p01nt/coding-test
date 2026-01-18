function solution(n) {
    // n x n 빈 배열 생성
    const result = Array.from({ length: n }, () => Array(n).fill(0));
    
    let num = 1; // 이게 n * n 될 때까지 실행
    let top = 0; // 맨위 행 : 시작 값 0
    let bottom = n - 1; // 맨아래 행 : 시작 값 n-1
    let left = 0; // 맨왼쪽 행 : 시작값 0
    let right = n - 1; // 맨오른쪽행 : 시작값 n-1
    
    while (num <= n * n) {
        // 왼쪽 -> 오른쪽
        for (let i = left; i <= right; i++) {
            result[top][i] = num++;
        }
        top++; // 위쪽 경계 좁히기

        // 위쪽 -> 아래쪽
        for (let i = top; i <= bottom; i++) {
            result[i][right] = num++;
        }
        right--; // 오른쪽 경계 좁히기

        // 오른쪽 -> 왼쪽
        for (let i = right; i >= left; i--) {
            result[bottom][i] = num++;
        }
        bottom--; // 아래쪽 경계 좁히기

        // 아래쪽 -> 위쪽
        for (let i = bottom; i >= top; i--) {
            result[i][left] = num++;
        }
        left++; // 왼쪽 경계 좁히기
    }

    return result;
}