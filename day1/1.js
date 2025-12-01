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
        currentNumber = currentNumber + rotateCount;
      } else if (rule === "L") {
        currentNumber = currentNumber - rotateCount;
      }

      while (99 < currentNumber || currentNumber < 0) {
        if (currentNumber > 99) {
          currentNumber = currentNumber - 100;
        } else if (currentNumber < 0) {
          currentNumber += 100;
        }
      }

      if (currentNumber === 0) {
        eqZero++;
      }
    });

    console.log(eqZero);
  });
