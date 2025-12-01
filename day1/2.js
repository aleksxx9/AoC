import fetch from "node-fetch";
import * as dotenv from "dotenv";
dotenv.config();

const day = 1;

fetch(`https://adventofcode.com/2025/day/${day}/input`, {
  headers: {
    cookie: process.env.ID,
  },
})
  .then((res) => res.text())
  .then((data) => {
    let input = data
      .trim()
      .split("\n")
      .filter((val) => val);

    let eqZero = 0;
    let currentNumber = 50;

    input.forEach((combination) => {
      const [rule, ...count] = combination.substring(-1);
      const rotateCount = Number(count.join(""));

      if (rule === "R") {
        for (let i = 0; i < rotateCount; i++) {
          currentNumber = currentNumber + 1;

          if (currentNumber === 100) {
            currentNumber = 0;
            eqZero = eqZero + 1;
          }
        }
      } else if (rule === "L") {
        for (let i = 0; i < rotateCount; i++) {
          currentNumber = currentNumber - 1;

          if (currentNumber === 0) {
            eqZero = eqZero + 1;
          }
          if (currentNumber === -1) {
            currentNumber = 99;
          }
        }
      }
    });

    console.log(eqZero);
  });

