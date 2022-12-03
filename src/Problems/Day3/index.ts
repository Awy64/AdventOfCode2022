import {readInputFile} from "../../Utils/inputToArray";

const input = readInputFile("./input.txt");

const capLetters = Array.from({ length: 26 }, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i));
const lowerLetters = Array.from({ length: 26 }, (_, i) => String.fromCharCode('a'.charCodeAt(0) + i));

const allLetters = [...lowerLetters, ...capLetters]

const score: {[key: string]: number} = {}

let currentScore = 1

allLetters.forEach(letter => {
  score[letter] = currentScore;
  currentScore += 1
})

function organize() {
  const sacks = input.map(sack => {
    const length = sack.length;
    return [sack.slice(0,length/2), sack.slice(length/2, length) ]
  })
  let found = []
  sacks.forEach(sack => {
    for (const i of sack[0]) {
      if (sack[1].includes(i)){
        found.push(i)
        break
      }
    }
  })
  console.log(found)
  let total = 0
  found.forEach((letter: string) => {
    total += score[letter];
  })
  console.log('answer1', total)

}
organize()

function organize2() {
  let currentGroup = 0
  let currentBag = 0
  const groups: string[][] = []
  input.forEach(sack => {
    currentBag += 1
    if (groups[currentGroup]){
      groups[currentGroup] = [...groups[currentGroup], sack]
    }else{
      groups[currentGroup] = [sack]
    }
    
    if (currentBag % 3 === 0){
      currentGroup += 1
    }
  })
  let found = []
  groups.forEach(sacks => {
    for (const i of sacks[0]) {
      if (sacks[1].includes(i)){
        if (sacks[2].includes(i)){
          found.push(i)
        break
        }
      }
    }
  })
  let total = 0
  found.forEach((letter: string) => {
    total += score[letter];
  })
  console.log('Answer2', total)

}
organize2()