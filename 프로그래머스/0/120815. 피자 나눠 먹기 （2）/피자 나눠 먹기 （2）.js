function lcm(a, b) {
  let num = Math.max(a, b); // 더 큰 수부터 시작
  while (true) {
    if (num % a === 0 && num % b === 0) {
      return num; // 두 수 모두로 나누어 떨어지면 반환
    }
    num++;
  }
}

function solution(n) {
    return lcm(n, 6) / 6
}