const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux" ? 0 : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim().split(/\s+/);

let result = "";

for (let i = 1; i <= input[0]; i++) {
  result += +input[i * 2 - 1] + +input[i * 2] + "\n";
}

console.log(result);