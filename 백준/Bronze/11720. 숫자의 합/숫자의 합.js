const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux" ? 0 : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim();
const inputArr = input === "" ? [] : input.split(/\s+/);

console.log(
  inputArr[1]
    .split("")
    .map(Number)
    .reduce((a, c) => a + c, 0),
);
