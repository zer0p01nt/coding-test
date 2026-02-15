const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux" ? 0 : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim();
const inputArr = input === "" ? [] : input.split(/\s+/);
// const inputArr = input === "" ? [] : input.split(" ");

const h = parseInt(inputArr[0]);
const m = parseInt(inputArr[1]);

const time = parseInt(inputArr[2]);

if (m + time >= 60) {
  const newH = (h + Math.floor((m + time) / 60)) % 24;
  const newM = (m + time) % 60;
  console.log(newH, newM);
} else {
  console.log(h, m + time);
}