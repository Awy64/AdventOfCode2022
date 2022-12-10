"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readInputFile = void 0;
const fs_1 = require("fs");
function readInputFile(filePath) {
    let input = [];
    const data = (0, fs_1.readFileSync)(filePath, "utf8");
    const stringInput = data.toString().split("\n");
    for (const i in stringInput) {
        input.push(stringInput[i]);
    }
    return input;
}
exports.readInputFile = readInputFile;
