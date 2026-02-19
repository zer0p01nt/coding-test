const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux" ? 0 : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim();
const inputArr = input === "" ? [] : input.split(/\s+/);

let result = [];

inputArr.slice(1).forEach((str) => {
  const start = str[0];
  const end = str[str.length - 1];
  result.push(start + end);
});

console.log(result.join("\n"));