const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux" ? 0 : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim();
const inputArr = input === "" ? [] : input.split(/\s+/).map(Number);

let x = [];
let y = [];

for (let i = 0; i < inputArr.length; i += 2) {
  x.push(inputArr[i]);
  y.push(inputArr[i + 1]);
}

const xSet = new Set(x);
const ySet = new Set(y);

const missingX = [...xSet].find(
  (num) => x.filter((n) => n === num).length % 2 !== 0,
);
const missingY = [...ySet].find(
  (num) => y.filter((n) => n === num).length % 2 !== 0,
);

console.log(`${missingX} ${missingY}`);