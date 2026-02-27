const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux" ? 0 : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const c = 100;
const p = 10;

const canvas = Array.from(Array(c), () => Array(c).fill(0));

for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  for (let j = x; j < x + p; j++) {
    for (let k = y; k < y + p; k++) {
      canvas[j][k]++;
    }
  }
}

let answer = 0;
for (let i = 0; i < c; i++) {
  for (let j = 0; j < c; j++) {
    if (canvas[i][j] > 0) {
      answer++;
    }
  }
}

console.log(answer);