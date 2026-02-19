const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux" ? 0 : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim();

const lines = +input * 2 - 1;

let result = [];

for (let i = 0; i < lines; i++) {
  const spaceCount = Math.abs(+input - 1 - i);
  const starCount = lines - spaceCount * 2;
  result.push(" ".repeat(spaceCount) + "*".repeat(starCount));
}

console.log(result.join("\n"));