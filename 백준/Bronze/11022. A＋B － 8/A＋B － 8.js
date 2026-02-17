const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux" ? 0 : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim();
const inputArr = input === "" ? [] : input.split(/\s+/);

let cnt = 1;
for (let i = 1; i < inputArr.length; i += 2) {
  console.log(
    `Case #${cnt++}: ${inputArr[i]} + ${inputArr[i + 1]} = ${+inputArr[i] + +inputArr[i + 1]}`,
  );
}
