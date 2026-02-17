const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux" ? 0 : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim();
const inputArr = input === "" ? [] : input.split(/\s+/);

let total = inputArr[0];
let count = inputArr[1];

for (let i = 2; i < inputArr.length; i += 2) {
  const price = inputArr[i];
  const quantity = inputArr[i + 1];
  total -= price * quantity;
  count--;
}
console.log(total === 0 && count === 0 ? "Yes" : "No");