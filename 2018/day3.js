const fs = require('fs');
const input = fs.readFileSync("./day3_input.txt", 'utf8');

const test = `#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2`

function part1(input){
  const claims = input.split('\n')
  const fabMatrix = layoutFabric(claims)
  
  let hasMultiClaim = []
  for(var coord in fabMatrix){
    if(fabMatrix[coord] > 1){
      hasMultiClaim.push(coord)
    }
  }
  return hasMultiClaim.length
}

function part2(input){
  const claims = input.split('\n')
  const fabMatrix = layoutFabric(claims)
  
  for(var i in claims){
    const claim = getClaimCoords(claims[i])
    let overlap = false
    for(var c in claim.coords){
      if(fabMatrix[claim.coords[c]] > 1){
        overlap = true
      }
    }
    if(!overlap){ return claim.id }
  }
}

function layoutFabric(claims){
  let fabMatrix = {}
  for(var i in claims){
    claim = getClaimCoords(claims[i])
    for(var c in claim.coords){
      const curVal = fabMatrix[claim.coords[c]] 
      fabMatrix[claim.coords[c]] = (curVal) ? curVal + 1 : 1
    }
  }
  return fabMatrix
}

function getClaimCoords(claim){
  const parsed = claim.split(' ')
  return {
    id: parsed[0],
    coords: getCoords(
              parseInt(parsed[2].split(':')[0].split(',')[0]),
              parseInt(parsed[2].split(':')[0].split(',')[1]),
              parseInt(parsed[3].split('x')[0]),
              parseInt(parsed[3].split('x')[1])
            )
  }
}

function getCoords(left, top, width, height){
  let squares = []
  for(var l=left; l<(left+width); l++){
    for(var t=top; t<(top+height); t++){
      squares.push(`${l},${t}`)
    }
  }
  return squares
}

console.log(part1(input))
console.log(part2(input))