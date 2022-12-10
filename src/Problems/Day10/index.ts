import {readInputFile} from "../../Utils/inputToArray";

import _ from 'lodash'

const input = readInputFile("./input.txt");


function organize() {
  const inputArray = new Array(...input)
  let currentCycle = 0;
  let x = 1
  let cycleCheck = 20
  let signalStrength = 0
  let exacute: number | null = null
  while (currentCycle < 220){
    currentCycle += 1
    if (cycleCheck === currentCycle){
      signalStrength += (cycleCheck * x)
      cycleCheck += 40
    }
    if(exacute){
      x += exacute
      exacute = null
    }else{
      const [inst, number] = inputArray.shift().split(' ')
      if(inst === 'noop'){
        continue
      }else{
        exacute = parseInt(number)
      }
    }
  }
  console.log(signalStrength)
}
organize()

function organize2() {
  const inputArray = new Array(...input)
  let currentCycle = 0;
  let x = 1
  let cycleCheck = 40
  let exacute: number | null = null
  let answer: string = '';
  let pixelPosition = 0;
  while (currentCycle < 240){
    currentCycle += 1
    if (pixelPosition === x || pixelPosition === x + 1 || pixelPosition === x - 1){
      answer = answer + '#'
    }else{
      answer = answer + '.'
    }
    pixelPosition += 1
    if (cycleCheck === currentCycle){
      cycleCheck += 40
      answer = answer + '\n'
      pixelPosition = 0
    }
    if(exacute){
      x += exacute
      exacute = null
    }else{
      const [inst, number] = inputArray.shift().split(' ')
      if(inst === 'addx'){
        exacute = parseInt(number)
      }
    }
  }
  console.log(answer)
}
organize2()