const fs = require('fs');
const input = fs.readFileSync("./input/day5.txt", 'utf8');

const bpTest = `BBFFBBFRLL
FFFBBBFRRR
BFFFBBFRRR
FBFBBFFRLR`;

const numRows = 128
const numCols = 8

function getSeatId(boardingPass){
  let row = [0,127]
  let col = [0,7]
  boardingPass.split('').forEach((i)=>{
    switch(i){
      case 'F':
        row = [row[0], Math.floor((row[0] + row[1])/2)]
        break;
      case 'B':
        row = [Math.ceil((row[0] + row[1])/2), row[1]];
        break;
      case 'L':
        col = [col[0], Math.floor((col[0] + col[1])/2)]
        break;
      case 'R':
        col = [Math.ceil((col[0] + col[1])/2), col[1]];
        break;
    }
  })

  return row[0] * 8 + col[0];
}

//tests
//bpTest.split('\n').forEach((bp)=>console.log(getSeatId(bp)))

//part1 - maxSeatId
function maxSeatId(input){
  let maxSeatId = 0;
  input.split('\n').forEach( (pass) => {
    const seatId = getSeatId(pass);
    maxSeatId = (seatId > maxSeatId) ? seatId : maxSeatId
  })
  return maxSeatId;
}

//part 2 - sort the seats and find the leap
function findMissingSeat(input){
  let allSeats = [];
  input.split('\n').forEach((pass)=>{
    allSeats.push(getSeatId(pass))
  });
  const sorted = allSeats.sort();
  for(let i=1; i<sorted.length-1; i++){
    let current = sorted[i];
    if(sorted[i+1] != current+1){ //jumped a seat return the next one
      return current+1;
    }
  }
}

console.log(`Part 1: ${maxSeatId(input)}`)
console.log(`Part 2: ${findMissingSeat(input)}`);