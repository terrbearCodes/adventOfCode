const fs = require('fs');

const input = fs.readFileSync("./day2_input.txt", 'utf8');




const test = `abcdef
bababc
abbcde
abcccd
aabcdd
abcdee
ababab`

const test2 = `abcde
fghij
klmno
pqrst
fguij
axcye
wvxyz`



function part1(input){
  console.log('P1 ... Thinking')
  let twos = []
  let threes = []
  const ids = input.split('\n');
  for(var i in ids){
    let id = ids[i].split('')
    let dict = {}
    for(var l in id){
      if(dict[id[l]]){
        dict[id[l]] = dict[id[l]] + 1
      }else{
        dict[id[l]] = 1
      }
    }
    for(var letter in dict){
      if(dict[letter] == 2 && twos.indexOf(id) < 0){ twos.push(id) }
      if(dict[letter] == 3 && threes.indexOf(id) < 0){ threes.push(id) }
    }
  }
  return twos.length * threes.length
}

function part2(input){
    console.log('P2 ... Thinking')
    const keys = input.split('\n')
//     console.log(keys.length)
    for(var i=0; i < keys.length; i++){
      for(var j=1; j<keys.length; j++){
        let diffs = []
        for(var k = 0; k < keys[i].length; k++){
          
//           console.log(`Comparing ${keys[i]} & ${keys[j]}`)
          if(keys[i][k] != keys[j][k]){
//             console.log(`${keys[i][k]} != ${keys[j][k]}`)
            diffs.push(k)
          }
        }
        if(diffs.length == 1){ return keys[j].substring(0,diffs[0]) + keys[j].substring(diffs[0]+1) }
      }
    }
}

console.log(`Part I: ${part1(test)}`)
// console.log(`Part I: ${part1(input)}`)
console.log(`Part II: ${part2(test2)}`)
console.log(`Part II: ${part2(input)}`)