const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux" ? 0 : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim();
const inputArr = input === "" ? [] : input.split(/\s+/).slice(1);

let result = 0;

inputArr.forEach((str) => {
  let isGroupWord = true;
  const seen = new Set();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (seen.has(char) && char !== str[i - 1]) {
      isGroupWord = false;
      break;
    }
    seen.add(char);
  }
  if (isGroupWord) {
    result++;
  }
});

console.log(result);