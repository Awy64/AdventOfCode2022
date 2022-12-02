import {readInputFile} from "../../Utils/inputToArray";

const input = readInputFile("./input.txt");

/**
 * A X = Rock
 * B Y = Paper
 * C Z = Scissors
 */

const player = {
  X: 1,
  Y: 2,
  Z: 3
}

function findScore(fights: string[]){
  let total = 0
  fights.forEach((fight) => {
    let player1 = fight[0]
    let player2 = fight[2]
    total += player[player2]
    if(player1 === 'A'){
      if(player2 === 'X'){
        total += 3
        return
      } else if(player2 === 'Y'){
        total += 6
        return
      } else {
        return 
      }
    }else if(player1 === 'B'){
      if(player2 === 'Y'){
        total += 3
        return
      } else if(player2 === 'Z'){
        total += 6
        return
      } else {
        return 
      }
    }else {
      if(player2 === 'Z'){
        total += 3
        return
      } else if(player2 === 'X'){
        total += 6
        return
      } else {
        return 
      }
    }
  })
  console.log(total)
}
findScore(input);

function findScore2(fights: string[]){
  let total = 0
  fights.forEach((fight) => {
    let player1 = fight[0]
    let player2 = fight[2]
    if(player1 === 'A'){
      if(player2 === 'Y'){
        total += 3
        total += 1
        return
      } else if(player2 === 'Z'){
        total += 6
        total += 2
        return
      } else {
        total += 3
        return 
      }
    }else if(player1 === 'B'){
      if(player2 === 'Y'){
        total += 3
        total += 2
        return
      } else if(player2 === 'Z'){
        total += 6
        total += 3
        return
      } else {
        total += 1
        return 
      }
    }else {
      if(player2 === 'Y'){
        total += 3
        total += 3
        return
      } else if(player2 === 'Z'){
        total += 6
        total += 1
        return
      } else {
        total += 2
        return 
      }
    }
  })
  console.log(total)
}
findScore2(input)