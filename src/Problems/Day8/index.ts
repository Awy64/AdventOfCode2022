import {readInputFile} from "../../Utils/inputToArray";

import _ from 'lodash'

const input = readInputFile("./input.txt");


function organize() {
  let trees: Array<Array<Number>> = [[]]
  // let visable: Array<Array<string>> = [[]]
  input.forEach((line, index) => {
    for (const tree of line){
      if (trees[index] === undefined){
        trees.push([Number(tree)])
        // visable.push([''])
      }else{
      trees[index].push(Number(tree))
      // visable[index].push('')
      }
    }

  })

  let treeCount = (trees.length * 2) + ((trees[0].length - 2) * 2);

  function up(currentTree: Number, currentRow: number, currentColumn: number){
    const nextRow = currentRow - 1
    if (currentTree <= trees[nextRow][currentColumn]){
      return false;
    }else if (nextRow === 0) {
      return true;
    }else {
      return up(currentTree, nextRow, currentColumn);
    }
  }

  function down(currentTree: Number, currentRow: number, currentColumn: number){
    const nextRow = currentRow + 1
    if (currentTree <= trees[nextRow][currentColumn]){
      return false;
    }else if (nextRow === trees.length - 1) {
      return true;
    }else {
      return down(currentTree, nextRow, currentColumn);
    }
  }

  function left(currentTree: Number, currentRow: number, currentColumn: number){
    const nextColumn = currentColumn - 1
    if (currentTree <= trees[currentRow][nextColumn]){
      return false;
    }else if (nextColumn === 0) {
      return true;
    }else {
      return left(currentTree, currentRow, nextColumn);
    }
  }

  function right(currentTree: Number, currentRow: number, currentColumn: number){
    const nextColumn = currentColumn + 1
    if (currentTree <= trees[currentRow][nextColumn]){
      return false;
    }else if (nextColumn === trees[currentRow].length - 1 ) {
      return true;
    }else {
      return right(currentTree, currentRow, nextColumn);
    }
  }

  for (let rowI = 1; rowI < trees.length - 1; rowI++){
    for (let treeI = 1; treeI < trees[rowI].length - 1; treeI++){
      const currentTree = trees[rowI][treeI]
      
      if (left(currentTree, rowI, treeI)) {
        treeCount += 1
      }else if(right(currentTree, rowI, treeI)){
        treeCount += 1
      }else if(up(currentTree, rowI, treeI)){
        treeCount += 1
      }else if(down(currentTree, rowI, treeI)){
        treeCount += 1
      }
    }
  }

  console.log(treeCount);

  function upD(currentTree: Number, currentRow: number, currentColumn: number, dist: number){
    const currentDist = dist + 1
    const nextRow = currentRow - 1
    if (currentTree <= trees[nextRow][currentColumn]){
      return currentDist;
    }else if (nextRow === 0) {
      return currentDist;
    }else {
      return upD(currentTree, nextRow, currentColumn, currentDist);
    }
  }

  function downD(currentTree: Number, currentRow: number, currentColumn: number, dist: number){
    const currentDist = dist + 1
    const nextRow = currentRow + 1
    if (currentTree <= trees[nextRow][currentColumn]){
      return currentDist;
    }else if (nextRow === trees.length - 1) {
      return currentDist;
    }else {
      return downD(currentTree, nextRow, currentColumn, currentDist);
    }
  }

  function leftD(currentTree: Number, currentRow: number, currentColumn: number, dist: number){
    const currentDist = dist + 1
    const nextColumn = currentColumn - 1
    if (currentTree <= trees[currentRow][nextColumn]){
      return currentDist;
    }else if (nextColumn === 0) {
      return currentDist;
    }else {
      return leftD(currentTree, currentRow, nextColumn, currentDist);
    }
  }

  function rightD(currentTree: Number, currentRow: number, currentColumn: number, dist: number){
    const currentDist = dist + 1
    const nextColumn = currentColumn + 1
    if (currentTree <= trees[currentRow][nextColumn]){
      return currentDist;
    }else if (nextColumn === trees[currentRow].length - 1 ) {
      return currentDist;
    }else {
      return rightD(currentTree, currentRow, nextColumn, currentDist);
    }
  }

  let currentHighScore = 0

  for (let rowI = 1; rowI < trees.length - 1; rowI++){
    for (let treeI = 1; treeI < trees[rowI].length - 1; treeI++){
      const currentTree = trees[rowI][treeI]
      
      const leftDist = leftD(currentTree, rowI, treeI, 0)
      const rightDist = rightD(currentTree, rowI, treeI, 0)
      const upDist = upD(currentTree, rowI, treeI, 0)
      const downDist = downD(currentTree, rowI, treeI, 0)
      const score = leftDist * rightDist * upDist * downDist;
      if(currentHighScore < score){
        currentHighScore = score;
      }

    }
  }
  console.log(currentHighScore);
}
organize()