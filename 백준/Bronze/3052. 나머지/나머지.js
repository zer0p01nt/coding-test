const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux" ? 0 : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim();
const inputArr = input === "" ? [] : input.split(/\s+/);

let remains = [];

inputArr.map(Number).forEach((n) => {
  remains.push(n % 42);
});

console.log(new Set(remains).size);