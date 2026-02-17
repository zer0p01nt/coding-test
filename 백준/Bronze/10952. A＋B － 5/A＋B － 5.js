const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux" ? 0 : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim();
const inputArr = input === "" ? [] : input.split(/\s+/);

for (let i = 0; i < inputArr.length; i += 2) {
  if (inputArr[i] === "0" && inputArr[i + 1] === "0") {
    break;
  } else {
    console.log(parseInt(inputArr[i]) + parseInt(inputArr[i + 1]));
  }
}
