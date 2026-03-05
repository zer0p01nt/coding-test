const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux" ? 0 : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim();
const inputArr = input === "" ? [] : input.split(/\s+/).map(Number);

const x = inputArr[0];
const y = inputArr[1];
const w = inputArr[2];
const h = inputArr[3];

const toLeft = x;
const toRight = w - x;
const toTop = y;
const toBottom = h - y;

console.log(Math.min(toLeft, toRight, toTop, toBottom));