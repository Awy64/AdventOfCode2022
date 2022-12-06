import {readInputFile} from "../../Utils/inputToArray";

const input = readInputFile("./input.txt");

function organize() {
  let total1 = 0;
  let total2 = 0;
  input.forEach((line) => {
    for (let i = 3; i < line.length; i++) {
      const chars = line.slice(i - 3, i + 1);
      const currentSet = new Set(chars.split(""));
      if (currentSet.size === 4) {
        total1 += i + 1;
        break;
      }
    }
  });
  input.forEach((line) => {
    for (let i = 13; i < line.length; i++) {
      const chars = line.slice(i - 13, i + 1);
      const currentSet = new Set(chars.split(""));
      if (currentSet.size === 14) {
        total2 += i + 1;
        break;
      }
    }
  });
  console.log("answer1 =", total1);
  console.log("answer2 =", total2);
}
organize();
