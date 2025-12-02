import fetch from "node-fetch";
import * as dotenv from "dotenv";
dotenv.config();

const day = 2;

fetch(`https://adventofcode.com/2025/day/${day}/input`, {
  headers: {
    cookie: process.env.ID,
  },
})
  .then((res) => res.text())
  .then((data) => {
    let input = data.split("\n").filter((val) => val);
    let answer = 0;

    input[0].split(",").forEach((comb) => {
      const [rangeStart, rangeEnd] = comb.split("-");

      for (let i = Number(rangeStart); i <= rangeEnd; i++) {
        const id = i.toString();

        const half = Math.floor(id.length / 2);
        const firstHalf = id.slice(0, half);
        const secondHalf = id.slice(half, i.length);

        if (firstHalf === secondHalf) {
          answer = answer + i;
        }
      }
    });

    console.log(answer);
  });
