const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux" ? 0 : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim();

const arr = new Array(26).fill(0).map((_, i) => String.fromCharCode(i + 97));

let result = [];

for (let i = 0; i < arr.length; i++) {
  result.push(input.indexOf(arr[i]));
}

console.log(result.join(" "));