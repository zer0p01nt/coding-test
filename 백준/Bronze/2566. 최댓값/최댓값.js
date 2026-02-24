const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux" ? 0 : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim();
const inputArr = input === "" ? [] : input.split(/\s+/);

const arr = input
  .split("\n")
  .map((line) => line.replace("\r", "").split(" ").map(Number));

let r = 0;
let c = 0;

const max = Math.max(...inputArr);

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] === max) {
      r = i + 1;
      c = j + 1;
    }
  }
}

console.log(max);
console.log(r, c);