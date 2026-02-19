const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux" ? 0 : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim();
const inputArr = input === "" ? [] : input.split(/\s+/);

let result = new Array(30).fill(0).map((_, i) => i + 1);

inputArr.forEach((n) => {
  const num = parseInt(n);
  result = result.filter((x) => x !== num);
});

console.log(result.join("\n"));