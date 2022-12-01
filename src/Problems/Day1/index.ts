import {readInputFile} from "../../Utils/inputToArray";

const input = readInputFile("./input.txt");

function totalCals(totals: number[]){
  let current = 1
  let elf = {}
  totals.forEach(food => {
    if(food === 0){
      current += 1
      return
    }
    if(elf[current]){
      elf[current] += food
    }else{
      elf[current] = food
    }
  })
  const values: number[] = Object.values(elf);
  const answer1 = Math.max(...values);
  console.log('Answer1', answer1);

  values.sort((a, b) => a - b);
  values.reverse()
  const answer2 = values[0] + values[1] + values[2];
  console.log('Answer2', answer2)
}

totalCals(input)