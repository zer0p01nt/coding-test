const fs = require("fs");

const inputArray = fs.readFileSync("/dev/stdin").toString().trim().split(`\n`);

let currentIndex = 0;

while (currentIndex < inputArray.length) {
  console.log(inputArray[currentIndex]);
  currentIndex++;
}
