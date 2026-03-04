const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux" ? 0 : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim();
const inputArr = input === "" ? [] : input.split(/\s+/).map(Number);

let n = inputArr[0];

let result = [];
let divisor = 2;

while (n >= 2) {
  if (n % divisor === 0) {
    result.push(divisor);
    n = n / divisor;
  } else {
    divisor++;
  }
}

console.log(result.join("\n"));