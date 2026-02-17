const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux" ? 0 : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim();
const inputArr = input === "" ? [] : input.split(/\s+/);

const answer = inputArr
  .slice(1)
  .map((n) => +n)
  .sort((a, b) => a - b);

console.log(answer[0] + " " + answer[+inputArr[0] - 1]);