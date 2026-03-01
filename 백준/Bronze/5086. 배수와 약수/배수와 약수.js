const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux" ? 0 : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim();
const inputArr = input === "" ? [] : input.split(/\s+/).map(Number);

for (let i = 0; i < inputArr.length; i += 2) {
  const a = inputArr[i];
  const b = inputArr[i + 1];
  if (a !== 0 && b !== 0) {
    if (b % a === 0) {
      console.log("factor");
    } else if (a % b === 0) {
      console.log("multiple");
    } else {
      console.log("neither");
    }
  }
}