const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim();

switch (true) {
  case +input >= 90:
    console.log("A");
    break;
  case +input >= 80:
    console.log("B");
    break;
  case +input >= 70:
    console.log("C");
    break;
  case +input >= 60:
    console.log("D");
    break;
  default:
    console.log("F");
}