const fs = require("fs");
const path = require("path");

// 로컬에서는 input.txt, 백준에서는 /dev/stdin
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim().split(/\s+/);

const N = Number(input[0]);
const array = input.slice(1, N + 1).map((number) => Number(number));
const v = Number(input[N + 1]);

console.log(array.filter((n) => n === v).length);