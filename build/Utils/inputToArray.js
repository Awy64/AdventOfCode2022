"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readInputFile = void 0;
const fs_1 = require("fs");
function readInputFile(filePath) {
    (0, fs_1.readFile)(filePath, (err, data) => {
        if (err) {
            console.log("error", err);
        }
        console.log(data);
    });
}
exports.readInputFile = readInputFile;
