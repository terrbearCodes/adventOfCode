const fs = require('fs')
const input = fs.readFileSync("./day5_input.txt", 'utf8')
const sample = 'dabAcCaCBAcCcaDA'



function isCapital(char){
    return char.toUpperCase() == char
}

function reverseCase(char){
    return (isCapital(char)) ? char.toLowerCase() : char.toUpperCase()
}

function polymerize(polymer){
  let doAgain = false
  do{
    doAgain = false
    for(let i=0; i<polymer.length-1; i++){
      if(polymer[i] == reverseCase(polymer[i+1])){
        polymer.splice(i,2)
        doAgain = true
        i--
      }
    }
  }while(doAgain);
  
  return polymer
}

function part1(input){
 // // console.log(input)
    monomers = input.split('')
    console.log('start length' + monomers.length)
    

    // console.log(monomers.join(''))
    return polymerize(monomers).length
}

function part2(input){
  
  const things = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let lengths = []
  
  things.forEach((letter) => {
    let compound = input.split('')
    while(compound.indexOf(letter) > -1){
      compound.splice(compound.indexOf(letter), 1)
    }
    while(compound.indexOf(reverseCase(letter)) > -1){
      compound.splice(compound.indexOf(reverseCase(letter)), 1)
    }
    lengths.push(polymerize(compound).length)
  })
  
//   console.log(lengths)
  return lengths.sort((a,b) => {return a - b })[0]
}

console.log(`P1(sample):${part1(sample)}`)
console.log(`P1(input):${part1(input)}`)

console.log(`P2(sample):${part2(sample)}`)
console.log(`P2(input):${part2(input)}`)