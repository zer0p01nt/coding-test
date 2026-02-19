const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux" ? 0 : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim();
const inputArr = input === "" ? [] : input.split(/\s+/);

const n = +inputArr[0];
const arr = inputArr.slice(2).map(Number);

let result = new Array(n + 1).fill(0);

for (let i = 0; i < arr.length; i += 3) {
  const [a, b, c] = [arr[i], arr[i + 1], arr[i + 2]];
  for (let j = a; j <= b; j++) {
    result[j] = c;
  }
}

console.log(result.slice(1).join(" "));
