const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux" ? 0 : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim();
const inputArr = input === "" ? [] : input.split(/\s+/);

let result = [];

for (let i = 1; i < inputArr.length; i += 2) {
  const count = inputArr[i];
  const char = inputArr[i + 1];
  for (let j = 0; j < char.length; j++) {
    result.push(char[j].repeat(count));
  }
  result.push("\n");
}

console.log(result.join(""));