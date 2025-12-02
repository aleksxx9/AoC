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

        for (let i = 1; i <= id.length / 2; i++) {
          const pattern = id.slice(0, i);
          const matchCount = [...id.matchAll(pattern)].length;
          
          if (matchCount * pattern.length === id.length) {
            answer = answer + Number(id);
            break;
          }
        }
      }
    });

    console.log(answer);
  });
