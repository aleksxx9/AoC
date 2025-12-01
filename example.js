import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
dotenv.config()

const day = 1;

fetch(`https://adventofcode.com/2025/day/${day}/input`, {
  headers: {
    cookie: process.env.ID
  }
})
  .then(res => res.text())
  .then(data => {
    let input = data.split('\n').filter(val => val)
input = ``.split('\n');

    console.log(input)
  });