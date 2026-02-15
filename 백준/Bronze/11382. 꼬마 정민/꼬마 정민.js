const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim();
// const inputArr = input === "" ? [] : input.split(/\s+/);
const inputArr = input === "" ? [] : input.split(" ");

const a = inputArr[0];
const b = inputArr[1];
const c = inputArr[2];

console.log(+a + +b + +c);