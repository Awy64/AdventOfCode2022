import {readInputFile} from "../../Utils/inputToArray";

const input = readInputFile("./input.txt");

function organize() {
  let total = 0
  for (const i of input){
    const pairs = i.split(',').map(pair => pair.split('-'));
    const elf1 = pairs[0].map(pair => Number(pair))
    const elf2 = pairs[1].map(pair => Number(pair))
    if(elf1[0] <= elf2[0] && elf1[1] >= elf2[1]){
      total += 1
    } else if(elf2[0] <= elf1[0] && elf2[1] >= elf1[1]) {
      total += 1
    } else if(elf1[0] <= elf2[1] && elf1[1] >= elf2[0]){
      total += 1
    } else if(elf2[0] <= elf1[1] && elf2[1] >= elf1[0]){
      total += 1
    }
  }
  console.log('answer1', total)
}
organize()