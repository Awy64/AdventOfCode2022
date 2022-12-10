import {readInputFile} from "../../Utils/inputToArray";

import _ from 'lodash'

const input = readInputFile("./input.txt");

// let crates1 = {
//   '1': ['h', 'c', 'r'],
//   '2': ['b', 'j', 'h', 'l', 's', 'f'],
//   '3': ['r', 'm', 'd', 'h', 'j', 't', 'q'],
//   '4': ['s', 'g', 'r', 'h', 'z', 'b', 'j'],
//   '5': ['r', 'p', 'f', 'z', 't', 'd', 'c', 'b'],
//   '6': ['t', 'h', 'c', 'g'],
//   '7': ['s', 'n', 'v', 'z', 'b', 'p', 'w', 'l'],
//   '8': ['r', 'j', 'q', 'g', 'c'],
//   '9': ['l', 'd', 't', 'r', 'h', 'p', 'f', 's'],
// }

function organize() {
  let length = 0
  let crate: {[key: string]: String[]} = {}
  for (const i of input){
    const words = _.words(i)
    if (words[0] == '1'){
      console.log('row length', words[words.length - 1])
      words.forEach(number => crate[number] = []);
      length = Number(words[words.length - 1])
      break
    }
  }

  for (const i of input){
    const words = _.words(i)
    let current = 1
    if (words[0] !== '1'){
      for (let a = 1; a < i.length; a += 4){
        if(i[a] !== ' '){
          if (!crate[current]){
            crate[current].push(i[a])
          }
            crate[current].unshift(i[a])
        }
        current += 1
      }
    }else {
      break
    }
  }



  input.forEach(line => {
    const words = _.words(line)
    if (words[0] === 'move'){
      const amount = Number(words[1])
      let stack = []
      for (let i = 0; i < amount; i++) {
        const crates = crate[words[3]].pop()
        if (!stack){
          stack.push(crates)
        }else {
          stack.unshift(crates)
        }
      }
      crate[words[5]].push(...stack)
    }
  })
  console.log(crate)

}
organize()
