"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inputToArray_1 = require("../../Utils/inputToArray");
const input = (0, inputToArray_1.readInputFile)("./input.txt");
function totalCals(totals) {
    let current = 1;
    let elf = {};
    totals.forEach(food => {
        const foodNumber = Number(food);
        if (foodNumber === 0) {
            current += 1;
            return;
        }
        if (elf[current]) {
            elf[current] += foodNumber;
        }
        else {
            elf[current] = foodNumber;
        }
    });
    const values = Object.values(elf);
    const answer1 = Math.max(...values);
    console.log('Answer1', answer1);
    values.sort((a, b) => a - b);
    values.reverse();
    const answer2 = values[0] + values[1] + values[2];
    console.log('Answer2', answer2);
}
totalCals(input);
