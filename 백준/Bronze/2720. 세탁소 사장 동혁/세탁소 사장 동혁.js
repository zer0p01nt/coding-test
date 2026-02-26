const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux" ? 0 : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim();
const inputArr = input === "" ? [] : input.split(/\s+/);

for (let i = 0; i < +inputArr[0]; i++) {
  const change = +inputArr[i + 1];
  const q = Math.floor(change / 25);
  const d = Math.floor((change - q * 25) / 10);
  const n = Math.floor((change - q * 25 - d * 10) / 5);
  const p = Math.floor((change - q * 25 - d * 10 - n * 5) / 1);
  console.log(q, d, n, p);
}