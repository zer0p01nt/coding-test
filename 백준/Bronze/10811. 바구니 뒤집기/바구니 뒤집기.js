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
  const [a, b] = [+arr[i], +arr[i + 1]];
  result.splice(a - 1, b - a + 1, ...result.slice(a - 1, b).reverse());
}

console.log(result.join(" "));