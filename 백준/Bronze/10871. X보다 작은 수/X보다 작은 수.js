const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux" ? 0 : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim();
const inputArr = input === "" ? [] : input.split(/\s+/);

let answer = [];

for (let i = 2; i < inputArr.length; i++) {
  if (+inputArr[i] < +inputArr[1]) {
    answer.push(+inputArr[i]);
  }
}

console.log(answer.join(" "));