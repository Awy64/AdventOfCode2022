"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inputToArray_1 = require("../../Utils/inputToArray");
const input = (0, inputToArray_1.readInputFile)("./input.txt");
function sonarScan(scans) {
    let count = 0;
    let prev = undefined;
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
function sonarScanAdd(scans) {
    let count = 0;
    let prev = undefined;
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
