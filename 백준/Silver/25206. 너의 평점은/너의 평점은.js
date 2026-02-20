const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux" ? 0 : path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath).toString().trim();
const inputArr = input === "" ? [] : input.split(/\s+/);

const scores = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

let totalCredits = 0;
let totalScore = 0;

for (let i = 2; i < inputArr.length; i += 3) {
  const score = inputArr[i];
  if (score !== "P") {
    const credit = parseFloat(inputArr[i - 1]);
    const grade = scores[score];
    totalCredits += credit;
    totalScore += credit * grade;
  }
}

const gpa = totalScore / totalCredits;
console.log(gpa.toFixed(6));