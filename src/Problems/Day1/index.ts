import {readInputFile} from "../../Utils/inputToArray";

const input = readInputFile("./input.txt");

function sonarScan(scans: number[]) {
  let count: number = 0;
  let prev: number = undefined;
  scans.forEach((scan) => {
    if (!prev) {
      prev = scan;
      return;
    }
    if (scan > prev) {
      count += 1;
    }
    prev = scan;
  });
  console.log("Answer", count);
}

function sonarScanAdd(scans: number[]) {
  let count: number = 0;
  let prev: number = undefined;
  for (let a = 2; a < scans.length; a++) {
    let scan = scans[a] + scans[a - 1] + scans[a - 2];
    if (scan > prev) {
      count += 1;
    }
    prev = scan;
  }
  console.log("Answer2", count);
}

sonarScan(input);
sonarScanAdd(input);
