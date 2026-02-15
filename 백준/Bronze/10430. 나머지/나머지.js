const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim();
// const inputArr = input === "" ? [] : input.split(/\s+/);
const inputArr = input === "" ? [] : input.split(" ");

const a = parseInt(inputArr[0]);
const b = parseInt(inputArr[1]);
const c = parseInt(inputArr[2]);

console.log((a + b) % c);
console.log(((a % c) + (b % c)) % c);
console.log((a * b) % c);
console.log(((a % c) * (b % c)) % c);