const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux" ? 0 : path.join(__dirname, "input.txt");

const input = fs
  .readFileSync(filePath)
  .toString()
  .replace(/\r/g, "")
  .split("\n");

const grid = input.map((line) => line.split(""));

const maxCols = Math.max(...grid.map((row) => row.length));
const rows = grid.length;

let result = [];

for (let j = 0; j < maxCols; j++) {
  for (let i = 0; i < rows; i++) {
    if (grid[i][j] !== undefined && grid[i][j] !== "") {
      result.push(grid[i][j]);
    }
  }
}

console.log(result.join(""));