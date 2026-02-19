const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux" ? 0 : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim();
const inputArr = input === "" ? [] : input.split(/\s+/);

let set = [1, 1, 2, 2, 2, 8];

for (let i = 0; i < set.length; i++) {
  set[i] -= +inputArr[i];
}

console.log(set.join(" "));