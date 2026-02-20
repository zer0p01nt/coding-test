const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux" ? 0 : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim();

const middleIndex = Math.floor(input.length / 2);
const front = input.slice(0, middleIndex);
let back;

if (input.length % 2 === 1) {
  back = input.slice(middleIndex + 1);
} else {
  back = input.slice(middleIndex);
}

console.log(Number(front === back.split("").reverse().join("")));