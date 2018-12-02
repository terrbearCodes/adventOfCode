const fs = require('fs');

const input = fs.readFileSync("./day1_input.txt", 'utf8');

function part1(input){
  let freq = 0;
  const calibrations = input.split('\n');
  for(let i=0; i<calibrations.length; i++){
    freq += parseInt(calibrations[i])
  }
  return freq
}

function part2(input){
  let freq = 0;
  let frequencies = []
  const calibrations = input.split('\n')
  while(true){
    for(let i=0; i<calibrations.length; i++){
      freq += parseInt(calibrations[i])
      if(frequencies.indexOf(freq)>-1){
        return freq
      }else{
        frequencies.push(freq)
      }
    }
  }
}

console.log(`Part I: ${part1(input)}`)
console.log(`Part II: ${part2(input)}`)