const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux" ? 0 : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim();
const inputArr = input === "" ? [] : input.split(/\s+/);

const a = inputArr.slice(2, 2 + +inputArr[0] * +inputArr[1]).map(Number);
const b = inputArr.slice(2 + +inputArr[0] * +inputArr[1]).map(Number);

let result = [];

for (let i = 0; i < a.length; i++) {
  result.push(a[i] + b[i]);
  if ((i + 1) % +inputArr[1] === 0) {
    result.push("\n");
  } else {
    result.push(" ");
  }
}
console.log(result.join(""));