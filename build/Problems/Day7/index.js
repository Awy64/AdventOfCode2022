"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inputToArray_1 = require("../../Utils/inputToArray");
const input = (0, inputToArray_1.readInputFile)("./input.txt");
function organize() {
    let trees = [[]];
    let visable = [[]];
    input.forEach((line, index) => {
        for (const tree of line) {
            if (trees[index] === undefined) {
                trees.push([Number(tree)]);
                visable.push(['']);
            }
            else {
                trees[index].push(Number(tree));
                visable[index].push('');
            }
        }
    });
    console.log(trees);
    let treeCount = (trees.length * 2) + ((trees[0].length - 2) * 2);
    function up(currentTree, currentRow, currentColumn) {
        const nextRow = currentRow - 1;
        if (currentTree <= trees[nextRow][currentColumn]) {
            return false;
        }
        else if (nextRow === 0) {
            return true;
        }
        else {
            return up(currentTree, nextRow, currentColumn);
        }
    }
    function down(currentTree, currentRow, currentColumn) {
        const nextRow = currentRow + 1;
        if (currentTree <= trees[nextRow][currentColumn]) {
            return false;
        }
        else if (nextRow === trees.length - 1) {
            return true;
        }
        else {
            return down(currentTree, nextRow, currentColumn);
        }
    }
    function left(currentTree, currentRow, currentColumn) {
        const nextColumn = currentColumn - 1;
        if (currentTree <= trees[currentRow][nextColumn]) {
            return false;
        }
        else if (nextColumn === 0) {
            return true;
        }
        else {
            return left(currentTree, currentRow, nextColumn);
        }
    }
    function right(currentTree, currentRow, currentColumn) {
        const nextColumn = currentColumn + 1;
        console.log('right', currentTree);
        if (currentTree <= trees[currentRow][nextColumn]) {
            return false;
        }
        else if (nextColumn === trees[currentRow].length - 1) {
            return true;
        }
        else {
            return right(currentTree, currentRow, nextColumn);
        }
    }
    for (let rowI = 1; rowI < trees.length - 2; rowI++) {
        for (let treeI = 1; treeI < trees[rowI].length - 2; treeI++) {
            const currentTree = trees[rowI][treeI];
            console.log(currentTree);
            if (left(currentTree, rowI, treeI)) {
                treeCount += 1;
                visable[rowI][treeI] = '*left';
            }
            else if (right(currentTree, rowI, treeI)) {
                treeCount += 1;
                visable[rowI][treeI] = '*right';
            }
            else if (up(currentTree, rowI, treeI)) {
                treeCount += 1;
                visable[rowI][treeI] = '*up';
            }
            else if (down(currentTree, rowI, treeI)) {
                treeCount += 1;
                visable[rowI][treeI] = '*down';
            }
        }
    }
    console.log(visable);
    console.log(treeCount);
}
organize();
