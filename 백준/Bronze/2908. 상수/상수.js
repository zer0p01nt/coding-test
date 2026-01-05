const fs = require("fs");

const inputArray = fs.readFileSync("/dev/stdin").toString().trim().split(/\s+/);

const a = inputArray[0].split("").reverse().join("");
const b = inputArray[1].split("").reverse().join("");

if (a > b) {
  console.log(a);
} else {
  console.log(b);
}
