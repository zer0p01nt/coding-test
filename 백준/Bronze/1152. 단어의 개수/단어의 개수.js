const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim();

const inputArray = input === "" ? [] : input.split(/\s+/);

console.log(inputArray.length);


