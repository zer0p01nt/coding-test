const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux" ? 0 : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim();
const inputArr = input === "" ? [] : input.split(/\s+/).map(Number);

const m = inputArr[0];
const n = inputArr[1];

const primes = [];

for (let num = m; num <= n; num++) {
  if (num < 2) {
    continue;
  }
  let isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    primes.push(num);
  }
}

if (primes.length === 0) {
  console.log(-1);
  return;
} else {
  console.log(primes.reduce((a, c) => a + c, 0));
  console.log(primes.sort((a, b) => a - b)[0]);
}