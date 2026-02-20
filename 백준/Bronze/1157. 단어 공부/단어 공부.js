const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux" ? 0 : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim();

const str = input.toUpperCase();

let chars = {};

for (let i = 0; i < str.length; i++) {
  const char = str[i];
  if (chars[char]) {
    chars[char]++;
  } else {
    chars[char] = 1;
  }
}

const max = Math.max(...Object.values(chars));
const maxChars = Object.keys(chars).filter((char) => chars[char] === max);

if (maxChars.length > 1) {
  console.log("?");
} else {
  console.log(maxChars[0]);
}