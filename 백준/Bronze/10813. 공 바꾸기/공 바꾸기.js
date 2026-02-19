const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux" ? 0 : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim();
const inputArr = input === "" ? [] : input.split(/\s+/);

const n = +inputArr[0];
const arr = inputArr.slice(2).map(Number);
let result = new Array(n).fill(0).map((_, i) => i + 1);

for (let i = 0; i < arr.length; i += 2) {
  const [a, b] = arr.slice(i, i + 2).map(Number);
  [result[a - 1], result[b - 1]] = [result[b - 1], result[a - 1]];
}

console.log(result.join(" "));