const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim();

if (+input % 4 === 0 && (+input % 100 !== 0 || +input % 400 === 0)) {
  console.log(1);
} else {
  console.log(0);
}