const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux" ? 0 : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim();
const inputArr = input === "" ? [] : input.split(/\s+/).map(Number);

for (let i = 0; i < inputArr.length; i++) {
  if (inputArr[i] !== -1) {
    let nums = [];
    for (let j = 1; j < inputArr[i]; j++) {
      if (inputArr[i] % j === 0) {
        nums.push(j);
      }
    }
    if (nums.reduce((a, c) => a + c, 0) === inputArr[i]) {
      console.log(`${inputArr[i]} = ${nums.join(" + ")}`);
    } else {
      console.log(`${inputArr[i]} is NOT perfect.`);
    }
  }
}
