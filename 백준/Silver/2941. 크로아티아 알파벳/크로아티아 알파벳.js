const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux" ? 0 : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim();

const alphabets = {
  "c=": "c",
  "c-": "c",
  "dz=": "d",
  "d-": "d",
  lj: "l",
  nj: "n",
  "s=": "s",
  "z=": "z",
};

let result = input;

for (const [key, value] of Object.entries(alphabets)) {
  result = result.split(key).join(value);
}

console.log(result.length);