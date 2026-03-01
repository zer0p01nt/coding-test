const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux" ? 0 : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim();
const inputArr = input === "" ? [] : input.split(/\s+/).map(Number);

let nums = [];

for (let i = 1; i <= inputArr[0]; i++) {
  if (inputArr[0] % i === 0) {
    nums.push(i);
  }
}

console.log(
  nums.length < inputArr[1] ? 0 : nums.sort((a, b) => a - b)[inputArr[1] - 1],
);
