const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux" ? 0 : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim();
const inputArr = input === "" ? [] : input.split(/\s+/);

const max = inputArr.map((n) => +n).sort((a, b) => b - a)[0];
const maxIndex = inputArr.indexOf(max.toString());

console.log(max);
console.log(maxIndex + 1);