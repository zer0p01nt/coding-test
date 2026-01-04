const fs = require("fs");

const inputArray = fs.readFileSync("/dev/stdin").toString().trim().split(/\s+/);

const N = Number(inputArray[0]);
const numbers = inputArray.slice(1, N + 1).map(Number);

const max = Math.max(...numbers);

const newNumbers = numbers.map((num) => (num / max) * 100);

const result = newNumbers.reduce((acc, cur) => acc + cur, 0) / N;

console.log(result);
